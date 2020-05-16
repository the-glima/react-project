import React from 'react'

import {ResultsTier} from '../../models/ResultsResponseModel'
import * as utils from '../../../../shared/utils'

import styles from './ResultsTable.module.scss'

interface Props {
  data: ResultsTier[]
  className: string
}

const ResultTable = (props: Props) => {
  return (
    <div className={props.className}>
      {props.data && props.data.length && (
        <table className={styles.table} data-testid="results-table">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Match</th>
              <th>Winners</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody data-testid="table-body">
            {props.data.map((row: any, index: number) => (
              <tr key={index} data-testid={`table-row-${index}`}>
                <td data-thead="Tier">
                  <strong>{utils.romanizeUtil(index + 1)}</strong>
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
