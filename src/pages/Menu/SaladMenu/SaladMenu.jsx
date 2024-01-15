import React from "react";
import MenuCategory from "../../../components/MenuCategory";
import SectionTitle from "../../../components/SectionTitle";

const SaladMenu = ({menus}) => {
  return (
    <section className="section-py">
      <div className="container mx-auto">
        <SectionTitle
          mainHeading={"OUR FAVORATE SALADS"}
          subHeading={"MUST HAVE"}
        />
        <MenuCategory items={menus} />
      </div>
    </section>
  );
};

export default SaladMenu;
