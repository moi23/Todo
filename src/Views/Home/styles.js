import styled from "styled-components";

export const Container = styled.div``;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;

  button {
    border: none;
    background: none;
    outline: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #20295f;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  h3 {
    color: #20295f;
    position: relative;
    top: 43px;
    background: white;
    padding: 0 20px;
    font-size: 28px;
  }
`;
