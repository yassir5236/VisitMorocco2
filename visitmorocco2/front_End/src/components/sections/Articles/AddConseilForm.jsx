




import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const AddConseilForm = ({ onSuccess }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des catégories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage('');

        let formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('category_id', category_id);
        formData.append('image', image);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/articles/store', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                setSuccessMessage('Conseil ajouté avec succès !');
                setTitle('');
                setContent('');
                setCategoryId('');
                setImage(null);
                onSuccess(response.data);
                navigate('/Dashboard');
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout du conseil:', error);
            if (error.response && error.response.data) {
                // setErrors(error.response.data.errors);
            } else {
                // setErrors({ api: "Une erreur s'est produite lors de l'ajout du conseil." });
            }
        }
    };

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Ajouter un Conseil</h1>
                        </div>
                        {successMessage && (
                            <div className="bg-green-50 border-l-4 border-green-400 text-green-700 p-4 rounded mb-6">
                                {successMessage}
                            </div>
                        )}
                        {errors.api && (
                            <div className="bg-red-50 border-l-4 border-red-400 text-red-700 p-4 rounded mb-6">
                                {errors.api}
                            </div>
                        )}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Titre du conseil</label>
                                <input
                                    type="text"
                                    name="title"
                                    className={`input-field ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Contenu</label>
                                <textarea
                                    name="content"
                                    className={`input-field ${errors.content ? 'border-red-500' : 'border-gray-300'}`}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                                {errors.content && <p className="text-red-500 text-sm mt-2">{errors.content}</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Catégorie</label>
                                <select
                                    name="category_id"
                                    className={`input-field ${errors.category_id ? 'border-red-500' : 'border-gray-300'}`}
                                    value={category_id}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="">Sélectionnez une catégorie</option>
                                    {categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                                {errors.category_id && <p className="text-red-500 text-sm mt-2">{errors.category_id}</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Image</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none transition duration-200"
                            >
                                Ajouter
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddConseilForm;




