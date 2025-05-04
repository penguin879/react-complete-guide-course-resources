export default function Input({ title, defaultValue, id }) {
  return (
      <p>
        <label>{title}</label>
        <input
          type="number"
          name={title}
          defaultValue={defaultValue}
          required
        />
      </p>
  );
}
