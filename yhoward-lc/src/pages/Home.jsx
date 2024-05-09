import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 font-basker text-white absolute bg-transparent z-2 w-9/12 top-48 left-10">
        <h1 class="font-bold">Welcome to Verve and Veritas Coaching</h1>
        <h2 class="">
          Live Your Purpose Through{" "}
          <span class="italic">Transformative Change</span>
        </h2>
        <h2 class="italic">
          Embarking on a new chapter can be exciting and daunting.{" "}
        </h2>
        <h3>
          I’m Yvonne Howard of Verve &amp; Veritas Coaching and if you are
          feeling lost, uncertain, or ready to unlock your full potential,
          I&#39;d love to be your supportive guide on this wondrous journey.
          Whether you are navigating a career change, retirement, relationship
          dissatisfaction, divorce, empty nest, caregiving stressors,
          grief/loss, or relocation - I&#39;m here to help de-construct your
          barriers and move forward with clarity, confidence, and joy.
        </h3>
        <button>Learn More</button>
      </div>
      <br></br>

      <div className="text-center p-5">
        <h1 className="">Services</h1>
        <div className="grid grid-cols-2 p-5 gap-10">
          <div className="border-4 rounded-lg border-black shadow-2xl">
            <h1 class="bg-red-400 border-b-2 p-4 border-black">
              Transition Coach
            </h1>
            <p className="text-4xl p-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos pariatur ullam quidem dolorem maiores illum quisquam
              assumenda neque, iure similique nulla maxime quae unde, placeat
              commodi, minus fuga! Corrupti cumque voluptates nihil eaque,
              dolorum beatae vel. Dolor vitae eius minus libero cupiditate natus
              tenetur obcaecati? Ea debitis perspiciatis dignissimos non?
            </p>
          </div>

          <div className="border-4 rounded-lg border-black shadow-2xl">
            <h1 class="bg-blue-400 border-b-2 p-4 border-black">
              Group Counseling
            </h1>
            <p className="text-4xl p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam
              consequatur quis. Necessitatibus ea sunt cum recusandae, iure quo
              fugit ipsam dolorum alias obcaecati saepe molestiae sed minus
              accusamus qui itaque non cupiditate animi ad asperiores nihil
              ducimus error perferendis. Similique cum, quae cumque eligendi
              autem error cupiditate! Fuga, quis.
            </p>
          </div>

          <div className="border-4 rounded-lg border-black shadow-2xl">
            <h1 class="bg-green-400 border-b-2 p-4 border-black">Adoptee</h1>
            <p className="text-4xl p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quas esse praesentium ipsa, id quia, eos corporis, dolore
              aspernatur nisi deserunt laudantium maxime minima ea quos commodi
              enim voluptates sint illum amet consequatur perspiciatis. Suscipit
              porro ratione magni aspernatur ipsam sit explicabo voluptas, qui
              quisquam quia id, fugiat quod nam, numquam provident tempore
              consectetur est. Alias quia dicta fuga, nemo, repudiandae maiores
              exercitationem modi saepe deserunt soluta repellendus, facere
              accusamus atque incidunt corporis dolore reiciendis.
            </p>
          </div>
        </div>
      </div>

      <br></br>

      <div className="p-5 relative top-20 font-basker text-center">
        <h3 className="p-5">
          <strong className="text-5xl">Let’s chat!</strong>
        </h3>
        <h2>
          Schedule a complimentary session or call
          <strong> Update Phone Number</strong> to share your story, explore
          your goals, and see if we’re a good fit for this adventure together.
          Remember, you are not alone on this journey. Let's transform together.
        </h2>
        <br></br>
        {/* //TODO update button to go somewhere */}
        <button class="text-4xl">Book Now!</button>
        <br></br>
        <p>
          <strong>
            Yvonne Transformative Transition Coach & Thought Partner
          </strong>
        </p>
      </div>
    </>
  );
}
