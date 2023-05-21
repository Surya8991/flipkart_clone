import './App.css';
import { useEffect } from 'react';
import Header from './Components/Header/Header.js';
import alanBtn from '@alan-ai/alan-sdk-web';

function App() {

  useEffect(() => {
    alanBtn({
      key: "f2e6acfac980920c814d6e3b738c99832e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command }) => {
        if (command === "first command") {
          console.log("First command");
        }
      }
    });

  }, []);


  return (
    <>
      <Header />
    </>
  );
}

export default App;
