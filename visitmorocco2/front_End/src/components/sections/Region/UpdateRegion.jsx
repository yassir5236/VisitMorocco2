// import React from 'react'

// const UpdateRegion = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default UpdateRegion





// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from '../../sections/Header/Header';
// import Footer from '../../sections/Footer/Footer';

// const RegionsList = () => {
//   const [regions, setRegions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [editingRegion, setEditingRegion] = useState(null);
//   const [nom, setRegionName] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     const fetchRegions = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/api/regions');
//         setRegions(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Erreur lors de la récupération des régions.');
//         setLoading(false);
//       }
//     };

//     fetchRegions();
//   }, []);

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://127.0.0.1:8000/api/regions/${id}`, {
//         nom,
//         description,
//       });
//       setRegions(regions.map(region => (region.id === id ? { ...region, nom, description } : region)));
//       setEditingRegion(null);
//       setRegionName('');
//       setDescription('');
//     } catch (err) {
//       setError('Erreur lors de la mise à jour de la région.');
//     }
//   };

//   if (loading) return <p>Chargement...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <Header />
//       <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//         <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//           <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//           <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//             <div className="max-w-md mx-auto">
//               <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Liste des Régions</h1>
//               <div className="grid grid-cols-1 gap-6">
//                 {regions.map((region) => (
//                   <div key={region.id} className="bg-white p-6 rounded-lg shadow-md">
//                     {editingRegion === region.id ? (
//                       <>
//                         <input
//                           type="text"
//                           value={nom}
//                           onChange={(e) => setRegionName(e.target.value)}
//                           placeholder="Nom de la région"
//                           className="input-field border-gray-300"
//                         />
//                         <textarea
//                           value={description}
//                           onChange={(e) => setDescription(e.target.value)}
//                           placeholder="Description"
//                           className="input-field border-gray-300"
//                         />
//                         <button
//                           onClick={() => handleUpdate(region.id)}
//                           className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//                         >
//                           Mettre à jour
//                         </button>
//                       </>
//                     ) : (
//                       <>
//                         <h2 className="text-2xl font-bold mb-2">{region.nom}</h2>
//                         <p className="text-gray-700">{region.description}</p>
//                         <button
//                           onClick={() => {
//                             setEditingRegion(region.id);
//                             setRegionName(region.nom);
//                             setDescription(region.description);
//                           }}
//                           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                         >
//                           Modifier
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default RegionsList;
