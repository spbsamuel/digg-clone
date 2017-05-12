import {createSelector} from 'reselect'

export const isTopicValid = createSelector(
  topic => topic,
  topic => topic.length < 255 && topic.length > 0
);
