import './App.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header/Header.js';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Data } from './Data.js';
import Card from './Components/Card/Card';
// import { useNavigate } from 'react-router-dom';


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
        //   history.push("/cart");
        // }
        // if (command === "ordersPage") {
        //   history.push("/orders");
        // }
        // if (command === "homePage") {
        //   history.push("/");
        // }
        // End Tags
      }
    });
    filter("")

  }, []);

  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  };


  return (
    <>
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: 'center' }}>
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
    </>
  );
}

export default App;
