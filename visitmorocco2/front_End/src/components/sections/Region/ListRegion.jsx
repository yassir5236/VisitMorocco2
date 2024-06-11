


import { useState, useEffect } from 'react';
import axios from 'axios';
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import AddRegionForm from './AddRegionForm';
import { GrAdd } from "react-icons/gr";

const ListRegion = () => {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingRegion, setEditingRegion] = useState(null);
    const [nom, setRegionName] = useState('');
    const [description, setDescription] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/regions/index');
                setRegions(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des régions.');
                setLoading(false);
            }
        };

        fetchRegions();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/regions/${id}`);
            setRegions(regions.filter(region => region.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de la région.');
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/regions/${id}`, {
                nom,
                description,
            });
            setRegions(regions.map(region => (region.id === id ? { ...region, nom, description } : region)));
            setEditingRegion(null);
            setRegionName('');
            setDescription('');
        } catch (err) {
            setError('Erreur lors de la mise à jour de la région.');
        }
    };

    const startEditing = (region) => {
        setEditingRegion(region.id);
        setRegionName(region.nom);
        setDescription(region.description);
    };

    const cancelEditing = () => {
        setEditingRegion(null);
        setRegionName('');
        setDescription('');
    };

    const addNewRegion = (newRegion) => {
        setRegions([...regions, newRegion]);
        setShowAddForm(false); // Close the add region form
    };

    return (
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
            <div id='regionTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Manage Régions</div>
            {showAddForm && <AddRegionForm onSuccess={addNewRegion} />}
            <button onClick={() => setShowAddForm(!showAddForm)} >
                <GrAdd size={'2em'} color='red' />
                {showAddForm ? '' : ''}
            </button>
            <div className="flex flex-wrap gap-6 w-full">
                {regions.map((region) => (
                    <div key={region.id} className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        {editingRegion === region.id ? (
                            <>
                                <input
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setRegionName(e.target.value)}
                                    placeholder="Nom de la région"
                                    className="input-field border-2  rounded-md text-xl  mb-2 text-gray-800"
                                />
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Description"
                                    className="input-field border-2 mr-1 rounded-md text-xl"
                                />
                                <button onClick={() => handleUpdate(region.id)} className='m-4 ' >
                                    <MdOutlineFileDownloadDone size={'1.5em'} color='green' />
                                </button>
                                <button onClick={cancelEditing} className='m-1 ' >
                                    <FcCancel size={'1.5em'} />
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl  mb-2 text-gray-800">{region.nom}</h2>
                                <p className="text-gray-600 m-5">{region.description}</p>
                                <button onClick={() => handleDelete(region.id)} className='absolute bottom-2 left-2'>
                                    <FcDeleteColumn size={'1.5em'} color='gray-400' />
                                </button>
                                <button onClick={() => startEditing(region)} className='absolute bottom-2 right-2'>
                                    <FcSynchronize size={'1.5em'} color='gray-400' />
                                </button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

};

export default ListRegion


