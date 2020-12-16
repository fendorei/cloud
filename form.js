class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('/users', { 
      method: 'POST',
      data: {
        commerce: this.ref.commerce,
        product: this.ref.product,
        gender: this.ref.gender,
        audience: this.ref.audience,
        price: this.ref.price,
        app: this.ref.app
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-commerce
          <input type="text" ref="commerce" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Type de Produit/ Marque
          <input type="text" ref="product" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Genre recherché
          <input type="text" ref="gender" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Public ciblé
          <input type="text" ref="audience" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Tarif de l'influenceur
          <input type="text" ref="price" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Application souhaitée
          <input type="text" ref="app" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);