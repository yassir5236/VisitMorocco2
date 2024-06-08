// import { useState, useRef } from 'react';
// import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
// const mapContainerStyle = { height: '300px', width: '100%' };
// const initialCenter = { lat: -34.397, lng: 150.644 };

// const SimpleMap = () => {
//     const [latitude, setLatitude] = useState(null);
//     const [longitude, setLongitude] = useState(null);
//     const [map, setMap] = useState(null);
//     const autocompleteRef = useRef(null);

//     const handlePlaceChanged = () => {
//         const place = autocompleteRef.current.getPlace();
//         if (place.geometry) {
//             const location = place.geometry.location;
//             setLatitude(location.lat());
//             setLongitude(location.lng());

//             map.panTo(location);
//             map.setZoom(15);
//         }
//     };

//     return (
//         <div>
//             <LoadScript googleMapsApiKey="AIzaSyD4o-94RHHvesOcIGsDHLQUl9JWQ33T0KU" libraries={libraries}>
//                 <Autocomplete
//                     onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
//                     onPlaceChanged={handlePlaceChanged}
//                 >
//                     <input
//                         type="text"
//                         placeholder="Rechercher une localisation"
//                         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     />
//                 </Autocomplete>
//                 <GoogleMap
//                     mapContainerStyle={mapContainerStyle}
//                     zoom={8}
//                     center={initialCenter}
//                     onLoad={(map) => setMap(map)}
//                 >
//                     {latitude && longitude && (
//                         <Marker position={{ lat: latitude, lng: longitude }} />
//                     )}
//                 </GoogleMap>
//             </LoadScript>
//         </div>
//     );
// };

// export default SimpleMap;




// import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Input, Text } from '@chakra-ui/react';
// import { FaLocationArrow, FaTimes } from 'react-icons/fa';
// import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, LoadScript } from '@react-google-maps/api';
// import { useRef, useState } from 'react';

// const center = { lat: 48.8584, lng: 2.2945 };

// function AddDestinationForm() {
//     const { isLoaded, loadError } = useJsApiLoader({
//         googleMapsApiKey: "AIzaSyD4o-94RHHvesOcIGsDHLQUl9JWQ33T0KU",
//         libraries: ['places'],
//     });

//     const [map, setMap] = useState(null);
//     const [directionsResponse, setDirectionsResponse] = useState(null);
//     const [distance, setDistance] = useState('');
//     const [duration, setDuration] = useState('');
//     const [loading, setLoading] = useState(false);
//     const originRef = useRef();
//     const destiantionRef = useRef();

//     if (loadError) {
//         return <div>Error loading Google Maps API: {loadError.message}</div>;
//     }

//     async function calculateRoute() {
//         if (originRef.current.value === '' || destiantionRef.current.value === '') {
//             return;
//         }
//         setLoading(true);
//         const directionsService = new window.google.maps.DirectionsService();
//         const results = await directionsService.route({
//             origin: originRef.current.value,
//             destination: destiantionRef.current.value,
//             travelMode: window.google.maps.TravelMode.DRIVING,
//         });
//         setDirectionsResponse(results);
//         setDistance(results.routes[0].legs[0].distance.text);
//         setDuration(results.routes[0].legs[0].duration.text);
//         setLoading(false);
//     }

//     function clearRoute() {
//         setDirectionsResponse(null);
//         setDistance('');
//         setDuration('');
//         originRef.current.value = '';
//         destiantionRef.current.value = '';
//     }

//     return (
//         <Flex
//             position='relative'
//             flexDirection='column'
//             alignItems='center'
//             h='100vh'
//             w='100vw'
//         >
//             <Box position='absolute' left={0} top={0} h='100%' w='100%'>
//                 {/* Google Map Box */}
//                 <LoadScript googleMapsApiKey="AIzaSyD4o-94RHHvesOcIGsDHLQUl9JWQ33T0KU" libraries={['places']}>
//                     {isLoaded ? (
//                         <GoogleMap
//                             center={center}
//                             zoom={15}
//                             mapContainerStyle={{ width: '100%', height: '100%' }}
//                             options={{
//                                 zoomControl: false,
//                                 streetViewControl: false,
//                                 mapTypeControl: false,
//                                 fullscreenControl: false,
//                             }}
//                             onLoad={map => setMap(map)}
//                         >
//                             <Marker position={center} />
//                             {directionsResponse && (
//                                 <DirectionsRenderer directions={directionsResponse} />
//                             )}
//                         </GoogleMap>
//                     ) : (
//                         <div>Loading map...</div>
//                     )}
//                 </LoadScript>
//             </Box>
//             <Box
//                 p={4}
//                 borderRadius='lg'
//                 m={4}
//                 bgColor='white'
//                 shadow='base'
//                 minW='container.md'
//                 zIndex='1'
//             >
//                 <HStack spacing={2} justifyContent='space-between'>
//                     <Box flexGrow={1}>
//                         <Autocomplete onLoad={autoComplete => originRef.current = autoComplete}>
//                             <Input type='text' placeholder='Origin' />
//                         </Autocomplete>
//                     </Box>
//                     <Box flexGrow={1}>
//                         <Autocomplete onLoad={autoComplete => destiantionRef.current = autoComplete}>
//                             <Input type='text' placeholder='Destination' />
//                         </Autocomplete>
//                     </Box>

//                     <ButtonGroup>
//                         <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
//                             Calculate Route
//                         </Button>
//                         <IconButton
//                             aria-label='center back'
//                             icon={<FaTimes />}
//                             onClick={clearRoute}
//                         />
//                     </ButtonGroup>
//                 </HStack>
//                 <HStack spacing={4} mt={4} justifyContent='space-between'>
//                     <Text>Distance: {distance} </Text>
//                     <Text>Duration: {duration} </Text>
//                     <IconButton
//                         aria-label='center back'
//                         icon={<FaLocationArrow />}
//                         isRound
//                         onClick={() => {
//                             map.panTo(center)
//                             map.setZoom(15)
//                         }}
//                     />
//                 </HStack>
//             </Box>
//         </Flex>
//     );
// }

// export default AddDestinationForm;


import { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import axios from 'axios';

const libraries = ['places'];
const mapContainerStyle = { height: '300px', width: '100%' };
const initialCenter = { lat: -34.397, lng: 150.644 };

const AddDestinationForm = () => {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [regionId, setRegionId] = useState('');
    const [typeId, setTypeId] = useState('');
    const [interetId, setInteretId] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [regions, setRegions] = useState([]);
    const [types, setTypes] = useState([]);
    const [interets, setInterets] = useState([]);
    const [error, setError] = useState(null);
    const [map, setMap] = useState(null);
    const autocompleteRef = useRef(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/regions/index')
            .then(response => setRegions(response.data))
            .catch(error => setError(error));
        axios.get('http://127.0.0.1:8000/api/types')
            .then(response => setTypes(response.data))
            .catch(error => setError(error));
        axios.get('http://127.0.0.1:8000/api/interets')
            .then(response => setInterets(response.data))
            .catch(error => setError(error));
    }, []);

    const handlePlaceChanged = () => {
        const place = autocompleteRef.current.getPlace();
        if (!place.geometry) {
            return;
        }

        const location = place.geometry.location;
        setLatitude(location.lat());
        setLongitude(location.lng());

        if (map) {
            map.panTo(location);
            map.setZoom(15);

            new window.google.maps.Marker({
                position: location,
                map: map,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            nom,
            description,
            region_id: regionId,
            type_id: typeId,
            interet_id: interetId,
            latitude,
            longitude,
        };

        axios.post('http://127.0.0.1:8000/api/destinations', formData)
            .then(response => {
                console.log('Destination added:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the destination!', error);
            });
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md m-10">
            <h1 className="text-2xl font-bold mb-6">Ajouter une Destination</h1>
            {error && <p className="text-red-500 mb-4">{error.message}</p>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom:</label>
                    <input
                        type="text"
                        id="nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="region_id" className="block text-sm font-medium text-gray-700">Region:</label>
                    <select
                        id="region_id"
                        value={regionId}
                        onChange={(e) => setRegionId(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        {regions.map((region) => (
                            <option key={region.id} value={region.id}>{region.nom}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="type_id" className="block text-sm font-medium text-gray-700">Type:</label>
                    <select
                        id="type_id"
                        value={typeId}
                        onChange={(e) => setTypeId(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        {types.map((type) => (
                            <option key={type.id} value={type.id}>{type.nom}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="interet_id" className="block text-sm font-medium text-gray-700">Interet:</label>
                    <select
                        id="interet_id"
                        value={interetId}
                        onChange={(e) => setInteretId(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        {interets.map((interet) => (
                            <option key={interet.id} value={interet.id}>{interet.nom}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="map-search" className="block text-sm font-medium text-gray-700">Localisation:</label>
                    <LoadScript googleMapsApiKey="AIzaSyD4o-94RHHvesOcIGsDHLQUl9JWQ33T0KU" libraries={libraries}>
                        <Autocomplete
                            onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
                            onPlaceChanged={handlePlaceChanged}
                        >
                            <input
                                type="text"
                                id="map-search"
                                placeholder="Rechercher une localisation"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </Autocomplete>
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            zoom={8}
                            center={initialCenter}
                            onLoad={(map) => setMap(map)}
                        >
                            {latitude && longitude && (
                                <Marker position={{ lat: parseFloat(latitude), lng: parseFloat(longitude) }} />
                            )}
                        </GoogleMap>
                    </LoadScript>
                </div>
                <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default AddDestinationForm;

