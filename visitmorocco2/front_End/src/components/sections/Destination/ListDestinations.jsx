import { useState, useEffect } from 'react';
import axios from 'axios';
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { GrAdd } from "react-icons/gr";
import AddDestinationForm from './AddDestinationForm';

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

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

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

    return (
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
            <div id='destinationTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Liste des Destinations</div>
            <button
                onClick={() => setShowAddForm(true)}
                className="mb-4"
            >
                <GrAdd size={'2em'} color='red' />
            </button>
            {showAddForm && <AddDestinationForm onSuccess={handleAddSuccess} />}
            <div className="flex flex-wrap gap-6 w-full">
                {destinations.map((destination) => (
                    <div key={destination.id} className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        {editingDestination === destination.id ? (
                            <>
                                <input
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    placeholder="Nom de la destination"
                                    className="input-field border-2 rounded-md text-xl mb-2 text-gray-800"
                                />
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Description"
                                    className="input-field border-2 mr-1 rounded-md text-xl mb-2"
                                />
                                <input
                                    type="text"
                                    value={latitude}
                                    onChange={(e) => setLatitude(e.target.value)}
                                    placeholder="Latitude"
                                    className="input-field border-2 rounded-md text-xl mb-2 text-gray-800"
                                />
                                <input
                                    type="text"
                                    value={longitude}
                                    onChange={(e) => setLongitude(e.target.value)}
                                    placeholder="Longitude"
                                    className="input-field border-2 rounded-md text-xl mb-2 text-gray-800"
                                />
                                <textarea
                                    value={images}
                                    onChange={(e) => setImages(e.target.value.split(','))}
                                    placeholder="Images (URLs séparées par des virgules)"
                                    className="input-field border-2 mr-1 rounded-md text-xl mb-2"
                                />
                                <button onClick={() => handleUpdate(destination.id)} className='m-4'>
                                    <MdOutlineFileDownloadDone size={'1.5em'} color='green' />
                                </button>
                                <button onClick={cancelEditing} className='m-1'>
                                    <FcCancel size={'1.5em'} />
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="max-w-sm h-auto">

                                    <img className="rounded-t-lg h-96 w-96 p-1" src="https://picsum.photos/seed/picsum/200/300" alt="Blog" />

                                    <h2 className="text-xl mb-2 text-gray-800">{destination.nom}</h2>
                                    <p className="text-gray-600 mb-2">{destination.description}</p>
                                    <p className="text-gray-600 mb-2">Latitude: {destination.latitude}</p>
                                    <p className="text-gray-600 mb-2">Longitude: {destination.longitude}</p>
                                    {/* {destination.images && destination.images.map((image, index) => (
                                    <img key={index} src={image} alt={`Destination ${index}`} className="w-full mb-2" />
                                ))} */}

                                    <a
                                        href="#"
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                    <button onClick={() => handleDelete(destination.id)} className='absolute bottom-2 right-10'>
                                        <FcDeleteColumn size={'1.5em'} color='gray-400' />
                                    </button>
                                    <button onClick={() => startEditing(destination)} className='absolute bottom-2 right-2'>
                                        <FcSynchronize size={'1.5em'} color='gray-400' />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};





export default ListDestinations;



