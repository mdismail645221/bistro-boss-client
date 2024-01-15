import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../../../components/MenuCategory";

const PizzaMenu = ({menus}) => {
  return (
    <section className="section-py">
      <div className="container mx-auto">
        <SectionTitle
          mainHeading={"OUR FAVORATE Pizza"}
          subHeading={"MUST HAVE"}
        />
        <MenuCategory items={menus} />
      </div>
    </section>
  );
};

export default PizzaMenu;
