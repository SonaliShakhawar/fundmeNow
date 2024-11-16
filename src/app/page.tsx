import Footer from "@/components/Footer";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";



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
      <h1 className="text-6xl font-bold mt-4">
        Fund your<br />
        creative work
      </h1>
      <h2 className="mt-4 mb-8">
        Accept support for your work.<br />
        It's easier than you think.
      </h2>
      <button className="bg-yellow-300 px-8 py-4 font-bold rounded-full">
        Start my page
      </button>
</div>
      {/* Slider Section */}
      <section className="relative mb-4 bg-gray-100 p-8">
        <div className="max-w-full mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Browse by Category</h2>
          <p className="text-gray-800 mb-8">Find the cause you are looking for by category</p>

          <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
            {/* Category Cards */}
            <div className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image src="/path/to/competition.jpg" alt="Competitions" width={350} height={200} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Competitions</h3>
                <p className="text-gray-500">(10)</p>
              </div>
            </div>

            <div className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image src="/path/to/covid.jpg" alt="COVID-19" width={350} height={200} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">COVID-19</h3>
                <p className="text-gray-500">(2)</p>
              </div>
            </div>

            <div className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image src="/path/to/creative.jpg" alt="Creative" width={350} height={200} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Creative</h3>
                <p className="text-gray-500">(15)</p>
              </div>
            </div>

            <div className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image src="/path/to/creative.jpg" alt="Creative" width={350} height={200} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Creative</h3>
                <p className="text-gray-500">(15)</p>
              </div>
            </div>

            <div className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image src="/path/to/creative.jpg" alt="Creative" width={350} height={200} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Creative</h3>
                <p className="text-gray-500">(15)</p>
              </div>
            </div>

            <div className="min-w-[300px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
              <Image src="/path/to/education.jpg" alt="Education" width={350} height={200} className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                <p className="text-gray-500">(21)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </section>
    
  );
}
