import {createSelector} from 'reselect'

const sortByVotesAndDate = topics => (a,b) => {
  const topicA = topics[a];
  const topicB = topics[b];
  const aVotes = topicA['upVotes'] - topicA['downVotes'];
  const bVotes = topicB['upVotes'] - topicB['downVotes'];
  if (aVotes > bVotes){
    return -1
  }
  else if (bVotes > aVotes){
    return 1
  }
  else if (topicA['createdAt'] >= topicB['createdAt']){
    return -1
  }
  else{
    return 1
  }
};

export const sortedTopicId = createSelector(
  topics => topics,
  topics => Object
    .keys(topics)
    .sort(sortByVotesAndDate(topics))
);

export const pagedTopTopicIds = createSelector(
  sortedTopicId,
  topicIds => pageNo => topicIds.slice(20 * (pageNo - 1), 20 * pageNo)
);

export const pagesAvailable = createSelector(
  sortedTopicId,
  topicIds => Math.ceil(topicIds.length/20) || 1
);
