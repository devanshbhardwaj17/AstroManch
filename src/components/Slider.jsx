  import { useState } from "react";

  function Star({ filled }) {
    return (
      <span className={filled ? "text-yellow-400 text-2xl" : "text-gray-300 text-2xl"}>
        ★
      </span>
    );
  }

  export default function Slider() {
    const reviews = [
      {
        id: 1,
        name: "Jay Kishan Mishra",
        review: "Amazing service! I will definitely recommend this to my friends.",
        rating:4,
        city:"Soron"
      },
      {
        id: 2,
        name: "Rajat",
        review: "Very professional and friendly staff. I’m impressed!",
        rating:5,
        city:"Kasganj"
        
      },
      {
        id: 3,
        name: "Uday Kumar",
        review: "The product quality was beyond my expectations. Excellent!",
        rating:2,
        city:"Etah"
      },
      {
        id: 4,
        name: "Shivam",
        review: "Fast delivery and great packaging. Loved the experience!",
        rating:3,
        city:"Alighar"
      },
      {
        id: 5,
        name: "Madhav",
        review: "Best purchase I have made this year. Worth every penny!",
        rating:4,
        city:"Surat"
      },
      {
        id: 6,
        name: "Kavita",
        review: "Customer support was very helpful and responsive.",
        rating:2,
        city:"Mumbai"
      },
      {
        id: 7,
        name: "Udit Saxena",
        review: "User-friendly website and smooth checkout process.",
        rating:3,
        city:"Otty"
      },
      {
        id: 8,
        name: "Vishal Yadv",
        review: "Fantastic experience! Everything was exactly as described.",
        rating:2,
        city:"Bhalpur"
      },
      {
        id: 9,
        name: "Bhawna",
        review: "Very satisfied. I will be buying again soon.",
        rating:4,
        city:"Amritsar"
      },
      {
        id: 10,
        name: "Arundhati Sharma",
        review: "Absolutely loved it! Highly recommended to everyone.",
        rating:2,
        city:"Bhopal"
      },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };
    return (
      <div className="flex flex-col items-center justify-start p-4">
        {/* Slider Container */}
        <div className=" w-[320px] h-[450px] bg-white flex overflow-hidden rounded-2xl shadow-xl border-gray-500 border-2 ">
          <div className=" h-full w-full flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 320}px)`,}}
          >
            {reviews.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[320px] p-2"
              >
                <div className=" h-[50%] flex justify-center items-center">
                  <div className=" h-[85%] w-[55%] rounded-md border-black border-2 overflow-hidden"></div>
                </div>
                <p className=" text-red-600 font-bold font-sans text-center text-xl">{item.name}</p>
                <p className=" text-sm text-gray-600 text-center font-[Cursive]">From : {item.city}</p>
                <p className=" text-xl underline font-bold">Review</p>
                <p>{item.review}</p>
                <p className=" text-xl underline font-bold mt-2">Rating:</p>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} filled={i < item.rating} />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-900"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-900"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
