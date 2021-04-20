import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './Bio.module.scss'
import picture from "../../static/assets/verobw.png"

const Bio = ({ config, expanded }) => (
  <>
    <img
      className={styles.avatar}
      src={picture}
      alt={config.userName}
    /> 
    
    <div className={styles.footer}>Veronique S
      {` `}
      <Follow
        username={config.userTwitter}
        options={{ count: expanded ? true : 'none' }}
      />
    </div>
  </>
)

export default Bio
