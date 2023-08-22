const CartPanelRemark = () => {
  return (
    <>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="備註"
      ></textarea>
      <div className="text-end">
        <button className="btn btn-primary">送出</button>
      </div>
    </>
  );
};
export default CartPanelRemark;
