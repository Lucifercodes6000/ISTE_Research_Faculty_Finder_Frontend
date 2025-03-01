import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import studentExplore from "./components/student_explore";
import studentProfile from "./components/student_profile";
import "./components/student_explore.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <studentExplore />
      </BrowserRouter>
      {/* <div>
        <CatalystProjects />
      </div>
      <div>
      <studentProfile />
      </div> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
