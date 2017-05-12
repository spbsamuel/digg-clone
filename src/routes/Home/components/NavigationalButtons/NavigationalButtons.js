import React from 'react'
import classes from './NavigationalButtons.scss'
import {Link} from 'react-router'

export const NavigationalButtons = ({maxPages, pageNo}) => {
  pageNo = parseInt(pageNo);
  return (
    <div className="row between-xs">
      {pageNo > 1 ? <Link to={`/${pageNo - 1}`}>prev</Link> : <span/>}
      {pageNo < maxPages ? <Link to={`/${pageNo + 1}`}>next</Link> : <span/>}
    </div>
  )
};

export default NavigationalButtons
