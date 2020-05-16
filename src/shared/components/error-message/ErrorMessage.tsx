import React from 'react'

import styles from './ErrorMessage.module.scss'

interface Props {
  className: string
}

const ErrorMessage = (props: Props) => {
  return (
    <div className={`${props.className} ${styles['error-message']}`}>
      <span role="img" aria-label="Confused Face">
        😕
      </span>
      <h2>Sorry, something went wrong. Please, try again later</h2>
    </div>
  )
}

export default ErrorMessage
