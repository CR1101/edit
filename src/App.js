import { useState } from "react";
import "./styles.css";
import DrinkCard from "../Components/DrinkCard";

export default function App() {
  const [currentDrinks, setCurrentDrinks] = useState(false);

  const fetchMargs = () => {
    console.log("fetching");
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setCurrentDrinks(jsonData);
      });
  };

  const clearResults = () => setCurrentDrinks(false);

  return (
    <div className="App">
      <header>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <img className="brand-image" src="https://i.ibb.co/5xP7Sgj/bar2.png" />
      </header>
      <button className="fetchButton" onClick={fetchMargs}>
        Get Margs!
      </button>
      <button className="fetchButton" onClick={clearResults}>
        Clear
      </button>
      <div className="drinks-container">
        {currentDrinks &&
          currentDrinks.drinks.map((drink) => {
            return (
              <DrinkCard
                name={drink.strDrink}
                imageURL={drink.strDrinkThumb}
                description={drink.strInstructions}
              />
            );
          })}
      </div>
    </div>
  );
}
