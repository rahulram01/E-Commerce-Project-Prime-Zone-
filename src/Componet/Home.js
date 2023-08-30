import React from 'react';
import '../CSS/Home.css';
import Product from './Products';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://pbs.twimg.com/media/FPc5WCpXoA0Yo86.jpg:large"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Prime Hydration Drink Combo 5 Flavours (Blue Raspberry, Lemon Lime, Lemonade, Strawberry Watermelon, Ice Pop) Each 500ml"
            price={1200}
            rating={5}
            image="https://m.media-amazon.com/images/I/51U6l-z4HFL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="Red Bull Energy Drink, The Summer Edition, Apricot-Strawberry Flavour, 250 ml (24 Pack)"
            price={800}
            rating={4}
            image="https://m.media-amazon.com/images/I/716-OC33-EL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Greyr"
            price={120000}
            rating={3}
            image="https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg"
          />
          <Product
            id="23445930"
            title="HP Pavilion Gaming 11th Gen Intel Core i5 15.6(39.6cm) FHD Gaming Laptop (8GB RAM/512GB SSD/RTX 3050 4GB Graphics/144 Hz/B&O/Windows 10 Home/MS Office/2.23Kg), 15-dk2012TX, Black"
            price={50000}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DmOWr3rnL._SX569_.jpg"
          />
          <Product
            id="3254354345"
            title="ASUS TUF Gaming F15, 15.6(39.62 cms) FHD 144Hz, Intel Core i5-11400H 11th Gen, RTX 3050 4GB Graphics, Gaming Laptop (8GB/512GB SSD/90WHrs Battery/Windows 11/Office 2021/Black/2.3 kg) FX506HC-HN089WS"
            price={65000}
            rating={4}
            image="https://m.media-amazon.com/images/I/41LDfnScXZS._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3454"
            image="https://m.media-amazon.com/images/I/31qeR3U2bdL._SY445_SX342_QL70_FMwebp_.jpg"
            price={95000}
            rating={5}
            title="Apple iPhone 14 Pro (256 GB) - Space Black"
          />
          <Product
            id="25454"
            image="https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg"
            price={110000}
            rating={4}
            title="Apple iPhone 13 (128GB) - Midnight"
          />
        </div>

        <div className="home__row">
          <Product
            id="83454"
            image="https://m.media-amazon.com/images/I/61PHfaMdP7L._UX522_.jpg"
            price={8643}
            rating={4}
            title="Safari Pentagon Trolley Bag, Suitcase for Travel, 4 Wheel Red Luggage for Men and Women, Polypropylene Hard Side Cabin and Check in Bag"
          />
          <Product
            id="3454"
            image="https://m.media-amazon.com/images/I/31mUgvf0QTL._SX300_SY300_QL70_FMwebp_.jpg"
            price={3000}
            rating={5}
            title="American Tourister Fizz Large Size 32 Ltrs Casual Backpack (BLACK)"
          />
          <Product
            id="3454"
            image="https://m.media-amazon.com/images/I/61+nWHOURiL._UX522_.jpg"
            price={2600}
            rating={5}
            title="Safari RAY 77 Cms Large Check-in Polycarbonate (PC) Soft Sided 4 Wheels 360 Degree Wheeling System Suitcase, Midnight Blue"
          />
        </div>

        <div className="home__row">
          <Product
            id="63445"
            image="https://m.media-amazon.com/images/I/71NCBXev2YL._UX569_.jpg"
            price={800}
            rating={5}
            title="Symbol Premium Men's Allday Fresh Buttondown Oxford Shirt: Regular Fit"
          />
          <Product
            id="73445"
            image="https://m.media-amazon.com/images/I/61m1iT0YzpL._UX569_.jpg"
            price={500}
            rating={2}
            title="VACARIOUS Men's Cotton Regular Fit All Over Print Casual Shirt (Maroon)"
          />
        </div>

        <div className="home__row">
          <Product
            id="83445"
            image="https://m.media-amazon.com/images/I/41UWJGaAeVL._AC_UL600_FMwebp_QL65_.jpg"
            price={4500}
            rating={5}
            title="Vector X Flame Indoor Fotball Shoes (Silver-Orange)"
          />
          <Product
            id="3454"
            image="https://m.media-amazon.com/images/I/41HjWj+zvtL._AC_SR160,160_.jpg"
            price={3000}
            rating={5}
            title="Bacca Bucci® Men's Wager Basketball Shoes with Natural Rubber Sole & Breathable Upper"
          />
          <Product
            id="3454"
            image="https://m.media-amazon.com/images/I/31IFu6TRi+L.jpg"
            price={2600}
            rating={5}
            title="YONEX Non Marking Badminton Shoes
"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={120000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
