import IllustrationEmptyCart from "../../public/images/illustration-empty-cart.svg";

function CartEmptyState() {
  return (
    <>
      <img
        src={IllustrationEmptyCart}
        alt="Illustration Empty Cart Image"
        className="h-28"
      />
      <p className="text-center text-sm text-primary-900">
        Your added items will appear here
      </p>
    </>
  );
}

export default CartEmptyState;
