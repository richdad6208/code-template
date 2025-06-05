import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white px-[var(--cpx)] maxWidth h-[var(--header-height)] flex justify-between items-center">
      <h1>
        <Link to="/portal">로고</Link>
      </h1>
      <Link to="/admin">회원정보</Link>
    </header>
  );
}
