


import { useEffect, useState } from 'react';
import ItinerariesList from './ItinerariesList';
import AccommodationsList from './AccommodationsList';
import RestaurantsList from './RestaurantsList';

const Guide = ({ region }) => {
    const [itineraries, setItineraries] = useState([]);
    const [accommodations, setAccommodations] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        if (region) {
            setItineraries(region.itineraries);
            setAccommodations(region.accommodations);
            setRestaurants(region.restaurants);
        }
    }, [region]);

    return (
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
            <h1 className="text-3xl w-full font-bold text-gray-800 mb-4">{region.nom}</h1>
            <p className="text-gray-700 mb-6">{region.description}</p>

            <img src={`http://127.0.0.1:8000/storage/${region.image}`} className="w-full h-64 object-cover object-center" />


            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Itinéraires</h2>
                <ItinerariesList itineraries={itineraries} />
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Hébergements</h2>
                <AccommodationsList accommodations={accommodations} />
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Restaurants</h2>
                <RestaurantsList restaurants={restaurants} />
            </div>
        </div>
    );
};

export default Guide;






