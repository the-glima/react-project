import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ErrorMessage from './ErrorMessage'

describe('Error Message', () => {
  it('loads and displays error message', async () => {
    const {getByText} = render(<ErrorMessage className="test" />)

    expect(getByText('😕')).toBeInTheDocument()
    expect(getByText('Sorry, something went wrong. Please, try again later')).toBeInTheDocument()
  })
})
