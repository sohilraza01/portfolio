const Navbar = () => {
  return (
    <nav>
      <div className="container nav_bar"
      data-aos="fade-down"
      data-aod-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        <div className="right">
            <a href="#home" className="nav_items">Home</a>
            {/* <a href="#experience" className="nav_items">Experience</a> */}
            <a href="#skilss" className="nav_items">Skills</a>
            <a href="#projects" className="nav_items">Projects</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
