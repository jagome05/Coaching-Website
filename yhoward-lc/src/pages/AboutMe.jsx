import React from "react";

export default function AboutMe() {

  return (
    <>
      <div className="aboutme-container">
        <video autoPlay loop muted class="w-full">
          <source src='https://cdn.pixabay.com/video/2016/07/26/4006-176282263.mp4' type="video/mp4" />
        </video>
        <div className="h-1/2 w-1/3 relative">
          <img src="https://mail.google.com/mail/u/3?ui=2&ik=5c02df054d&attid=0.1&permmsgid=msg-f:1796438470750721999&th=18ee3b456df157cf&view=att&disp=safe&realattid=18ee3b41aa86c5c31642" />
          <h2>About Me</h2>
        </div>
      </div>
      <div className="aboutme-text">

        <p>Think of me as your trusted, perceptive partner in transformation. With over 25+ years of experience, I bring unique insights and expertise as a former:

          <li>Licensed Counselor: I offer a compassionate and understanding space to explore your emotions and heal from challenges.</li>
          <li>Educator: I am passionate about guiding you through self-discovery exercises and equipping you with tools for lasting change.</li>
          <li>Consultant: I utilize strategic thinking to help you create actionable plans and overcome obstacles, ensuring a smooth and empowering transition.</li>
          <li>‘Across the Country’ Resident: I have had the opportunity to call the East, Midwest, West, and Southwest (currently) my home.</li>

          <br></br>
        </p>
      </div>
      <br></br>
      <div className="aboutme-sign">
        <h1 class="text-center">"Insert Quote Here"</h1>
      </div>
    </>
  )
}

// ? ref
//https://stackoverflow.com/questions/59316293/how-to-position-text-over-top-an-image-like-this
//https://www.w3schools.com/howto/howto_css_image_text.asp
