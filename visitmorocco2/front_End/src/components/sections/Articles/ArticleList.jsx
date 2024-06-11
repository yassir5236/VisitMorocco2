import { useState, useEffect } from 'react';
import axios from 'axios';
import { FcDeleteColumn, FcSynchronize, FcCancel } from "react-icons/fc";
import { MdOutlineFileDownloadDone } from "react-icons/md";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingArticle, setEditingArticle] = useState(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category_id, setCategoryId] = useState('');
    const [image, setImage] = useState(null);

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

    if (loading) return <p>Chargement...</p>;
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
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('category_id', category_id);
            formData.append('image', image);

            const response = await axios.post(`http://127.0.0.1:8000/api/articles/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                setArticles(articles.map(article => (article.id === id ? { ...article, title, content, category_id, image } : article)));
                setEditingArticle(null);
                setTitle('');
                setContent('');
                setCategoryId('');
                setImage(null);
            }
        } catch (err) {
            setError('Erreur lors de la mise à jour de l\'article.');
        }
    };

    const startEditing = (article) => {
        setEditingArticle(article.id);
        setTitle(article.title);
        setContent(article.content);
        setCategoryId(article.category_id);
        setImage(article.image);
    };

    const cancelEditing = () => {
        setEditingArticle(null);
        setTitle('');
        setContent('');
        setCategoryId('');
        setImage(null);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-6 m-10 rounded-md border-2 border-gray-400">
            <div id='articleTitle' className="text-4xl text-center w-full bg-gray-400 text-white mb-12">Liste des Articles</div>
            <div className="flex flex-wrap gap-6 w-full">
                {articles.map((article) => (
                    <div key={article.id} className="relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                        {editingArticle === article.id ? (
                            <>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="Titre de l'article"
                                    className="input-field border-2 rounded-md text-xl font-bold mb-2 text-gray-800"
                                />
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="Contenu de l'article"
                                    className="input-field border-2 mr-1 rounded-md text-xl"
                                />
                                <input
                                    type="text"
                                    value={category_id}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    placeholder="ID de la catégorie"
                                    className="input-field border-2 mr-1 rounded-md text-xl"
                                />
                                <input
                                    type="file"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                                <button onClick={() => handleUpdate(article.id)} className='m-4'>
                                    <MdOutlineFileDownloadDone size={'1.5em'} color='green' />
                                </button>
                                <button onClick={cancelEditing} className='m-1'>
                                    <FcCancel size={'1.5em'} />
                                </button>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl  mb-2 text-gray-800">{article.title}</h2>
                                <p className="text-gray-600 m-5">{article.content}</p>
                                <p className="text-gray-600 m-5">{article.category_id}</p>
                                <img src={`http://127.0.0.1:8000/${article.image}`} alt="Article" className="w-full rounded-md" />
                                <button onClick={() => handleDelete(article.id)} className='absolute bottom-2 left-2'>
                                    <FcDeleteColumn size={'1.5em'} color='gray-400' />
                                </button>
                                <button onClick={() => startEditing(article)} className='absolute bottom-2 right-2'>
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

export default ArticleList;
