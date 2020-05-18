import React from 'react'

import {ResultsWinningNumbers} from '../../models/ResultsResponseModel'
import * as utils from '../../../../shared/utils'

import styles from './ResultsNumbers.module.scss'

interface Props {
  data: {
    winningNumbers: ResultsWinningNumbers | null
    date: string
  }
  className: string
}

const ResultNumbers = (props: Props) => {
  return (
    <div className={props.className}>
      <h2 className={styles.title} data-testid="numbers-title">
        EuroJackpot Results for <strong>{utils.literalDateUtil(props.data?.date)}</strong>
      </h2>
      <div className={styles['list-wrapper']}>
        <ul className={styles.list} data-testid="numbers-list">
          {props.data?.winningNumbers?.numbers.map((number: number, index: number) => (
            <li key={index} className={styles['list-item']}>
              {number}
            </li>
          ))}
        </ul>
        <ul className={styles.list} data-testid="euro-numbers-list">
          {props.data?.winningNumbers?.euroNumbers.map((number: number, index: number) => (
            <li key={index} className={`${styles['list-item']} ${styles['euro-numbers']}`}>
              {number}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResultNumbers
