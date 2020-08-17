import React, { useState } from "react";
import * as S from "./styles";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterCard from "../../Components/FilterCard";

function Home() {
  return (
    <S.Container>
      <Header />
      <S.FilterArea>
        <FilterCard title="Todos" actived={false} />
        <FilterCard title="Hoje" actived={false} />
        <FilterCard title="Semana" actived={false} />
        <FilterCard title="Mês " actived={false} />
        <FilterCard title="Ano" actived={false} />
      </S.FilterArea>
      <Footer />
    </S.Container>
  );
}

export default Home;
