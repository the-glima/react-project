import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import ResultsNumbers from '../../components/results-numbers/ResultsNumbers'
import ResultsTable from '../../components/results-table/ResultsTable'

import * as actions from './redux/ResultsActions'
import ResultsService from './services/ResultsService'
import {ResultsDOM} from './models/ResultsDOMModel'
import styles from './Results.module.scss'

// import {ResultsReducer, ResultsState} from './redux/ResultsReducer'

const Results = () => {
  const dispatch = useDispatch()
  const resultsState: ResultsDOM = useSelector((state: any) => state.results.data)

  useEffect(() => {
    let ignore = false

    const fetchData = async () => {
      const data = await ResultsService.getResults()

      if (!ignore) {
        dispatch(actions.setResults({data}))
      }
    }

    fetchData()
    return () => {
      ignore = true
    }
  }, [dispatch])

  const getResultTableData = () => ResultsService.filterWinners(resultsState?.last?.tiers)
  const getResultNumbers = () => ResultsService.getWinningNumbers(resultsState?.last?.winningNumbers)

  return (
    <section>
      <header>
        <h1 className={styles.title}>EUROJACKPOT RESULTS & WINNING NUMBERS</h1>
      </header>
      <ResultsNumbers data={getResultNumbers()} />
      <ResultsTable data={getResultTableData()} className={styles['results-table']} />
    </section>
  )
}

export default Results
