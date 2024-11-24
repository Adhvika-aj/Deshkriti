import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2c3e50' }}>
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'white',
              fontWeight: 'bold'
            }}
          >
          
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          
          <Button color="inherit" component={Link} to="/workshops">Workshops</Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/mentors"
            variant="outlined"
            sx={{ ml: 2 }}
          >
            Find a Mentor
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
