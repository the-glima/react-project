import React from 'react'

import styles from './ResultsNumbers.module.scss'
import {ResultsWinningNumbers} from '../../containers/results/models/ResultsResponseModel'

interface Props {
  data: ResultsWinningNumbers | null
}

const ResultNumbers = ({data}: Props) => {
  return (
    <div>
      <p>EuroJackpot Results for Friday 08 May 2020</p>
      <ul>
        {data?.numbers.map((number: number, index: number) => (
          <li key={index}>{number}</li>
        ))}
        {data?.euroNumbers.map((number: number, index: number) => (
          <li key={index} className={styles.featured}>
            {number}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultNumbers
