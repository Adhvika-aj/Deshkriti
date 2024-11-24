import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import MentorCard from '../components/MentorCard';
import { mentors } from '../data/mentors';

function Mentors() {
  return (
    <Box sx={{ py: 4 }}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
          Our Cultural Mentors
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={{ mb: 4, color: 'text.secondary' }}>
          Connect with experienced mentors from diverse cultural backgrounds
        </Typography>
        <Grid container spacing={3}>
          {mentors.map((mentor) => (
            <Grid item xs={12} sm={6} md={4} key={mentor.id}>
              <MentorCard mentor={mentor} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Mentors;
