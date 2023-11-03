import { useEffect, useState } from "react";
// import PopularMenuItems from "../../PopularMenuItems";
// import SectionTitle from "../../SectionTitle";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import PopularMenuItems from "../../../components/PopularMenuItems";

const MenuSectionOne = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularMenu = data.filter(item => item.category === "popular");
        setMenu(PopularMenu);
      });
  }, []);
  return (
    <section className="section-py">
      <div className="container mx-auto">
        <SectionTitle subHeading="Don't miss" mainHeading="TODAY'S OFFER" />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
          {menu.map((item) => (
            <PopularMenuItems key={item._id} item={item}></PopularMenuItems>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSectionOne;
