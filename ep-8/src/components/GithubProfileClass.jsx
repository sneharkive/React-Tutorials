import React from "react";

class GithubProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: null,
    };
    console.log("ctr is called");
  }

  async componentDidMount() {
    console.log("didMount is called");
    const data = await fetch("https://api.github.com/users/sneharkive");
    const resData = await data.json();
    this.setState({ userDetails: resData });
    console.log("GitHub Data: ", resData);

    // for side effects like timers, network requests, subscriptions etc.
    // memory leaks can happen if we don't clear timers, cancel network requests or remove event listeners when the component unmounts.

    // this.timer = setInterval(() => {
    //   console.log("Interval is called")
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    if (prevState.count !== this.state.count) {
      // logic to be executed when count state changes
    }
    if (prevState.text !== this.state.text) {
      // more logic to be executed when text state changes
    }
  }

  componentWillUnmount() {
    console.log("Component will unmount");

    // for cleanup activities like clearing timers, cancelling network requests, removing event listeners etc.
    // it is not showing in console because i use react strict mode
    // in which component is mounted, unmounted and mounted again to
    // check for any side effects in the code. so it is showing in
    //  console but very fast that we can't see it.

    clearInterval(this.timer);
  }

  render() {
    console.log("render is called");
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
