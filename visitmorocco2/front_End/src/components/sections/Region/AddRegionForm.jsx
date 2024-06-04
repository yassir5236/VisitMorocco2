import { useState } from 'react';
import axios from 'axios';

const AddRegionForm = ({ onSuccess }) => {
    const [nom, setRegionName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage('');

        // Validation des champs
        let formErrors = {};
        if (!nom) formErrors.regionName = "Le nom de la région est requis.";
        if (!description) formErrors.description = "La description est requise.";

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/regions/store', {
                nom: nom,
                description: description,
            });

            if (response.status === 201) {
                setSuccessMessage('Région ajoutée avec succès !');
                setRegionName('');
                setDescription('');
                onSuccess(response.data); // Actualiser la liste des régions
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la région:', error);
            setErrors({ api: "Une erreur s'est produite lors de l'ajout de la région." });
        }
    };

    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Ajouter une Région</h1>
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
                                <label className="block text-gray-700 font-medium mb-2">Nom de la région</label>
                                <input
                                    type="text"
                                    name="nom"
                                    className={`input-field ${errors.regionName ? 'border-red-500' : 'border-gray-300'}`}
                                    value={nom}
                                    onChange={(e) => setRegionName(e.target.value)}
                                />
                                {errors.regionName && <p className="text-red-500 text-sm mt-2">{errors.regionName}</p>}
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 font-medium mb-2">Description</label>
                                <textarea
                                    name="description"
                                    className={`input-field ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description}</p>}
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

export default AddRegionForm;
