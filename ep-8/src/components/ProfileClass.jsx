import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 100,
    };
    console.log("Child ctr is called");
  }

  componentDidMount() {
    console.log("Child componentDidMount is called");
  }

  render() {
    console.log("Child Render is called");
    return (
      <div className="p-8">
        <h1 className="text-2xl border-b-2 mb-4 px-2">
          Profile Class Component
        </h1>

        <p>Name: {this.props.name}</p>
        <p>Address: {this.props.address}</p>
        <p>Profession: {this.props.profession}</p>
        <div className="flex gap-10">
          <p>Count: {this.state.count}</p>
          <p>Count2: {this.state.count2}</p>
        </div>
        <div className="flex gap-8">
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 cursor-pointer"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment Count
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 mt-4 cursor-pointer"
            onClick={() => this.setState({ count2: this.state.count2 - 1 })}
          >
            Decrement Count2
          </button>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
