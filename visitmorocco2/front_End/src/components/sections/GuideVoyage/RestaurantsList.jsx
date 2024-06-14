// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const RestaurantsList = ({ regionId }) => {
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/regions/${regionId}/restaurants`);
//         setRestaurants(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des restaurants:', error);
//       }
//     };

//     fetchRestaurants();
//   }, [regionId]);

//   return (
//     <ul>
//       {restaurants.map(restaurant => (
//         <li key={restaurant.id}>
//           <h3>{restaurant.name}</h3>
//           <p>{restaurant.description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default RestaurantsList;



import React from 'react';

const RestaurantsList = ({ restaurants }) => {
    return (
        <ul>
            {restaurants.map(restaurant => (
                <li key={restaurant.id}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default RestaurantsList;
