import {Outlet, Link, NavLink} from 'react-router-dom';

interface NavProps {
  signOut: any;
  user: any;
}

export const Nav = ({signOut, user}: NavProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          BooksStore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/books" className="nav-link">
                Books
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="dropdown">
            <a
              className="btn btn-dark dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {user.attributes.email}
            </a>

            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
              <li>
                {' '}
                <a href="#" className="dropdown-item" onClick={signOut}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
