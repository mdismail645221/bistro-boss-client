import { useEffect, useState } from "react";
import PopularMenuItems from "../../PopularMenuItems";
import SectionTitle from "../../SectionTitle";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const PopularMenu = data.slice(0, 6);
        setMenu(PopularMenu);
      });
  }, []);

  console.log({ menu });

  return (
    <section className="container mx-auto section-py">
     <SectionTitle
        subHeading="Check it out"
        mainHeading="FROM OUR MENU"
     />
      <div className="grid grid-cols-2 gap-5">
        {menu.map((item) => (
          <PopularMenuItems key={item._id} item={item}></PopularMenuItems>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <Link to='/' style={{borderBottomStyle: "12px solid black", borderRadius: "0px 0px 7px 7px"}}>View Full  Menu</Link>
      </div>
    </section>
  );
};

export default PopularMenu;
