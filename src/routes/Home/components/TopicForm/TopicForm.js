import React from 'react'
import classes from './TopicForm.scss'
import cx from 'classnames'

class TopicForm extends React.Component {
  state = {
    enterDown: false
  };
  handleTopicChange = ({target:{value}}) => {
    const {editTopic} = this.props;
    editTopic(value)
  };

  handleKeyPress = event => {
    if (event.key == 'Enter') {
      event.preventDefault();
      this.setState({enterDown: true});
      this.handleSubmit();
    }
  };

  handleKeyUp = () => {
    this.setState({enterDown: false});
  };

  handleSubmit = () => {
    const {submitTopic, topicValid, topicText} = this.props;
    if (topicValid) {
      submitTopic(topicText);
      this.setState({enterDown: false});
    }
  };

  render() {
    const {topicText = '', topicValid = false} = this.props;
    const {enterDown} = this.state;
    return (
      <div>
      <textarea
        placeholder="Topic eg. 'Climate change should be taken more seriously'"
        value={topicText}
        rows="3"
        className={cx(classes.text_box, {[classes.valid_form]: topicValid})}
        onChange={this.handleTopicChange}
        onKeyPress={this.handleKeyPress}
        onKeyUp={this.handleKeyUp}
      />
        <div className={classes.form_info_bar}>
          <CharCounter {...{topicValid, topicText, enterDown}}/>
          <SubmitBtn enterDown={enterDown} topicValid={topicValid} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

const CharCounter = ({enterDown, topicValid, topicText}) =>
  <span className={cx(classes.char_counter, {[classes.error_alert]: !topicValid && enterDown})}>
    <span className={cx({[classes.count_error]: topicText.length >= 255 || topicText.length === 0 && enterDown})}>
      {topicText.length}
    </span>/254
  </span>;

const SubmitBtn = ({enterDown, topicValid, handleSubmit}) =>
  <button
    className={cx(classes.form_submit, {
      [classes.active]: enterDown && topicValid,
      [classes.disabled]: !topicValid
    })}
    onClick={handleSubmit}><i className="material-icons">keyboard_return</i>
  </button>;

export default TopicForm
