import React from "react";

export default function Home() {


  return(
    <>
      <div className="home-top">
        <h2>Home</h2>
        <div className="home-top-bg"></div>
        <img className="home-top-img" src="https://picsum.photos/400/300" />
        <div className="home-top-text">
          <h2>Insert Text</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas veniam libero a expedita sapiente, excepturi numquam similique ducimus culpa dolorem nulla voluptatem animi atque illo aliquid tempora iure eos, consectetur architecto modi nemo? At aut, modi ut eveniet, natus temporibus minus totam fugiat quia quasi repudiandae, deserunt rem numquam. Pariatur nesciunt in aperiam adipisci corrupti vel debitis molestias rerum, perspiciatis delectus quisquam alias nulla quia dolor sed cum. Sint amet eaque repellendus nam, eos iure error quaerat excepturi temporibus quia! Ducimus mollitia repellendus odio debitis assumenda ipsam temporibus, voluptas, repellat iure amet officiis possimus sit eum expedita veniam magni! Quae.</p>
          <button>Book Today!</button>
        </div>
        <video autoPlay loop muted className="home-top-gif">
          <source src='https://cdn.pixabay.com/video/2022/02/21/108480-680697634_large.mp4' type="video/mp4"/>
        </video>
      </div>
      <div className="home-services">
        <h2>Services</h2>
        <div className="home-services-bg"></div>
        <div className="home-services-main">
          <h2 className="home-services-text">these are the services I provided</h2>
          <div className="home-services-box1"></div>
          <div className="home-services-box2"></div>
          <div className="home-services-box3"></div>
        </div>
      </div>
      <div className="home-bio">
      <h2>Bio</h2>
        <div className="home-bio-bg"></div>
      </div>
    </>
  )
}