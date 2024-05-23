import React from "react";
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import butterfly from "../image/butterflies.jpg";

export default function Home() {
  return (
    <>
      <div className="p-5 flex flex-col gap-8 font-basker text-white absolute bg-transparent z-2 w-11/12 md:w-9/12 top-40 md:top-56 left-4 md:left-10">
        <h1 className="font-bold text-2xl lg:text-4xl">
          Welcome to Timeless Coaching & Consulting
        </h1>
        <h2 className="text-lg lg:text-2xl">
          Live Your Purpose Through{" "}
          <span className="italic">Transformative Change</span>
        </h2>
        <h2 className="italic text-lg lg:text-2xl">
          Embarking on a new chapter can be exciting and daunting.{" "}
        </h2>
        <h3 className="text-base lg:text-2xl">
          I’m Yvonne Howard of Verve &amp; Veritas Coaching and if you are
          feeling lost, uncertain, or ready to unlock your full potential,
          I&#39;d love to be your supportive guide on this wondrous journey.
          Whether you are navigating a career change, retirement, relationship
          dissatisfaction, divorce, empty nest, caregiving stressors,
          grief/loss, or relocation - I&#39;m here to help de-construct your
          barriers and move forward with clarity, confidence, and joy.
        </h3>
      </div>

      <br></br>

      <div className="text-center p-5 font-basker relative bottom-40">

        <h1 className="text-3xl md:text-6xl py-5 relative font-bold">Services</h1>

        <div className="flex gap-20 relative overflow-hidden">
          <img src={butterfly} className="absolute w-full"></img>

          <div className="basis-1/2 border-4 rounded-lg border-black shadow-2xl z-20 bg-white opacity-90">
            <h1 className="bg-blue-400 border-b-2 p-4 border-black text-xl md:text-3xl font-bold">
              Transitioning Services
            </h1>
            <article className="text-base md:text-xl p-5">
              <p>
                People 35 years and older may face a unique set of challenges as
                they navigate through midlife and plans for retirement.
              </p>
              <br></br>
              <p className="italic">
                Have you experienced the sweet taste of success only to have it
                replaced by a lack of growth opportunities and/or complacency?
              </p>
              <br></br>
              <p className="italic">
                Do you feel pulled in too many directions?
              </p>
              <br></br>
              <p className="italic">
                Is the life you are living, the life you want?
              </p>
              <br></br>
              <p>
                When you are ready to leave your daily monotony of existence, I
                will help guide you to recognize the untapped opportunities and
                gifts needed to break through and break free!
              </p>
            </article>
          </div>

          <div className="basis-1/2 border-4 rounded-lg border-black shadow-2xl z-20 bg-white opacity-90">
            <h1 className="bg-blue-400 border-b-2 p-4 border-black text-xl md:text-3xl font-bold">
              Talking About Adoption
            </h1>
            <article className="text-base md:text-xl p-5">
              <p>
                Adoption is often considered a gift – for both the adoptee and
                the adoptive parents.
              </p>
              <p>
                Yet many times the adoptee is left with a multitude of
                unresolved thoughts and beliefs.
              </p>
              <p>
                Are you considering seeking out your birth parents? Concerned
                about the potential blowback from both adoptive and birth
                families if you do?
              </p>
              <p>
                Are you a transracial or biracial adoptee who has had to grapple
                with living life between two or more worlds?
              </p>
              As a biracial adoptee from a closed adoption, come and be present
              in my safe place.
              <p>
                I can be a thought and a heart partner for you, as you find your
                sense of wholeness, belonging, and inner peace.
              </p>
            </article>
          </div>
        </div>
      </div>

      <br></br>

      <div className="font-basker p-5 relative bottom-20">
        <Testimonials 
        name="Danyelle"
         caption="Yvonne is such a delight to work with as a coach! Her keen listening skills andremarkable ability to reflect back enrich our coaching sessions tremendously. What I love about Yvonne is her ability to ask probing questions which facilitate newperceptions allowing me to uncover hidden answers. Exemplifying compassion and aprofound orientation towards people, Yvonne is remarkable in her &#39;3G&#39; approach: Grace,Gratitude, and Goodness. In my opinion, her unique style and passion particularly resonate with the BIPOCcommunities. I highly recommend Yvonne: a masterful coach whose heart creates aspace for exceptional personal growth and discovery. She's a difference-maker; your journey with her will be transformative!"
         quote="”You can, you should, and if you’re brave enough to start, you will.”"
        quoteName="- Stephen King"
        />
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
          Remember, you are not alone on this journey. Let's transform together.
        </h2>
        <br></br>
        {/* //TODO update button to go somewhere */}
        <h1 class="text-4xl">Book Now!</h1>
        <br></br>
        <p>
          <strong>
            Yvonne Is Your Transformative Transition Coach & Thought Partner
          </strong>
        </p>
      </div>

      <div></div>
    </>
  );
}
