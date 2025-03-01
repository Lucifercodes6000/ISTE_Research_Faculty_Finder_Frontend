import React from "react";
import { Link } from "react-router-dom";
import "./student_explore.css";
import studentProfile from "./student_profile";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">catalyst</div>
      <nav>
        <a href="">My Projects</a>
        <a href="">Explore</a>
        <div className="profile-icon">
          <Link to={'/studentProfile'}>
          <img src="./public/placeholder.png" alt="Profile" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Filter by</h3>
      {[
        {
          title: "Field of Research",
          options: ["AI/ML", "Healthcare", "Data Science & Analytics", "Cybersecurity"],
        },
        {
          title: "Type Of Project",
          options: ["Research-based", "Open-Source", "Hackathon", "Company"],
        },
        {
          title: "Tech Stack",
          options: ["AI/ML", "Web-Development", "Blockchain", "Robotics"],
        },
        {
          title: "Funding & Support",
          options: ["Self-Funded", "University", "Sponsership", "Crowdfunded"],
        },
      ].map((group, index) => (
        <div key={index} className="filter-group">
          <h4>{group.title}</h4>
          {group.options.map((option, idx) => (
            <label key={idx}>
              <input type="checkbox" className="filter" value={option} /> {option}
            </label>
          ))}
          <button className="show-more">Show More</button>
        </div>
      ))}
    </aside>
  );
};

const ProjectCard = ({ name, author }) => {
  return (
    <div className="project-card">
      <div className="project-image"></div>
      <div className="project-content">
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className="author">By {author}</p>
      </div>
    </div>
  );
};

const Content = () => {
  const projects = Array(7).fill({ name: "Project Name", author: "Name Name" });
  return (
    <main className="content">
      <input type="text" id="search-bar" placeholder="Search project" />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} name={project.name} author={project.author} />
        ))}
      </div>
    </main>
  );
};

const studentExplore = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default studentExplore;
