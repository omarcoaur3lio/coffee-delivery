import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo coffee delivery" />
      </Link>
      <div>
        <div className="location">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </div>
        <Link to="/checkout">
          <div className="cart">
            <ShoppingCart weight="fill" size={22} />
            <span>2</span>
          </div>
        </Link>
      </div>
    </HeaderContainer>
  );
}
