


// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ActivityList = () => {
//     const [activities, setActivities] = useState([]);
//     const [message, setMessage] = useState('');
//     const userInfo = JSON.parse(localStorage.getItem('user_info'));
//     const userId = userInfo ? userInfo.id : null;

//     useEffect(() => {
//         const fetchActivities = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/activities?user_id=${userId}`);
//                 setActivities(response.data);
//             } catch (error) {
//                 console.error('Error fetching activities:', error);
//             }
//         };

//         fetchActivities();
//     }, [userId]);

//     const handleReserve = async (activityId) => {
//         try {
//             await axios.post('http://127.0.0.1:8000/api/reservations/store', {
//                 user_id: userId,
//                 activity_id: activityId,
//             });
//             setMessage('Reservation successful. Awaiting admin approval.');
//             setActivities(prevActivities =>
//                 prevActivities.map(activity => {
//                     if (activity.id === activityId) {
//                         return { ...activity, reserved: true };
//                     }
//                     return activity;
//                 })
//             );
//         } catch (error) {
//             console.error('Error making reservation:', error);
//             setMessage('Error making reservation');
//         }
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Activities in Morocco</h1>
//             {message && <p className="mb-4 text-center text-green-500">{message}</p>}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {activities.map((activity) => (
//                     <div key={activity.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                         <img src={`http://127.0.0.1:8000/storage/${activity.image_path}`} alt={activity.name} className="w-full h-64 object-cover object-center" />
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-2 text-gray-800">{activity.name}</h2>
//                             <p className="text-gray-700 mb-4">{activity.description}</p>
//                             <p className="text-gray-700 mb-4"><strong>Location:</strong> {activity.location}</p>
//                             <p className="text-gray-700 mb-4"><strong>Duration:</strong> {activity.duration} minutes</p>
//                             {activity.reserved ? (
//                                 <button
//                                     className="w-full bg-gray-400 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed"
//                                     disabled
//                                 >
//                                     Reservation already made
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={() => handleReserve(activity.id)}
//                                     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Reserve
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ActivityList;











// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ActivityList = () => {
//     const [activities, setActivities] = useState([]);
//     const [message, setMessage] = useState('');
//     const userInfo = JSON.parse(localStorage.getItem('user_info'));
//     const userId = userInfo ? userInfo.id : null;

//     useEffect(() => {
//         const fetchActivities = async () => {
//             try {
//                 const response = await axios.get(`http://127.0.0.1:8000/api/activities?user_id=${userId}`);
//                 setActivities(response.data);
//             } catch (error) {
//                 console.error('Error fetching activities:', error);
//             }
//         };

//         fetchActivities();
//     }, [userId]);

//     const handleReserve = async (activityId) => {
//         try {
//             await axios.post('http://127.0.0.1:8000/api/reservations/store', {
//                 user_id: userId,
//                 activity_id: activityId,
//             });
//             setMessage('Reservation successful. Awaiting admin approval.');
//             setActivities(prevActivities =>
//                 prevActivities.map(activity => {
//                     if (activity.id === activityId) {
//                         return { ...activity, reserved: true };
//                     }
//                     return activity;
//                 })
//             );
//         } catch (error) {
//             console.error('Error making reservation:', error);
//             setMessage('Error making reservation');
//         }
//     };

//     const handleUpdate = async (activityId) => {
//         // Redirect to the update page or open a modal for updating the activity
//         console.log(`Update activity with ID: ${activityId}`);
//     };

//     const handleDelete = async (activityId) => {
//         if (window.confirm('Are you sure you want to delete this activity?')) {
//             try {
//                 await axios.delete(`http://127.0.0.1:8000/api/activities/${activityId}`);
//                 setMessage('Activity deleted successfully');
//                 setActivities(prevActivities =>
//                     prevActivities.filter(activity => activity.id !== activityId)
//                 );
//             } catch (error) {
//                 console.error('Error deleting activity:', error);
//                 setMessage('Error deleting activity');
//             }
//         }
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Activities in Morocco</h1>
//             {message && <p className="mb-4 text-center text-green-500">{message}</p>}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {activities.map((activity) => (
//                     <div key={activity.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                         <img src={`http://127.0.0.1:8000/storage/${activity.image_path}`} alt={activity.name} className="w-full h-64 object-cover object-center" />
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-2 text-gray-800">{activity.name}</h2>
//                             <p className="text-gray-700 mb-4">{activity.description}</p>
//                             <p className="text-gray-700 mb-4"><strong>Location:</strong> {activity.location}</p>
//                             <p className="text-gray-700 mb-4"><strong>Duration:</strong> {activity.duration} minutes</p>
//                             {activity.reserved ? (
//                                 <button
//                                     className="w-full bg-gray-400 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed"
//                                     disabled
//                                 >
//                                     Reservation already made
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={() => handleReserve(activity.id)}
//                                     className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Reserve
//                                 </button>
//                             )}
//                             <div className="mt-4 flex space-x-4">
//                                 <button
//                                     onClick={() => handleUpdate(activity.id)}
//                                     className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Update
//                                 </button>
//                                 <button
//                                     onClick={() => handleDelete(activity.id)}
//                                     className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ActivityList;










import { useState, useEffect } from 'react';
import axios from 'axios';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);
    const [message, setMessage] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateActivity, setUpdateActivity] = useState({
        id: '',
        name: '',
        description: '',
        location: '',
        duration: '',
        price: '',
        image: null,
    });
    const userInfo = JSON.parse(localStorage.getItem('user_info'));
    const userId = userInfo ? userInfo.id : null;

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/activities?user_id=${userId}`);
                setActivities(response.data);
            } catch (error) {
                console.error('Error fetching activities:', error);
            }
        };

        fetchActivities();
    }, [userId]);

    const handleReserve = async (activityId) => {
        try {
            await axios.post('http://127.0.0.1:8000/api/reservations/store', {
                user_id: userId,
                activity_id: activityId,
            });
            setMessage('Reservation successful. Awaiting admin approval.');
            setActivities(prevActivities =>
                prevActivities.map(activity => {
                    if (activity.id === activityId) {
                        return { ...activity, reserved: true };
                    }
                    return activity;
                })
            );
        } catch (error) {
            console.error('Error making reservation:', error);
            setMessage('Error making reservation');
        }
    };

    const handleUpdate = (activity) => {
        setUpdateActivity(activity);
        setIsUpdating(true);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setUpdateActivity((prev) => ({ ...prev, [name]: files[0] }));
        } else {
            setUpdateActivity((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in updateActivity) {
            formData.append(key, updateActivity[key]);
        }
        try {
            await axios.put(`http://127.0.0.1:8000/api/activities/${updateActivity.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage('Activity updated successfully');
            setIsUpdating(false);
            setUpdateActivity({
                id: '',
                name: '',
                description: '',
                location: '',
                duration: '',
                price: '',
                image: null,
            });
            setActivities(prevActivities =>
                prevActivities.map(activity => {
                    if (activity.id === updateActivity.id) {
                        return updateActivity;
                    }
                    return activity;
                })
            );
        } catch (error) {
            console.error('Error updating activity:', error);
            setMessage('Error updating activity');
        }
    };

    const handleDelete = async (activityId) => {
        if (window.confirm('Are you sure you want to delete this activity?')) {
            try {
                await axios.delete(`http://127.0.0.1:8000/api/activities/${activityId}`);
                setMessage('Activity deleted successfully');
                setActivities(prevActivities =>
                    prevActivities.filter(activity => activity.id !== activityId)
                );
            } catch (error) {
                console.error('Error deleting activity:', error);
                setMessage('Error deleting activity');
            }
        }
    };

    if (isUpdating) {
        return (
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Activity</h1>
                {message && <p className="mb-4 text-center text-green-500">{message}</p>}
                <form onSubmit={handleUpdateSubmit}>
                    <input type="hidden" name="id" value={updateActivity.id} />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={updateActivity.name}
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
                            value={updateActivity.description}
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
                            value={updateActivity.location}
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
                            value={updateActivity.duration}
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
                            value={updateActivity.price}
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
                            Update Activity
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Activities in Morocco</h1>
            {message && <p className="mb-4 text-center text-green-500">{message}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activities.map((activity) => (
                    <div key={activity.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={`http://127.0.0.1:8000/storage/${activity.image_path}`} alt={activity.name} className="w-full h-64 object-cover object-center" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{activity.name}</h2>
                            <p className="text-gray-700 mb-4">{activity.description}</p>
                            <p className="text-gray-700 mb-4"><strong>Location:</strong> {activity.location}</p>
                            <p className="text-gray-700 mb-4"><strong>Duration:</strong> {activity.duration} minutes</p>
                            {activity.reserved ? (
                                <button
                                    className="w-full bg-gray-400 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed"
                                    disabled
                                >
                                    Reservation already made
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleReserve(activity.id)}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Reserve
                                </button>
                            )}
                            <button
                                onClick={() => handleUpdate(activity)}
                                className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => handleDelete(activity.id)}
                                className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityList;
