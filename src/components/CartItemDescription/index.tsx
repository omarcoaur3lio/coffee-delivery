import { CartItemContainer } from "./style";
import coffeeImg from "../../assets/products/Expresso.png";
import { InputNumber } from "../InputNumber";
import { Button } from "../Button";
import { Trash } from "@phosphor-icons/react";

export function CartItemDescription() {
  return (
    <CartItemContainer>
      <div className="itemContainer">
        <img src={coffeeImg} width={64} alt="Imagem do seu café" />
        <div className="itemInfo">
          <span>Expresso tradicional</span>
          <div className="itemQuantity">
            <InputNumber />
            <Button variant="secondary" title="Remover">
              <Trash size={16} />
            </Button>
          </div>
        </div>
      </div>
      <span className="price">R$ 9,90</span>
    </CartItemContainer>
  );
}
