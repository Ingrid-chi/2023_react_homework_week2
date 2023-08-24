const CartPanelRemark = ({ setRemark }) => {
  const handleRemarkChange = (event) => {
    const value = event.target.value;
    setRemark(value);
  };

  return (
    <>
      <textarea
        onChange={handleRemarkChange}
        className="form-control mb-3"
        rows="3"
        placeholder="備註"
      ></textarea>
    </>
  );
};
export default CartPanelRemark;
