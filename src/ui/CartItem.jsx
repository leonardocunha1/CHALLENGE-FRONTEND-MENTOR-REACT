import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function handleRemoveItem() {
    dispatch({
      type: "cart/remove",
      payload: {
        id: item.id,
      },
    });
  }

  return (
    <li className="flex items-center justify-between border-b pb-4">
      <div>
        <div className="mb-2 font-bold text-primary-950">{item.name}</div>
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold text-orange-700">{item.quantity}x</p>
          <p className="text-sm text-primary-500">
            <span className="text-sm">@ </span>
            {formatCurrency(item.price)}
          </p>
          <p className="text-sm font-bold text-primary-700">
            {formatCurrency(item.quantity * item.price)}
          </p>
        </div>
      </div>
      <div className="relative h-5 w-5 rounded-full border border-primary-800">
        <button
          className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[55%] text-lg text-primary-800"
          onClick={handleRemoveItem}
        >
          &times;
        </button>
      </div>
    </li>
  );
}

export default CartItem;
