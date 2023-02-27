import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("should render new note", async () => {
  render(<App />);
  const newText = await screen.findByPlaceholderText(
    /type here to enter a new note.../i
  );
  userEvent.type(newText, "Hello Phish");

  const saveClick = await screen.findByRole("button", {
    name: "Save",
  });
  userEvent.click(saveClick);

  const newNote = await screen.findByText("Hello Phish");
  expect(newNote).toBeVisible();
});

it("should show 198 remaining", async () => {
  render(<App />);
  const newText = await screen.findByPlaceholderText(
    /type here to enter a new note.../i
  );
  userEvent.type(newText, "Yo");

  const newRemain = await screen.findByText(/198 remaining/i);
  expect(newRemain).toBeInTheDocument();
});

// it("should filter names", async () => {
//   render(<App />);

//   const filterText = await screen.findByDisplayValue("Top Gun");
// });

it("should delete a note", async () => {
  const deleteClick = await screen.findByTestId("deleteBtn1");
  userEvent.click(deleteClick);

  const nameText = screen.queryByText("Thunder Gun Express");
  expect(nameText).not.toBeInTheDocument();
});
