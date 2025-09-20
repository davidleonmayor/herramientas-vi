import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-primary py-5">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center md:justify-between">
        <div className="w-full p-5 lg:p-0 md:w-1/3">
          <Logo />
        </div>
      </div>
    </header>
  );
}
