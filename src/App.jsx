import "./App.css";
import "bootstrap/scss/bootstrap.scss";
import { useState } from "react";
import { SIDEBAR_MENU_DATA } from "./data/sidebarMenuData";
import CartPanel from "./containers/CartPanel";
import OrderPanel from "./containers/OrderPanel";
import SidebarMenus from "./components/SidebarMenu";

function App() {
  const [clickMenuId, setClickMenuId] = useState(0);
  const [cartList, setCartList] = useState([]);
  const [sum, setSum] = useState(0);
  const [remark, setRemark] = useState("");
  const [orderList, setOrderList] = useState(null);

  // 接受一個參數叫 id，為添加到購物車的項目識別號。
  const handleAddItem = (id) => {
    // 使用 Array.prototype.find 方法
    // newItem 從 SIDEBAR_MENU_DATA 陣列中找到有相同 id 的項目。
    const newItem = SIDEBAR_MENU_DATA.find((d) => d.id === id);
    // 如果有找到相同 id 就執行條件
    if (newItem) {
      const newItemWithRandomId = {
        ...newItem,
        // id 用 Math.floor(Math.random() * 100) 生成，這裡假設在0到99之間。
        id: Math.floor(Math.random() * 100),
        quantity: 1,
        subtotal: newItem.price,
      };
      // 用 setCartList 更新購物車的清單狀態。使用展開運算符將先前的購物車清單內容（prevArray）複製到新陣列中，然後將新項目 newItemWithRandomId 添加到新陣列中，從而更新購物車內容。
      setCartList((prevArray) => [...prevArray, newItemWithRandomId]);
    }
  };

  // 如果選取到的 id 不等於 id 就保留此 id
  const handleRemoveItem = (id) => {
    const updatedCartList = cartList.filter((order) => order.id !== id);
    setCartList(updatedCartList);
  };

  const updateCartList = (item, value) => {
    const newCartList = cartList.map((orderItem) => {
      if (orderItem.id === item.id) {
        return {
          ...orderItem,
          quantity: parseInt(value),
          subtotal: orderItem.price * parseInt(value),
        };
      }
      return orderItem;
    });
    setCartList(newCartList);
  };

  return (
    <>
      <div id="root">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <SidebarMenus
                clickMenuId={clickMenuId}
                setClickMenuId={setClickMenuId}
                handleAddItem={handleAddItem}
              />
            </div>
            <div className="col-md-8">
              <CartPanel
                cartList={cartList}
                handleRemoveItem={handleRemoveItem}
                updateCartList={updateCartList}
                sum={sum}
                setSum={setSum}
                remark={remark}
                setRemark={setRemark}
                setOrderList={setOrderList}
              />
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <OrderPanel remark={remark} sum={sum} orderList={orderList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
