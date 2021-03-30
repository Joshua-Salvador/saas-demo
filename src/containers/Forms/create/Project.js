import React, { useState } from "react";
import "../../../tailwind.css";

function Project() {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [deadline, setDeadline] = useState("");
  const [members, setMembers] = useState([]);
  const [assets, setAssets] = useState([]);
  const [revenue, setRevenue] = useState("");
  return (
    <div className="font-nunito rounded-md m-72 px-4 py-8 shadow text-left">
      <form>
        <div className="container">
          <div className="container my-8">
            <h1>Create a Project</h1>
            <select name="branch">
              <option value="Branch 1">Branch 1</option>
              <option value="Branch 2">Branch 2</option>
              <option value="Branch 3">Branch 3</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Project;
