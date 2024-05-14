import "/src/stylesheets/CustomInput.css";

export default function CustomInput({
  labelName,
  type,
  name,
  value,
  onChange,
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{labelName}</label>
      <>
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            cols="30"
            rows="10"
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
        )}
      </>
    </div>
  );
}
