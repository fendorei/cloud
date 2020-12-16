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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          E-commerce
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Type de Produit/ Marque
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Genre recherché
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Public ciblé
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Tarif de l'influenceur
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Application souhaitée
          <input type="text" value={this.state.value} onChange={this.handleChange} />
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