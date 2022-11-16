/* eslint-disable react/prop-types */
import { Container, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import * as React from 'react'
import { store } from '../redux/store'
import { fetchUsers } from '../utils/fetchUsers'
import UserTable from './UserTable'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

const Dashboard = ({ mode, setMode }) => {
  React.useEffect(() => {
    store.dispatch(fetchUsers())
  })

  return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} minHeight={160}>
                    <Grid xs display="flex" justifyContent="left" alignItems="center">
                        <Typography variant='h3' >
                            Dashboard
                        </Typography>
                    </Grid>
                    <Grid xs display="flex" justifyContent="end" alignItems="end">
                        {mode === 'light' ? <DarkModeIcon onClick={() => setMode('dark')} /> : <LightModeIcon onClick={() => setMode('light')} /> }
                    </Grid>
                    <UserTable />
                </Grid>
            </Box>
        </Container>
  )
}

export default Dashboard
