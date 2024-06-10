// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const ActivityList = () => {
//     const [activities, setActivities] = useState([]);
//     const [message, setMessage] = useState('');
//     const userInfo = JSON.parse(localStorage.getItem('user_info'));
//     // let user = JSON.parse(localStorage.getItem('user_info'))

//     const userId = userInfo ? userInfo.id : null;
//     // const userId = userInfo.id 

//     useEffect(() => {
//         const fetchActivities = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/activities');
//                 setActivities(response.data);
//             } catch (error) {
//                 console.error('Error fetching activities:', error);
//             }
//         };

//         fetchActivities();
//     }, []);

//     const handleReserve = async (activityId) => {
//         try {
//              await axios.post('http://127.0.0.1:8000/api/reservations/store', {
//                 user_id: userId,
//                 activity_id: activityId,
//             });
//             setMessage('Reservation successful. Awaiting admin approval.');
//         } catch (error) {
//             console.error('Error making reservation:', error);
//             setMessage('Error making reservation');
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Activities in Morocco</h1>
//             {message && <p className="mb-4 text-center text-green-500">{message}</p>}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {activities.map((activity) => (
//                     <div key={activity.id} className="bg-white shadow-md rounded-lg p-4">
//                         <img src={`http://127.0.0.1:8000/storage/${activity.image_path}`} alt={activity.name} className="w-full h-48 object-cover rounded-md mb-4" />
//                         <h2 className="text-2xl font-bold mb-2 text-gray-800">{activity.name}</h2>
//                         <p className="text-gray-700 mb-4">{activity.description}</p>
//                         <p className="text-gray-700 mb-4"><strong>Location:</strong> {activity.location}</p>
//                         <p className="text-gray-700 mb-4"><strong>Duration:</strong> {activity.duration} minutes</p>
//                         {activity.reserved ? (
//                             <p className="text-center text-green-500">Reservation already made</p>
//                         ) : (
//                             <button
//                                 onClick={() => handleReserve(activity.id)}
//                                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Reserve
//                             </button>
//                         )}
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
//                 const response = await axios.get('http://127.0.0.1:8000/api/activities');
//                 const updatedActivities = response.data.map(activity => {
//                     const reserved = activity.reservations.some(reservation => reservation.user_id === userId);
//                     return { ...activity, reserved };
//                 });
//                 setActivities(updatedActivities);
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



import { useState, useEffect } from 'react';
import axios from 'axios';

const ActivityList = () => {
    const [activities, setActivities] = useState([]);
    const [message, setMessage] = useState('');
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityList;
