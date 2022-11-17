/* eslint-disable camelcase */
import actionTypes from './actionTypes'
import { initialState } from './initialState'
import { produce } from 'immer'

export const countReducer = function (state = initialState, action) {
  const { payload } = action
  switch (action.type) {
    case actionTypes.FETCH_USERS_LOADING_STATUS: {
      return { ...state, usersLoading: payload }
    }
    case actionTypes.UPDATE_USERS: {
      const { data, page, per_page, total, total_pages } = payload
      return produce(state, draft => {
        draft.page = page
        draft.per_page = per_page
        draft.total = total
        draft.total_pages = total_pages
        draft.users[page] = data
      })
    }
    case actionTypes.UPDATE_PAGE : {
      return { ...state, page: payload }
    }
    case actionTypes.FETCH_USER_ERROR : {
      return { ...state, usersLoadError: payload }
    }
    default:
      return state
  }
}
