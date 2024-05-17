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
      <div className="search-section">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for a user..."
        />
      </div>
      <div className="table-section">
        <table className="users-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} onClick={() => handleUserSelection(user._id)}>
                <td>{`${user.firstname} ${user.lastname}`}</td>
                <td>{user.email}</td>
                <td>
                  {user._id === selectedUser ? (
                    <ul>
                      {selectedUserGoals.map((goal) => (
                        <li key={goal._id} className="tooltip-container">
                          <strong>{goal.name}</strong>{" "}
                          {/* Bold the goal name */}
                          <span className="tooltip-text">
                            {goal.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="3">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
