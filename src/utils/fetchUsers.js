import { actions } from '../redux/actions'

export const fetchUsers = (page = '') => {
  return async (dispatch) => {
    dispatch(actions.fetchUsersLoading(true))
    try {
      let url = 'https://reqres.in/api/users'
      if (page) {
        url += ('?page=' + page)
      }
      let users = await fetch(url)
      users = await users.json()
      console.log('fetching users', users)
      dispatch(actions.updateUsers(users))
      dispatch(actions.fetchUsersLoading(false))
    } catch (e) {
      dispatch(actions.fetchUsersLoading(false))
    }
  }
}
