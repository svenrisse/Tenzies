import { useState } from "react";
import { nanoid } from "nanoid";
import Dice from "./components/Dice";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(allNewDice());

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    }

    const dices = diceNumbers.map((die) => {
        return (
            <Dice
                key={die.id}
                value={die.value}
                isHeld={die.isHeld}
                handleClick={() => holdDice(die.id)}
            />
        );
    });

    function rollDice() {
        setDiceNumbers((oldDice) =>
            oldDice.map((die) => {
                return die.isHeld ? die : generateNewDie();
            })
        );
    }
    function holdDice(id) {
        setDiceNumbers((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
    }

    return (
        <main className="app-container">
            <div className="dice-container">{dices}</div>
            <button className="app-button" onClick={rollDice}>
                Roll
            </button>
        </main>
    );
}

export default App;
