import React, { useState, useEffect } from "react";
import { PopupWidget } from "react-calendly";

const Book = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.fullname && userData.email) {
      setUserFullName(userData.fullname);
      setUserEmail(userData.email);
    }
  }, []);

  const rootElement = document.getElementById("root");

  return (
    <div className="booking">
      <PopupWidget
        url="https://calendly.com/jobranja04"
        rootElement={rootElement || undefined}
        text="Book Now!"
        textColor="#ffffff"
        color="#0D6EFD"
        prefill={{
          name: "" || userFullName,
          email: "" || userEmail,
        }}
      />
    </div>
  );
};

export default Book;
