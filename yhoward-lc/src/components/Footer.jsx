import React from "react";

export default function Footer() {



  return(
    <>
      <div>
        <div>
          <h2>Subscribe to newsletter!</h2>
          <p>Enter Email: <input
            className="global-input"
            type="text"
            name="email"
            placeholder="Email address"
            // value={email}
            /></p>
        </div>

        <h2>Contact Me</h2>
        <form>
        <input
            className="global-input"
            type="text"
            name="firstname"
            placeholder="First Name"
            // value={firstname}
          />
          <br />
          <input
            className="global-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
            // value={lastname}
          />
          <br />
          <input
            className="global-input"
            type="text"
            name="email"
            placeholder="Email address"
            // value={email}
            />
          <br />
          <textarea/>
        </form>
      </div>
    </>
  )
}
