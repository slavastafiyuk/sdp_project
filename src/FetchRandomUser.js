import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };
  async componentDidMount() {
    const url = "http://localhost:8080/armazem/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results, loading: false });
    console.log(data)
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }



    return (
      <div>
        <div>{this.state.person.id}</div>
      </div>
    );
  }
}