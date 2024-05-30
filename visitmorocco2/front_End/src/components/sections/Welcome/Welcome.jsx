import './Welcome.css'
import image1 from '../../../assets/images/Rectangle 60.png';

function welcome() {
  return (
    <div className="relative inline-block  ">
      <img src={image1} alt="Traveling made easy" className="w-full h-auto " />
      <p className=" w-full    absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-center">
        Traveling made easy with TravelTix
      </p>
    </div>
  )
}

export default welcome
