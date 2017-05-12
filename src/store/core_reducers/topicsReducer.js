import request from 'superagent'
import uuidV4 from 'uuid/v4'

// ------------------------------------
// Constants
// ------------------------------------

const SUBMIT_TOPIC = 'SUBMIT_TOPIC';
const EDIT_TOPIC = 'EDIT_TOPIC';

// ------------------------------------
// Actions
// ------------------------------------

export const submitTopic = topicText => ({
  type: SUBMIT_TOPIC,
  topicText,
  createdAt: (new Date()).toISOString(),
  uuid: uuidV4()
});

export const editTopic = topicText => ({
  type: EDIT_TOPIC,
  topicText
});

export const actions = {
  SUBMIT_TOPIC,
  EDIT_TOPIC
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const handleSubmitTopic = (state, action) => {
  const {submitted, ...restState} = state;
  const {topicText, createdAt, uuid} = action;
  return {
    ...restState,
    topicText: '',
    submitted: {...submitted, [uuid]: {topicText, createdAt, upVotes:0, downVotes:0}}
  }
};

const handleEditTopic = (state, action) => {
  const {topicText} = action;
  return {
    ...state,
    topicText
  }
};

const ACTION_HANDLERS = {
  [SUBMIT_TOPIC]: handleSubmitTopic,
  [EDIT_TOPIC]: handleEditTopic
};

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  submitted: {},
  topicText: ''
};

export const topicsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default topicsReducer

