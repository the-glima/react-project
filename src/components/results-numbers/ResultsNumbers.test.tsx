import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResultsNumbers from './ResultsNumbers'

describe('Results Numbers', () => {
  it('loads and displays title', async () => {
    const data = {
      numbers: [5, 4, 3],
      euroNumbers: [2, 1]
    }

    const {getByText} = render(<ResultsNumbers data={data} className="test" />)

    expect(getByText('EuroJackpot Results for')).toBeInTheDocument()
    expect(getByText('Friday 08 May 2020')).toBeInTheDocument()
  })

  it('loads and displays winning numbers list', async () => {
    const data = {
      numbers: [5, 4, 3],
      euroNumbers: [2, 1]
    }

    const {getByTestId} = render(<ResultsNumbers data={data} className="test" />)

    const numbersList = getByTestId('numbers-list')
    const euroNumbers = getByTestId('euro-numbers-list')

    expect(numbersList).toBeInTheDocument()
    expect(numbersList.children).toHaveLength(3)
    expect(numbersList.children[0].textContent).toBe('5')
    expect(numbersList.children[1].textContent).toBe('4')
    expect(numbersList.children[2].textContent).toBe('3')

    expect(euroNumbers).toBeInTheDocument()
    expect(euroNumbers.children).toHaveLength(2)
    expect(euroNumbers.children[0].textContent).toBe('2')
    expect(euroNumbers.children[1].textContent).toBe('1')
  })
})
