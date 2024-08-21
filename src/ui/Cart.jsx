import { useState } from "react";
import { useCart } from "../contexts/CartContext";

import { formatCurrency } from "../utils/helpers";

import CartHeader from "./CartHeader";
import CartEmptyState from "./CartEmptyState";
import CartItemList from "./CartItemList";
import CartSummary from "./CartSummary";
import CartModal from "./CartModal";
import ButtonConfirm from "./ButtonConfirm";

import { PiTree } from "react-icons/pi";

function Cart() {
  const { cart, dispatch } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartQuantityItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = formatCurrency(
    cart.reduce((acc, item) => acc + item.quantity * item.price, 0),
  );

  const handleClose = () => setIsModalOpen(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleReset = () => dispatch({ type: "cart/clear" });

  return (
    <aside>
      <div className="flex flex-col gap-5 rounded-lg bg-white px-4 pb-10 pt-4 lg:w-[400px]">
        <CartHeader quantity={cartQuantityItems} />

        {cart.length > 0 ? (
          <>
            <CartItemList cart={cart} />
            <CartSummary total={cartTotal} />
            <div className="flex items-center justify-center gap-2 rounded-lg bg-background-100 py-2">
              <PiTree className="h-5 w-5 text-green-800" />
              <p>
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <ButtonConfirm onClick={handleOpen} label="Confirm Order" />
          </>
        ) : (
          <CartEmptyState />
        )}
      </div>
      <CartModal
        isOpen={isModalOpen}
        handleClose={handleClose}
        handleReset={handleReset}
        cart={cart}
      />
    </aside>
  );
}

export default Cart;
