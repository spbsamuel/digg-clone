import {connect} from 'react-redux';
import TopicForm from '../components/TopicForm'
import {submitTopic, editTopic} from 'store/core_reducers/topicsReducer'
import {isTopicValid} from '../selectors/validators'

const mapStateToProps = ({topics:{topicText}}) => {
  return {
    topicText: topicText,
    topicValid: isTopicValid(topicText),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitTopic: topicText => dispatch(submitTopic(topicText)),
    editTopic: topicText => dispatch(editTopic(topicText))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);
