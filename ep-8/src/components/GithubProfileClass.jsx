import React from "react";

class GithubProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
    console.log("ctr is called")
  }

  async componentDidMount() {
    console.log("didMount is called")
    const data = await fetch("https://api.github.com/users/sneharkive");
    const resData = await data.json();
    this.setState({ userDetails: resData });
    console.log("GitHub Data: ", resData);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }


  render() {
    console.log("render is called")
    // if (this.state.userDetails === null) {
    //   return <h1 className="text-2xl">Loading...</h1>;
    // }
    // const { name, location } = this.state.userDetails;
    return (
      <div className="p-8">
        <h1 className="text-2xl border-b-2 mb-4 px-2">
          Profile Class Component
        </h1>

        <div className="flex flex-col gap-6">
          {/* <p>GitHub Username: {name}</p> */}
          <p>GitHub Username: {this.state.userDetails?.name}</p>
        <p>GitHub Bio: {this.state.userDetails?.bio}</p>
        {/* <p>GitHub Location: {location}</p> */}
        <p>GitHub Location: {this.state.userDetails?.location}</p>
        </div>
      </div>
    );
  }
}

export default GithubProfileClass;
