import React from 'react'

import styles from './ResultsTable.module.scss'
import {ResultsTier} from '../../containers/results/models/ResultsResponseModel'

interface Props {
  data: ResultsTier[]
}

const ResultTable = ({data}: Props) => {
  return (
    <div>
      <h1>EUROJACKPOT RESULTS & WINNING NUMBERS</h1>

      {!data || !data.length ? (
        <h2>Sorry, something wrong might happened. Try again later</h2>
      ) : (
        <table className={styles['result-table']}>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Match</th>
              <th>Winners</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row: any, index: number) => (
              <tr key={index}>
                <td>{index}</td>
                <td>5 Numbers + 2 Euronumbers</td>
                <td>{row.winners}x</td>
                <td>€{row.prize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ResultTable
