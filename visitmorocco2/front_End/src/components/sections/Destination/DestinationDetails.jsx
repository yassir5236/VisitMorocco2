import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const DestinationDetails = () => {
    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        const fetchDestination = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/destinations/${id}`);
                setDestination(response.data);
            } catch (error) {
                console.error('Error fetching destination details:', error);
            }
        };

        fetchDestination();
    }, [id]);

    if (!destination) return <p>Loading...</p>;

    const openInGoogleMaps = () => {
        const { latitude, longitude } = destination;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    return (

        <>
            <Header />
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg m-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">{destination.nom}</h1>
                <p className="text-gray-600 mb-4">{destination.description}</p>
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
                <button
                    onClick={openInGoogleMaps}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    View on Google Maps
                </button>
            </div>
            <Footer />

        </>
    );
};

export default DestinationDetails;
