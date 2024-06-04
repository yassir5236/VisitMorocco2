import { useState } from 'react';
import axios from 'axios';

const AddInteretForm = ({ onSuccess }) => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/interets', {
                nom,
                description,
            });
            onSuccess(response.data);
            setNom('');
            setDescription('');
        } catch (err) {
            setError('Erreur lors de l\'ajout de l\'intérêt.');
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
            <h2 className="text-2xl mb-4">Ajouter un nouvel Intérêt</h2>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        placeholder="Nom de l'intérêt"
                        className="input-field border-2 rounded-md text-xl w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description :</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className="input-field border-2 rounded-md text-xl w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none transition duration-200">Ajouter</button>
            </form>
        </div>
    );
};

export default AddInteretForm;
