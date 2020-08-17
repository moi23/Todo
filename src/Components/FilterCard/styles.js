import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  height: 60px;
  background: ${(props) => (props.actived ? "#EE6B26" : "#20295F")};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border-radius: 6px;
  margin-top: 15px;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background: #ee6b26;
    cursor: pointer;
  }

  @media screen and (max-width: 1460px) {
    width: 220px;
    height: 60px;
  }

  @media screen and (max-width: 1280px) {
    width: 180px;
    height: 60px;
  }

  @media screen and (max-width: 1079px) {
    width: 120px;
    height: 60px;
  }

  @media screen and (max-width: 778px) {
    width: 100px;
    height: 60px;
  }
`;
