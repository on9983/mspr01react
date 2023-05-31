import React from 'react'
class ConnexionNop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red", conChecker: "false"};
    // this.indentifieur = this.indentifieur.bind(this);
  }

  

  async indentifieur(props) {
    fetch("http://127.0.0.1:8004/login/jsonLogin", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials:true,
      body: JSON.stringify ({
        "username": "fgauth@fg.fg",
        "password": "testpw"
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {console.log(error);})
  }


  render() {
    return <>
      <h1>Bonjour, {this.props.name}, {this.state.color}</h1>
      <h1>Connected? : {this.state.conChecker}</h1>
      <button type="button" onClick={this.indentifieur.bind(this)}>
          Test de connexion
      </button>
    
    </>
  }
}

export default ConnexionNop