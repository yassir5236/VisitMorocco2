import ActivityList from '../../sections/Activities/ActivityList';
import AddConseilForm from '../../sections/Articles/AddConseilForm';
import AddArticleForm from '../../sections/Articles/AddConseilForm';
import ListArticles from '../../sections/Articles/ArticleList';
import ArticleList from '../../sections/Articles/ArticleList';
import AddActivity from '../../sections/Activities/AddActivity';
import CategoryList from '../../sections/CategoryConseil/CategoryList';
// import BookActivity from '../../sections/Activities/BookActivity';
// import SearchActivities from '../../sections/Activities/SearchActivities';
import AddDestinationForm from '../../sections/Destination/AddDestinationForm';
import ListDestinations from '../../sections/Destination/ListDestinations';
import SearchDestinations from '../../sections/Destination/SearchDestinations';
// import SimpleMap from '../../sections/Destination/SimpleMap';
import Footer from '../../sections/Footer/Footer';
import Header from '../../sections/Header/Header';
import InteretList from '../../sections/Interets/InteretList';
import ListRegion from '../../sections/Region/ListRegion';
import ListTypes from '../../sections/Type/ListTypes';
import Guide from '../../sections/GuideVoyage/Guide';
import RegionSearch from '../../sections/GuideVoyage/RegionSearch';

import './Dashboard.css';
import PostList from '../../sections/Posts/PostList';
import CreatePostForm from '../../sections/Posts/CreatePostForm';
import Statistics from '../../sections/Statistics/Statistics';


const Dashboard = () => {
  return (
    <>

      <Header />

      {/* <Guide/> */}
      {/* <RegionSearch/> */}

      {/* <ListRegion /> */}


      {/* <Statistics /> */}






             
      <ListTypes />
      <InteretList />
      <CategoryList/>
{/* 
      <ListDestinations />   */}





      {/* <CreatePostForm />
      <PostList /> */}


      {/* <AddDestinationForm /> */}

      {/* <SearchDestinations /> */}
      {/* <BookActivity/>
      <SearchActivities/> */}
      {/* <AddActivity/> */}
      {/* <ActivityList/> */}

      {/* <AddConseilForm/> */}
      {/* <ListArticles/> */}





      {/* <SimpleMap /> */}





      <Footer />
    </>

  )
}

export default Dashboard
