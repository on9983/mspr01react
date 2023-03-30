import React from 'react'
class Bonjour extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red"};
    // this.indentifieur = this.indentifieur.bind(this);
  }

  async indentifieur(props) {
    fetch("http://127.0.0.1:8000/login/jsonLogin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        "username": "test26@fg.fg",
        "password": "testpw"
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))
  }


  render() {
    return <>
      <h1>Bonjour, {this.props.name}, {this.state.color}</h1>
      <button type="button" onClick={this.indentifieur.bind(this)}>
          Test de connexion
      </button>
    
    </>
  }
}

export default Bonjour