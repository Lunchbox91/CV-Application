import FormSection from "./components/FormSection";
import DisplaySection from "./components/DisplaySection";
import { useState } from "react";

import "../src/stylesheets/App.css";

function App() {
  //States to handle each section of the CV
  const [personalInfo, setPersonalInfo] = useState({
    name: "Your Name",
    email: "youremail@email.com",
    phone: "01279 123456",
    address: "City, Country",
    about: "Please use this space to tell some details about you personally",
  });

  const [educationInfo, setEducationInfo] = useState([]);

  const [experienceInfo, setExperienceInfo] = useState([]);

  // Submit handlers to update the state of each section with the input data
  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedPersonalInfo = {};
    formData.forEach((value, name) => {
      updatedPersonalInfo[name] = value;
    });
    setPersonalInfo(updatedPersonalInfo);
  };

  const handleEducationInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedEducationInfo = {};
    formData.forEach((value, name) => {
      updatedEducationInfo[name] = value;
    });
    setEducationInfo([...educationInfo, updatedEducationInfo]);
  };

  const handleExperienceInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedExperienceInfo = {};
    formData.forEach((value, name) => {
      updatedExperienceInfo[name] = value;
    });
    setExperienceInfo([...experienceInfo, updatedExperienceInfo]);
  };

  //Handlers to delete entries for Education and Previous Experiences
  const handleDeleteEducation = (id) => {
    const updatedEducation = educationInfo.filter((edu) => edu.school !== id);
    setEducationInfo(updatedEducation);
  };
  const handleDeleteExperience = (id) => {
    const updatedExperience = experienceInfo.filter((exp) => exp.title !== id);
    setExperienceInfo(updatedExperience);
  };

  return (
    <>
      <header className="header">
        <h1>CV Builder</h1>
      </header>
      <div className="sections-wrapper">
        <main className="main-wrapper">
          <FormSection
            handlePersonalInfoSubmit={handlePersonalInfoSubmit}
            handleEducationInfoSubmit={handleEducationInfoSubmit}
            handleExperienceInfoSubmit={handleExperienceInfoSubmit}
          />
        </main>
        <div>
          <DisplaySection
            handleDeleteEducation={handleDeleteEducation}
            handleDeleteExperience={handleDeleteExperience}
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </>
  );
}

export default App;
