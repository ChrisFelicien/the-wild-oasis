import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${props =>
    props.type === "horizontal" &&
    css`
   gap: 4rem;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  `};

  ${props =>
    props.type === "vertical" &&
    css`
        flex-direction: column;
        align-items: start;
        gap: 1rem;
    `};
`;

Row.defaultProps = {
  type: "vertical"
};

export default Row;
