import { ThemeProvider } from '@mui-material'
import { GlobalStyle } from './Global'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

export default App
