import React, { useState, useEffect } from "react";

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
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserGoals, setSelectedUserGoals] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserInfo(user);
      setFirstname(user.firstname); // Display user's first name upon login
    }
  }, []);

  useEffect(() => {
    if (userInfo.isAdmin) {
      fetchAllUsers();
    } else {
      fetchGoals();
    }
  }, [userInfo.isAdmin]);

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

        // Store the goals in localStorage
        localStorage.setItem("goals", JSON.stringify(data.userGoals));
      } else {
        throw new Error("Failed to fetch goals");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch goals");
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(`http://localhost:4000/users/all`);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch users");
    }
  };

  const handleUserSelection = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:4000/goals/user/${userId}`
      );
      if (response.ok) {
        const data = await response.json();
        setSelectedUserGoals(data.goals);
      } else {
        throw new Error("Failed to fetch user's goals");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch user's goals");
    }
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
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

        // Update localStorage with the updated goals
        localStorage.setItem("goals", JSON.stringify(updatedGoals));
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
      <h2>{userInfo.isAdmin ? "Admin Center" : "User Profile"}</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="user-info">
        <div>
          <label>First Name: </label>
          {editMode ? (
            <input
              type="text"
              value={firstname}
              onChange={handleFirstnameChange}
            />
          ) : (
            <span>{firstname}</span>
          )}
        </div>
        <div>
          <label>Last Name: </label>
          {editMode ? (
            <input
              type="text"
              value={lastname}
              onChange={handleLastnameChange}
            />
          ) : (
            <span>{userInfo.lastname}</span>
          )}
        </div>
        <div>
          <label>Email: </label>
          {editMode ? (
            <input type="text" value={email} onChange={handleEmailChange} />
          ) : (
            <span>{userInfo.email}</span>
          )}
        </div>
        <div>
          {editMode && (
            <>
              <label>New Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </>
          )}
        </div>
        {editMode ? (
          <div className="edit-buttons">
            <button onClick={handleUpdateProfile}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
      {userInfo.isAdmin ? (
        <div className="admin-section">
          <label>Select User: </label>
          <select
            value={selectedUser}
            onChange={(e) => {
              setSelectedUser(e.target.value);
              handleUserSelection(e.target.value);
            }}
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option
                key={user._id}
                value={user._id}
              >{`${user.firstname} ${user.lastname}`}</option>
            ))}
          </select>
          <div className="selected-user-goals">
            <h3>Selected User's Goals</h3>
            <ul className="goal-list">
              {selectedUserGoals.map((goal) => (
                <li key={goal._id}>
                  <strong>{goal.name}</strong>: {goal.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="user-goals">
          <div className="goal-card">
            <h3>Goals</h3>
            <ul className="goal-list">
              {goals.map((goal) => (
                <li key={goal._id}>
                  <strong>{goal.name}</strong>: {goal.description}
                  <button onClick={() => handleDeleteGoal(goal._id)}>
                    Delete
                  </button>
                  {/* <button onClick={() => handleUpdateGoal(goal._id)}>
                    Update
                  </button> */}
                </li>
              ))}
            </ul>
            <h3>Create New Goal</h3>
            <div className="new-goal-form">
              <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={handleNameChange} />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  rows="2"
                  cols="50"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <button onClick={handleCreateNewGoal}>Create Goal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
