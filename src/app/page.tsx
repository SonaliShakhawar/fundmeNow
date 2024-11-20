import Footer from "@/components/Footer";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "@/components/Slider";
import Brands from "@/components/Brands";


export default function Home() {
  return (
    <section className="">
      
      <div className="max-w-lg mx-auto text-center mt-4">
      <div className="text-gray-600 ">
        <p>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </p>
        <p className="mt-2">Loved by 100,000+ creators</p>
      </div>
      <h1 className="text-4xl font-bold mt-4">  
Discover alternate <br />
        investment opportunities
      </h1>
      <h2 className="text-xl mt-4 mb-8">
        
Be a part of the world's <br />
        most ambitious ventures
      </h2>
      <button className="bg-yellow-300 px-8 py-4 font-bold rounded-full">
        Start investing
      </button>
</div>


      <Slider/>
      <Brands/>
      <Footer/>
    </section>
    
  );
}
