function ButtonConfirm({ onClick, label }) {
  return (
    <button
      className="mt-4 w-full rounded-full bg-orange-700 py-2 text-sm tracking-wide text-primary-50 duration-200 hover:bg-orange-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ButtonConfirm;
