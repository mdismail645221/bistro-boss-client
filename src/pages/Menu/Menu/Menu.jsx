import React from 'react';
import Desserts from '../Desserts/Desserts';
import DessertsMenu from '../DessertsMenu/DessertsMenu';
import useMenu from '../../../hooks/useMenu';
import PopularMenu from '../PopularMenu/MenuSectionOne';
import PizzaPalalux from '../PizzaPalalux/PizzaPalalux';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import SaladParalax from '../SaladParalax/SaladParalax';
import SaladMenu from '../SaladMenu/SaladMenu';
import SoupParalux from '../SoupParalux/SoupParalux';
import SoupMenu from '../SoupMenu/SoupMenu';
import { Helmet } from 'react-helmet';
import ImgTextOverlay from '../../../components/shared/ImgTextOverlay/ImgTextOverlay';
import popularImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu, loading] = useMenu()
    const popular = menu.filter(data => data.category === "popular")
    const dessert = menu.filter((data) => data.category === "dessert");
    const pizza = menu.filter((data)=> data.category === "pizza")
    const salad = menu.filter((data)=> data.category === "salad");
    const soup = menu.filter((data)=> data.category === "soup");
    
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Menu</title>
            </Helmet>
            
            {/* paralax (popular) */}
            <ImgTextOverlay imgUrl={popularImg} btnLink={"/"} heading="Our Menu" subtag="Would you like to try a dish?" />
            {/* popular Menu component */}
            <PopularMenu  menus={popular} />

            {/* dessert paralax component */}
            <ImgTextOverlay imgUrl={dessertImg} btnLink={"/"} heading="dessert" subtag="Would you like to try a dish?" />
            {/* dessert menu category component */}
            <DessertsMenu menus={dessert} />

            {/* pizza paralax banner  */}
            <ImgTextOverlay imgUrl={pizzaImg} btnLink={"/"} heading="pizza" subtag="Would you like to try a dish?" />
            {/* pizza menu component */}
            <PizzaMenu menus={pizza} />
            
            {/* salad paralux banner  */}
            <ImgTextOverlay imgUrl={saladImg} btnLink={"/"} heading="Salad" subtag="Would you like to try a dish?" />
            {/* salad menu component */}
            <SaladMenu menus={salad} />

            <ImgTextOverlay imgUrl={soupImg} btnLink={"/"} heading="Soups" subtag="Would you like to try a dish?" />
            <SoupMenu menus={soup} />
        </div>
    );
};

export default Menu;