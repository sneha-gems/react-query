import "./style.css";

export default function Navbar() {
  return (
    <>
      <nav class="flex h-16 ">
        <div class="a-comp">
          <a href="/post">Post</a>
        </div>
        <div class="a-comp">
          <a href="/">List</a>
        </div>
      </nav>
    </>
  );
}
