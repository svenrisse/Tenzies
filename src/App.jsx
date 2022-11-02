import { useState } from "react";
import Dice from "./components/Dice";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(allNewDice());

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6));
        }
        return newDice;
    }

    const dices = diceNumbers.map((number) => {
        return <Dice value={number} />;
    });

    function rollDice() {
      setDiceNumbers(allNewDice())
    }

    return (
        <main className="app-container">
            <div className="dice-container">{dices}</div>
            <button className="app-button" onClick={rollDice}>Roll</button>
        </main>
    );
}

export default App;
