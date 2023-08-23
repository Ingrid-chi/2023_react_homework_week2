import { useEffect } from "react";
import CartPanelItem from "./CartPanelItem";

// 從父層 CartPanel props 來
const CartPanelList = ({
  cartList,
  handleRemoveItem,
  updateCartList,
  sum,
  setSum,
}) => {
  // 當 cartList 或 setSum 發生變化時，該函式將會被觸發執行。
  useEffect(() => {
    // 使用 Array.prototype.reduce 計算購物車中所有項目的總金額。
    // cartList 是購物車清單陣列，acc 是累計總金額。對於每個 cart 項目，如果它有 subtotal 屬性，就將 subtotal 加到總金額中，否則加上 price 屬性。
    const totalPriceSum = cartList.reduce((acc, cart) => {
      if (cart.subtotal) {
        return acc + cart.subtotal;
      }
      return acc + cart.price;
    }, 0);
    // 使用 setSum 函式，將計算得到的總金額 totalPriceSum 賦值給 sum 狀態，從而更新購物車的總金額。
    setSum(totalPriceSum);
  }, [cartList, setSum]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50">
              操作
            </th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">
              數量
            </th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((cart, index) => (
            <CartPanelItem
              key={index}
              cart={cart}
              handleRemoveItem={handleRemoveItem}
              updateCartList={updateCartList}
            />
          ))}
        </tbody>
      </table>
      <div className="text-end mb-3">
        <h5>
          總計: <span>{`$${sum}`}</span>
        </h5>
      </div>
    </>
  );
};
export default CartPanelList;
