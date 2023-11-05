import React, { useState } from "react";
import ImgTextOverlay from "../../../components/shared/ImgTextOverlay/ImgTextOverlay";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu, loading] = useMenu();
  const popular = menu.filter((data) => data.category === "popular");
  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const salad = menu.filter((data) => data.category === "salad");
  const soup = menu.filter((data) => data.category === "soup");

  return (
    <section>
      <div>
        <ImgTextOverlay
          imgUrl={shopImg}
          heading={"OUR SHOP"}
          subtag={"this is our shop menu"}
          btnLink={"/"}
        />

        <section className="ourShop-Tabs-Wrapper section-py ">
          <div className="container mx-auto">
            {/* tabs container box  */}
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList>
                <Tab>salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soup</Tab>
                <Tab>dessert</Tab>
              </TabList>

              <TabPanel>
                {" "}
                {/* salad tas info start*/}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {salad.map((item) => (
                    <FoodCard product={item} key={item._id} />
                  ))}
                </div>
              </TabPanel>
              {/* salad tas info end*/}

              {/* pizza tabs info  */}
              <TabPanel>
                {" "}
                {/* pizza tas info start*/}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {pizza.map((item) => (
                    <FoodCard product={item} key={item._id} />
                  ))}
                </div>
              </TabPanel>
              {/* pizza tas info end*/}

              {/* soup tas info start*/}
              <TabPanel>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {soup.map((item) => (
                    <FoodCard product={item} key={item._id} />
                  ))}
                </div>
              </TabPanel>
              {/* soup tas info start*/}

               {/* soup tas info start*/}
               <TabPanel>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {dessert.map((item) => (
                    <FoodCard product={item} key={item._id} />
                  ))}
                </div>
              </TabPanel>
              {/* soup tas info start*/}
            </Tabs>

          </div>
        </section>
      </div>
    </section>
  );
};

export default OurShop;
