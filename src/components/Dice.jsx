import "./Dice.css";

export default function Dice(props) {
    return (
        <div className="dice-face">
            <h2 className="dice-number">{props.value}</h2>
        </div>
    );
}
