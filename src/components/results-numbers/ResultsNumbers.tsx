import React from 'react'

import {ResultsWinningNumbers} from '../../containers/results/models/ResultsResponseModel'

import styles from './ResultsNumbers.module.scss'

interface Props {
  data: ResultsWinningNumbers | null
  className: string
}

const ResultNumbers = (props: Props) => {
  return (
    <div className={props.className}>
      <h2 className={styles.title}>
        EuroJackpot Results for <strong>Friday 08 May 2020</strong>
      </h2>
      <div className={styles['list-wrapper']}>
        <ul className={styles.list} data-testid="numbers-list">
          {props.data?.numbers.map((number: number, index: number) => (
            <li key={index} className={styles['list-item']}>
              {number}
            </li>
          ))}
        </ul>
        <ul className={styles.list} data-testid="euro-numbers-list">
          {props.data?.euroNumbers.map((number: number, index: number) => (
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
