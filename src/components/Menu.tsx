import React from "react";

interface MenuProps {
  menuItems: Array<Menu>
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <div className="menu">
      {
        menuItems && menuItems.map((menuItem, index) => {
          <button key={index}>{menuItem.title}</button>
        })
      }
    </div>
  )
};
