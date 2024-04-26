import React, { useEffect, useRef } from "react";
import { PopupWidget } from "react-calendly";

const Book = () => {
  const rootElementRef = useRef(null);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userFullName = userData && userData.fullname;
  const userEmail = userData && userData.email;

  useEffect(() => {
    rootElementRef.current = document.getElementById("root");
  }, []);

  return (
    <div className="App">
      {rootElementRef.current && (
        <PopupWidget
          url="https://calendly.com/jobranja04"
          rootElement={rootElementRef.current}
          text="Click here to schedule!"
          textColor="#ffffff"
          color="#00a2ff"
          prefill={{
            name: userFullName,
            email: userEmail,
          }}
        />
      )}
    </div>
  );
};

export default Book;
