import "./App"
import "@testing-library/react"
import App
import screen }
import { render

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
