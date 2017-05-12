import React from 'react'
import classes from './TopicCard.scss'
import cx from 'classnames'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

export const TopicCard = ({
  topicText,
  createdAt,
  upVotes,
  downVotes,
  voteUp,
  voteDown
}) => {
  return (
    <div>
      <div className={cx(classes.topic_card)}>
        <div className={classes.text_col}>
          {topicText}
        </div>
        <div className={classes.vote_col}>
          <button onClick={voteUp}  className={classes.vote_btn}>
            <span>{upVotes}</span>
            <i className="material-icons">arrow_upward</i>
          </button>
          <button onClick={voteDown} className={classes.vote_btn}>
            <span>{downVotes}</span>
            <i className="material-icons">arrow_downward</i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4">
          Score: {upVotes-downVotes}
        </div>
        <div className="col-xs-8">
          Posted: {distanceInWordsToNow(new Date(createdAt))} ago
        </div>
      </div>
    </div>
  )
};

export default TopicCard
