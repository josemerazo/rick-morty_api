import react from "react";

class Card extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "Bienvendios a React",
            descripcion: "Esto es la prueba"
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.titulo ?? this.state.titulo}</h2>
                <p>{this.props.descripcion}</p>
            </div>)
    }
}
export default Card;