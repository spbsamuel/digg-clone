import React from 'react'
import classes from './TopicListing.scss'
import TopicCard from '../TopicCard'
import Shuffle from 'react-shuffle'

export const TopicListing = ({topics, visibleTopics, upVoteTopic, downVoteTopic}) => {
  return (
    <div>
      <Shuffle>
        {visibleTopics.map(id =>
          <div key={id}>
            <TopicCard
              key={id}
              {...topics[id]}
              voteUp={upVoteTopic(id)}
              voteDown={downVoteTopic(id)}
            />
          </div>
        )}
      </Shuffle>
    </div>
  )
};

export default TopicListing
