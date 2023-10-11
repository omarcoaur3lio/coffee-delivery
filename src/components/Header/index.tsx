import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { HeaderContainer } from "./styles";

import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo coffee delivery" />  
      <div>
        <div className="location">
          <MapPin weight="fill" size={22}
          />
          Porto Alegre, RS
        </div>
        <div className="cart">
          <ShoppingCart weight="fill" size={22} />
          <span>2</span>
        </div>
      </div>
    </HeaderContainer>
  )
}