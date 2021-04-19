import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={config.userAvatar}
      alt={config.userName}
    />
    <div>
      Written by {config.userName} who wishes you a lovely day.
      {` `}
      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : 'none' }}
      />
    </div>
  </>
)

export default Bio
