import React from "react";
import NavbarBuyer from "@/components/navbar/NavbarArtists";
import Upper from "@/components/navbar/Upper";
import Footer from "@/components/footer/Footer";
import { IoIosArrowBack } from "react-icons/io";
import "./empty-cart.css";

const EmptyCart = () => {
  return (
    <>
      <Upper />
      <NavbarBuyer />
      <div className="container">
        <div className="prev-cart">
          <IoIosArrowBack />
          <span>Cart</span>
        </div>
      </div>

      <div className="empty-cart text-center">
        <h1>Empty cart</h1>
        <p>
          You don’t have any Artwork in your cart, you can start searching now!
        </p>
        <button type="button">+ Add Artwork</button>
      </div>
      <Footer />
    </>
  );
};

export default EmptyCart;
