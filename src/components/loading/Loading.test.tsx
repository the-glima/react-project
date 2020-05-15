import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Loading from './Loading'

describe('Loading', () => {
  it('loads and displays loading component', async () => {
    const {getByText} = render(<Loading className="test" />)

    expect(getByText('Loading...')).toBeInTheDocument()
  })
})
