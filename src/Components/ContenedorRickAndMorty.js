import React from "react";
import FichaRickAndMorty from "./FichaRickAndMorty";
import axios from "axios";

export default class ContenedorRickAndMorty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {
        axios.get("https://rickandmortyapi.com/api/character").then((e => {
            console.log(e);
            this.setState({ lista: e.data.results });
        }));
    }
    render() {
        return (
            <div className="container">
                <h2>Personajes Rick & Morty</h2>
                <div className="row">
                    {this.state.lista.map(e => {
                        return <FichaRickAndMorty
                            img={e.image}
                            title={e.name} description={e.location.name}/>
                    })}
                </div>
            </div>
        );
    }
}