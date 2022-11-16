import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { store } from './redux/store'

const darkTheme = (mode = 'light') => {
  return createTheme({
    palette: {
      mode
    }
  })
}
window.store = store
function App () {
  const [mode, setMode] = React.useState('dark')
  return (
    <ThemeProvider theme={darkTheme(mode)}>
      <CssBaseline />
      <SnackbarProvider maxSnack={3}>
        <Dashboard mode={mode} setMode={setMode} />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
