
// const ListRegion = () => {
//     return (
//         <div>


//             <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <a href="#">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                 </a>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                 <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                     Read more
//                     <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                     </svg>
//                 </a>
//             </div>

//         </div>
//     )
// }

// export default ListRegion



import { useState, useEffect } from 'react';
import axios from 'axios';
import './RegionList.css';
import { FcDeleteColumn } from "react-icons/fc";
import { FcSynchronize } from "react-icons/fc";
// import {link}


// import Header from '../../sections/Header/Header';
// import Footer from '../../sections/Footer/Footer';

const ListRegion = () => {
    const [regions, setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegions = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/regions/index');
                setRegions(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des régions.');
                setLoading(false);
            }
        };

        fetchRegions();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;

    return (


        <div className="   max-w-screen-xl mx-auto p-6 m-10   rounded-md    border-2 border-gray-400 "> 
            <div id='regionTitile' className="text-4xl  text-center w-full bg-gray-400  text-white mb-12">Liste des Régions</div>
            <div className="flex flex-wrap gap-6 w-full">
                {regions.map((region) => (
                    <div key={region.id} className=" relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">

                    {/* <div key={region.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300  relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"> */}
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{region.nom}</h2>
                        <p className="text-gray-600 m-5">{region.description}</p>
                        <button className='absolute bottom-2 left-2 '> <FcDeleteColumn  size={'1.5em'} color='gray-400' />
                        </button>
                        <button  className='absolute bottom-2 right-2 '> <FcSynchronize  size={'1.5em'} color='gray-400' />
                        </button>
                        
                    </div>



                ))}


            </div>
        </div>





    );
};

export default ListRegion;

