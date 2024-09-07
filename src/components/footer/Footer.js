import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} BHPHCL. All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
