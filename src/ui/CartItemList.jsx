import CartItem from "./CartItem";

function CartItemList({ cart }) {
  return (
    <>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
}

export default CartItemList;
