import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import "./navigation.styles.scss";
import { LocationDisplay } from "../../components/LocationDisplay";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
          {/* <CrwnLogo className="logo" /> */}
        </Link>
        <div>Logo</div>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <LocationDisplay />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
