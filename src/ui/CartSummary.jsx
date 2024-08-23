function CartSummary({ total }) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm">Order Total</p>
      <p className="text-xl font-bold text-primary-950">{total}</p>
    </div>
  );
}

export default CartSummary;
