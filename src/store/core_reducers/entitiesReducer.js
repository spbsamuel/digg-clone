import request from 'superagent'
import find from 'lodash/find'
// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ENTITIES_REQUEST = 'FETCH_ENTITIES_REQUEST';
export const FETCH_ENTITIES_SUCCESS = 'FETCH_ENTITIES_SUCCESS';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

// ------------------------------------
// Actions
// ------------------------------------

const apiBase = (path) =>
  request.get(`http://localhost:3000/web/${path}`);

const endPointUrls = {
  entities: param => 'entities',
};

const apiEntityRequest = ({type, param = ''}) => apiBase(endPointUrls[type](param));

export const fetchEntity = (type, param = '') => (dispatch, getState) => {

  if (Object.keys(endPointUrls).indexOf(type) < 0) return;

  dispatch({
    type: 'FETCH_ENTITIES_REQUEST',
    request: {type, param},
  });

  return apiEntityRequest({type, param})
    .query(queryParams)
    .end(
      (err, res) => dispatch({
        type: 'FETCH_ENTITIES_SUCCESS',
        requestType: type,
        response: res.body.data,
      })
    );
};


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

export const entitiesReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default entitiesReducer

