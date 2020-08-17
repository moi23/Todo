import React from "react";
import * as S from "./styles";
import Logo from "../../assets/logo.png";
import Bell from "../../assets/bell.png";

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={Logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INÍCIO</a>
        <span className="dividir" />
        <a href="#">NOVA TARÉFA</a>
        <span className="dividir" />
        <a href="#">SINCRONIZAR CERLULAR</a>
        <span className="dividir" />
        <a href="#" id="notification">
          <img src={Bell} alt="Notificação" />
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
