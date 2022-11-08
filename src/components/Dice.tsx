import "./Dice.css";

interface IDice {
    key: string;
    value: number;
    isHeld: boolean;
    handleClick: () => void;
}

export default function Dice(props: IDice) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div
            className="dice-face"
            style={styles}
            onClick={props.handleClick}
            
        >
            <h2 className="dice-numbers">{props.value}</h2>
        </div>
    );
}
