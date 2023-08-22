const CartPanelList = () => {
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
          <tr>
            <td>
              <button type="button" className="btn btn-sm">
                x
              </button>
            </td>
            <td>四季春茶</td>
            <td>
              <small>香醇四季春茶，回甘無比</small>
            </td>
            {/* const array = Array.from({ length: 10}, (num, i) => i)
// [0,1,2,3,4,5,6,7,8,9] */}
            {/* <select>
{array.map((a) => (
<option value={a+1}>{a+1}</option>
)) */}
            <td>
              <select className="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </td>
            <td>45</td>
            <td>45</td>
          </tr>
          {/* <tr>
            <td>
              <button type="button" className="btn btn-sm">
                x
              </button>
            </td>
            <td>翡翠檸檬</td>
            <td>
              <small>綠茶與檸檬的完美結合</small>
            </td>
            <td>
              <select className="form-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </td>
            <td>55</td>
            <td>55</td>
          </tr> */}
        </tbody>
      </table>
      <div className="text-end mb-3">
        <h5>
          總計: <span>$100</span>
        </h5>
      </div>
    </>
  );
};
export default CartPanelList;
