import React from "react";
import HomeServices from "../components/HomeServices"
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam libero a expedita sapiente, excepturi numquam similique ducimus culpa dolorem nulla voluptatem animi atque illo aliquid tempora iure eos, consectetur architecto modi nemo? At aut, modi ut eveniet, natus temporibus minus totam fugiat quia quasi repudiandae, deserunt rem numquam. Pariatur nesciunt in aperiam adipisci corrupti vel debitis molestias rerum, perspiciatis delectus quisquam alias nulla quia dolor sed cum. Sint amet eaque repellendus nam, eos iure error quaerat excepturi temporibus quia! Ducimus mollitia repellendus odio debitis assumenda ipsam temporibus, voluptas, repellat iure amet officiis possimus sit eum expedita veniam magni! Quae.</p>
          <Button color="primary">
            Book Now!
          </Button>
        </div>
        <video autoPlay loop muted className="home-top-gif">
          <source src='https://cdn.pixabay.com/video/2022/02/21/108480-680697634_large.mp4' type="video/mp4" />
        </video>
      </div>
      <div className="home-services">
        <h2>Services</h2>
        <div className="home-services-bg"></div>
        <div className="home-services-main">
          <h2 className="home-services-text">these are the services I provided</h2>
          <HomeServices />
        </div>
      </div>
      <div class="relative bottom-72">
        <h2>Quick Bio</h2>
        <img class="float-end" src="https://picsum.photos/300/540"></img>
        <div class="bg-gray-200 w-screen h-80">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A similique voluptatibus corporis mollitia labore, quam ipsum odio facere obcaecati sed dolore autem, unde vel aliquid asperiores ab optio iusto eius consequatur magnam? Assumenda mollitia dolores provident. Aperiam, qui nam, explicabo reprehenderit repellendus quo facilis ratione odit eum dignissimos, officia beatae. Reprehenderit ut architecto veritatis, delectus tempora est eius voluptatum at dolor fugiat vel quae qui expedita alias corrupti porro laboriosam! Nisi possimus necessitatibus facere voluptatum maxime dignissimos explicabo. Perspiciatis vel nobis eligendi rerum unde impedit, molestiae architecto ad dicta! Quia sequi voluptate dolores exercitationem corporis officiis excepturi dicta sint quas?</p>
        </div>
      </div>
    </>
  )
}