import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../../../components/MenuCategory";

const DessertsMenu = ({menus}) => {


  return (
    <section className="section-py">
      <div className="container mx-auto">
        <SectionTitle mainHeading={"OUR FAVORATE FOODS"} subHeading={"MUST HAVE"} />
        <MenuCategory items={menus} />
      </div>
    </section>
  );
};

export default DessertsMenu;
