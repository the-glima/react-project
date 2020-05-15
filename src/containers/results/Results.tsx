import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import ResultsNumbers from '../../components/results-numbers/ResultsNumbers'
import ResultsTable from '../../components/results-table/ResultsTable'
import ResultsInfo from '../../components/results-info/ResultsInfo'
import Loading from '../../components/loading/Loading'
import ErrorMessage from '../../components/error-message/ErrorMessage'

import * as actions from './redux/ResultsActions'
import ResultsService from './services/ResultsService'
import styles from './Results.module.scss'

import {ResultsState} from './redux/ResultsReducer'

const Results = () => {
  const dispatch = useDispatch()
  const resultsState: ResultsState = useSelector((state: any) => state.results)
  const isLoading: ResultsState = useSelector((state: any) => state.results.isLoading)
  const hasError: ResultsState = useSelector((state: any) => state.results.hasError)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(actions.fetchResultsInit())

      try {
        const data = await ResultsService.getResults()
        dispatch(actions.fetchResultsSuccess({data}))
      } catch (error) {
        dispatch(actions.fetchResultsFailure(error))
      }
    }

    fetchData()
  }, [dispatch])

  const getResultTableData = () => ResultsService.filterWinners(resultsState?.data?.last?.tiers)
  const getResultNumbers = () => ResultsService.getWinningNumbers(resultsState?.data?.last?.winningNumbers)
  const getResultDate = () => ResultsService.getResultDate(resultsState?.data?.last?.date)

  return (
    <section>
      <header>
        <h1 className={styles['results-title']}>EUROJACKPOT RESULTS & WINNING NUMBERS</h1>
      </header>

      {hasError && <ErrorMessage className={styles['results-error']} />}

      {isLoading && <Loading className={styles['results-loading']} />}

      {!hasError && !isLoading && (
        <div className={styles['results-content']}>
          <div className={styles['results-table-header']}>
            <ResultsNumbers data={getResultNumbers()} className={styles['results-numbers']} />
            <ResultsInfo
              data={{id: resultsState?.data?.last?.id, date: getResultDate()}}
              className={styles['results-info']}
            />
          </div>
          <ResultsTable data={getResultTableData()} className={styles['results-table']} />
        </div>
      )}
    </section>
  )
}

export default Results
