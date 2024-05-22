import React from "react";
import mergeVid from "../static/Merge videos project (1).mp4";
import headshot from "../image/Yvonne headshot.jpg";
import pendulum from "../image/pendulum.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="flex p-5 gap-5 font-basker">
        <img className="h-1/3 w-1/4 shadow-2xl" src={headshot} alt="headshot" />
        <div className="relative font-basker">
          <img className="absolute h-full" src={pendulum}></img>
          <div className="relative bg-white opacity-80 h-full w-11/12 p-5">
            <h2 className="text-5xl font-bold">About Me</h2>
            <br></br>
            <h2 className="italic">“My 3Cs of Life:</h2>
              
              <h1 className="italic"><strong>C</strong>oping, <strong>C</strong>onsequences, <strong>C</strong>hoices</h1>
              <br></br>
              <h2 className="italic">
              Life is about how well you <strong>Cope</strong> with the <strong>Consequences</strong>of your <strong>Choices</strong>. Let’s start making better choices.”</h2>
              <br></br>
              <br></br>
              <h1> - Yvonne Howard</h1>
          </div>
        </div>
      </div>

      <div className="flex bg-[#B7ADCF] border-2 border-black relative z-20">
        {/* //TODo thonk about Breakpoints to min text */}

        <div className="basis-1/2 flex flex-col font-basker bg-transparent">

          <h2 class="text-sm lg:text-2xl p-5">
            Think of me as your trusted, perceptive partner in transformation. <strong>With over 25+ years of experience</strong>, I bring unique insights and expertise as a former:
          </h2>
          <h3 className="text-sm lg:text-xl px-5">
            <ul className="">
              <strong>Licensed Counselor:</strong> I offer a compassionate and understanding
              space to explore your emotions and heal from challenges.
            </ul>
            <ul className="">
              <strong>Educator:</strong> I am passionate about guiding you through self-discovery
              exercises and equipping you with tools for lasting change.
            </ul>
            <ul className="">
              <strong>Consultant:</strong> I utilize strategic thinking to help you create
              actionable plans and overcome obstacles, ensuring a smooth and
              empowering transition.
            </ul>
            <ul className="">
              <strong>‘Across the Country’ Resident: </strong> I have had the opportunity to call
              the East, Midwest, West, and Southwest (currently) my home.
            </ul>
          </h3>
        </div>

        <div className="basis-1/2 z-20 border-black border-x-2">
          <video autoPlay loop muted className="w-full">
            <source src={mergeVid} />
          </video>
        </div>
      </div>

      <div class="p-5 font-basker bg-white relative z-10">
        <h3 className="text-4xl">Why choose me as your guide?</h3>
        <br></br>

        <ul className="text-2xl">
          <strong>Purpose:</strong> I genuinely care about your story and
          success. This is not just a job; it’s my passion to see you thrive!
        </ul>
        <ul className="text-2xl">
          <strong>Proven results:</strong> I cultivate and empower individuals
          to triumph through challenging transitions, achieving personal and
          professional fulfillment.
        </ul>
        <ul className="text-2xl">
          <strong>Compassionate listening:</strong> I create a judgment-free
          space for you to share your hopes, fears, and questions without
          hesitation.
        </ul>
        <ul className="text-2xl">
          <strong>Tailored approach:</strong> I personalize my coaching to your
          unique needs, goals, and learning style.
        </ul>
        <ul className="text-2xl">
          <strong>Deeply inclusive:</strong> I hold a strong commitment to
          creating a safe and affirming space for all individuals, regardless of
          race, ethnicity, sexual orientation, or gender identity. I understand
          the nuances of BIPOC experiences and walk alongside you with cultural
          sensitivity, warmth, and unconditional regard.
        </ul>
      </div>
    </>
  );
}
