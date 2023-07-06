import { Link, Outlet, useNavigation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Root() {
  const navigation = useNavigation();

  const outletStyles = {
    margin: "0 auto",
    maxWidth: "40rem",
    padding: "0 2rem",
    transition: "opacity 0.3s",
    opacity: navigation.state !== "loading" ? 1 : 0.5,
  };

  const navStyles = {
    backgroundColor: "#1a202c",
    height: "3.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const linkStyles = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "white",
    textDecoration: "none",
    marginLeft: "1rem",
  };

  return (
    <div>
      <nav style={navStyles}>
        <h2 style={{ display: "flex", alignItems: "center" }}>
          <Link style={linkStyles} to="/">
            <FaHome style={{ marginRight: "0.5rem" }} />
            RecipeFinder
          </Link>
        </h2>
      </nav>

      <div style={outletStyles}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
