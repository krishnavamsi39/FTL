import React from "react";

import RModal from "react-modal";

import {
  UsersContainer,
  User,
  Container,
  UserContainer,
  CloseIconContainer,
} from "./styledComponents";
import { MemberType } from "../../types";
import CloseIcon from "../CloseIcon";
import UserInfo from "../UserInfo";

interface Props {
  data: MemberType[];
}

interface State {
  isOpen: boolean;
}

class UserList extends React.Component<Props, State> {
  currentUser: any;
  constructor(props: any) {
    super(props);
    this.state = { isOpen: false };
  }
  onClickUser = (eachUser: MemberType) => {
    this.currentUser = eachUser;
    this.setState({ isOpen: true });
  };

  renderUsers = () => {
    const { data } = this.props;
    return data.map((eachUser: MemberType) => (
      <UsersContainer
        key={eachUser.id}
        onClick={() => this.onClickUser(eachUser)}
      >
        <User>{eachUser.real_name}</User>
      </UsersContainer>
    ));
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  renderContent = () => {
    return (
      <UserContainer>
        <CloseIconContainer onClick={this.closeModal}>
          <CloseIcon />
        </CloseIconContainer>
        <UserInfo member={this.currentUser} />
      </UserContainer>
    );
  };

  render() {
    return (
      <Container>
        <h1>Users </h1>
        {this.renderUsers()}
        <RModal isOpen={this.state.isOpen}>{this.renderContent()}</RModal>
      </Container>
    );
  }
}

export default UserList;
