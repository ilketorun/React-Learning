import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("asycn testing", () => {
  test("testing the list items", async () => {
    //arranging

    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First Post" },
        { id: "p2", title: "Second Post" },
      ],
    });

    render(<Async />);

    //act
    // no act here since fetching is done by useEffect

    //assert
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
