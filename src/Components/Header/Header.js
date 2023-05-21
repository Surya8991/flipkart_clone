import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import MoreT from '../MoreT/MoreT';
import LoginT from "../LoginT/LoginT"

const Header = () => {
  return (
    <div className='header'>
      <div className="first">
        <a href='/'><img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart Clone"
        /></a>
        <div className="first1">
          <span
            style={{
              fontSize: "11px",
              paddingRight: "2px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#F9E107",
              fontSize: "11px",
              fontStyle: "italic",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              className="logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="second">
        <input type="text" placeholder="Search for products,brands and more" />
        <SearchIcon />
      </div>
      <div className="third">
        <Tippy content={<LoginT />} theme='light' interactive={true} offset={[5, 18]}>
          <button>Login</button>
        </Tippy>
      </div>
      <div className="fourth">
        <Tippy content={<MoreT />} theme='light' interactive={true} offset={[5, 18]}>
          <span>
            More
          </span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div className="fifth">
        <ShoppingCartOutlinedIcon />
        <p> Cart</p>
      </div>

    </div>
  )
}

export default Header