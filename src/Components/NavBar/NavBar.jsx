import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { MdDensityMedium } from "react-icons/md";

import css from "./NavBar.module.scss";

const NavBar = () => {
    
  //search bar toggle with search and cross button
  const [search, setSearch] = useState(false);
  const openSearchBar = () =>{
    setSearch(true);
  };

  const closeSearchBar = () =>{
    setSearch(false);
  }

  //toggle btn
  const [toggle, setToggle] = useState(false);
  const toggled = () =>{
    setToggle(prev => !prev)
  }

  return (
    <div className={css.wrapper}>
      <div className={css.nav_left}>
        <h3>Jooey</h3>
      </div>

      <div className={`${css.main_menu} ${toggle ? css["main_menu--open"] : {}}`}>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
      </div>

      <div className={css.btns}>
        <span>
          <BsSearchHeart onClick={openSearchBar} className={css.BsSearchHeart} />
          <RxCrossCircled
            className={search ? css.show_btn : css.hide_btn}
            onClick={closeSearchBar}
          />
        </span>
        <MdDensityMedium className={css.toggle_btn} onClick={toggled} />
      </div>

      <div className={search ? css.search_show : css.search_hide}>
        <input placeholder="Search here..." />
      </div>
    </div>
  );
};

export default NavBar;
