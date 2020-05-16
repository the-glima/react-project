import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResultsNumbers from './ResultsNumbers'

import {resultsStoreWinningNumbersMock} from '../../../../../test/mocks'

describe('Results Numbers', () => {
  const data = {
    winningNumbers: resultsStoreWinningNumbersMock,
    date: '05/08/2020'
  }

  it('loads and displays title', async () => {
    const {getByText} = render(<ResultsNumbers data={data} className="test" />)

    expect(getByText('EuroJackpot Results for')).toBeInTheDocument()
    expect(getByText('Friday, 8 May 2020')).toBeInTheDocument()
  })

  it('loads and displays winning numbers list', async () => {
    const {getByTestId} = render(<ResultsNumbers data={data} className="test" />)

    const numbersList = getByTestId('numbers-list')
    const euroNumbers = getByTestId('euro-numbers-list')

    expect(numbersList).toBeInTheDocument()
    expect(numbersList.children).toHaveLength(5)
    expect(numbersList.children[0].textContent).toBe('9')
    expect(numbersList.children[1].textContent).toBe('11')
    expect(numbersList.children[2].textContent).toBe('15')
    expect(numbersList.children[3].textContent).toBe('36')
    expect(numbersList.children[4].textContent).toBe('43')

    expect(euroNumbers).toBeInTheDocument()
    expect(euroNumbers.children).toHaveLength(2)
    expect(euroNumbers.children[0].textContent).toBe('8')
    expect(euroNumbers.children[1].textContent).toBe('9')
  })
})
