import styled from "styled-components";
import Header from "./Components/Header";
import ItemCard from "./Components/Items/ItemCard";
import ItemsList from "./Components/Items/ItemsList";
import logo from "./logo.svg";
import CartPage from "./Pages/CartPage";
import ItemsPage from "./Pages/ItemsPage";
import { deviceSize } from "./constants";
function App() {
  return (
    <StyledAppWrapper>
      <Header />
      <StyledContentWrapper>
        <ItemsPage />
        <CartPage />
      </StyledContentWrapper>
    </StyledAppWrapper>
  );
}

const StyledContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;


  @media (max-width: ${deviceSize.mobile}) {
    flex-direction: column-reverse;
  }
`

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export default App;
