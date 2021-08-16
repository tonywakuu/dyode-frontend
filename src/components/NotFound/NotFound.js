// React
import React from 'react';

// Components
import {
  Link,
} from 'react-router-dom'

// Styles
import styles from './NotFound.css'

const NotFound = props => (
  <div className={styles.body}>
    <div classname="notFound">
    <h2>    \          SORRY            /       </h2>
    <h2>      \                         /       </h2>
    <h2>       \    This page does     /</h2>
    <h2>        ]   not exist yet.    [    ,'|</h2>
    <h2>        ]                     [   /  |</h2>
    <h2>        ]___               ___[ ,'   |</h2>
    <h2>        ]  ]\             /[  [ |:   |</h2>
    <h2>        ]  ] \           / [  [ |:   |</h2>
    <h2>        ]  ]  ]         [  [  [ |:   |</h2>
    <h2>       ]  ]  ]__     __[  [  [ |:   |</h2>
    <h2>         ]  ]  ] ]\ _ /[ [  [  [ |:   |</h2>
      <h2>      ]  ]  ] ] (#) [ [  [  [ :===='</h2>
      <h2>       ]  ]  ]_].nHn.[_[  [  [</h2>
      <h2>       ]  ]  ]  HHHHH. [  [  [</h2>
      <h2>       ]  ] /   `HH("N  \ [  [</h2>
    <h2>         ]__]/     HHH  "  \[__[</h2>
    <h2>         ]         NNN         [</h2>
    <h2>         ]         N/"         [</h2>
    <h2>         ]         N H         [</h2>
    <h2>        /          N            \</h2>
    <h2>        /           q,            \</h2>
    <h2>      /                           \</h2>
    </div>
    <Link to="/">Go Home</Link>
  </div>

)


export default NotFound
