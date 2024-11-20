const Header = () => {
  return (
    <header>
      <a href="#home" className="logo">
        Fajrikun
      </a>
      <nav>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
