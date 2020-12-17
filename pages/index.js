import Head from 'next/head'
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        commerce: '',
        product: '',
        gender: '',
        audience: '',
        price: '',
        app: '',
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({
          commerce: event.target.commerce,
          product: event.target.product,
          gender: event.target.gender,
          audience: event.target.audience,
          price: event.target.price,
          app: event.target.app
    });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      fetch('/influenceurs', { 
        method: 'POST',
        data: {
          commerce: this.state.commerce,
          product: this.state.product,
          gender: this.state.gender,
          audience: this.state.audience,
          price: this.state.price,
          app: this.state.app
        }
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="row">
                <label>E-commerce</label>
                <input type="text" ref="commerce" commerce={this.state.commerce} onChange={this.handleChange} />
            </div>
            <div className="row">
                <label>Type de Produit/ Marque</label>
                <input type="text" ref="product" commerce={this.state.product} onChange={this.handleChange} />
            </div>
            <div className="row">
                <label>Genre recherché</label>
                <input type="text" ref="gender" commerce={this.state.gender} onChange={this.handleChange} />
            </div>
            <div className="row">
                <label>Public ciblé</label>
                <input type="text" ref="audience" commerce={this.state.audience} onChange={this.handleChange} />
            </div>
            <div className="row">
                <label>Tarif de l'influenceur</label>
                <input type="text" ref="price" commerce={this.state.price} onChange={this.handleChange} />
            </div>
            <div className="row">
                <label>Application souhaitée</label>
                <input type="text" ref="app" commerce={this.state.app} onChange={this.handleChange} />
            </div>
          <input type="submit" commerce="Submit" />
        </form>
      );
    }
  }

export default function Home() {
  return (
    <div className="container">
      <Form />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .row {
            margin-top: 1%;
            margin-left: 35%;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }

        input[type=text] {
            width: 50%;
        }

        input[type=submit] {
            width: 10%;
            margin-left: 45%;
            margin-top: 1%;
        }
      `}</style>
    </div>
  )
}
