




import { useState, useEffect } from 'react';
import axios from 'axios';
// import Header from '../Header/Header';
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AddConseilForm from './AddConseilForm';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingArticle, setEditingArticle] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category_id: '',
        image: null
    });
    const [showAddForm, setShowAddForm] = useState(false);
    // const UserInfo = localStorage.getItem('user_info');
    let user = JSON.parse(localStorage.getItem('user_info'))









    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/articles');
                setArticles(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des articles.');
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/articles/${id}`);
            setArticles(articles.filter(article => article.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de l\'article.');
        }
    };

    const handleUpdate = async (id) => {
        try {
            const formDataUpdate = new FormData();
            formDataUpdate.append('title', formData.title);
            formDataUpdate.append('content', formData.content);
            formDataUpdate.append('category_id', formData.category_id);
            formDataUpdate.append('image', formData.image);

            const response = await axios.put(`http://127.0.0.1:8000/api/articles/${id}`, formDataUpdate, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                setArticles(articles.map(article => (article.id === id ? { ...article, ...formData } : article)));
                setEditingArticle(null);
                setFormData({
                    title: '',
                    content: '',
                    category_id: '',
                    image: null
                });
            }
        } catch (err) {
            setError('Erreur lors de la mise à jour de l\'article.');
        }
    };

    const startEditing = (article) => {
        setEditingArticle(article.id);
        setFormData({
            title: article.title,
            content: article.content,
            category_id: article.category_id,
            image: article.image
        });
    };

    const cancelEditing = () => {
        setEditingArticle(null);
        setFormData({
            title: '',
            content: '',
            category_id: '',
            image: null
        });
    };



    // const ShowForm = () => {
    //     setShowAddForm(true);
    // };

    const toggleForm = () => {
        setShowAddForm(prevShowAddForm => !prevShowAddForm);
    };



    return (
        <>

            <Header />

            {/* <button  onClick={show}  > show</button> */}


            {user.role === 'admin' ?
             (
                <>
                    <button onClick={toggleForm} className='bg-cyan-700 p-3 m-10 rounded text-white'>
                        {showAddForm ? 'Fermer le formulaire' : 'Ajouter un article'}
                    </button>

                    {showAddForm && <AddConseilForm />}
                </>
            ) : null}

            <div className="max-w-screen-xl mx-auto p-6 m-10">
                <div id='articleTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Liste des Articles</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div key={article.id} className="bg-white border border-gray-200 rounded-lg shadow relative">
                            <a href="#">
                                <img src={`http://127.0.0.1:8000/storage/${article.image}`} alt="Article" className="rounded-t-lg w-full" />
                            </a>
                            <div className="p-5">
                                {editingArticle === article.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            placeholder="Titre de l'article"
                                            className="input-field border-2 rounded-md text-xl font-bold mb-2 text-gray-800"
                                        />
                                        <textarea
                                            value={formData.content}
                                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                            placeholder="Contenu de l'article"
                                            className="input-field border-2 mr-1 rounded-md text-xl"
                                        />
                                        <input
                                            type="text"
                                            value={formData.category_id}
                                            onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                                            placeholder="ID de la catégorie"
                                            className="input-field border-2 mr-1 rounded-md text-xl"
                                        />
                                        <input
                                            type="file"
                                            onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                                        />
                                        <button onClick={() => handleUpdate(article.id)} className='m-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'>
                                            Update
                                        </button>
                                        <button onClick={cancelEditing} className='m-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{article.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700">{article.content}</p>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                            Read more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </a>
                                    </div>
                                )}
                                <button onClick={() => handleDelete(article.id)} className='absolute top-2 right-2'>
                                    <FcDeleteColumn size={'1.5em'} color='gray-400' />
                                </button>
                                <button onClick={() => startEditing(article)} className='absolute bottom-2 right-2'>
                                    <FcSynchronize size={'1.5em'} color='gray-400' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ArticleList;
