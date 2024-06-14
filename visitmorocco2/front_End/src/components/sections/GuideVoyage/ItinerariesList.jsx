// import  { useEffect, useState } from 'react';
// import axios from 'axios';

// const ItinerariesList = ({ regionId }) => {
//   const [itineraries, setItineraries] = useState([]);

//   useEffect(() => {
//     const fetchItineraries = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/regions/${regionId}/itineraries`);
//         setItineraries(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des itinéraires:', error);
//       }
//     };

//     fetchItineraries();
//   }, [regionId]);

//   return (
//     <ul>
//       {itineraries.map(itinerary => (
//         <li key={itinerary.id}>
//           <h3>{itinerary.title}</h3>
//           <p>{itinerary.description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ItinerariesList;





const ItinerariesList = ({ itineraries }) => {
    return (
        <ul>
            {itineraries.map(itinerary => (
                <li key={itinerary.id}>
                    <h3>{itinerary.title}</h3>
                    <p>{itinerary.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default ItinerariesList;


