import "bootstrap/scss/bootstrap.scss";
import CartPanelList from "../CartPanel/CartPanelList";
import CartPanelRemark from "../CartPanel/CartPanelRemark";

// 從父層 App.jsx props 來
const CartPanel = ({
  cartList,
  handleRemoveItem,
  updateCartList,
  sum,
  setSum,
  setRemark,
  setOrderList,
  remark,
}) => {
  return (
    // 將傳遞給子層的 props
    <div className="container">
      <CartPanelList
        cartList={cartList}
        handleRemoveItem={handleRemoveItem}
        updateCartList={updateCartList}
        sum={sum}
        setSum={setSum}
      />
      <CartPanelRemark setRemark={setRemark} />
      <div className="text-end">
        <button
          className="btn btn-primary"
          onClick={() => setOrderList({ orders: cartList, remark })}
        >
          送出
        </button>
      </div>
    </div>
  );
};
export default CartPanel;
