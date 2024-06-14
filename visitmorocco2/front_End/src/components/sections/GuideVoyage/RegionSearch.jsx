



import { useEffect, useState } from 'react';
import axios from 'axios';
import Guide from './Guide';

const RegionSearch = () => {
    const [query, setQuery] = useState('');
    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const fetchRegions = async (searchQuery) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/regionss/search?query=${searchQuery}`);
        setRegions(response.data);
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        fetchRegions(value);
    };

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
    };

    // Fetch all regions with guides when the component mounts
    useEffect(() => {
        fetchRegions('');
    }, []);

    return (
        <>
            <div className="max-w-lg mx-auto p-4 bg-green-600 shadow-lg rounded-lg m-10">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Rechercher une région"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <ul className="max-h-60 overflow-y-auto">
                    {regions.map(region => (
                        <li
                            key={region.id}
                            onClick={() => handleRegionClick(region)}
                            className="cursor-pointer p-3 mb-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-all duration-200 ease-in-out"
                        >
                            {/* {region.nom} */}
                        </li>
                       
                    ))}
                </ul>

            </div>

            <div className="w-full flex flex-wrap justify-center gap-5">



                {
                    selectedRegion && (
                        <div className="mt-4">
                            <Guide region={selectedRegion} />
                        </div>
                    )
                }

                {/* Display all guides by default */}
                {
                    !query && regions.map(region => (
                        <div key={region.id} className="mt-4">
                            <Guide region={region} />
                        </div>
                    ))
                }

            </div>

        </>
    );
};

export default RegionSearch;








