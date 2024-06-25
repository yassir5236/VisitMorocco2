import { useState } from 'react';
import axios from 'axios';

const CreatePostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        if (!userInfo) {
            console.error('User information not found in localStorage.');
            return;
        }

        const { id: user_id } = userInfo;

        axios.post('http://127.0.0.1:8000/api/posts/store', { title, body, user_id })
            .then(response => {
                onSubmit(response.data);
                setTitle('');
                setBody('');
            })
            .catch(error => {
                console.error('Error creating post:', error);
            });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
            <h2 className="text-lg font-semibold mb-4">Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full border border-gray-300 rounded-md p-2 mb-4"
                    required
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                ></textarea>
                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePostForm;
