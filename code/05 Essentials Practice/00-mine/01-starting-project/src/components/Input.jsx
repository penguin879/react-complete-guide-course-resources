export default function Input({ title, defaultValue, onChange, valueName }) {
  return (
      <p>
        <label>{title}</label>
        <input
          type="number"
          name={title}
          defaultValue={defaultValue}
          onChange={(event) => onChange(valueName, event.target.value)}
          required
        />
      </p>
  );
}
