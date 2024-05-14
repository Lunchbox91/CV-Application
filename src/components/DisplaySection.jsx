import "/src/stylesheets/DisplaySection.css";

export default function DisplaySection({
  personalInfo,
  educationInfo,
  experienceInfo,
  handleDeleteEducation,
  handleDeleteExperience,
}) {
  return (
    <aside>
      <h1 className="name-heading">{personalInfo.name}</h1>

      <section className="personal-info">
        <p>
          <img src="src/assets/email-1-svgrepo-com.svg" alt="email icon" />
          {personalInfo.email}
        </p>
        <p>
          <img src="src/assets/phone-svgrepo-com.svg" alt="phone icon" />
          {personalInfo.phone}
        </p>
        <p>
          <img src="src/assets/pin.svg" alt="pin icon" />
          {personalInfo.address}
        </p>
      </section>

      <section>
        <h2>Education</h2>
        {educationInfo.length > 0 ? (
          educationInfo.map((educationInfo) => (
            <div className="education-section" key={educationInfo.school}>
              <ul>
                <li>
                  {educationInfo.start} - {educationInfo.end}
                </li>
                <li>
                  <strong>{educationInfo.school}</strong>
                </li>
                <li>{educationInfo.location}</li>
                <li>{educationInfo.degree}</li>
              </ul>
              <button
                onClick={() => handleDeleteEducation(educationInfo.school)}
              >
                <img src="src/assets/bin.svg" alt="bin-icon" />
              </button>
            </div>
          ))
        ) : (
          <div>Please enter your education info</div>
        )}
      </section>

      <section>
        <h2>Experience</h2>
        {experienceInfo.length > 0 ? (
          experienceInfo.map((info) => (
            <div className="experience-section" key={info.company}>
              <ul>
                <li>
                  <strong>Company</strong> - {info.company}
                </li>
                <li>
                  <strong>Job Title</strong> - {info.title}
                </li>
                <li>
                  {info.start} - {info.end}
                </li>
                <li>
                  <strong>Location</strong> - {info.location}
                </li>
              </ul>
              <div className="duties">
                <p>
                  <strong>Duties: </strong>
                  {info.duties}
                </p>
                <button onClick={() => handleDeleteExperience(info.title)}>
                  <img src="src/assets/bin.svg" alt="bin-icon" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Please fill in your job experience</div>
        )}
      </section>

      <section>
        <h3>About Me</h3>
        <p className="about">{personalInfo.about}</p>
      </section>
    </aside>
  );
}
