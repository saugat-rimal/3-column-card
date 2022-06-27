import sedan from "./images/icon-sedans.svg";
import suv from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

export default function Card() {
  return (
    <div className="container mx-auto  flex justify-center items-center">
      <section>
        <div className=" flex flex-shrink-0 flex-wrap  flex-col lg:flex-row rounded-lg mx-3 ">
          {/* Card 1 here  */}
          <div className="flex rounded-tr-lg  rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg  flex-col max-w-xs p-12 gap-9 text-white bg-[#E38826]  ">
            <div>
              <img src={sedan} alt="" className="" />
            </div>
            <h2 className="topic uppercase text-4xl">Sedans</h2>
            <p>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>

            <button className="bg-white rounded-full p-3 w-36 drop-shadow-md hover:shadow-lg ease-out hover:translate-y-1 text-[#E38826] mt-11 transition-all">
              Learn More
            </button>
          </div>
          {/* Card 2 here  */}
          <div className="flex flex-col max-w-xs p-12 gap-9 text-white bg-[#006970]  ">
            <div>
              <img src={suv} alt="" className="" />
            </div>
            <h2 className="topic uppercase text-4xl">SUVs</h2>
            <p>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>

            <button className="bg-white rounded-full p-3 w-36 drop-shadow-md hover:shadow-lg ease-out hover:translate-y-1 text-[#006970] mt-11 transition-all">
              Learn More
            </button>
          </div>
          {/* Card 3 here  */}
          <div className="flex flex-col max-w-xs p-12 gap-9 text-white bg-[#004241] rounded-b-lg lg:rounded-b-none  lg:rounded-r-lg ">
            <div>
              <img src={luxury} alt="" className="" />
            </div>
            <h2 className="topic uppercase text-4xl">Luxury</h2>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>

            <button className="bg-white rounded-full p-3 w-36 drop-shadow-md hover:shadow-lg ease-out hover:translate-y-1 text-[#004241] mt-11 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
