import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import Background from "../../assets/background.png";
import LandingImg from "../../assets/landing-img.png";
import { MainContainer } from "./styles";
import { ItemIcon } from "../../components/ItemIcon";
import { useTheme } from "styled-components";
export function Home() {
  const theme = useTheme();
  return (
    <div
      style={{
        background: `url(${Background}) no-repeat center center`,
        backgroundSize: "cover",
        height: `calc(100vh - 118px)`,
      }}
    >
      <MainContainer>
        <div className="mainContentContainer textContainer">
          <div>
            <h1 className="title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="itemsContainer">
            <div className="infoItemsContainer">
              <ItemIcon
                color={theme.colors.yellowDark}
                description="Compra simples e segura"
              >
                <ShoppingCart weight="fill" size={16} />
              </ItemIcon>
              <ItemIcon
                color={theme.colors.baseText}
                description="Embalagem mantém o café intacto"
              >
                <Package weight="fill" size={16} />
              </ItemIcon>
            </div>

            <div className="infoItemsContainer">
              <ItemIcon
                color={theme.colors.yellow}
                description="Entrega rápida e rastreada"
              >
                <Timer weight="fill" size={16} />
              </ItemIcon>
              <ItemIcon
                color={theme.colors.purple}
                description="O café chega fresquinho até você"
              >
                <Coffee weight="fill" size={16} />
              </ItemIcon>
            </div>
          </div>
        </div>
        <div className="mainContentContainer">
          <img src={LandingImg} alt="Coffee Delivery" />
        </div>
      </MainContainer>
    </div>
  );
}
