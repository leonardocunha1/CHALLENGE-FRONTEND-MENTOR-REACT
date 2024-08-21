import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";
import { MdAddShoppingCart } from "react-icons/md";

function Item({ data }) {
  const { cart, dispatch } = useCart();

  const cartItem = cart.find((item) => item.id === data.id);

  function handleAddToCart() {
    dispatch({
      type: "cart/add",
      payload: {
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: 1,
        image: data.image,
      },
    });
  }

  function handleIncrement() {
    dispatch({
      type: "cart/increment",
      payload: {
        id: data.id,
      },
    });
  }

  function handleDecrement() {
    if (cartItem.quantity === 1) {
      dispatch({
        type: "cart/remove",
        payload: {
          id: data.id,
        },
      });
    } else {
      dispatch({
        type: "cart/decrement",
        payload: {
          id: data.id,
        },
      });
    }
  }

  return (
    <li className="list-none">
      <div className="relative">
        <picture>
          <source srcSet={data.image.desktop} media="(min-width: 1024px)" />
          <source
            srcSet={data.image.tablet}
            media="(min-width: 641px) and (max-width: 1023px)"
          />
          <source srcSet={data.image.mobile} media="(max-width: 640px)" />
          <img
            src={data.image.thumbnail}
            alt={data.name}
            className="rounded-lg"
          />
        </picture>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
          {cartItem ? (
            <div className="flex w-32 items-center justify-between gap-2 rounded-full bg-orange-700 px-4 py-1">
              <div className="relative h-4 w-4 rounded-full border">
                <button
                  onClick={handleDecrement}
                  className="absolute left-1/2 top-1/2 -translate-x-[45%] -translate-y-[55%] text-lg text-primary-50"
                >
                  -
                </button>
              </div>
              <span className="text-primary-50">{cartItem.quantity}</span>
              <div className="relative h-4 w-4 rounded-full border">
                <button
                  onClick={handleIncrement}
                  className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[55%] text-lg text-primary-50"
                >
                  +
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex w-[150px] justify-center gap-1 rounded-full border-[0.5px] border-primary-900 bg-background-100 py-2 text-sm font-bold text-primary-950 duration-200 hover:bg-primary-100"
            >
              <MdAddShoppingCart className="h-5 w-5 text-primary-600" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm text-primary-100">{data.category}</p>
        <h2 className="font-bold text-primary-950">{data.name}</h2>
        <p className="font-semibold text-primary-600">
          {formatCurrency(data.price)}
        </p>
      </div>
    </li>
  );
}

export default Item;
