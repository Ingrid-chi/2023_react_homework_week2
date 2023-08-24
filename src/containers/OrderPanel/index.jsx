import OrderPanelItem from "./OrderPanelItem";

const OrderPanel = ({ sum, orderList }) => {
  return orderList ? (
    <>
      <div className="card-title">
        <h5>訂單</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">品項</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
            </tr>
          </thead>
          <tbody>
            {orderList.orders.map((order, index) => (
              <OrderPanelItem key={index} order={order} />
            ))}
          </tbody>
        </table>
        <div className="text-end">
          備註: <span>{orderList.remark}</span>
        </div>
        <div className="text-end">
          <h5>
            總計: <span>{`$${sum}`}</span>
          </h5>
        </div>
      </div>
    </>
  ) : (
    "你還沒有加入訂單"
  );
};
export default OrderPanel;
