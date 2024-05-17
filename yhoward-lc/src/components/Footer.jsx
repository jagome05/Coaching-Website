import React from "react";
import Contact from "./Contact";

export default function Footer() {

  return (
    <>
      <div class="flex flex-col justify-evenly items-center">
        <h4 class="">Links</h4>
        <div class="flex flex-row justify-end gap-2">
          <button><i class="fa fa-facebook-f"></i></button>
          <button><i class="fa fa-twitter"></i></button>
          <button><i class="fa fa-linkedin"></i></button>
          <button><i class="fa fa-instagram"></i></button>
          {/* <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="3d17818f-e8a5-405e-9a38-68f06a501cd2" data-share-badge-host="https://www.credly.com"></div> */}
        </div>
      </div>
      <div className="justify-right">
        {/* <Contact /> */}
      </div>
    </>
  )
}
