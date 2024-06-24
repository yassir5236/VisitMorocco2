



import  { useState, useEffect } from 'react';
import axios from 'axios';
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import AddDestinationForm from './AddDestinationForm';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ListDestinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingDestination, setEditingDestination] = useState(null);
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [images, setImages] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/destinations/index');
                setDestinations(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des destinations.');
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) return <p className="text-center">Chargement...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/destinations/${id}`);
            setDestinations(destinations.filter(destination => destination.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de la destination.');
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/destinations/${id}`, {
                nom,
                description,
                latitude,
                longitude,
                images: JSON.stringify(images),
            });
            setDestinations(destinations.map(destination =>
                (destination.id === id ? { ...destination, nom, description, latitude, longitude, images } : destination)
            ));
            setEditingDestination(null);
            setNom('');
            setDescription('');
            setLatitude('');
            setLongitude('');
            setImages([]);
        } catch (err) {
            setError('Erreur lors de la mise à jour de la destination.');
        }
    };

    const startEditing = (destination) => {
        setEditingDestination(destination.id);
        setNom(destination.nom);
        setDescription(destination.description);
        setLatitude(destination.latitude);
        setLongitude(destination.longitude);
        setImages(destination.images);
    };

    const cancelEditing = () => {
        setEditingDestination(null);
        setNom('');
        setDescription('');
        setLatitude('');
        setLongitude('');
        setImages([]);
    };

    const handleAddSuccess = (newDestination) => {
        setDestinations([...destinations, newDestination]);
        setShowAddForm(false);
    };

    const openInGoogleMaps = (latitude, longitude) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-10">Liste des Destinations</h1>
            {error && <p className="text-red-500 text-center mb-6">{error}</p>}
            <button
                onClick={() => setShowAddForm(true)}
                className="mb-4 flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                <GrAdd size={'1.5em'} className="mr-2" /> Ajouter une Destination
            </button>
            {showAddForm && <AddDestinationForm onSuccess={handleAddSuccess} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination) => (
                    <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {editingDestination === destination.id ? (
                            <div className="p-6">
                                <input
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    placeholder="Nom de la destination"
                                    className="input-field border-2 rounded-md text-xl mb-2 text-gray-800 w-full"
                                />
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Description"
                                    className="input-field border-2 rounded-md text-xl mb-2 w-full"
                                />
                                <input
                                    type="text"
                                    value={latitude}
                                    onChange={(e) => setLatitude(e.target.value)}
                                    placeholder="Latitude"
                                    className="input-field border-2 rounded-md text-xl mb-2 text-gray-800 w-full"
                                />
                                <input
                                    type="text"
                                    value={longitude}
                                    onChange={(e) => setLongitude(e.target.value)}
                                    placeholder="Longitude"
                                    className="input-field border-2 rounded-md text-xl mb-2 text-gray-800 w-full"
                                />
                                <textarea
                                    value={images}
                                    onChange={(e) => setImages(e.target.value.split(','))}
                                    placeholder="Images (URLs séparées par des virgules)"
                                    className="input-field border-2 rounded-md text-xl mb-2 w-full"
                                />
                                <div className="flex justify-end space-x-2">
                                    <button onClick={() => handleUpdate(destination.id)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                        <MdOutlineFileDownloadDone size={'1.5em'} />
                                    </button>
                                    <button onClick={cancelEditing} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                        <FcCancel size={'1.5em'} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="p-6">
                                <div className="w-full h-48 mb-4">
                                    {destination.images.length > 1 ? (
                                        <Slider {...settings}>
                                            {destination.images.map((image, index) => (
                                                <div key={index} className="h-48">
                                                    <img
                                                        src={`http://127.0.0.1:8000/storage/${image.path}`}
                                                        alt={`Destination ${index}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <img
                                            src={`http://127.0.0.1:8000/storage/${destination.images[0].path}`}
                                            alt="Destination"
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                                <h2 className="text-2xl font-semibold mb-2">{destination.nom}</h2>
                                <p className="text-gray-700 mb-4">{destination.description}</p>
                                <button
                                    onClick={() => openInGoogleMaps(destination.latitude, destination.longitude)}
                                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Voir sur Google Maps
                                </button>
                                <div className="flex justify-end space-x-2 mt-4">
                                    <button onClick={() => startEditing(destination)} className="text-yellow-500">
                                        <FcSynchronize size={'1.5em'} />
                                    </button>
                                    <button onClick={() => handleDelete(destination.id)} className="text-red-500">
                                        <FcDeleteColumn size={'1.5em'} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListDestinations;






