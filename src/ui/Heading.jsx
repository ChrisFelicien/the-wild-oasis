import styled, { css } from "styled-components";

const alignTextCenter = css`
text-align: center
`;

const Heading = styled.h1`
  ${props =>
    props.as === "h1" &&
    css`
 
  padding: 4px;
  font-weight: 700;
  text-transform: uppercase;
  `};

  ${props =>
    props.as === "h2" &&
    css`
        
      
        font-size: 2.8rem;
        
        padding: 1.2rem 2rem;

    `};
  ${props =>
    props.as === "h3" &&
    css`
        
        
    `};
  line-height: 1.4;
  margin-bottom: 2rem;
`;

export default Heading;
