import React from "react";
import Header from "../components/Header";
import heroVid from "../static/Merge videos project (1).mp4"

export default function Home() {

  return (
    <>
    //TODO update John's header styles
      <Header
        style={
          "relative bottom-20 flex flex-row justify-end items-center gap-4 px-2 bg-[rgb(235, 246, 255), 0] z-2"
        }
      />
      <div class="relative bottom-48">
        {/* <video autoPlay loop muted class="absolute bottom-0 w-auto min-w-full min-h-full"> */}
        <video autoPlay loop muted class="brightness-75">
          <source src="https://cdn.pixabay.com/video/2024/02/02/199001-909564581_large.mp4" />
        </video>
        {/* <div className="flex flex-col gap-8 text-white bg-transparent relative z-2 w-9/12 top-64 left-28"> */}
        {/* //TODo thonk about Breakpoints to min text */}
        <div className="flex flex-col gap-8 font-basker text-white absolute bg-transparent z-2 w-9/12 top-48 left-10">
          <h1 class="font-bold text-sm lg:text-5xl">Welcome to Timeless Life Coaching LCC</h1>
          <h2 class="text-sm lg:text-3xl">
            Live Your Purpose Through{" "}
            <span class="italic">Transformative Change</span>
          </h2>
          <h2 class="italic text-sm lg:text-3xl">
            Embarking on a new chapter can be exciting and daunting.{" "}
          </h2>
          <h3 className="text-sm lg:text-3xl">
            I’m Yvonne Howard of Timeless Life Coaching and if you are
            feeling lost, uncertain, or ready to unlock your full potential,
            I&#39;d love to be your supportive guide on this wondrous journey.
            Whether you are navigating a career change, retirement, relationship
            dissatisfaction, divorce, empty nest, caregiving stressors,
            grief/loss, or relocation - I&#39;m here to help de-construct your
            barriers and move forward with clarity, confidence, and joy.
          </h3>

        </div>

        <br></br>

        <div className="text-center p-5">
          <h1 className="">Services</h1>
          <div className="grid grid-cols-2 p-5 gap-10">

            <div className="border-4 rounded-lg border-black shadow-2xl bg-white z-20">
              <h1 class="bg-red-400 border-b-2 p-4 border-black">Transition Coach</h1>
              <p className="text-4xl p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos pariatur ullam quidem dolorem maiores illum quisquam assumenda neque, iure similique nulla maxime quae unde, placeat commodi, minus fuga! Corrupti cumque voluptates nihil eaque, dolorum beatae vel. Dolor vitae eius minus libero cupiditate natus tenetur obcaecati? Ea debitis perspiciatis dignissimos non?</p>
            </div>

            <div className="border-4 rounded-lg border-black shadow-2xl bg-white z-20">
              <h1 class="bg-green-400 border-b-2 p-4 border-black">Adoptee</h1>
              <p className="text-4xl p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quas esse praesentium ipsa, id quia, eos corporis, dolore aspernatur nisi deserunt laudantium maxime minima ea quos commodi enim voluptates sint illum amet consequatur perspiciatis. Suscipit porro ratione magni aspernatur ipsam sit explicabo voluptas, qui quisquam quia id, fugiat quod nam, numquam provident tempore consectetur est. Alias quia dicta fuga, nemo, repudiandae maiores exercitationem modi saepe deserunt soluta repellendus, facere accusamus atque incidunt corporis dolore reiciendis.</p>
            </div>

          </div>
        </div>

        <br></br>

        <div className="p-5 relative font-basker text-center z-10 bg-white">
          <h3 className="p-5">
            <strong className="text-5xl">Let’s chat!</strong>
          </h3>
          <h2>
            Schedule a complimentary session or call
            <strong> 214-289-5599</strong> to share your story, explore your
            goals, and see if we’re a good fit for this adventure together.
            Remember, you are not alone on this journey. Let's transform
            together.
          </h2>
          <br></br>
          {/* //TODO update button to go somewhere */}
          <h1 class="text-4xl">Book Now!</h1>
          <br></br>
          <p><strong>Yvonne Is Your Transformative Transition Coach & Thought Partner</strong></p>
        </div>

      </div>
    </>
  );
}
