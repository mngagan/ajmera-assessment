/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { store } from '../redux/store'
import { addUser } from '../utils/addUser'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { SnackbarProvider, useSnackbar } from 'notistack'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  firstName: yup
    .string('Enter your first name')
    .min(3, 'First name should be of minimum 3 characters length')
    .required('first name is required'),
  lastName: yup
    .string('Enter your last name')
    .min(3, 'Last name should be of minimum 3 characters length')
    .required('last name is required')
})

export default function AddUserDialog ({ showDialog, setShowDialog }) {
  const { enqueueSnackbar } = useSnackbar()
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: ''
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      store.dispatch(addUser(values, enqueueSnackbar))
      setShowDialog(false)
      resetForm()
    }
  })

  return (
    <div>
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide your details to add
          </DialogContentText>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="firstName"
              label="First Name"
              type="firstName"
              name="firstName"
              fullWidth
              variant="standard"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastName"
              name="lastName"
              label="Last Name"
              type="lastName"
              fullWidth
              variant="standard"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={formik.valuesemail}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <DialogActions>
              <Button onClick={() => setShowDialog(false)}>Cancel</Button>
              <Button color="primary" variant="contained" type="submit">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
