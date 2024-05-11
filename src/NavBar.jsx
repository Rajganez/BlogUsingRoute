import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <ul className="nav justify-content-center flex-sm-row">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/all">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fsd">
                Full Stack Development
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/devops">
                DevOps
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aiandml">
                AI and ML
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Career">
                Career
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <br />
      </div>
    </>
  );
};
export default NavBar;
