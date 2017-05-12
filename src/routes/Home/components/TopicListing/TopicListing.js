import React from 'react'
import classes from './TopicListing.scss'
import TopicCard from '../TopicCard'

export const TopicListing = ({topics, visibleTopics, upVoteTopic, downVoteTopic}) => {
  return (
    <div>
      {visibleTopics.map(id =>
        <TopicCard
          key={id}
          {...topics[id]}
          voteUp={upVoteTopic(id)}
          voteDown={downVoteTopic(id)}
        />
      )}
    </div>
  )
};

export default TopicListing
