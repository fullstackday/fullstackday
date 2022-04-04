import { TimeRecordsTable } from "./TimeRecordsTable";
import { render, screen } from "@testing-library/react";

describe("<TimeRecordsTable />", () => {
  it("renders without crashing", () => {
    render(
      <TimeRecordsTable
        timeRecords={[]}
        onDeleteRecord={() => {}}
        onEditRecord={() => {}}
      />
    );
  });
  it("renders the given timeRecord", () => {
    const isoDate = "";
    render(
      <TimeRecordsTable
        timeRecords={[
          {
            _id: "1",
            start: new Date("2022-01-01T10:00:00.000Z"),
            end: new Date("2022-01-01T11:00:00.000Z"),
            project: "International JavaScript Conference",
            comment: "Prepare tests",
          },
        ]}
        onDeleteRecord={() => {}}
        onEditRecord={() => {}}
      />
    );

    screen.getByRole("rowheader", {
      name: /international javascript conference/i,
    });
  });
});
