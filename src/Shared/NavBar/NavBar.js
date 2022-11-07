import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    LogOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand to="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img={user?.photoURL}
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/home" >
          Home
        </Link>
        <Link to="/navbars">About</Link>
        <Link to="/navbars">Services</Link>
        <Link to="/navbars">Pricing</Link>

        {user?.uid ? (
          <>
            <Link to="/myReviews">MyReviews</Link>
            <Link to="/addServices">AddServices</Link>
            <Link onClick={handleSignOut}>SignOut</Link>
          </>
        ) : (
          <Link to="/login">SignIn</Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
