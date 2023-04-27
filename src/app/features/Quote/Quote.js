import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';

export function Quote() {
  const [quote, setQuote] = useState('');
  const [happy, setHappy] = useState('');

  useEffect(() => {
    axios.get('https://type.fit/api/quotes').then((res) => {
      const quotes = res.data.filter((quote) => {
        return quote.text.length < 50;
      });
      const quoteNumber = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[quoteNumber].text + ' ' + quotes[quoteNumber].author);
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#8b939e',
        minРeight: '5vc',
        fontStyle: 'italic',
        padding: '1rem',
        color: 'white',
      }}
    >
      "{quote}"
    </Box>
  );
}

export default Quote;
