import React from "react";

class Apitest extends React.Component{
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://juanbunesapirest.herokuapp.com/categorias/")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    items: res
                });
            })
    }

    render() {
        const { items } = this.state;
        return (
	        <div>
                <h1>
                </h1>
	            <u1>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.nombre_categoria}
                        </li>
                    ))}
                </u1>
	        </div>
    	);
    }
}

export default Apitest;