import './App.css';
import { Box } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { useSelector } from 'react-redux';
import { selectedQuestion } from './app/features/happyCounter/happyCounterSlice';

import { Result } from './app/features/Result/Result';
import { QuestionForm } from './app/features/QuestionForm/QuestionForm';
import { Start } from './app/features/Start/Start';
import { Footer } from './app/features/Footer/Footer';
import { Header } from './app/features/Header/Header';
import { Quote } from './app/features/Quote/Quote';
// import { color } from '@mui/system';
// import { blue } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#3e4758',
    // },
    secondary: {
      main: '#ffffff',
    },
  },
});

function App() {
  const questionNumber = useSelector(selectedQuestion);

  const userLang = navigator.language || navigator.userLanguage;
  console.log(userLang);

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Header />
        <Quote />
        <Box
          sx={{
            minHeight: 'calc(80vh - 70px)',
          }}
        >
          {questionNumber === 4 ? (
            <Result />
          ) : questionNumber === -1 ? (
            <Start />
          ) : (
            <QuestionForm />
          )}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
