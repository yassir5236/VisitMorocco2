// import  { useState, useEffect } from 'react';
// import axios from 'axios';

// const CategoryList = () => {
//     const [categories, setCategories] = useState([]);
//     const [name, setName] = useState('');
//     const [editingCategory, setEditingCategory] = useState(null);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/categories');
//                 setCategories(response.data);
//             } catch (error) {
//                 console.error('Error fetching categories:', error);
//             }
//         };

//         fetchCategories();
//     }, []);

//     const handleAddCategory = async () => {
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/categories', { name });
//             setCategories([...categories, response.data]);
//             setName('');
//         } catch (error) {
//             console.error('Error adding category:', error);
//         }
//     };

//     const handleEditCategory = (category) => {
//         setEditingCategory(category);
//         setName(category.name);
//     };

//     const handleUpdateCategory = async () => {
//         try {
//             const response = await axios.put(`http://127.0.0.1:8000/api/categories/${editingCategory.id}`, { name });
//             setCategories(categories.map(category => (category.id === editingCategory.id ? response.data : category)));
//             setName('');
//             setEditingCategory(null);
//         } catch (error) {
//             console.error('Error updating category:', error);
//         }
//     };

//     const handleDeleteCategory = async (id) => {
//         if (window.confirm('Are you sure you want to delete this category?')) {
//             try {
//                 await axios.delete(`http://127.0.0.1:8000/api/categories/${id}`);
//                 setCategories(categories.filter(category => category.id !== id));
//             } catch (error) {
//                 console.error('Error deleting category:', error);
//             }
//         }
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Manage Categories</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
//                     <h2 className="text-xl font-bold mb-4 text-gray-800">Add Category</h2>
//                     <div className="flex items-center mb-4">
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             placeholder="Enter category name"
//                         />
//                         <button
//                             onClick={editingCategory ? handleUpdateCategory : handleAddCategory}
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             {editingCategory ? 'Update' : 'Add'}
//                         </button>
//                     </div>
//                 </div>
//                 {categories.map(category => (
//                     <div key={category.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
//                         <h2 className="text-xl font-bold mb-4 text-gray-800">{category.name}</h2>
//                         <div className="flex justify-between">
//                             <button
//                                 onClick={() => handleEditCategory(category)}
//                                 className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Edit
//                             </button>
//                             <button
//                                 onClick={() => handleDeleteCategory(category.id)}
//                                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Delete
//                             </button>
//                         </div>
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
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
            <div id='categoryTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Manage Conseil Category</div>
            <button
                onClick={() => setShowAddForm(true)}
            >
                <GrAdd size={'2em'} color='red' />
            </button>
            {showAddForm && <AddCategoryForm onSuccess={handleAddSuccess} />}
            <div className="flex flex-wrap gap-6 w-full">
                {categories.map((category) => (
                    <div key={category.id} className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        {editingCategory === category.id ? (
                            <>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nom de la catégorie"
                                    className="input-field border-2 rounded-md text-xl font-bold mb-2 text-gray-800"
                                />
                                <button onClick={() => handleUpdate(category.id)} className='m-4'>
                                    <MdOutlineFileDownloadDone size={'1.5em'} color='green' />
                                </button>
                                <button onClick={cancelEditing} className='m-1'>
                                    <FcCancel size={'1.5em'} />
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl  mb-2 text-gray-800">{category.name}</h2>
                                <button onClick={() => handleDelete(category.id)} className='absolute bottom-2 left-2'>
                                    <FcDeleteColumn size={'1.5em'} color='gray-400' />
                                </button>
                                <button onClick={() => startEditing(category)} className='absolute bottom-2 right-2'>
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

export default CategoryList;
