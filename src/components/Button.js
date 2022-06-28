import "./style.css";

export default function Button({ type, name }) {
  return (
    <div class="btn-comp">
      <button type={type} class="btn-comp">
        {name}
      </button>
    </div>
  );
}
