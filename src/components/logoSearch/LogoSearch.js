import React from "react";
import Logo from "../../img/logo.png";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";

const LogoSearch = () => {
  return (
    <div className="logo__search">
      <img src={Logo} alt={Logo} />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="search__icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
