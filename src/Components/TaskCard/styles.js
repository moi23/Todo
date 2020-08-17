import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.21);
  box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.21);
  margin: 20px;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.9 ease;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCard = styled.div`
  width: 209px;
  display: flex;
  justify-content: space-around;

  strong {
    color: #ee6b26;
    font-weight: bold;
  }

  span {
    color: #707070;
  }
`;
