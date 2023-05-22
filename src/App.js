import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header.js';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Data } from './Data.js';
import Card from './Components/Card/Card';
// import { Route, Switch, useNavigate } from "react-router-dom";
// import Navbar from './Components/Navbar.js';

function App() {
  const [category, setCategory] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    alanBtn({
      key: "f2e6acfac980920c814d6e3b738c99832e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === "first command") {
          console.log("First command");
        }
        if (command === "show shoes") {
          filter("shoe");
        }

        if (command === "show pants") {
          filter("pant");
        }

        if (command === "show shirt") {
          filter("shirt");
        }

        if (command === "show skirt") {
          filter("skirt");
        }

        if (command === "show sandals") {
          filter("sandal");
        }
        // if (command === "cartPage") {
        //   navigate("/cart");
        // }
        // if (command === "ordersPage") {
        //   navigate("/orders");
        // }
        // if (command === "homePage") {
        //   navigate("/");
        // }
        // End Tags
      }
    });
    filter("")

  });

  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };


  return (
    <>
      {/* <Switch>
        <Route exact path="/"> */}
          <Header />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {category.map((item) => (
              <Card
                image={item.image}
                name={item.name}
                rating={item.rating}
                actualPrice={item.actualPrice}
                offerPrice={item.offerPrice}
              />
            ))}
          </div>
        {/* </Route> */}

        {/* <Route exact path="/cart">
          <Navbar text={"This is Cart Page"} />
        </Route>
        <Route exact path="/orders">
          <Navbar text={"This is Orders Page"} />
        </Route>
      </Switch> */}
    </>
  );
}

export default App;
