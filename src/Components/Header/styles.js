import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #999;
  display: flex;
  border-bottom: 5px solid #ee6b26;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  background: #20295f;
  display: flex;
  align-items: center;
  padding-left: 20px;

  img {
    height: 70%;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  background: #20295f;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      color: #ee6b26;
    }
  }

  #notification {
    img {
      width: 25px;
      height: 30px;
    }

    span {
      background: white;
      color: #ee6b26;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .dividir::after {
    content: "|";
    margin: 0 10px;
    color: white;
  }
`;
