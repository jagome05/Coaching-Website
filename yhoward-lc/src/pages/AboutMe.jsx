import React from "react";
import mergeVid from "../static/Merge videos project (1).mp4"
//TODO update styling for bullet points
import headshot from "../image/Yvonne headshot.jpg";

export default function AboutMe() {
  return (
    <>
      <div className="flex p-5 gap-2 font-basker">
        <img
          className="h-1/3 w-1/4 shadow-2xl"
          src="https://mail.google.com/mail/u/3?ui=2&ik=5c02df054d&attid=0.1&permmsgid=msg-f:1796438470750721999&th=18ee3b456df157cf&view=att&disp=safe&realattid=18ee3b41aa86c5c31642"
          alt=''
        />
        <div className="p-5 bg-white font-basker">
          <h2 className="text-5xl">About Me</h2>
          <h3 className="italic">“My 3Cs of Life:
            <br></br>
            <strong>C</strong>hoices, <strong>C</strong>onsequences, <strong>C</strong>oping
            <br></br>
            Life is about how well you Cope
            with the Consequences of your Choices. Let’s start making better choices.”</h3>
        </div>
      </div>

      <div className="flex bg-[#B7ADCF] p-5 border-2 border-black relative z-20">

        {/* <div className="flex flex-col gap-8 font-basker text-white absolute bg-transparent z-2 w-9/12 top-48 left-10"> */}
        {/* //TODo thonk about Breakpoints to min text */}

        <div className="basis-1/2 m-5 flex flex-col gap-8 font-basker bg-transparent">

          <h2 class="text-sm lg:text-3xl">
            Think of me as your trusted, perceptive partner in transformation. <strong>With over 25+ years of experience</strong>, I bring unique insights and expertise as a former:
          </h2>
          <h3 className="text-sm lg:text-3xl">
            <ul className="p-4">
              <strong>Licensed Counselor:</strong> I offer a compassionate and understanding
              space to explore your emotions and heal from challenges.
            </ul>
            <ul className="p-4">
              <strong>Educator:</strong> I am passionate about guiding you through self-discovery
              exercises and equipping you with tools for lasting change.
            </ul>
            <ul className="p-4">
              <strong>Consultant:</strong> I utilize strategic thinking to help you create
              actionable plans and overcome obstacles, ensuring a smooth and
              empowering transition.
            </ul>
            <ul className="p-4">
              <strong>‘Across the Country’ Resident: </strong> I have had the opportunity to call
              the East, Midwest, West, and Southwest (currently) my home.
            </ul>
          </h3>
          {/* //TODO Update button to go somewhere lol */}
          {/* <button className="">Learn More</button> */}
        </div>

        <div className="basis-1/2 z-20">
          <video autoPlay loop muted className="w-full">
            <source src={mergeVid} />
          </video>
        </div>

      </div>

      <div class="p-5 font-basker bg-white relative z-10">
        <h3 className="text-4xl">Why choose me as your guide?</h3>
        <br></br>

        <ul className="text-3xl">
          <strong>Purpose:</strong> I genuinely care about your story and success. This is not
          just a job; it’s my passion to see you thrive!
        </ul>
        <ul className="text-3xl">
          <strong>Proven results:</strong> I cultivate and empower individuals to triumph through
          challenging transitions, achieving personal and professional
          fulfillment.
        </ul>
        <ul className="text-3xl">
          <strong>Compassionate listening:</strong> I create a judgment-free space for you to
          share your hopes, fears, and questions without hesitation.
        </ul>
        <ul className="text-3xl">
          <strong>Tailored approach:</strong> I personalize my coaching to your unique needs,
          goals, and learning style.
        </ul>
        <ul className="text-3xl">
          <strong>Deeply inclusive:</strong> I hold a strong commitment to creating a safe and
          affirming space for all individuals, regardless of race, ethnicity,
          sexual orientation, or gender identity. I understand the nuances of
          BIPOC experiences and walk alongside you with cultural sensitivity,
          warmth, and unconditional regard.
        </ul>
      </div>
    </>
  );
}
