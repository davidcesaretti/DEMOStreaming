import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { Movies } from './Movies'
import { store } from '../../store/index'

const component = render(
    <Provider store={store}>
        <BrowserRouter>
            <Movies />
        </BrowserRouter>
    </Provider>
)

describe('Movies', () => {
    it('must display a title', () => {
        expect(screen.queryByText(/popular movies/i)).toBeInTheDocument()
    })
})
