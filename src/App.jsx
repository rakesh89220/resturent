
import React, {useState} from "react";
import "./App.css";
import Menu from "./MenuApi.jsx";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuDate] = useState(Menu);
  const [ menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) =>{
    if (category ==="All") {
      setMenuDate(Menu);
      return;
    }
     const updatedList = Menu.filter((curElem) =>{
      return curElem.category === category;
     });
     setMenuDate(updatedList);
  }; 
  return (
    <div>
      <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData={menuData} />
    </div>
  );
};

export default Resturant;
