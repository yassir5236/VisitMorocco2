










    import { useState } from 'react';
    import axios from 'axios';

    const AddActivity = () => {
        const [activity, setActivity] = useState({
            name: '',
            description: '',
            location: '',
            duration: '',
            price: '',
            image: null,
        });
        const [message, setMessage] = useState('');

        const handleChange = (e) => {
            const { name, value, files } = e.target;
            if (name === 'image') {
                setActivity((prev) => ({ ...prev, [name]: files[0] }));
            } else {
                setActivity((prev) => ({ ...prev, [name]: value }));
            }
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            for (const key in activity) {
                formData.append(key, activity[key]);
            }
            try {
                await axios.post('http://127.0.0.1:8000/api/activities/store', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setMessage('Activity added successfully');
                setActivity({
                    name: '',
                    description: '',
                    location: '',
                    duration: '',
                    price: '',
                    image: null,
                });
            } catch (error) {
                console.error('Error adding activity:', error);
                setMessage('Error adding activity');
            }
        };

        return (
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Activity</h1>
                {message && <p className="mb-4 text-center text-green-500">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={activity.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={activity.description}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={activity.location}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                            Duration (in minutes)
                        </label>
                        <input
                            type="number"
                            name="duration"
                            value={activity.duration}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={activity.price}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>





                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Activity
                        </button>
                    </div>
                </form>
            </div>
        );
    };

    export default AddActivity;
