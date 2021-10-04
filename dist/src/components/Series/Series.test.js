import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { Series } from './Series'
import { store } from '../../store/index'

const component = render(
    <Provider store={store}>
        <BrowserRouter>
            <Series />
        </BrowserRouter>
    </Provider>
)

describe('Series', () => {
    it('must display a title', () => {
        expect(screen.queryByText(/popular series/i)).toBeInTheDocument()
    })
})
