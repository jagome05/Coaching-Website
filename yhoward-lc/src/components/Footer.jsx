import React from "react";

export default function Footer() {

  return (
    <>
      <div class="flex flex-col justify-evenly items-end">
        <h4 class="">Links</h4>
        <div class="flex flex-row justify-end gap-2">
          <button><i class="fa fa-facebook-f"></i></button>
          <button><i class="fa fa-twitter"></i></button>
          <button><i class="fa fa-linkedin"></i></button>
          <button><i class="fa fa-instagram"></i></button>
        </div>
      </div>
    </>
  )
}
