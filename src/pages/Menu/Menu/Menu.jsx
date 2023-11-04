import React from 'react';
import TopMenuSection from '../TopMenuSection1/TopMenuSection1';
import Desserts from '../Desserts/Desserts';
import DessertsMenu from '../DessertsMenu/DessertsMenu';
import useMenu from '../../../hooks/useMenu';
import PopularMenu from '../PopularMenu/MenuSectionOne';
import PizzaPalalux from '../PizzaPalalux/PizzaPalalux';
import PizzaMenu from '../PizzaMenu/PizzaMenu';

const Menu = () => {
    const [menu, loading] = useMenu()
    const popular = menu.filter(data => data.category === "popular")
    const dessert = menu.filter((data) => data.category === "dessert");
    const pizza = menu.filter((data)=> data.category === "pizza")
    return (
        <div>
            <TopMenuSection/>
            <PopularMenu  menus={popular} />
            <Desserts/>
            <DessertsMenu menus={dessert} />
            <PizzaPalalux/>
            <PizzaMenu menus={pizza} />
        </div>
    );
};

export default Menu;