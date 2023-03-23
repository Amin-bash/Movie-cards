import { render, screen } from "@testing-library/react"
import { Header } from "../components/layout"
import { Provider } from "react-redux"
import '@testing-library/jest-dom'
import { store } from "../utils/redux/store"


describe("movie cart test", () => {
    test("test header", () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        )
        const movie1 = screen.getByTestId("movie1")
        expect(movie1).toBeInTheDocument()
        const movie2 = screen.getByTestId("movie2")
        expect(movie2).toBeInTheDocument()
        const movie3 = screen.getByTestId("movie3")
        expect(movie3).toBeInTheDocument()
    })
})