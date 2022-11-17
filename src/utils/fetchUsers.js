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
      setTimeout(() => {
        dispatch(actions.updateUsers(users))
        dispatch(actions.fetchUsersLoading(false))
        dispatch(actions.fetchUsersError(null))
      }, 500)
    } catch (e) {
      console.log('in fetch users catch', e)
      dispatch(actions.fetchUsersLoading(false))
      dispatch(actions.fetchUsersError('Failed fetching users. Please try again'))
    }
  }
}
