import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
            <Product
              id="12321341"
              title="Sony a7 III (ILCE7M3K/BQ) Full-frame Mirrorless changeable-Lens Camera with 28-70mm Lens with 3-Inch LCD, Black"
              price={1100}
              image="https://m.media-amazon.com/images/I/91rQ3XfEYzL._AC_UY218_.jpg"
              rating={5}
            />
            <Product
              id="12321342"
              title="LETSCOM Smart Watch for Android Phones & iPhone, 1.69 Inch Touch Screen, Alexa Built-in Heart Rate Monitor..."
              price={100}
              image="https://m.media-amazon.com/images/I/71+y8vAqhLL._AC_UY218_.jpg"
              rating={5}
            />
        </div>

        <div className="home_row">
          <Product
            id="12321343"
            title="Crucial MX500 500GB 3D NAND SATA 2.5 Inch Internal SSD, up to 560MB/s"
            price={110}
            image="https://m.media-amazon.com/images/I/81w0f+QufZL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="12321344"
            title="Laptop Backpack Women Men College Backpacks Bookbag Anti Theft ..."
            price={1100}
            image="https://m.media-amazon.com/images/I/81Utq7JJVAL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="12321345"
            title="Oster Extra Large Digital Countertop Convection Oven, Stainless Steel built easy to clean"
            price={750}
            image="https://m.media-amazon.com/images/I/71MltLWrqjL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12321346"
            title="
          Ethics Men's Sports Latest Stylish Casual Sneakers/Lace up Lightweight Shoes for Running/Walking & Gym Shoes for Men's Memory Foam Max-grip soal pattern great for Runners easily washable size UK-8/US-7 "
            price={6500}
            image="https://i1.wp.com/www.3dsourced.com/wp-content/uploads/2020/08/Reebok-Liquid-Speed-3D-printed-shoe.jpg?resize=800%2C400&ssl=1"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
