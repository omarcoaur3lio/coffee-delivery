import { useTheme } from "styled-components";
import { Container } from "../../styles/global";
import { CheckoutContainer } from "./styles";

import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { PaymentMethodsForm } from "../../components/PaymentMethodsForm";
import { Input } from "../../components/Input";
import { CartItemDescription } from "../../components/CartItemDescription";
import { Button } from "../../components/Button";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect } from "react";

export function Checkout() {
  const theme = useTheme();

  const { cart, getTotalProductsPrice } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function getTotal() {
    const total = Number(getTotalProductsPrice().replace(",", ".")) + 3.5;
    if (total === 3.5) {
      return "0,00";
    }
    const formattedTotal = total.toFixed(2).replace(".", ",");
    return formattedTotal;
  }

  return (
    <Container>
      <CheckoutContainer>
        <div className="formContainer">
          <h3>Complete seu pedido</h3>
          <div className="formCard">
            <div className="formCardHeader">
              <MapPinLine size={22} color={theme.colors.yellowDark} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="inputsContainer">
              <Input width="12.5rem" placeholder="CEP" />
              <Input placeholder="Rua" />
              <div>
                <Input width="12.5rem" placeholder="Número" />
                <Input placeholder="Complemento" isOpcional />
              </div>
              <div>
                <Input width="12.5rem" placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <Input width="3.75rem" placeholder="UF" />
              </div>
            </div>
          </div>

          <div className="formCard">
            <div className="formCardHeader">
              <CurrencyDollar size={22} color={theme.colors.purple} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div className="paymentMethodsForm">
              <PaymentMethodsForm />
            </div>
          </div>
        </div>

        <div className="cartContentContainer">
          <h3>Cafés selecionados</h3>

          <div className="cartContentCard">
            {cart.map((product) => (
              <CartItemDescription
                key={product.productId}
                productId={product.productId}
              />
            ))}
            <div className="separator" />

            <div className="totalContainer">
              <div>
                <p>Total de itens</p>
                <p>R$ {getTotalProductsPrice()}</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div>
                <span>Total</span>
                <span>R$ {getTotal()}</span>
              </div>
            </div>

            <Button title="Confirmar Pedido" variant="primary" />
          </div>
        </div>
      </CheckoutContainer>
    </Container>
  );
}
