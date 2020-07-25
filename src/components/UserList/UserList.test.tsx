import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UserList from ".";

const data = [
  {
    id: "W012A3CDE",
    real_name: "Egon Spengler",
    tz: "America/Los_Angeles",
    activity_periods: [
      {
        start_time: "Feb 1 2020  1:33PM",
        end_time: "Feb 1 2020 1:54PM",
      },
      {
        start_time: "Mar 1 2020  11:11AM",
        end_time: "Mar 1 2020 2:00PM",
      },
      {
        start_time: "Mar 16 2020  5:33PM",
        end_time: "Mar 16 2020 8:02PM",
      },
    ],
  },
  {
    id: "W07QCRPA4",
    real_name: "Glinda Southgood",
    tz: "Asia/Kolkata",
    activity_periods: [
      {
        start_time: "Feb 1 2020  1:33PM",
        end_time: "Feb 1 2020 1:54PM",
      },
      {
        start_time: "Mar 1 2020  11:11AM",
        end_time: "Mar 1 2020 2:00PM",
      },
      {
        start_time: "Mar 16 2020  5:33PM",
        end_time: "Mar 16 2020 8:02PM",
      },
    ],
  },
];
describe("renders list of users", () => {
  it("should test user name", () => {
    const { getByText } = render(<UserList data={data} />);
    getByText(data[0].real_name);
    getByText(data[1].real_name);
  });
});
