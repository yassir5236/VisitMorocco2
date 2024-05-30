import './Destination.css';
// import Desination1 from 
import Destination1 from '../../../assets/images/image 12.png';
import Destination2 from '../../../assets/images/image 15 (2).png';
import Destination3 from '../../../assets/images/image 15 (1).png';



const Destination = () => {
    return (

        <>

            <h1 className=' p-5 mt-24 w-full   text-center text-4xl max-md:mt-10 max-md:max-w-full '>
                It’s more than just a trip
            </h1>
            <p className=' p-10 text-xl  w-full max-md:mt-10 max-md:max-w-full'>
                Explore popular destinations in Indonesia
            </p>


            <div className=' flex gap-8 p-8 justify-around md:flex-row items-center pb-6 rounded-xl shadow-md  sm:flex-wrap'>


                <div className="flex flex-col items-center pb-6 rounded-xl shadow-md bg-slate-50 max-w-[375px]">
                    <img
                        alt=''
                        loading="lazy"
                        src={Destination1}
                        className="self-stretch w-full aspect-[0.79]"
                    />
                    <div className="mt-6 text-2xl font-bold bg-clip-text">Jakarta</div>
                    <div className="mt-4 text-lg text-slate-400 p-5">
                        Sebagai Monumen Nasional Indonesia. Monas merupakan tempat untuk
                        berwisata Museum Sejarah dan kesenian Indonesia. Dilengkapi dengan
                        fasilitas olahraga dan taman rusa membuat Monas salah satu destinasi
                        populer
                    </div>
                </div>

                <div className="flex flex-col items-center pb-6 rounded-xl shadow-md bg-slate-50 max-w-[375px]">
                    <img
                        alt=''
                        loading="lazy"
                        src={Destination2}
                        className="self-stretch w-full aspect-[0.79]"
                    />
                    <div className="mt-6 text-2xl font-bold bg-clip-text">Jakarta</div>
                    <div className="mt-4 text-lg text-slate-400 p-5">
                        Sebagai Monumen Nasional Indonesia. Monas merupakan tempat untuk
                        berwisata Museum Sejarah dan kesenian Indonesia. Dilengkapi dengan
                        fasilitas olahraga dan taman rusa membuat Monas salah satu destinasi
                        populer
                    </div>
                </div>


                <div className="flex flex-col items-center pb-6 rounded-xl shadow-md bg-slate-50 max-w-[375px]">
                    <img
                        alt=''
                        loading="lazy"
                        src={Destination3}
                        className="self-stretch w-full aspect-[0.79]"
                    />
                    <div className="mt-6 text-2xl font-bold bg-clip-text">Jakarta</div>
                    <div className="mt-4 text-lg text-slate-400 p-5">
                        Sebagai Monumen Nasional Indonesia. Monas merupakan tempat untuk
                        berwisata Museum Sejarah dan kesenian Indonesia. Dilengkapi dengan
                        fasilitas olahraga dan taman rusa membuat Monas salah satu destinasi
                        populer
                    </div>
                </div>




            </div>

        </>
    )
}

export default Destination
