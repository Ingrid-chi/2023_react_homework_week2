// import React from "react";
import "bootstrap/scss/bootstrap.scss";
import { SIDEBAR_MENU_DATA } from "../../data/sidebarMenuData";

const SidebarMenus = ({ handleAddItem }) => {
  return (
    <>
      <div className="list-group">
        {SIDEBAR_MENU_DATA.map((sidebarMenu, index) => {
          return (
            <a
              href="#"
              className="list-group-item list-group-item-action"
              key={index}
              onClick={() => {
                handleAddItem(sidebarMenu.id);
              }}
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
