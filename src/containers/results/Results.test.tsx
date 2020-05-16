import React from 'react'
import createMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {resultsStoreMock} from '../../../test/mocks'

import Results from './Results'

describe('Container: Results', () => {
  let mockStore: any

  beforeEach(() => {
    mockStore = createMockStore()
  })

  it('loads and displays results component', async (done) => {
    const {container, getByText} = render(
      <Provider store={mockStore(resultsStoreMock)}>
        <Results />
      </Provider>
    )

    const html = container.outerHTML

    expect(getByText('EUROJACKPOT RESULTS & WINNING NUMBERS')).toBeInTheDocument()
    expect(html).toMatchSnapshot()
    done()
  })
})
