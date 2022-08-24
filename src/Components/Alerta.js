import react from "react";

export default class Alerta extends react.Component {
    render() {
        return (
            <div className="alert alert-primary" role="alert">
                {this.props.texto}
            </div>
        );
    }
}