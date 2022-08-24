import React from "react";
import AreaTexto from "./AreaTexto";
import Alerta from './Alerta';

export default class Contenedor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "Contenedor de prueba"
        }
    }
    handlerChange = (e) => {
        console.log("handler", e)
        this.setState({ texto: e.target.value })
    }
    render() {
        return (
            <div>
                <AreaTexto onChange={this.handlerChange}
                    texto={this.state.texto}></AreaTexto>
                <Alerta texto={this.state.texto}></Alerta>
            </div>
        );
    }
}

