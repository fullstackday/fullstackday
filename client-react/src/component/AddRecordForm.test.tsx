import { AddRecordForm } from "./AddRecordForm";
import { render } from "../../test/render";
import { act, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<AddRecordForm />", () => {
  it("filling the form and submitting it calls the event handler", async () => {
    const submitMock = jest.fn();
    render(<AddRecordForm isLoading={false} onSubmit={submitMock} />);

    await act(async () => {
      await userEvent.type(
        screen.getByLabelText(/project/i, { selector: "input" }),
        "International JavaScript Conference"
      );

      let dateInput = screen.getByLabelText(/date/i, { selector: "input" });

      await fireEvent.change(dateInput, {
        target: { value: "2022-04-04" },
      });

      await fireEvent.change(
        screen.getByLabelText(/start/i, { selector: "input" }),
        {
          target: { value: "14:00" },
        }
      );

      await fireEvent.change(
        screen.getByLabelText(/end/i, { selector: "input" }),
        {
          target: { value: "15:00" },
        }
      );
    });
    await userEvent.click(
      screen.getByRole("button", { name: /create/i, hidden: true })
    );

    expect(submitMock).toHaveBeenCalledTimes(1);
    expect(submitMock).toHaveBeenCalledWith({
      project: "International JavaScript Conference",
      comment: "",
      date: "2022-04-04",
      start: new Date("2022-04-04T14:00:00.000Z"),
      end: new Date("2022-04-04T15:00:00.000Z"),
    });
  });
});
