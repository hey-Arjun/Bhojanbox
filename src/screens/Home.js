import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousal />

      {/* Card Grid Section */}
      <div className="container my-5">
        <h2 className="text-center text-success mb-4">Popular Dishes</h2>
        <div className="row">
          <Card
            title="Spicy Momos"
            imgSrc="/Momos.jpg"
            desc="Steamed dumplings with spicy filling and tangy sauce."
          />
          <Card
            title="Cheesy Pizza"
            imgSrc="/Pizza.jpg"
            desc="Loaded cheese pizza with crunchy crust and fresh toppings."
          />
          <Card
            title="Crunchy Burger"
            imgSrc="/Burger.jpg"
            desc="Juicy burger with crispy patty, lettuce, and special sauce."
          />
          <Card
            title="Masala Dosa"
            imgSrc="/dosa.jpg"
            desc="Crispy dosa filled with spiced mashed potatoes."
          />
          <Card
            title="Hakka Chowmein"
            imgSrc="/noodles.png"
            desc="Stir-fried noodles with vegetables and soy sauce."
          />
          <Card
            title="Chole Bhature"
            imgSrc="/CBhature.jpg"
            desc="Delicate rolls of rice, fish and veggies."
          />
          <Card
            title="Italian Pasta"
            imgSrc="/Pasta.jpg"
            desc="Creamy and delicious pasta with herbs."
          />
          <Card
            title="Grilled Sandwich"
            imgSrc="/sandwich.avif"
            desc="Toasted sandwich with veggies and cheese."
          />
          <Card
            title="Steamed Idli"
            imgSrc="/idli.jpg"
            desc="Soft, steamed rice cakes served with chutney."
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
