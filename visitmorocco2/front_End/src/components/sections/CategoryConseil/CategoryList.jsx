


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
// import { MdOutlineFileDownloadDone } from "react-icons/md";
// import AddCategoryForm from './AddCategoryForm';
// import { GrAdd } from "react-icons/gr";

// const CategoryList = () => {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [editingCategory, setEditingCategory] = useState(null);
//     const [name, setName] = useState('');
//     const [showAddForm, setShowAddForm] = useState(false);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/categories');
//                 setCategories(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Erreur lors de la récupération des catégories.');
//                 setLoading(false);
//             }
//         };

//         fetchCategories();
//     }, []);

//     if (loading) return <p>Chargement...</p>;
//     if (error) return <p>{error}</p>;

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
//             setCategories(categories.filter(category => category.id !== id));
//         } catch (err) {
//             setError('Erreur lors de la suppression de la catégorie.');
//         }
//     };

//     const handleUpdate = async (id) => {
//         try {
//             await axios.put(`http://127.0.0.1:8000/api/categories/${id}`, {
//                 name,
//             });
//             setCategories(categories.map(category => (category.id === id ? { ...category, name } : category)));
//             setEditingCategory(null);
//             setName('');
//         } catch (err) {
//             setError('Erreur lors de la mise à jour de la catégorie.');
//         }
//     };

//     const startEditing = (category) => {
//         setEditingCategory(category.id);
       
//         setName(category.name);
//     };

//     const cancelEditing = () => {
//         setEditingCategory(null);
//         setName('');
//     };

//     const handleAddSuccess = (newCategory) => {
//         setCategories([...categories, newCategory]);
//         setShowAddForm(false);
//     };

//     return (
//         <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
//             <div id='categoryTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Manage Conseil Category</div>
//             <button
//                 onClick={() => setShowAddForm(true)}
//             >
//                 <GrAdd size={'2em'} color='red' />
//             </button>
//             {showAddForm && <AddCategoryForm onSuccess={handleAddSuccess} />}
//             <div className="flex flex-wrap gap-6 w-full">
//                 {categories.map((category) => (
//                     <div key={category.id} className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
//                         {editingCategory === category.id ? (
//                             <>
//                                 <input
//                                     type="text"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     placeholder="Nom de la catégorie"
//                                     className="input-field border-2 rounded-md text-xl font-bold mb-2 text-gray-800"
//                                 />
//                                 <button onClick={() => handleUpdate(category.id)} className='m-4'>
//                                     <MdOutlineFileDownloadDone size={'1.5em'} color='green' />
//                                 </button>
//                                 <button onClick={cancelEditing} className='m-1'>
//                                     <FcCancel size={'1.5em'} />
//                                 </button>
//                             </>
//                         ) : (
//                             <>
//                                 <h2 className="text-xl  mb-2 text-gray-800">{category.name}</h2>
//                                 <button onClick={() => handleDelete(category.id)} className='absolute bottom-2 left-2'>
//                                     <FcDeleteColumn size={'1.5em'} color='gray-400' />
//                                 </button>
//                                 <button onClick={() => startEditing(category)} className='absolute bottom-2 right-2'>
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

// export default CategoryList;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import AddCategoryForm from './AddCategoryForm';
import { GrAdd } from "react-icons/gr";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [name, setName] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categories');
                setCategories(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des catégories.');
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
            setCategories(categories.filter(category => category.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de la catégorie.');
        }
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/categories/${id}`, {
                name,
            });
            setCategories(categories.map(category => (category.id === id ? { ...category, name } : category)));
            setEditingCategory(null);
            setName('');
        } catch (err) {
            setError('Erreur lors de la mise à jour de la catégorie.');
        }
    };

    const startEditing = (category) => {
        setEditingCategory(category.id);
        setName(category.name);
    };

    const cancelEditing = () => {
        setEditingCategory(null);
        setName('');
    };

    const handleAddSuccess = (newCategory) => {
        setCategories([...categories, newCategory]);
        setShowAddForm(false);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-lg border border-gray-300 shadow-lg bg-white">
            <div id='categoryTitle' className="text-4xl text-center w-full bg-sky-600 text-white py-4 rounded-t-lg mb-12">Manage Conseil Category</div>
            <div className="flex justify-end mb-4">
                <button
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                >
                    <GrAdd size={'1.5em'} />
                    <span>Ajouter Catégorie</span>
                </button>
            </div>
            {showAddForm && <AddCategoryForm onSuccess={handleAddSuccess} />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <div key={category.id} className="relative p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                        {editingCategory === category.id ? (
                            <>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nom de la catégorie"
                                    className="w-full mb-2 px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <div className="flex justify-between">
                                    <button onClick={() => handleUpdate(category.id)} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
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
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{category.name}</h2>
                                <div className="flex justify-between">
                                    <button onClick={() => handleDelete(category.id)} className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                                        <FcDeleteColumn size={'1.5em'} />
                                        <span>Delete</span>
                                    </button>
                                    <button onClick={() => startEditing(category)} className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-200">
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

export default CategoryList;

