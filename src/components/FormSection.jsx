import {
  EducationInfoForm,
  ExperienceInfoForm,
  PersonalInfoForm,
} from "./forms/InputForms";
import { useState } from "react";

import "/src/stylesheets/FormSection.css";

export default function FormSection({
  handlePersonalInfoSubmit,
  handleEducationInfoSubmit,
  handleExperienceInfoSubmit,
}) {
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

  return (
    <div className="form-section">
      <h2 onClick={() => setIsPersonalOpen(!isPersonalOpen)}>
        <img src="src/assets/person-svgrepo-com.svg" alt="user-icon" /> Personal
        Information
      </h2>
      {isPersonalOpen ? (
        <PersonalInfoForm handlePersonalInfoSubmit={handlePersonalInfoSubmit} />
      ) : (
        ""
      )}

      <h2 onClick={() => setIsEducationOpen(!isEducationOpen)}>
        <img src="src/assets/diploma-svgrepo-com.svg" alt="diploma-icon" />{" "}
        Education
      </h2>
      {isEducationOpen ? (
        <EducationInfoForm
          handleEducationInfoSubmit={handleEducationInfoSubmit}
        />
      ) : (
        ""
      )}

      <h2 onClick={() => setIsExperienceOpen(!isExperienceOpen)}>
        <img
          src="src/assets/briefcase-alt-svgrepo-com.svg"
          alt="briefcase-icon"
        />
        Previous Experience
      </h2>
      {isExperienceOpen ? (
        <ExperienceInfoForm
          handleExperienceInfoSubmit={handleExperienceInfoSubmit}
        />
      ) : (
        ""
      )}
    </div>
  );
}
