// import Expresso from '../../assets/products/Expresso.png';
import Cubano from "../../assets/products/Cubano.png";
import { ShoppingCart } from "@phosphor-icons/react";
import { CardContainer } from "./styles";
import { CounterButton } from "../CounterButton";

export function CardProduct() {
  return (
    <CardContainer>
      <img src={Cubano} alt="" />
      <div className="tagContainer">
        <span>ESPECIAL</span>
        <span>ALCOÓLICO</span>
        <span>GELADO</span>
        <span>GELADO</span>
        <span>GELADO</span>
      </div>
      <h3>Cubano</h3>
      <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
      <footer>
        <div>
          <span>R$</span>
          <h4>9,90</h4>
        </div>
        <div>
          <CounterButton />
          <div className="cart">
            <ShoppingCart weight="fill" size={22} />
          </div>
        </div>
      </footer>
    </CardContainer>
  );
}
