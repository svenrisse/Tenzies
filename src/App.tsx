import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Dice from "./components/Dice";

function App() {
    const [diceNumbers, setDiceNumbers] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = diceNumbers.every((die) => die.isHeld);
        const firstValue = diceNumbers[0].value;
        const allSameValue = diceNumbers.every(
            (die) => die.value === firstValue
        );
        if (allHeld && allSameValue) {
            setTenzies(true);
            console.log("You won!");
        }
    }, [diceNumbers]);

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

    function holdDice(id: string) {
        setDiceNumbers((oldDice) =>
            oldDice.map((die) => {
                return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
            })
        );
    }

    function rollDice() {
        if (!tenzies) {
            setDiceNumbers((oldDice) =>
                oldDice.map((die) => {
                    return die.isHeld ? die : generateNewDie();
                })
            );
        } else {
            setTenzies(false);
            setDiceNumbers(allNewDice());
        }
    }

    return (
        <main className="app-container">
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{dices}</div>
            <button className="app-button" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
            {tenzies && <Confetti />}
        </main>
    );
}

export default App;
