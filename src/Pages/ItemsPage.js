import styled from "styled-components";
import ItemsList from "../Components/Items/ItemsList";
import { deviceSize } from "../constants";
const ItemsPage = () => {
  return (
    <StyledItemsPageWrapper>
      <StyledCategoryName>Best sellers</StyledCategoryName>
      <ItemsList />
    </StyledItemsPageWrapper>
  );
};

const StyledItemsPageWrapper = styled.div`
  padding: 64px 24px 0px 24px;
  overflow-y: auto;
  height: calc(100vh - 78px - 64px);

  @media (max-width: ${deviceSize.mobile}) {
    height: calc(100vh - 393px - 78px - 60px);
    padding: 36px 18px 0px 18px;

}
`;

const StyledCategoryName = styled.h1`
  font-family: Assistant;
  font-size: 40px;
  font-weight: bold;
  color: #1a223e;
  margin-bottom: 40px;
  @media (max-width: ${deviceSize.mobile}) {
    margin-top: 4px;
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
`;
export default ItemsPage;
