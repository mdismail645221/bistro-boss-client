import React from 'react';
import MenuCategory from '../../../components/MenuCategory';
import SectionTitle from '../../../components/SectionTitle';

const SoupMenu = ({menus}) => {
    return (
        <section className="section-py">
          <div className="container mx-auto">
            <SectionTitle
              mainHeading={"OUR FAVORATE SOUPS"}
              subHeading={"MUST HAVE"}
            />
            <MenuCategory items={menus} />
          </div>
        </section>
      );
};

export default SoupMenu;