import PopularMenuItems from "../../PopularMenuItems";
import SectionTitle from "../../SectionTitle";
import { Link } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu.filter(item => item.category === "popular");



 if(loading){
  return <div>Loading .... </div>
 }



  return (
    <section className="container mx-auto section-py">
     <SectionTitle
        subHeading="Popular Items"
        mainHeading="FROM OUR MENU"
     />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
        {popular.map((item) => (
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
