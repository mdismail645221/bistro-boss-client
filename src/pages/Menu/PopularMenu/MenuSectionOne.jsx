
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../../../components/MenuCategory";

const PopularMenu = ({menus}) => {
  

  return (
    <section className="section-py">
      <div className="container mx-auto">
        <SectionTitle subHeading="Don't miss" mainHeading="TODAY'S OFFER" />
        <MenuCategory items={menus} />
      </div>
    </section>
  );
};

export default PopularMenu;
