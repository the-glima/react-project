import React from 'react'
import createMockStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {act, render, within} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import fetchMock from 'jest-fetch-mock'
import {enableFetchMocks} from 'jest-fetch-mock'

import {resultsStoreMock, resultsResponseMock} from '../../../test/mocks'
import {ignoreHTML} from '../../../test/helpers/queries'
import * as resultActions from './redux/ResultsActions'
import Results from './Results'

const middlewares = [thunk]
const mockStore = createMockStore(middlewares)

describe('Container: Results', () => {
  let component: any
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false
  }
  let store = mockStore({results: initialState})

  beforeEach(() => {
    enableFetchMocks()
  })

  afterEach(() => {
    store.clearActions()
    fetchMock.resetMocks()

    component = null
  })

  describe('Redux', () => {
    it('should only dispatch init when rendering component', async (done) => {
      component = render(
        <Provider store={store}>
          <Results />
        </Provider>
      )

      const actions = store.getActions()
      expect(actions).toHaveLength(1)
      expect(actions[0].type).toEqual(resultActions.ActionTypes.FETCH_RESULTS_INIT)

      const {asFragment} = component
      expect(asFragment()).toMatchSnapshot()
      done()
    })

    it('should dispatch init and success actions when rendering component', async (done) => {
      fetchMock.mockResponseOnce(JSON.stringify(resultsResponseMock))

      store = mockStore(resultsStoreMock)

      await act(async () => {
        component = render(
          <Provider store={store}>
            <Results />
          </Provider>
        )
      })

      const actions = store.getActions()
      expect(actions).toHaveLength(2)
      expect(actions[0].type).toEqual(resultActions.ActionTypes.FETCH_RESULTS_INIT)
      expect(actions[1].type).toEqual(resultActions.ActionTypes.FETCH_RESULTS_SUCCESS)
      done()
    })

    it('should dispatch init and failure actions when rendering component', async (done) => {
      fetchMock.mockRejectOnce(new Error('Not Found'))

      store = mockStore({
        results: {
          data: resultsStoreMock.results.data,
          isLoading: false,
          hasError: true
        }
      })

      await act(async () => {
        component = render(
          <Provider store={store}>
            <Results />
          </Provider>
        )
      })

      const actions = store.getActions()
      expect(actions).toHaveLength(2)
      expect(actions[0].type).toEqual(resultActions.ActionTypes.FETCH_RESULTS_INIT)
      expect(actions[1].type).toEqual(resultActions.ActionTypes.FETCH_RESULTS_FAILURE)
      expect(actions[1].payload.error).toBeInstanceOf(Error)
      expect(actions[1].payload.error.toString()).toEqual('Error: Not Found')
      done()
    })
  })

  describe('Content', () => {
    it('should render all data successfully', async (done) => {
      fetchMock.mockResponseOnce(JSON.stringify(resultsResponseMock))

      store = mockStore(resultsStoreMock)

      await act(async () => {
        component = render(
          <Provider store={store}>
            <Results />
          </Provider>
        )
      })

      const {asFragment, queryByText, getByText, getByTestId} = component
      expect(getByText('EUROJACKPOT RESULTS & WINNING NUMBERS')).toBeInTheDocument()

      const numbersTitle = ignoreHTML('EuroJackpot Results for Friday, 8 May 2020')
      const resultInfoDesc = ignoreHTML(
        'The 425th draw for the EuroJackpot was held on 08/05/2020, as usual at 9pm in Helsinki.'
      )

      expect(queryByText(numbersTitle)).toBeInTheDocument()
      expect(queryByText(resultInfoDesc)).toBeInTheDocument()
      expect(getByText('The EuroJackpot numbers for 08/05/2020')).toBeInTheDocument()

      const numberItems = getByTestId('numbers-list').children
      expect(numberItems).toHaveLength(5)
      expect(within(numberItems[0]).getByText('9')).toBeInTheDocument()
      expect(within(numberItems[1]).getByText('11')).toBeInTheDocument()
      expect(within(numberItems[2]).getByText('15')).toBeInTheDocument()
      expect(within(numberItems[3]).getByText('36')).toBeInTheDocument()
      expect(within(numberItems[4]).getByText('43')).toBeInTheDocument()

      const euroNumberItems = getByTestId('euro-numbers-list').children
      expect(euroNumberItems).toHaveLength(2)
      expect(within(euroNumberItems[0]).getByText('8')).toBeInTheDocument()
      expect(within(euroNumberItems[1]).getByText('9')).toBeInTheDocument()

      const resultsTableRows = getByTestId('table-body').children
      expect(resultsTableRows).toHaveLength(12)

      const resultsTableRow0 = getByTestId('table-row-0').children
      expect(resultsTableRow0).toHaveLength(4)
      expect(within(resultsTableRow0[0]).getByText('I')).toBeInTheDocument()
      expect(within(resultsTableRow0[1]).getByText('5 Numbers +')).toBeInTheDocument()
      expect(within(resultsTableRow0[1]).getByText('2 Euronumbers')).toBeInTheDocument()
      expect(within(resultsTableRow0[2]).getByText('1x')).toBeInTheDocument()
      expect(within(resultsTableRow0[3]).getByText('€ 13.286.943,40')).toBeInTheDocument()

      const resultsTableRow11 = getByTestId('table-row-11').children
      expect(resultsTableRow11).toHaveLength(4)
      expect(within(resultsTableRow11[0]).getByText('XII')).toBeInTheDocument()
      expect(within(resultsTableRow11[1]).getByText('2 Numbers +')).toBeInTheDocument()
      expect(within(resultsTableRow11[1]).getByText('1 Euronumbers')).toBeInTheDocument()
      expect(within(resultsTableRow11[2]).getByText('546,864x')).toBeInTheDocument()
      expect(within(resultsTableRow11[3]).getByText('€ 7,70')).toBeInTheDocument()

      expect(asFragment()).toMatchSnapshot()
      done()
    })

    it('should render error message when an error occur', async (done) => {
      fetchMock.mockRejectOnce(new Error('Not Found'))

      store = mockStore({
        results: {
          data: resultsStoreMock.results.data,
          isLoading: false,
          hasError: true
        }
      })

      await act(async () => {
        component = render(
          <Provider store={store}>
            <Results />
          </Provider>
        )
      })

      const {asFragment, getByText} = component
      expect(getByText('EUROJACKPOT RESULTS & WINNING NUMBERS')).toBeInTheDocument()
      expect(getByText('Sorry, something went wrong! Please, try again later.')).toBeInTheDocument()
      expect(asFragment()).toMatchSnapshot()
      done()
    })
  })
})
