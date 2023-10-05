import { Link } from "react-router-dom";

import Container from "../components/Container";
import styled from "styled-components";

const Style = styled.div`
  border-bottom: 1px solid #3f3f46;
`;

const Menu = () => {
    return (
        <Style>
          <Container style={{padding:"20px"}}>
            WADE CDN Admin
          </Container>
        </Style>
        
    )
};

export default Menu;