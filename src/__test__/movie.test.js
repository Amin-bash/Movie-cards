import { render, screen } from "@testing-library/react"
import { MovieCard } from "../components/movie/card"

describe("movie cart test", () => {
    test("test movie card component", () => {
        render(<MovieCard
            movie={{
                Year: '2003',
                Title: 'Movie one'
            }}
        />)
        const year = screen.getByTestId("year")
        expect(year.textContent).toBe('2003')
        const title = screen.getByTestId("title")
        expect(title.textContent).toBe('Movie one')
        const inYear = screen.getByTestId("in-year")
        expect(inYear.textContent).toBe("In Year 2003")
    })


})