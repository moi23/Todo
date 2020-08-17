import React from "react";

import * as S from "./styles";
import FilterIcon from "../../assets/FilterIcon.png";

function FilterCard({ title, actived }) {
  return (
    <S.Container actived={actived}>
      <img src={FilterIcon} alt="Filter-Icon" />
      <span>{title}</span>
    </S.Container>
  );
}

export default FilterCard;
