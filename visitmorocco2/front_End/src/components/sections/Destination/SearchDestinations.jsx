


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import debounce from 'lodash/debounce';

// const SearchDestinations = () => {
//     const [destinations, setDestinations] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchDestinations = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/destinations/search/Destination', {
//                     params: {
//                         search: searchTerm
//                     }
//                 });
//                 setDestinations(response.data);
//             } catch (error) {
//                 console.error('Error searching destinations:', error);
//             }
//         };

//         const debouncedFetchDestinations = debounce(fetchDestinations, 300);

//         debouncedFetchDestinations();

//         return () => {
//             debouncedFetchDestinations.cancel();
//         };
//     }, [searchTerm]);

//     const handleChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
//             <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Destinations</h1>
//             <div className="mb-6">
//                 <input
//                     type="text"
//                     value={searchTerm}
//                     onChange={handleChange}
//                     placeholder="Search by region, type, or interest"
//                     className="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                 />
//             </div>
//             <div>
//                 <h2 className="text-2xl font-bold mb-4 text-gray-800">Results</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {destinations.map((destination) => (
//                         <div key={destination.id} className="p-4 bg-gray-100 rounded-lg shadow">
//                             <h3 className="text-xl font-semibold text-gray-800">{destination.nom}</h3>
//                             <p className="mt-2 text-gray-600">{destination.description}</p>
//                             <div className="mt-4 grid grid-cols-2 gap-4">
//                                 {destination.images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={`http://127.0.0.1:8000/storage/${image.path}`}
//                                         alt={`Destination ${index}`}
//                                         className="rounded-lg shadow-md"
//                                     />
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchDestinations;














import { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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

        <>

        <Header/>
         <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Search Destinations</h1>
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Search by region, type, or interest"
                    className="mt-1 block w-full rounded-md p-2 border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destinations.map((destination) => (
                        <div key={destination.id} className="p-4 bg-gray-100 rounded-lg shadow">
                            <Link to={`/destination/${destination.id}`} className="block">
                                <h3 className="text-xl font-semibold text-gray-800">{destination.nom}</h3>
                                <p className="mt-2 text-gray-600">{destination.description}</p>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    {destination.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`http://127.0.0.1:8000/storage/${image.path}`}
                                            alt={`Destination ${index}`}
                                            className="rounded-lg shadow-md"
                                        />
                                    ))}
                                </div>
                            </Link>
                            <Link
                                to={`/destination/${destination.id}`} // Link to the detailed destination page
                                className="mt-4 bg-stone-400 w-24 text-white text-sm px-1 py-1 rounded hover:bg-stone-400     block text-center"
                            >
                                Details
                            </Link>

  
                        </div>
                    ))}
                </div>
            </div>
        </div>


        <Footer/>
        </>
       
    );
};

export default SearchDestinations;
