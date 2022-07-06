import styled from "styled-components";
import CartItem from "./CartItem";
import { deviceSize } from "../../constants";
import { StoreContext } from "../../Services/StoreProvider";
import { useContext } from "react";

const CartItems = () => {
  const { cart, addItemToCart, removeItemFromCart } = useContext(StoreContext);

  return (
    <StyledCartItemsWrapper>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          quantity={item.quantity}
          onRemoveItem={() => removeItemFromCart(item, true)}
          onReduce={() => removeItemFromCart(item)}
          onAdd={() => addItemToCart(item)}
        />
      ))}
    </StyledCartItemsWrapper>
  );
};

const StyledCartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-top: 34px;
  height: 100%;
  overflow-y: auto;

  @media (max-width: ${deviceSize.mobile}) {
    padding: 0px 18px;
    margin-top: 17px;
    gap: 18px;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export default CartItems;
