import React from "react";
import headshot from "../image/Yvonne headshot.jpg";

export default function AboutMe() {
  return (
    <>
      <div class="p-5">
        <video autoPlay loop muted className="w-full h-auto">
          <source
            src="https://cdn.pixabay.com/video/2016/07/26/4006-176282263.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-28 left-5 right-5 md:left-20 md:right-20 bg-white bg-opacity-90 p-5">
          <div className="flex flex-col md:flex-row md:gap-5">
            <img
              className="h-64 w-1/3 self-center rounded-md shadow-lg"
              src={headshot}
              alt="Yvonne Headshot"
            />
            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <p className="text-xl">
                Think of me as your trusted, perceptive partner in
                transformation. With over 25+ years of experience, I bring
                unique insights and expertise as a former:
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>
                  <strong>Licensed Counselor:</strong> I offer a compassionate
                  and understanding space to explore your emotions and heal from
                  challenges.
                </li>
                <li>
                  <strong>Educator:</strong> I am passionate about guiding you
                  through self-discovery exercises and equipping you with tools
                  for lasting change.
                </li>
                <li>
                  <strong>Consultant:</strong> I utilize strategic thinking to
                  help you create actionable plans and overcome obstacles,
                  ensuring a smooth and empowering transition.
                </li>
                <li>
                  <strong>‘Across the Country’ Resident:</strong> I have had the
                  opportunity to call the East, Midwest, West, and Southwest
                  (currently) my home.
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-3xl font-bold mt-6">
            Why choose me as your guide?
          </h3>
          <ul className="list-disc pl-8 space-y-2 text-xl mt-4">
            <li>
              <strong>Purpose:</strong> I genuinely care about your story and
              success. This is not just a job; it’s my passion to see you
              thrive!
            </li>
            <li>
              <strong>Proven results:</strong> I cultivate and empower
              individuals to triumph through challenging transitions, achieving
              personal and professional fulfillment.
            </li>
            <li>
              <strong>Compassionate listening:</strong> I create a judgment-free
              space for you to share your hopes, fears, and questions without
              hesitation.
            </li>
            <li>
              <strong>Tailored approach:</strong> I personalize my coaching to
              your unique needs, goals, and learning style.
            </li>
            <li>
              <strong>Deeply inclusive:</strong> I hold a strong commitment to
              creating a safe and affirming space for all individuals,
              regardless of race, ethnicity, sexual orientation, or gender
              identity. I understand the nuances of BIPOC experiences and walk
              alongside you with cultural sensitivity, warmth, and unconditional
              regard.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
