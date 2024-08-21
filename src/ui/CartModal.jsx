import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CartSummary from "./CartSummary";
import { FaRegCheckCircle } from "react-icons/fa";
import { formatCurrency } from "../utils/helpers";
import ButtonConfirm from "./ButtonConfirm";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxWidth: "95%",
  bgcolor: "background.paper",
  border: "1px solid #a1a1a1",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function CartModal({ isOpen, handleClose, handleReset, cart }) {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <FaRegCheckCircle className="mb-4 h-8 w-8 text-green-700" />
        <h2 className="mb-2 text-3xl font-bold text-primary-950">
          Order Confirmed
        </h2>
        <p className="mb-5 text-sm text-primary-800">
          We hope you enjoy your food!
        </p>
        <ul className="space-y-3 bg-background-100 p-4">
          {cart.map((item) => (
            <li key={item.id} className="border-b pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    className="h-12 w-12 rounded-lg"
                  />
                  <div>
                    <div className="text-sm font-bold text-primary-950">
                      {item.name}
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-bold text-orange-700">
                        {item.quantity}x
                      </p>
                      <p className="text-sm text-primary-500">
                        <span className="text-sm">@ </span>
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold">
                  {formatCurrency(item.quantity * item.price)}
                </p>
              </div>
            </li>
          ))}
          <CartSummary
            total={formatCurrency(
              cart.reduce((acc, item) => acc + item.quantity * item.price, 0),
            )}
          />
        </ul>

        <ButtonConfirm
          onClick={() => {
            handleClose();
            handleReset();
          }}
          label="Start New Order"
        />
      </Box>
    </Modal>
  );
}

export default CartModal;
