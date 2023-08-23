import { useState } from "react";

const CartPanelItem = ({ cart, handleRemoveItem, updateCartList }) => {
  const [selectedValue, setSelectedValue] = useState(1);
  const selectNumberOptions = Array.from({ length: 10 }, (num, i) => i + 1);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    updateCartList(cart, newValue);
  };

  return (
    <>
      <tr key={cart.id}>
        <td>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => handleRemoveItem(cart.id)}
          >
            x
          </button>
        </td>
        <td>{cart.name}</td>
        <td>
          <small>{cart.description}</small>
        </td>
        <td>
          <select className="form-select" onChange={handleSelectChange}>
            {selectNumberOptions.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </td>
        <td>{cart.price}</td>
        <td>{cart.price * selectedValue}</td>
      </tr>
    </>
  );
};
export default CartPanelItem;
