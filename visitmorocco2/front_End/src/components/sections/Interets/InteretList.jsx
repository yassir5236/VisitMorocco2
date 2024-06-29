// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
// import { MdOutlineFileDownloadDone } from "react-icons/md";
// import AddInteretForm from './AddInteretForm';
// import { GrAdd } from "react-icons/gr";

// const InteretList = () => {
//     const [interets, setInterets] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [editingInteret, setEditingInteret] = useState(null);
//     const [nom, setInteretName] = useState('');
//     const [description, setDescription] = useState('');
//     const [showAddForm, setShowAddForm] = useState(false);

//     useEffect(() => {
//         const fetchInterets = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/interets');
//                 setInterets(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Erreur lors de la récupération des intérêts.');
//                 setLoading(false);
//             }
//         };

//         fetchInterets();
//     }, []);

//     if (loading) return <p>Chargement...</p>;
//     if (error) return <p>{error}</p>;

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:8000/api/interets/${id}`);
//             setInterets(interets.filter(interet => interet.id !== id));
//         } catch (err) {
//             setError('Erreur lors de la suppression de l\'intérêt.');
//         }
//     };

//     const handleUpdate = async (id) => {
//         try {
//             await axios.put(`http://127.0.0.1:8000/api/interets/${id}`, {
//                 nom,
//                 description,
//             });
//             setInterets(interets.map(interet => (interet.id === id ? { ...interet, nom, description } : interet)));
//             setEditingInteret(null);
//             setInteretName('');
//             setDescription('');
//         } catch (err) {
//             setError('Erreur lors de la mise à jour de l\'intérêt.');
//         }
//     };

//     const startEditing = (interet) => {
//         setEditingInteret(interet.id);
//         setInteretName(interet.nom);
//         setDescription(interet.description);
//     };

//     const cancelEditing = () => {
//         setEditingInteret(null);
//         setInteretName('');
//         setDescription('');
//     };

//     const handleAddSuccess = (newInteret) => {
//         setInterets([...interets, newInteret]);
//         setShowAddForm(false);
//     };

//     return (
//         <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
//             <div id='interetTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Liste des Intérêts de Destination</div>
//             <button
//                 onClick={() => setShowAddForm(true)}
//             >
//                    <GrAdd size={'2em'} color='red' />
              
//             </button>
//             {showAddForm && <AddInteretForm onSuccess={handleAddSuccess} />}
//             <div className="flex flex-wrap gap-6 w-full">
//                 {interets.map((interet) => (
//                     <div key={interet.id} className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
//                         {editingInteret === interet.id ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={nom}
//                                     onChange={(e) => setInteretName(e.target.value)}
//                                     placeholder="Nom de l'intérêt"
//                                     className="input-field border-2 rounded-md text-xl font-bold mb-2 text-gray-800"
//                                 />
//                                 <textarea
//                                     value={description}
//                                     onChange={(e) => setDescription(e.target.value)}
//                                     placeholder="Description"
//                                     className="input-field border-2 mr-1 rounded-md text-xl"
//                                 />
//                                 <button onClick={() => handleUpdate(interet.id)} className='m-4'>
//                                     <MdOutlineFileDownloadDone size={'1.5em'} color='green' />
//                                 </button>
//                                 <button onClick={cancelEditing} className='m-1'>
//                                     <FcCancel size={'1.5em'} />
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <h2 className="text-xl  mb-2 text-gray-800">{interet.nom}</h2>
//                                 <p className="text-gray-600 m-5">{interet.description}</p>
//                                 <button onClick={() => handleDelete(interet.id)} className='absolute bottom-2 left-2'>
//                                     <FcDeleteColumn size={'1.5em'} color='gray-400' />
//                                 </button>
//                                 <button onClick={() => startEditing(interet)} className='absolute bottom-2 right-2'>
//                                     <FcSynchronize size={'1.5em'} color='gray-400' />
//                                 </button>
//                             </>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default InteretList;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import AddInteretForm from './AddInteretForm';
import { GrAdd } from "react-icons/gr";

const InteretList = () => {
    const [interets, setInterets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingInteret, setEditingInteret] = useState(null);
    const [nom, setInteretName] = useState('');
    const [description, setDescription] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchInterets = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/interets');
                setInterets(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des intérêts.');
                setLoading(false);
            }
        };

        fetchInterets();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/interets/${id}`);
            setInterets(interets.filter(interet => interet.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de l\'intérêt.');
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/interets/${id}`, {
                nom,
                description,
            });
            setInterets(interets.map(interet => (interet.id === id ? { ...interet, nom, description } : interet)));
            setEditingInteret(null);
            setInteretName('');
            setDescription('');
        } catch (err) {
            setError('Erreur lors de la mise à jour de l\'intérêt.');
        }
    };

    const startEditing = (interet) => {
        setEditingInteret(interet.id);
        setInteretName(interet.nom);
        setDescription(interet.description);
    };

    const cancelEditing = () => {
        setEditingInteret(null);
        setInteretName('');
        setDescription('');
    };

    const handleAddSuccess = (newInteret) => {
        setInterets([...interets, newInteret]);
        setShowAddForm(false);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-lg border border-gray-300 shadow-lg bg-white">
            <div id='interetTitle' className="text-4xl text-center w-full bg-sky-600  text-white py-4 rounded-t-lg mb-12">Liste des Intérêts de Destination</div>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                >
                    <GrAdd size={'1.5em'} />
                    <span>Ajouter Intérêt</span>
                </button>
            </div>
            {showAddForm && <AddInteretForm onSuccess={handleAddSuccess} />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interets.map((interet) => (
                    <div key={interet.id} className="relative p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                        {editingInteret === interet.id ? (
                            <>
                                <input
                                    type="text"
                                    value={nom}
                                    onChange={(e) => setInteretName(e.target.value)}
                                    placeholder="Nom de l'intérêt"
                                    className="w-full mb-2 px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Description"
                                    className="w-full mb-2 px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <div className="flex justify-between">
                                    <button onClick={() => handleUpdate(interet.id)} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                                        <MdOutlineFileDownloadDone size={'1.5em'} />
                                        <span>Save</span>
                                    </button>
                                    <button onClick={cancelEditing} className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                                        <FcCancel size={'1.5em'} />
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{interet.nom}</h2>
                                <p className="text-gray-600 mb-4">{interet.description}</p>
                                <div className="flex justify-between">
                                    <button onClick={() => handleDelete(interet.id)} className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                                        <FcDeleteColumn size={'1.5em'} />
                                        <span>Delete</span>
                                    </button>
                                    <button onClick={() => startEditing(interet)} className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200">
                                        <FcSynchronize size={'1.5em'} />
                                        <span>Edit</span>
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

export default InteretList;

