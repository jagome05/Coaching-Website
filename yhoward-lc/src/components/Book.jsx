import React, { useEffect, useRef, useState } from "react";
import { PopupWidget } from "react-calendly";

const Book = () => {
  const rootElementRef = useRef(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = JSON.parse(localStorage.getItem("user"));
    setUserData(userDataFromStorage);
    rootElementRef.current = document.getElementById("root");
  }, []);

  const renderCalendlyPopup = () => {
    const prefillData = userData
      ? {
          name: userData.fullname,
          email: userData.email,
        }
      : "";

    return (
      <PopupWidget
        url="https://calendly.com/jobranja04"
        rootElement={rootElementRef.current}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
        prefill={prefillData}
      />
    );
  };

  return <div className="App">{renderCalendlyPopup()}</div>;
};

export default Book;
