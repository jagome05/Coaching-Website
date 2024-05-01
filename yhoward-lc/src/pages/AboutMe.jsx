import React from "react";

export default function AboutMe() {
  return (
    <>
      <div>
        <video autoPlay loop muted className="w-full">
          <source
            src="https://cdn.pixabay.com/video/2016/07/26/4006-176282263.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="flex p-5 absolute top-20 gap-2">
        <img
          className="h-1/2 w-1/3 shadow-2xl"
          src="https://mail.google.com/mail/u/3?ui=2&ik=5c02df054d&attid=0.1&permmsgid=msg-f:1796438470750721999&th=18ee3b456df157cf&view=att&disp=safe&realattid=18ee3b41aa86c5c31642"
          alt=''
        />
        <div className="p-5 bg-white opacity-90 font-basker shadow-2xl">
          <h2 className="text-5xl">About Me</h2>
          <br></br>
          <p className="text-2xl">
            Think of me as your trusted, perceptive partner in transformation.
            With over 25+ years of experience, I bring unique insights and
            expertise as a former:
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
          </p>
        </div>
      </div>

      <div class="p-5 font-basker">
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

// ? ref
//https://stackoverflow.com/questions/59316293/how-to-position-text-over-top-an-image-like-this
//https://www.w3schools.com/howto/howto_css_image_text.asp
