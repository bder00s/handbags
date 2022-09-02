import React from "react";
import "./App.css";
import Button from "./components/Button";
import Product from "./components/Product";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav className="nav">
        <Button
          isDisabled={false}
          clickHandler={() => console.log("to the collection")}
        >
          {" "}
          To the collection
        </Button>

        <Button
          isDisabled={false}
          clickHandler={() => console.log("shop all bags")}
        >
          {" "}
          Shop all bags
        </Button>

        <Button isDisabled={true} clickHandler={() => console.log("pre-order")}>
          Pre-order
        </Button>
      </nav>

      <main>
        <Product
          redLabel="Best Seller"
          image={bag1}
          titleImage="First bag"
          name="The Handy bag"
          price={400}
        />

        <Product
          redLabel="Best Seller"
          image={bag2}
          titleImage="Second bag"
          name="The Stylish bag"
          price={250}
        />

          <Product
              redLabel="New collection"
              image={bag3}
              titleImage="Third bag"
              name="The Simple bag"
              price={300}
              />

          <Product
              redLabel="New collection"
              image={bag4}
              titleImage="Fourth bag"
              name="The Trendy bag"
              price="150"
              />
      </main>
    </>
  );
}

export default App;



