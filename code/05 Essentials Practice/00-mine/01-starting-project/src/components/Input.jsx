export default function Input({ title, defaultValue, onChange: handleChange, valueName }) {
  return (
      <p>
        <label>{title}</label>
        <input
          type="number"
          name={title}
          defaultValue={defaultValue}
          onChange={(event) => handleChange(valueName, event.target.value)}
          required
        />
      </p>
  );
}
