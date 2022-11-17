import actionTypes from './actionTypes'

export const actions = {
  fetchUsersLoading (payload) {
    return {
      type: actionTypes.FETCH_USERS_LOADING_STATUS,
      payload
    }
  },
  updateUsers (payload) {
    return {
      type: actionTypes.UPDATE_USERS,
      payload
    }
  },
  updatePage (payload) {
    return {
      type: actionTypes.UPDATE_PAGE,
      payload
    }
  },
  fetchUsersError (payload) {
    return {
      type: actionTypes.FETCH_USER_ERROR,
      payload
    }
  }
}
