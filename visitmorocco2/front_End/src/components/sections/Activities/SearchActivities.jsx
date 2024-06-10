import { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import BookActivity from './BookActivity';

const SearchActivities = () => {
    const [activities, setActivities] = useState([]);
    const [searchParams, setSearchParams] = useState({
        location: '',
        duration: '',
    });

    const fetchActivities = async (params) => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/activities/search', { params });
            setActivities(response.data);
        } catch (error) {
            console.error('Error searching activities:', error);
        }
    };

    const debouncedFetchActivities = debounce(fetchActivities, 300);

    useEffect(() => {
        debouncedFetchActivities(searchParams);
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Activities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Location:
                        <input
                            type="text"
                            name="location"
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </label>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Duration (in minutes):
                        <input
                            type="number"
                            name="duration"
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                    </label>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="p-4 bg-gray-100 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-800">{activity.name}</h3>
                            <p className="mt-2 text-gray-600">{activity.description}</p>
                            <p className="mt-2 text-gray-600">Location: {activity.location}</p>
                            <p className="mt-2 text-gray-600">Duration: {activity.duration} minutes</p>
                            <BookActivity activityId={activity.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchActivities;
