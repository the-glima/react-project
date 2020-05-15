import React from 'react'

import {ResultsTier} from '../../containers/results/models/ResultsResponseModel'
import * as utils from '../../utils/'

import styles from './ResultsTable.module.scss'

interface Props {
  data: ResultsTier[]
  className: string
}

const ResultTable = (props: Props) => {
  return (
    <div className={props.className}>
      {!props.data || !props.data.length ? (
        <h2>Sorry, something wrong might happened. Try again later</h2>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Match</th>
              <th>Winners</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((row: any, index: number) => (
              <tr key={index}>
                <td data-thead="Tier">
                  <strong>{utils.romanizeUtil(index)}</strong>
                </td>
                <td data-thead="Match">
                  <div className={styles['match']}>
                    <div>{utils.matchTierUtil(index)?.numbers} +</div>
                    <div>{utils.matchTierUtil(index)?.euroNumbers}</div>
                  </div>
                </td>
                <td data-thead="Winners">{utils.thousandSeparatorUtil(row.winners)}x</td>
                <td data-thead="Amount">{utils.currencyUtil(row.prize)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ResultTable
