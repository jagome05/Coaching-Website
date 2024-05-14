import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 font-basker text-white absolute bg-transparent z-2 w-11/12 md:w-9/12 top-40 md:top-56 left-4 md:left-10">
        <h1 className="font-bold text-2xl md:text-4xl">
          Welcome to Timeless Coaching & Consulting
        </h1>
        <h2 className="text-lg md:text-2xl">
          Live Your Purpose Through{" "}
          <span className="italic">Transformative Change</span>
        </h2>
        <h2 className="italic text-lg md:text-2xl">
          Embarking on a new chapter can be exciting and daunting.{" "}
        </h2>
        <h3 className="text-base md:text-xl">
          I’m Yvonne Howard of Verve &amp; Veritas Coaching and if you are
          feeling lost, uncertain, or ready to unlock your full potential,
          I&#39;d love to be your supportive guide on this wondrous journey.
          Whether you are navigating a career change, retirement, relationship
          dissatisfaction, divorce, empty nest, caregiving stressors,
          grief/loss, or relocation - I&#39;m here to help de-construct your
          barriers and move forward with clarity, confidence, and joy.
        </h3>
        <button className="bg-blue-500 text-white py-2 w-1/5 rounded-md">
          Learn More
        </button>
      </div>

      <br></br>

      <div className="text-center p-5">
        <h1 className="text-3xl md:text-4xl">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-10">
          <div className="border-4 rounded-lg border-black shadow-2xl p-4">
            <h1 className="bg-red-400 border-b-2 p-4 border-black text-xl md:text-2xl">
              Transition Coach
            </h1>
            <p className="text-base md:text-lg p-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos pariatur ullam quidem dolorem maiores illum quisquam
              assumenda neque, iure similique nulla maxime quae unde, placeat
              commodi, minus fuga!
            </p>
          </div>

          <div className="border-4 rounded-lg border-black shadow-2xl p-4">
            <h1 className="bg-blue-400 border-b-2 p-4 border-black text-xl md:text-2xl">
              Group Counseling
            </h1>
            <p className="text-base md:text-lg p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam
              consequatur quis.
            </p>
          </div>

          <div className="border-4 rounded-lg border-black shadow-2xl p-4">
            <h1 className="bg-green-400 border-b-2 p-4 border-black text-xl md:text-2xl">
              Adoptee
            </h1>
            <p className="text-base md:text-lg p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quas esse praesentium ipsa, id quia.
            </p>
          </div>
        </div>
      </div>

      <br></br>

      <div className="p-5 relative top-10 md:top-20 font-basker text-center">
        <h3 className="p-5">
          <strong className="text-3xl md:text-5xl">Let’s chat!</strong>
        </h3>
        <h2 className="text-base md:text-lg">
          Schedule a complimentary session or call
          <strong> Update Phone Number</strong> to share your story, explore
          your goals, and see if we’re a good fit for this adventure together.
          Remember, you are not alone on this journey. Let's transform together.
        </h2>
        <br></br>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-lg md:text-2xl">
          Book Now!
        </button>
        <br></br>
        <p className="text-base md:text-lg">
          <strong>
            Yvonne Transformative Transition Coach & Thought Partner
          </strong>
        </p>
      </div>
    </>
  );
}
