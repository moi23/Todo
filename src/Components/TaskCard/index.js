import React from "react";
import * as S from "./styles";
import IconDefault from "../../assets/default.png";

function TaskCard() {
  return (
    <S.Container>
      <S.TopCard>
        <img src={IconDefault} alt="Icone da Tarefa" />
        <h3>Titulo da Tarefa</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00h</span>
      </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;
