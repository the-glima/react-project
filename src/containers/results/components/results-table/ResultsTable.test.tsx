import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {resultsStoreTiersMock} from '../../../../../test/mocks'

import ResultsTable from './ResultsTable'

describe('Results Table', () => {
  it('loads and displays table data', async () => {
    const data = resultsStoreTiersMock

    const {getByTestId} = render(<ResultsTable data={data} className="test" />)

    const tableBody = getByTestId('table-body')

    expect(tableBody).toBeInTheDocument()
    expect(tableBody.children).toHaveLength(data.length)

    expect(getByTestId('table-row-0').children[0].textContent).toBe('I')
    expect(getByTestId('table-row-0').children[1].textContent).toBe('5 Numbers +2 Euronumbers')
    expect(getByTestId('table-row-0').children[2].textContent).toBe('1x')
    expect(getByTestId('table-row-0').children[3].textContent).toBe('€ 13.286.943,40')

    expect(getByTestId('table-row-5').children[0].textContent).toBe('VI')
    expect(getByTestId('table-row-5').children[1].textContent).toBe('4 Numbers +0 Euronumbers')
    expect(getByTestId('table-row-5').children[2].textContent).toBe('1,444x')
    expect(getByTestId('table-row-5').children[3].textContent).toBe('€ 107,60')

    expect(getByTestId('table-row-11').children[0].textContent).toBe('XII')
    expect(getByTestId('table-row-11').children[1].textContent).toBe('2 Numbers +1 Euronumbers')
    expect(getByTestId('table-row-11').children[2].textContent).toBe('546,864x')
    expect(getByTestId('table-row-11').children[3].textContent).toBe('€ 7,70')
  })
})
