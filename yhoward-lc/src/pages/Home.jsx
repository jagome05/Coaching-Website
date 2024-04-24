import React from "react";
import HomeServices from "../components/HomeServices"
import { Button } from "reactstrap";

export default function Home() {


  return (
    <>
      {/* <div class="relative h-screen"> */}
      <div class="relative bottom-20">
        {/* <video autoPlay loop muted class="absolute bottom-0 w-auto min-w-full min-h-full"> */}
        <video autoPlay loop muted class="brightness-75">
          <source src='https://cdn.pixabay.com/video/2020/12/15/59291-492700392_large.mp4' />
        </video>
        {/* <div className="flex flex-col gap-8 text-white bg-transparent relative z-2 w-9/12 top-64 left-28"> */}
        <div className="flex flex-col gap-8 font-basker text-white absolute bg-transparent z-2 w-9/12 top-48 left-10">
          <h1 class="font-bold">Welcome to Verve and Veritas Coaching</h1>
          <h2 class="">Live Your Purpose Through <span class="italic">Transformative Change</span></h2>
          <h2 class="italic">Embarking on a new chapter can be exciting and daunting. </h2>
          <h3>
            I’m Yvonne Howard of Verve &amp;
            Veritas Coaching and if you are feeling lost, uncertain, or ready to unlock your full potential, I&#39;d
            love to be your supportive guide on this wondrous journey.
            Whether you are navigating a career change, retirement, relationship dissatisfaction, divorce,
            empty nest, caregiving stressors, grief/loss, or relocation - I&#39;m here to help de-construct your
            barriers and move forward with clarity, confidence, and joy.
          </h3>
          <button>Learn More</button>
        </div>
        <br></br>
        <div class="bg-transparent font-basker text-center text-2xl">
          <h2>Do these questions sound familiar?</h2>
          <br></br>
          <div class="grid grid-cols-2 gap-20">
            <div>
              <ul>
                <li>What happened to my dreams of…?</li>
                <li>Is this all there is for me…?</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Who was I before I was married? Had children? Became a caregiver?</li>
                <li>Why am I spending my time doing more things that I dislike than I enjoy?</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>If I had the chance to change my life’s direction, I would…?/</li>
                <li>When will it be my time to lead?</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>How can I reclaim my life?</li>
                <li>What happened to my courage?  My desire for more?</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Why does success continually elude me?</li>
                <li>How can my relationship be resuscitated?</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>What options can I create to retire?</li>
                <li>What will my life look like when I retire?</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>How do I re-invent myself?</li>
                <li> How can I bring more joy into my life?</li>
              </ul>
            </div>
          </div>
          <br></br>
          <h3>
            Let’s chat!  Schedule a complimentary session or call 309-648-0551 to share your story, explore your goals, and see if we’re a good fit for this adventure together.
            Remember, you are not alone on this journey. Let's transform together.
            </h3>
            <br></br>
            <h3 class="italic">
            With Grace, Gratitude, and Goodness,
            Yvonne
            Transformative Transition Coach & Thought Partner
              </h3>
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