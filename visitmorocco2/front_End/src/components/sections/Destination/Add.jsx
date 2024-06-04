import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Add = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen flex items-center justify-center p-10 bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add Destination</h2>
                    <form >
                        <div className="mb-4">
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                // value={formData.name}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter destination name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter destination description"
                                rows="4"
                                required
                            ></textarea>
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="description">Region</label>
                            <select
                                id="description"
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter destination description"
                                rows="4"
                                required


                            >
                                <option>Region1</option>
                                <option>Region2</option>
                                <option>Region3</option>


                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="description">Type</label>
                            <select
                                id="description"
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter destination description"
                                rows="4"
                                required


                            >
                                <option>culture</option>
                                <option>aventure</option>
                                <option>détente</option>


                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-600 font-semibold mb-2" htmlFor="description">intérêts</label>
                            <select
                                id="description"
                                name="description"
                                // value={formData.description}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter destination description"
                                rows="4"
                                required


                            >
                                <option>culture</option>
                                <option>aventure</option>
                                <option>détente</option>


                            </select>
                        </div>


                        <div className="relative">
                     

                            <div className="mb-5">
                                <label className=" block mb-2 text-sm font-medium text-gray-500 dark:text-white">Upload file</label>
                                <input
                                    className="block w-full text-sm p-1 text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-cyan-900 dark:border-gray-400 dark:placeholder-gray-900"
                                    // onChange={(e) => setImage(e.target.files[0])}
                                    type="file"
                                    id="image"
                                    name="image"
                                />
                            </div>


                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Add Destination
                        </button>
                    </form>
                </div>
            </div>            <Footer />

        </>
    )
}

export default Add
