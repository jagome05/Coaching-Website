import React, { useState, useEffect } from "react";
import Admin from "./Admin";
import UpdatingGoal from "./UpdatingGoal";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goals, setGoals] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserInfo(user);
      setFirstname(user.firstname); // Display user's first name upon login
      setIsAdmin(user.isAdmin); // Set isAdmin state
    }
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      fetchGoals();
    }
  }, [isAdmin]);

  const fetchGoals = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user._id;

      const response = await fetch(
        `http://localhost:4000/goals/user/${userId}`
      );
      if (response.ok) {
        const data = await response.json();
        setGoals(data.goals);
      } else {
        throw new Error("Failed to fetch goals");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch goals");
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleEdit = () => {
    setFirstname(userInfo.firstname);
    setLastname(userInfo.lastname);
    setEmail(userInfo.email);
    setPassword("");
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleUpdateProfile = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user._id;

      const response = await fetch(
        `http://localhost:4000/users/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
          }),
        }
      );
      if (response.ok) {
        console.log("Profile updated successfully");

        // Update localStorage with the updated data
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            firstname: firstname,
            lastname: lastname,
            email: email,
          })
        );

        // Update userInfo state with the updated data
        setUserInfo({
          ...userInfo,
          firstname: firstname,
          lastname: lastname,
          email: email,
        });

        setEditMode(false);
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateNewGoal = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`http://localhost:4000/goals/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          description: description,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        // Update the list of goals locally
        setGoals([...goals, data.newGoal]);
        setName("");
        setDescription("");
        setSuccessMessage("New goal created successfully");

        // Update localStorage with the updated goals
        localStorage.setItem("goals", JSON.stringify([...goals, data.newGoal]));
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to create new goal");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const handleDeleteGoal = async (goalId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `http://localhost:4000/goals/delete/${goalId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        // Remove the deleted goal from the list
        const updatedGoals = goals.filter((goal) => goal._id !== goalId);
        setGoals(updatedGoals);
        setSuccessMessage("Goal deleted successfully");
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to delete goal");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="user-profile-container">
      <h2>{isAdmin ? "Admin Center" : "User Profile"}</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="user-info">
        <div className="user-content-box">
          <label>First Name: </label>
          {editMode ? (
            <input
              className="first-name-input"
              type="text"
              value={firstname}
              onChange={(e) => handleInputChange(e, setFirstname)}
            />
          ) : (
            <span> {firstname}</span>
          )}
        </div>
        <div>
          <label>Last Name: </label>
          {editMode ? (
            <input
            className="last-name-input"
              type="text"
              value={lastname}
              onChange={(e) => handleInputChange(e, setLastname)}
            />
          ) : (
            <span> {userInfo.lastname}</span>
          )}
        </div>
        <div>
          <label>Email: </label>
          {editMode ? (
            <input
            className="email-input"
              type="text"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          ) : (
            <span> {userInfo.email}</span>
          )}
        </div>
        <div>
          {editMode && (
            <>
              <label>New Password:</label>
              <input
              className="password-input"
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e, setPassword)}
              />
            </>
          )}
        </div>
        {editMode ? (
          <div>
            <button className="edit-buttons" onClick={handleUpdateProfile}>Save</button>
            <button className="edit-buttons" onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button className="edit-profile-info" onClick={handleEdit}>Edit</button>
        )}
      </div>
      {isAdmin ? (
        <Admin />
      ) : (
        <div className="user-goals">

          <div className="goal-card">
            <h3>Goals</h3>
            <ul className="goal-list">
              {goals.map((goal) => (
                <li key={goal._id}>
                  {/* <strong>{goal.name}</strong>: {goal.description} */}
                  <UpdatingGoal goal={goal} goals={goals} setGoals={setGoals} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage}/>
                </li>))}
            </ul>
            <h3>Create New Goal</h3>
            <div className="new-goal-form">
              <div>
                <label className="goal-name">Name:</label>
                <input
                  className="goal-input"
                  type="text"
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                />
              </div>
              <div className="goal-box">
                <label className="goal-description">Description:</label>
                <textarea
                  className="goal-input"
                  rows="2"
                  cols="50"
                  value={description}
                  onChange={(e) => handleInputChange(e, setDescription)}
                />
              </div>
              <button className="createGoalButton" onClick={handleCreateNewGoal}>Create Goal</button>
            </div>            

          </div>

        </div>
      )}

    </div>
  );
};

export default UserProfile;


