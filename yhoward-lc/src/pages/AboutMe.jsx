import React from "react";

export default function AboutMe() {
  return (
    <>
      <div class="">
        <video autoPlay loop muted class="w-full">
          <source src='https://cdn.pixabay.com/video/2016/07/26/4006-176282263.mp4' type="video/mp4" />
        </video>

      </div>
      <div class="flex p-5 absolute top-20 gap-2">
        <img class="h-1/2 w-1/3" src="https://mail.google.com/mail/u/3?ui=2&ik=5c02df054d&attid=0.1&permmsgid=msg-f:1796438470750721999&th=18ee3b456df157cf&view=att&disp=safe&realattid=18ee3b41aa86c5c31642" />
        <div class="p-5 bg-white opacity-90">
          <h2>About Me</h2>
          <p>Think of me as your trusted, perceptive partner in transformation. With over 25+ years of experience, I bring unique insights and expertise as a former:
            <ul>Licensed Counselor: I offer a compassionate and understanding space to explore your emotions and heal from challenges.</ul>
            <ul>Educator: I am passionate about guiding you through self-discovery exercises and equipping you with tools for lasting change.</ul>
            <ul>Consultant: I utilize strategic thinking to help you create actionable plans and overcome obstacles, ensuring a smooth and empowering transition.</ul>
            <ul>‘Across the Country’ Resident: I have had the opportunity to call the East, Midwest, West, and Southwest (currently) my home.</ul>
          </p>
        </div>
      </div>

      <div class="p-5">
        <h3>Why choose me as your guide?</h3>

        <ul>Purpose:  I genuinely care about your story and success. This is not just a job; it’s my passion to see you thrive!</ul>
        <ul>Proven results: I cultivate and empower individuals to triumph through challenging transitions, achieving personal and professional fulfillment.</ul>
        <ul>Compassionate listening: I create a judgment-free space for you to share your hopes, fears, and questions without hesitation.</ul>
        <ul>Tailored approach: I personalize my coaching to your unique needs, goals, and learning style.</ul>
        <ul>Deeply inclusive: I hold a strong commitment to creating a safe and affirming space for all individuals, regardless of race, ethnicity, sexual orientation, or gender identity. I understand the nuances of BIPOC experiences and walk alongside you with cultural sensitivity, warmth, and unconditional regard.</ul>
      </div>

      <div className="">
        <h1 class="text-center">
          With Grace, Gratitude, and Goodness,
          Yvonne
          Transformative Transition Coach & Thought Partner</h1>
      </div>
    </>
  )
}

// ? ref
//https://stackoverflow.com/questions/59316293/how-to-position-text-over-top-an-image-like-this
//https://www.w3schools.com/howto/howto_css_image_text.asp
