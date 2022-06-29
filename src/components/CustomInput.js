export default function CustomInput({
  name,
  label,
  onChange,
  value,
  isRequired,
}) {
  return (
    <>
      <div class="max-w-sm  flex flex-col justify-center">
        <label class="flex justify-center text-lg font-bold text-gray-800">
          {label}
        </label>
        <input
          class="flex justify-center border-2 border-gray-800 rounded-lg"
          type="text"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={isRequired}
        />
      </div>
    </>
  );
}
