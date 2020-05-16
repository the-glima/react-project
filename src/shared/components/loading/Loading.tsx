import React from 'react'

import styles from './Loading.module.scss'

interface Props {
  className: string
}

const Loading = (props: Props) => {
  return (
    <div className={props.className} data-testid="loading">
      <div className={styles.loader}></div>
      <div className={styles['loader-label']}>Loading...</div>
    </div>
  )
}

export default Loading
