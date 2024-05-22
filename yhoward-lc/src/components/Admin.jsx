import React, { useState, useEffect } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserGoals, setSelectedUserGoals] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/users/all");
        const data = await response.json();
        if (response.ok) {
          setUsers(data.users);
        } else {
          throw new Error("Failed to fetch users");
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    const results = searchTerm
      ? users.filter((user) =>
          `${user.firstname} ${user.lastname}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : users;
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleUserSelection = async (userId) => {
    if (userId === selectedUser) {
      // Deselect the current user
      setSelectedUser(null);
      setSelectedUserGoals([]);
    } else {
      // Select a new user and fetch their goals
      setSelectedUser(userId);
      try {
        const response = await fetch(
          `http://localhost:4000/goals/user/${userId}`
        );
        const data = await response.json();
        if (response.ok) {
          setSelectedUserGoals(data.goals);
        } else {
          throw new Error("Failed to fetch goals");
        }
      } catch (error) {
        console.error("Failed to fetch goals:", error);
        setSelectedUserGoals([]);
      }
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleEnabled = async (userId, enabled) => {
    try {
      const response = await fetch(`http://localhost:4000/update/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enabled: enabled }),
      });
      const data = await response.json();
      if (response.ok) {
        // Update the user list after successful update
        const updatedUsers = users.map((user) =>
          user._id === userId ? { ...user, enabled: enabled } : user
        );
        setUsers(updatedUsers);
      } else {
        throw new Error(data.message || "Failed to update enabled status");
      }
    } catch (error) {
      console.error("Failed to update enabled status:", error);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-content">
        <div className="sidebar">
          <input
            className="search-input"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a user..."
          />
          <ul className="user-list">
            {filteredUsers.map((user) => (
              <li
                key={user._id}
                onClick={() => handleUserSelection(user._id)}
                className={user._id === selectedUser ? "selected" : ""}
              >
                {`${user.firstname} ${user.lastname}`}
              </li>
            ))}
            {filteredUsers.length === 0 && <li>No users found</li>}
          </ul>
        </div>
        <div className="main-content">
          {selectedUser ? (
            <div className="user-profile">
              <h2>User Profile</h2>
              <p>
                <strong>Name:</strong>{" "}
                {
                  filteredUsers.find((user) => user._id === selectedUser)
                    ?.firstname
                }{" "}
                {
                  filteredUsers.find((user) => user._id === selectedUser)
                    ?.lastname
                }
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {filteredUsers.find((user) => user._id === selectedUser)?.email}
              </p>
              <h3>Goals</h3>
              <ul>
                {selectedUserGoals.map((goal) => (
                  <li key={goal._id}>
                    <strong>{goal.name}</strong>: {goal.description}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Select a User...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
