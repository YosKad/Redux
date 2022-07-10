import styled from "styled-components";
import ItemCard from "./ItemCard";
import { deviceSize } from "../../constants";
import { StoreContext } from "../../Services/StoreProvider";
import { useContext } from "react";

const ItemsList = ({ filterName }) => {
  const { storeItems, addItemToCart } = useContext(StoreContext);

  console.log(filterName);
  const itemsCategory = storeItems.filter((item) => item.catagories.includes(filterName));
  console.log(itemsCategory);
  return (
    <ItemsListWrapper>
      {itemsCategory.map((item) => (
        <ItemCard
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onAddToBag={() => addItemToCart(item)}
        />
      ))}
    </ItemsListWrapper>
  );
};

const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px 24px;
  flex-wrap: wrap;
  margin-bottom: 117px;
  @media (max-width: ${deviceSize.mobile}) {
    gap: 20px 18px;
    margin-bottom: 89px;
  }
`;

export default ItemsList;
