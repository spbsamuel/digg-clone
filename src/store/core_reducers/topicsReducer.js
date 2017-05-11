import request from 'superagent'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {

};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
};

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {};

export const topicsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default topicsReducer

