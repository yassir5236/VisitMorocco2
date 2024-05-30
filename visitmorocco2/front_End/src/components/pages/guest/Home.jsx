import './Home.css';

// import { BeakerIcon } from '@heroicons/react/24/solid'

// import {  Container } from './components/index';
import Welcome from '../../sections/Welcome/Welcome';
import Header from '../../sections/Header/Header';
import Destination from '../../sections/Destination/Destination';
import Footer from '../../sections/Footer/Footer';




const Home = () => {
    return (
        <>

            <Header />
            <Welcome />



            <Destination />
            <Footer />

        </>
    )
}

export default Home
