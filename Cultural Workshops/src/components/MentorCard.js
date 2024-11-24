import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Button
} from '@mui/material';

function MentorCard({ mentor }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="240"
        image={mentor.avatar}
        alt={mentor.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mentor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {mentor.specialization}
        </Typography>
        <Box sx={{ mt: 2, mb: 2 }}>
          {mentor.languages.map((lang) => (
            <Chip
              key={lang}
              label={lang}
              size="small"
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {mentor.yearsOfExperience} years of experience
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          color="primary"
        >
          Book Session
        </Button>
      </CardContent>
    </Card>
  );
}

export default MentorCard;
