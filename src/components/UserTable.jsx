/* eslint-disable camelcase */
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import * as React from 'react'
// import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useSelector } from 'react-redux'
import { store } from '../redux/store'
import { actions } from '../redux/actions'
import { fetchUsers } from '../utils/fetchUsers'
import Button from '@mui/material/Button'
import AddUserDialog from './AddUserDialog'
import Skeleton from '@mui/material/Skeleton'

const UserTable = () => {
  const userData = useSelector(state => state.users[state.page] || [])
  const usersLoadError = useSelector(state => state.usersLoadError)
  // const rowsPerPage = useSelector(state => state.rowsPerPage)
  const total_pages = useSelector(state => state.total_pages)
  const page = useSelector(state => state.page)
  const usersLoading = useSelector(state => state.usersLoading)
  const [showDialog, setShowDialog] = React.useState(false)

  const handleButtonClick = (type) => {
    const requiredPage = type === 'next' ? page + 1 : page - 1
    if (requiredPage && requiredPage <= total_pages) {
      if (store.getState().users[requiredPage]) {
        store.dispatch(actions.updatePage(requiredPage))
      } else {
        store.dispatch(fetchUsers(requiredPage))
      }
    }
  }

  const handleAddUser = () => {
    setShowDialog(true)
  }

  const showPrev = page !== 1
  const showNext = total_pages !== page
  return <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      {!usersLoadError && <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell >Id</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Email</TableCell>
        </TableRow>
      </TableHead>}
      <TableBody>
        {!usersLoadError && (!usersLoading
          ? userData.map((row) => (
            <TableRow key={row.email}>
              <TableCell align='center'>
                <Avatar alt="Remy Sharp" src={row.avatar} />
              </TableCell>
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>
                {`${row.first_name} ${row.last_name}`}
              </TableCell>
              <TableCell >
                {row.email}
              </TableCell>
            </TableRow>
          ))
          : [1, 2, 3, 4, 5, 6].map(key => (
            <TableRow key={key}>
              <TableCell >
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell>
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell>
                <Skeleton animation="wave" />
              </TableCell>
              <TableCell >
                <Skeleton animation="wave" />
              </TableCell>
            </TableRow>
            )))}
        {usersLoadError && <TableRow>
          <TableCell colSpan={4} align='center'>
            {usersLoadError}
          </TableCell>
        </TableRow>}
      </TableBody>
      {!usersLoadError && <TableFooter>
        <TableRow>
          <TableCell colSpan={4} alight='right'>
            {page && <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Typography variant="body1" gutterBottom>
                {`Page  ${page}`}
              </Typography>
              <Button variant="text" onClick={handleAddUser}>Add</Button>
              {!!showPrev && <KeyboardArrowLeft onClick={handleButtonClick.bind({}, 'prev')} />}
              {!!showNext && <KeyboardArrowRight onClick={handleButtonClick.bind({}, 'next')} />}
            </Stack>}
          </TableCell>
        </TableRow>
      </TableFooter>}
    </Table>
    <AddUserDialog showDialog={showDialog} setShowDialog={setShowDialog} />
  </TableContainer>
}

export default UserTable
