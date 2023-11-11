import React, { useState } from "react";
import ImgTextOverlay from "../../../components/shared/ImgTextOverlay/ImgTextOverlay";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import ProductTab from "../../../components/ProductTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "../../../components/Loading";

const OurShop = () => {
  const categoires = ["popular", "dessert", "pizza", "salad", "soup"];
  const { category } = useParams();
  const initialValue = categoires.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialValue);
  const [menu, loading] = useMenu();
  const popular = menu.filter((data) => data.category === "popular");
  const dessert = menu.filter((data) => data.category === "dessert");
  const pizza = menu.filter((data) => data.category === "pizza");
  const salad = menu.filter((data) => data.category === "salad");
  const soup = menu.filter((data) => data.category === "soup");

  return (
    <section>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Shop</title>
      </Helmet>

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
                <Tab>popular</Tab>
                <Tab>dessert</Tab>
                <Tab>salad</Tab>
                <Tab>pizza</Tab>
                <Tab>soup</Tab>
              </TabList>

              {/* popular tabs info start*/}
              <TabPanel>
                {loading ? (
                  <Loading />
                ) : (
                  <ProductTab product={popular} key={popular._id} />
                )}
              </TabPanel>
              {/* popular tabs info end*/}

              {/* dessert tabs info start*/}
              <TabPanel>
                {loading ? (
                  <Loading />
                ) : (
                  <ProductTab product={dessert} key={dessert._id} />
                )}
              </TabPanel>
              {/* dessert tabs info start*/}

              {/* pizza tabs info start*/}
              <TabPanel>
                {loading ? (
                  <Loading />
                ) : (
                  <ProductTab product={pizza} key={pizza._id} />
                )}
              </TabPanel>
              {/* pizza tabs info end*/}

              {/* salad tabs info start*/}
              <TabPanel>
                {loading ? (
                  <Loading />
                ) : (
                  <ProductTab product={salad} key={salad._id} />
                )}
              </TabPanel>
              {/* salad tabs info end*/}

              {/* soup tabs info start*/}
              <TabPanel>
                {loading ? (
                  <Loading />
                ) : (
                  <ProductTab product={soup} key={soup._id} />
                )}
              </TabPanel>
              {/* soup tabs info start*/}
            </Tabs>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OurShop;
