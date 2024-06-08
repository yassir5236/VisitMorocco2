// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import debounce from 'lodash/debounce';

// const SearchDestinations = () => {
//     const [regions, setRegions] = useState([]);
//     const [types, setTypes] = useState([]);
//     const [interets, setInterets] = useState([]);
//     const [destinations, setDestinations] = useState([]);
//     const [searchParams, setSearchParams] = useState({
//         region_id: '',
//         type_id: '',
//         interet_id: '',
//     });

//     useEffect(() => {
//         const fetchFilters = async () => {
//             try {
//                 const regionsResponse = await axios.get('http://127.0.0.1:8000/api/regions');
//                 setRegions(regionsResponse.data);

//                 const typesResponse = await axios.get('http://127.0.0.1:8000/api/types');
//                 setTypes(typesResponse.data);

//                 const interetsResponse = await axios.get('http://127.0.0.1:8000/api/interets');
//                 setInterets(interetsResponse.data);
//             } catch (error) {
//                 console.error('Error fetching filter data:', error);
//             }
//         };

//         fetchFilters();
//     }, []);

//     const fetchDestinations = async (params) => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/destinations/search', {
//                 params,
//             });
//             setDestinations(response.data);
//         } catch (error) {
//             console.error('Error searching destinations:', error);
//         }
//     };

//     const debouncedFetchDestinations = debounce(fetchDestinations, 300);

//     useEffect(() => {
//         debouncedFetchDestinations(searchParams);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [searchParams]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSearchParams((prev) => ({ ...prev, [name]: value }));
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//           <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Destinations</h1>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Region:
//                 <select
//                   name="region_id"
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                 >
//                   <option value="">Select Region</option>
//                   {regions.map((region) => (
//                     <option key={region.id} value={region.id}>
//                       {region.nom}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Type:
//                 <select
//                   name="type_id"
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                 >
//                   <option value="">Select Type</option>
//                   {types.map((type) => (
//                     <option key={type.id} value={type.id}>
//                       {type.nom}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Interest:
//                 <select
//                   name="interet_id"
//                   onChange={handleChange}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                 >
//                   <option value="">Select Interest</option>
//                   {interets.map((interet) => (
//                     <option key={interet.id} value={interet.id}>
//                       {interet.nom}
//                     </option>
//                   ))}
//                 </select>
//               </label>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4 text-gray-800">Results</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {destinations.map((destination) => (
//                 <div key={destination.id} className="p-4 bg-gray-100 rounded-lg shadow">
//                   <h3 className="text-xl font-semibold text-gray-800">{destination.nom}</h3>
//                   <p className="mt-2 text-gray-600">{destination.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       );
// };

// export default SearchDestinations;




import { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

const SearchDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/destinations/search/Destination', {
                    params: {
                        search: searchTerm
                    }
                });
                setDestinations(response.data);
            } catch (error) {
                console.error('Error searching destinations:', error);
            }
        };

        const debouncedFetchDestinations = debounce(fetchDestinations, 300);

        debouncedFetchDestinations();

        return () => {
            debouncedFetchDestinations.cancel();
        };
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Destinations</h1>
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search by region, type, or interest"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
            </div>
            <div className=''>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    {destinations.map((destination) => (
                        <div key={destination.id} className="p-4 bg-gray-100 rounded-lg shadow">
                            <img className="rounded-t-lg h-96 w-96 p-1" src="https://picsum.photos/seed/picsum/200/300" alt="Blog" />

                            <h3 className="text-xl font-semibold text-gray-800">{destination.nom}</h3>
                            <p className="mt-2 text-gray-600">{destination.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchDestinations;
