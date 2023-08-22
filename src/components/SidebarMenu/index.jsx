import "bootstrap/scss/bootstrap.scss";
import { SIDEBAR_MENU_DATA } from "../../data/sidebarMenuData";
import React from "react";

const SidebarMenus = () => {
  let currentOrders = [];
  const [clickMenuId, setClickMenuId] = React.useState(0);
  React.useEffect(() => {
    const currentId = SIDEBAR_MENU_DATA.find(
      (current) => current.id === clickMenuId
    );
    currentOrders.push(currentId);
  }),
    [clickMenuId];

  // React.useEffect(() => {
  //   const current = data.find((d) => d.id === clickMenuId);
  //   array.push(current);
  // }),
  //   [clickMenuId];

  return (
    <>
      <div className="list-group">
        {SIDEBAR_MENU_DATA.map((sidebarMenu) => {
          return (
            <a
              onClick={() => {
                setClickMenuId(sidebarMenu.id);
              }}
              key={sidebarMenu.id}
              href="#"
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{sidebarMenu.name}</h5>
                <small>${sidebarMenu.price}</small>
              </div>
              <p className="mb-1">{sidebarMenu.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default SidebarMenus;
