import styled from "styled-components";

export const Box = styled.div`
  width: 500px;
  height: 200px;
  background-color: white;
`;

export const Barra = styled.section`
  display: flex;
  margin: 4px;

  div {
    background-color: green;
    width: ${(props) => props.width}%;
    height: 30px;
    border-radius: 8px;
    margin: 4px;
    transition: 1s;
  }
    span {
      margin-top: 2px;
      opacity: ${(props) => (props.width === 100 ? 1 : 0.5)};
      color: ${(props) => (props.width === 100 ? "green" : "grey")};
    }
`;
