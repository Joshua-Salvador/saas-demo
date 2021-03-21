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
          <div className="container my-8"></div>
        </div>
      </form>
    </div>
  );
}

export default Project;
