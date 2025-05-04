export default function Input({
  title,
  defaultValue,
  onChangeHandler,
  valueName,
}) {
  return (
    <p>
      <label>{title}</label>
      <input
        type="number"
        name={title}
        defaultValue={defaultValue}
        onChange={(event) => onChangeHandler(valueName, event.target.value)}
        required
      />
    </p>
  );
}
