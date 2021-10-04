import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { Home } from './Home'

beforeEach(() => render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
))

describe('Home', () => {
    it('must display a title', () => {
        expect(screen.queryByText(/popular titles/i)).toBeInTheDocument()
    })
    it('must display an option of movies', () => {
        expect(screen.queryByText(/popular movies/i)).toBeInTheDocument()
    })
    it('must display an option of series', () => {
        expect(screen.queryByText(/popular series/i)).toBeInTheDocument()
    })
})
