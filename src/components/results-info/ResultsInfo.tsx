import React from 'react'

import {ResultsDate} from '../../containers/results/models/ResultsResponseModel'
import * as utils from '../../utils/'

import styles from './ResultsInfo.module.scss'

interface Props {
  data: {
    id: number
    date: ResultsDate
  }
  className: string
}

const ResultInfo = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>
      <h3 className={styles['card-title']}>The EuroJackpot numbers for {props.data.date}</h3>
      <p>
        <strong>
          The {utils.ordinalizeUtil(props.data.id)} draw for the EuroJackpot was held on {props.data.date}
        </strong>
        , as usual at 9pm in Helsinki.
      </p>
    </div>
  )
}

export default ResultInfo
