import React from "react";
import UserList from "./components/UserList";
import { MemberType, UsersDataType } from "./types";

interface State {
  data: MemberType[];
}
class App extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    fetch("./TestData.json")
      .then((res) => {
        return res.json();
      })
      .then((result: UsersDataType) => {
        this.setState({ data: result.members });
      });
  }
  render() {
    return (
      <div className="App">
        <UserList data={this.state.data} />
      </div>
    );
  }
}

export default App;
