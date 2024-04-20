import React from "react";
import HomeServices from "../components/HomeServices"
import { Button } from "reactstrap";

export default function Home() {


  return (
    <>
      <div class="relative h-screen">
        <video autoPlay loop muted class="absolute bottom-0 w-auto min-w-full min-h-full">
          <source src='https://cdn.pixabay.com/video/2020/12/15/59291-492700392_large.mp4' />
        </video>
          {/* <img className="home-top-img" src="https://picsum.photos/500/500" /> */}
          <div className="home-top-text">
            <h1 class="font-basker">Welcome to Verve and Veritas Coaching!</h1>
            <p>Embarking on a new chapter can be exciting and daunting. I’m Yvonne Howard of Verve &amp;
              Veritas Coaching and if you are feeling lost, uncertain, or ready to unlock your full potential, I&#39;d
              love to be your supportive guide on this wondrous journey.
              Whether you are navigating a career change, retirement, relationship dissatisfaction, divorce,
              empty nest, caregiving stressors, grief/loss, or relocation - I&#39;m here to help de-construct your
              barriers and move forward with clarity, confidence, and joy.</p>
          </div>
      </div>
      {/* <div class="">
        <h2>Services</h2>
        <div className="home-services-main">
          <h2 className="home-services-text">these are the services I provided</h2>
          <HomeServices />
        </div>
      </div> */}
    </>
  )
}