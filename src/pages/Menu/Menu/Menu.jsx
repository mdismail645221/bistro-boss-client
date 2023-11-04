import React from 'react';
import TopMenuSection from '../TopMenuSection1/TopMenuSection1';
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

const Menu = () => {
    const [menu, loading] = useMenu()
    const popular = menu.filter(data => data.category === "popular")
    const dessert = menu.filter((data) => data.category === "dessert");
    const pizza = menu.filter((data)=> data.category === "pizza")
    const salad = menu.filter((data)=> data.category === "salad");
    const soup = menu.filter((data)=> data.category === "soup");
    
    return (
        <div>
            <TopMenuSection/>
            <PopularMenu  menus={popular} />
            <Desserts/>
            <DessertsMenu menus={dessert} />
            <PizzaPalalux/>
            <PizzaMenu menus={pizza} />
            <SaladParalax/>
            <SaladMenu menus={salad} />
            <SoupParalux/>
            <SoupMenu menus={soup} />
        </div>
    );
};

export default Menu;