import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  padding: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
