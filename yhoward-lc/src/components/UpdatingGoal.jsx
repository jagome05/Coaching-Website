import React from 'react'
import { useState } from "react";
 
// TODO : form, values need to change based on information on the form, button needs to call update end point, user profile needs a pop up(modal)
function UpdatingGoal({goal, goals, setGoals, setSuccessMessage, setErrorMessage}) {
  const [editMode, setEditMode] = useState(false);
  const [goalName, setGoalName] = useState(goal.name)
  const [goalDescription, setGoalDescription] = useState(goal.description)
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };
  const handleUpdateGoal = async () => {
    if (editMode === false) {
      setEditMode(true)
    } else {
      try {
        console.log(goalName, goalDescription)
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          `http://localhost:4000/goals/update/${goal._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
             name: goalName,
             description: goalDescription,
            }),
          }
        );
        if (response.ok) {
          console.log('data')
          // Update a goal from the list
          const updatedGoals = goals.filter((goal) => goal._id !== goal._id);
          setGoals(updatedGoals);
          setSuccessMessage("Goal Successfully updated!");
  
    // Update localStorage with the updated goals
    // localStorage.setItem("goals", JSON.stringify(updatedGoals));
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Failed to update goal");
  }
  } catch (error) {
  console.error(error);
  setErrorMessage(error.message);
  }
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
      // localStorage.setItem("goals", JSON.stringify(updatedGoals));
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Failed to delete goal");
    }
  } catch (error) {
    console.error(error);
    setErrorMessage(error.message);
  }
};
// const updateGoal = async() => {
//   try {
//     const response = await fetch(`http://localhost:4000/goals/${goal._id}`, {method:"GET", 
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   if (response.ok) {
//     const data = await response.json()
//     setGoalName(data.goals.name)
//     setGoalDescription(data.goals.description)
//     console.log(data);}
//     setEditMode(true)
//   } catch(error) {console.log(error)}
// }
  return (
                <div>
                   <div>
                    <label>Name: </label>
                    {editMode ? (
                      <input className='goal-input' type="text"
                      value = {goalName}
                      onChange={(e) => handleInputChange(e, setGoalName)} />
                    ):(
                      <span> {goal.name}</span>
                    )}
                  </div>
                  <div>
                    <label>Description: </label>
                    {editMode ?(
                      <input type ="text"
                      value = {goalDescription}
                      onChange={(e) => handleInputChange(e, setGoalDescription)} />
                    ) : (
                      <span> {goal.description}</span>
                    )}
                  </div>
                  <button className='deleteGoalButton' onClick={() => handleDeleteGoal(goal._id)}>
                  Delete
                </button>
                <button className='updateGoalButton' onClick={() => handleUpdateGoal()}>
                  Update
                </button>
              </div>
  )
}

export default UpdatingGoal