export default function CustomInput({ name, label, onChange, isRequired }) {
  return (
    <>
      <div class="block">
        <label>{label}</label>
        <input
          type="text"
          name={name}
          id={name}
          onChange={onChange}
          required={isRequired}
        />
      </div>
    </>
  );
}
