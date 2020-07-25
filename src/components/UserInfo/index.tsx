import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import moment from "moment";

import { Container } from "./styledComponents";
import { MemberType } from "../../types";

interface Props {
  member: MemberType;
}

class UserInfo extends React.Component<Props> {
  currentUser: any;

  userActivityToday = () => {
    const { member } = this.props;
    const dates = member.activity_periods;
    const date = dates.filter((eachPeriod) =>
      DateUtils.isSameDay(
        new Date(Date.now()),
        new Date(
          moment(eachPeriod.start_time, "MMM D YYYY").format("YYYY-MM-DD")
        )
      )
    );
    if (date.length === 1) {
      return `Active Period of ${member.real_name} today is from ${date[0].start_time} to ${date[0].end_time}`;
    }
    return `${member.real_name} is not active today`;
  };

  getDates = () => {
    const { member } = this.props;
    const dates = member.activity_periods;
    return dates.map(
      (eachPeriod) =>
        new Date(
          moment(eachPeriod.start_time, "MMM D YYYY").format("YYYY-MM-DD")
        )
    );
  };
  render() {
    return (
      <Container>
        {this.userActivityToday()}
        <DayPicker selectedDays={this.getDates()}></DayPicker>
      </Container>
    );
  }
}

export default UserInfo;
