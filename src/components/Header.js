import React from 'react'
import { Link } from 'gatsby'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import config from '../../data/SiteConfig'
import Categories from './Categories'
import styles from './Header.module.scss'


const Header = () => (
  <header>
    <h1>
      <Link to="/" activeClassName={styles.activeNav}>
        {config.siteTitle} 
      </Link> 
    </h1>
    <nav>
      <ul className={styles.mainNav}>
        <li>
          <Link to="/" activeClassName={styles.standalone}>
            <HomeRoundedIcon />
          </Link>
        </li>
        <li>
          <Link to="/reflections" activeClassName={styles.standalone}>
            Reflections
          </Link>
        </li>
        <li>
          <Link to="/infographics" activeClassName={styles.standalone}>
            Infographic
          </Link>
        </li>
        <Categories activeClassName={styles.activeNav} />
      </ul>
    </nav>
  </header>
)

export default Header
