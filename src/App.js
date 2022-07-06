/*
homework:

1. CartPage - change subtotal to useMemo instead of recalculate each render 
2. Change Menu to use NavLink of react router.
3. Change the project to use Typescript.

*/

import styled from "styled-components";
import Header from "./Components/Header";

import CartPage from "./Pages/CartPage";
import ItemsPage from "./Pages/ItemsPage";
import { deviceSize } from "./constants";
import { StoreProvider } from "./Services/StoreProvider";
function App() {
  return (
    <StyledAppWrapper>
      <Header />
      <StyledContentWrapper>
        <StoreProvider>
          <ItemsPage />
          <CartPage />
        </StoreProvider>
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
`;

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export default App;
