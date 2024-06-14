// import  { useEffect, useState } from 'react';
// import axios from 'axios';

// const AccommodationsList = ({ regionId }) => {
//   const [accommodations, setAccommodations] = useState([]);

//   useEffect(() => {
//     const fetchAccommodations = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/api/regions/${regionId}/accommodations`);
//         setAccommodations(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des hébergements:', error);
//       }
//     };

//     fetchAccommodations();
//   }, [regionId]);

//   return (
//     <ul>
//       {accommodations.map(accommodation => (
//         <li key={accommodation.id}>
//           <h3>{accommodation.name}</h3>
//           <p>{accommodation.description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default AccommodationsList;





const AccommodationsList = ({ accommodations }) => {
    return (
        <ul>
            {accommodations.map(accommodation => (
                <li key={accommodation.id}>
                    <h3>{accommodation.name}</h3>
                    <p>{accommodation.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default AccommodationsList;
