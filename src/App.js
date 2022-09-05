import React from "react";
import "./App.css";
import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import women from "./assets/our_story.png";

function App() {
  return (
    <>
      <h1>Handbags & Purses</h1>
      <nav>
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

      <footer>
        <Tile tileTitle="The Brand">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            consequatur debitis dignissimos distinctio, dolor doloribus est
            facilis impedit nesciunt nobis numquam porro possimus, quisquam rem
            saepe tempore veritatis. Odio, suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
            quibusdam.
          </p>
        </Tile>

        <Tile tileImage={brand} tileAltText="logo picture" />

        <Tile tileImage={women} tileAltText="happy women" />

        <Tile tileTitle="Our story"
              tileText= "ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            atque consequatur dignissimos et eveniet exercitationem, ipsa ipsum
            necessitatibus, nisi odio officiis quae quidem repudiandae,
            similique temporibus! Aspernatur distinctio minus mollitia officia
            praesentium voluptatem! Aperiam atque dolores inventore iure,
            provident reiciendis?"
      />
      </footer>
    </>
  );
}

export default App;
