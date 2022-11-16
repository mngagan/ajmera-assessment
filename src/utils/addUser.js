// import { actions } from '../redux/actions'

export const addUser = ({ firstName, lastName, email }, enqueueSnackbar) => {
  console.log('in add user fn', firstName, lastName, email)
  return async (dispatch) => {
    // dispatch(actions.fetchUsersLoading(true))
    try {
      const url = 'https://reqres.in/api/users'
      const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a: 1, b: 'Textual content' })
      })
      const content = await rawResponse.json()
      content.id && enqueueSnackbar('User added successfully', { variant: 'success' })
    } catch (e) {
      enqueueSnackbar('Adding user failed. Please try again', { variant: 'error' })
    }
  }
}
