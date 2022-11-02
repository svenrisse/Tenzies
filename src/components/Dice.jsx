import "./Dice.css";

export default function Dice(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className="dice-face" style={styles}>
            <h2 className="dice-number">{props.value}</h2>
        </div>
    );
}
