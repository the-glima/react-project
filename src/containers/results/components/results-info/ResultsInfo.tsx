import React from 'react'

import * as utils from '../../../../shared/utils'

import styles from './ResultsInfo.module.scss'

interface Props {
  data: {
    id: any
    date: string
  }
  className: string
}

const ResultInfo = (props: Props) => {
  return (
    <div className={`${styles.card} ${props.className}`} data-testid="results-info">
      <h3 className={styles['card-title']}>
        The EuroJackpot numbers for {utils.literalDateUtil(props.data?.date, false)}
      </h3>
      <p>
        <strong>
          The {utils.ordinalizeUtil(props.data.id)} draw for the EuroJackpot was held on{' '}
          {utils.literalDateUtil(props.data?.date, false)}
        </strong>
        , as usual at 9pm in Helsinki.
      </p>
    </div>
  )
}

export default ResultInfo
