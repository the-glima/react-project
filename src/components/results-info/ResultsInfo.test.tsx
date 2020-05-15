import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResultsInfo from './ResultsInfo'

describe('Results Info', () => {
  it('loads and displays results info content', async () => {
    const data = {id: 123, date: '15.05.2020' as any}

    const {getByText} = render(<ResultsInfo data={data} className="test" />)

    expect(getByText('The EuroJackpot numbers for 15.05.2020')).toBeInTheDocument()
    expect(getByText('The 123rd draw for the EuroJackpot was held on 15.05.2020')).toBeInTheDocument()
  })
})
