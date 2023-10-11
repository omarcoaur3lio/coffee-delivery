import { ShoppingCart } from "@phosphor-icons/react";
import Background from "../../assets/background.png";
import LandingImg from "../../assets/landing-img.png";
import { MainContainer } from "./styles";
export function Home() {
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
            <div className="item">
              <span>
                <ShoppingCart weight="fill" size={16} />
              </span>
              <p>Compra simples e segura</p>
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
