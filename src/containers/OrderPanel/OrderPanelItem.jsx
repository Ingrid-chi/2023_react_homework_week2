const OrderPanelItem = ({ order }) => {
  return (
    <tr>
      <td>{order.name}</td>
      <td>{order.quantity}</td>
      <td>{order.subtotal}</td>
    </tr>
  );
};

export default OrderPanelItem;
