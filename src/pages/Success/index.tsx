import { Container } from "../../styles/global";
import { ContentContainer } from "./styles";

import deliveryImg from "../../assets/delivery.svg";
import { ItemIcon } from "../../components/ItemIcon";

import { useTheme } from "styled-components";
import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";

export function Success() {
  const theme = useTheme();

  return (
    <Container>
      <ContentContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="content">
          <div className="informationContainer">
            <div className="informationCard">
              <div className="informationCardModule">
                <div className="infoItem">
                  <ItemIcon color={theme.colors.purple}>
                    <MapPin weight="fill" size={16} />
                  </ItemIcon>
                  <p>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                    Farrapos - Porto Alegre, RS
                  </p>
                </div>
                <div className="infoItem">
                  <ItemIcon color={theme.colors.yellow}>
                    <Timer weight="fill" size={16} />
                  </ItemIcon>
                  <p>
                    Previsão de entrega <br />
                    <strong> 20 min - 30 min</strong>
                  </p>
                </div>
                <div className="infoItem">
                  <ItemIcon color={theme.colors.yellowDark}>
                    <CurrencyDollar size={16} />
                  </ItemIcon>
                  <p>
                    Pagamento na entrega <br />
                    <strong> Cartão de Crédito</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={deliveryImg} alt="" />
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}
