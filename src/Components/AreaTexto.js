import react from "react";

export default class AreaTexto extends react.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1"
                    className="form-label">Example textarea</label>
                <textarea onChange={this.props.onChange}
                    className="form-control" id="exampleFormControlTextarea1"
                    rows="3">{this.props.texto}</textarea>
            </div>
        );
    }
}