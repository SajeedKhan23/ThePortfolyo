// pages/api/userData.js

export default async function handler(req, res) {
    try {
      // Fetch data from the API endpoint
      const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      
      const data = await response.json();
      
      // Extract the required data
      const { user } = data;
      const {
        about,
        avatar,
        timeline,
        skills, 
        youtube,
        projects,
        social_handles,
        services,
        testimonials,
        email,
        _id,
        username,
        role
      } = user;
      
      // Prepare the data to be sent in the response
      const userData = {
        about,
        avatar,
        timeline,
        skills,
        youtube,
        projects,
        social_handles,
        services,
        testimonials,
        email,
        _id,
        username,
        role
      };
      
      // Send the data as JSON response
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ error: 'Failed to fetch data from the API' });
    }
  }
  