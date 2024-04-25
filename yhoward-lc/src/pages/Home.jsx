import React from "react";
<<<<<<< HEAD
import HomeServices from "../components/HomeService";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <>
      <div className="home-top">
        <h2>Home</h2>
        <div className="home-top-bg"></div>
        <img className="home-top-img" src="https://picsum.photos/500/400" />
        <div className="home-top-text">
          <h1>Welcome to my HomePage!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            veniam libero a expedita sapiente, excepturi numquam similique
            ducimus culpa dolorem nulla voluptatem animi atque illo aliquid
            tempora iure eos, consectetur architecto modi nemo? At aut, modi ut
            eveniet, natus temporibus minus totam fugiat quia quasi repudiandae,
            deserunt rem numquam. Pariatur nesciunt in aperiam adipisci corrupti
            vel debitis molestias rerum, perspiciatis delectus quisquam alias
            nulla quia dolor sed cum. Sint amet eaque repellendus nam, eos iure
            error quaerat excepturi temporibus quia! Ducimus mollitia
            repellendus odio debitis assumenda ipsam temporibus, voluptas,
            repellat iure amet officiis possimus sit eum expedita veniam magni!
            Quae.
          </p>
          <Button color="primary">Book Now!</Button>
        </div>
        <video autoPlay loop muted className="home-top-gif">
          <source
            src="https://cdn.pixabay.com/video/2022/02/21/108480-680697634_large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="home-services">
        <h2>Services</h2>
        <div className="home-services-bg"></div>
        <div className="home-services-main">
          <h2 className="home-services-text">
            these are the services I provided
          </h2>
          <HomeServices />
        </div>
      </div>
      <div class="relative bottom-72">
        <h2>Quick Bio</h2>
        <img class="float-end" src="https://picsum.photos/300/540"></img>
        <div class="bg-gray-200 w-screen h-80">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            similique voluptatibus corporis mollitia labore, quam ipsum odio
            facere obcaecati sed dolore autem, unde vel aliquid asperiores ab
            optio iusto eius consequatur magnam? Assumenda mollitia dolores
            provident. Aperiam, qui nam, explicabo reprehenderit repellendus quo
            facilis ratione odit eum dignissimos, officia beatae. Reprehenderit
            ut architecto veritatis, delectus tempora est eius voluptatum at
            dolor fugiat vel quae qui expedita alias corrupti porro laboriosam!
            Nisi possimus necessitatibus facere voluptatum maxime dignissimos
            explicabo. Perspiciatis vel nobis eligendi rerum unde impedit,
            molestiae architecto ad dicta! Quia sequi voluptate dolores
            exercitationem corporis officiis excepturi dicta sint quas?
          </p>
        </div>
      </div>
    </>
  );
}
=======
import HomeServices from "../components/HomeServices"
import { Button } from "reactstrap";
import Header from "../components/Header";

export default function Home() {


  return (
    <>
      {/* <div class="relative h-screen"> */}
      <Header style={"relative bottom-20 flex flex-row justify-end items-center gap-4 px-2 bg-[rgb(235, 246, 255), 0] z-2"}/>
      <div class="relative bottom-48">
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
        {/*  //todo work on creative way to show Qs*/}
        <div class="bg-transparent font-basker text-center text-2xl p-5">
          <h2>Do these questions sound familiar?</h2>
          <br></br>
          <div class="grid grid-cols-2 gap-10">

            <ul>What happened to my dreams of…?</ul>
            <ul>Is this all there is for me…?</ul>
            <ul>Who was I before I was married? Had children? Became a caregiver?</ul>
            <ul>Why am I spending my time doing more things that I dislike than I enjoy?</ul>
            <ul>If I had the chance to change my life’s direction, I would…?/</ul>
            <ul>When will it be my time to lead?</ul>
            <ul>How can I reclaim my life?</ul>
            <ul>What happened to my courage?  My desire for more?</ul>
            <ul>Why does success continually elude me?</ul>
            <ul>How can my relationship be resuscitated?</ul>
            <ul>What options can I create to retire?</ul>
            <ul>What will my life look like when I retire?</ul>
            <ul>How do I re-invent myself?</ul>
            <ul> How can I bring more joy into my life?</ul>

          </div>
          <br></br>
          <div class="">
            <h3>
              Let’s chat!  Schedule a complimentary session or call <strong>309-648-0551</strong> to share your story, explore your goals, and see if we’re a good fit for this adventure together.
              Remember, you are not alone on this journey. Let's transform together.
            </h3>
            <button>Book Now</button>
            <br></br>
            <h3 class="italic">
              With Grace, Gratitude, and Goodness,
              Yvonne
              Transformative Transition Coach & Thought Partner
            </h3>
          </div>
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
>>>>>>> 197447842c9ad74ed2e14112dc7c1a77c565cfd0
