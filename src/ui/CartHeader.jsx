function CartHeader({ quantity }) {
  return (
    <h3 className="text-xl font-bold text-primary-500">
      Your Cart ({quantity})
    </h3>
  );
}

export default CartHeader;
