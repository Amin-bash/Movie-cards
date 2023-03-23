import { render, screen } from "@testing-library/react"
import { Navigation } from "../components/layout"
import { Provider } from "react-redux"
import '@testing-library/jest-dom'
import { store } from "../utils/redux/store"


describe("movie cart test", () => {
    test("test header", () => {
        render(
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
        const home = screen.getByTestId("home")
        expect(home).toBeInTheDocument()
        const movies = screen.getByTestId("movie2")
        expect(movies).toBeInTheDocument()
        const about = screen.getByTestId("about")
        expect(about).toBeInTheDocument()
    })
})