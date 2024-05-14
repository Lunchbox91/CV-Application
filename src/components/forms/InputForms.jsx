import CustomInput from "../CustomInput";
import "/src/stylesheets/InputForms.css";

function PersonalInfoForm({ handlePersonalInfoSubmit }) {
  return (
    <>
      <form onSubmit={handlePersonalInfoSubmit}>
        <CustomInput type={"text"} name={"name"} labelName={"Full Name"} />
        <CustomInput type={"email"} name={"email"} labelName={"Email"} />
        <CustomInput type={"text"} name={"phone"} labelName={"Phone Number"} />
        <CustomInput type={"text"} name={"address"} labelName={"Address"} />
        <CustomInput
          type={"textarea"}
          name={"about"}
          labelName={"About Myself"}
        />
        <div className="button-container">
          <button type="submit">Update</button>
        </div>
      </form>
    </>
  );
}

function EducationInfoForm({ handleEducationInfoSubmit }) {
  return (
    <>
      <form onSubmit={handleEducationInfoSubmit}>
        <CustomInput type={"text"} name={"school"} labelName={"School"} />
        <CustomInput
          type={"text"}
          name={"degree"}
          labelName={"Qualification"}
        />
        <CustomInput type={"text"} name={"start"} labelName={"Start Year"} />
        <CustomInput type={"text"} name={"end"} labelName={"End Year"} />
        <CustomInput type={"text"} name={"location"} labelName={"Location"} />
        <div className="button-container">
          <button type="submit">Add Education</button>
        </div>
      </form>
    </>
  );
}

function ExperienceInfoForm({ handleExperienceInfoSubmit }) {
  return (
    <>
      <form onSubmit={handleExperienceInfoSubmit}>
        <CustomInput
          type={"text"}
          name={"company"}
          labelName={"Previous Company"}
        />
        <CustomInput type={"text"} name={"title"} labelName={"Job Title"} />
        <CustomInput type={"text"} name={"location"} labelName={"Location"} />
        <CustomInput type={"text"} name={"start"} labelName={"Start Year"} />
        <CustomInput type={"text"} name={"end"} labelName={"End Year"} />
        <CustomInput type={"textarea"} name={"duties"} labelName={"Duties"} />
        <div className="button-container">
          <button type="submit">Add Experience</button>
        </div>
      </form>
    </>
  );
}

export { PersonalInfoForm, EducationInfoForm, ExperienceInfoForm };
