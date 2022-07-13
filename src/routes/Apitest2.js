import React, { Component } from 'react';
class Apitest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        productos: [],
        err: null,
        isLoading: false
     }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    let api_url = 'https://juanbunesapirest.herokuapp.com/productos/';
    console.log("api");
    fetch(api_url)
    .then(res => {
        if(res.status >= 400) {
            throw new Error("Error de Servidor!");
        }
        return res.json();
    })
    .then(productos => {
        this.setState({
            productos,
            isLoading: false
        })
    },
    err => {
        this.setState({
            err,
            isLoading: false
        })
    });
  }

  render() {
    let {productos, err, isLoading} = this.state;
    if(err) {
        return (
        <div> { err.message } </div>
        )
    }
    if(isLoading) {
        return (
        <div> Loading... </div>
        )
    }
    return (
    <div>
        { productos.length > 0 ?
            <ul>
                {productos.map( user => (
                    <li key={user.id} >
                        { user.id }
                    </li>
                ))}
            </ul>
            : <div> Productos no encontrados </div> }
    </div>
    )
  }
}

export default Apitest2;