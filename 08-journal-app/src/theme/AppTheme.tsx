import { CssBaseline, ThemeProvider } from '@mui/material';
import { purpleTheme } from '@/theme';

export const AppTheme = ({children}:any) => {
  return (
    <>
      <ThemeProvider theme={purpleTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}
