const Navbar = () => {
  return (
    <nav className="c-navbar">
      <h1 className="c-title">The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;