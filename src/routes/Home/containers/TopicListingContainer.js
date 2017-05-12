import {connect} from 'react-redux';
import TopicListing from '../components/TopicListing'
import {voteTopic} from 'store/core_reducers/topicsReducer'
import {pagedTopTopicIds} from '../selectors/topics'

const mapStateToProps = ({topics:{submitted}}, {pageNo = 1}) => {
  return {
    topics: submitted,
    visibleTopics: pagedTopTopicIds(submitted)(pageNo)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    upVoteTopic: topicId => () => dispatch(voteTopic(topicId, true)),
    downVoteTopic: topicId => () => dispatch(voteTopic(topicId, false)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicListing);
