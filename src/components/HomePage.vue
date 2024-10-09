<template>
    <div class="home-container">
      <div class="hero-section">
        <h1>Welcome to <span class="highlight">IE Bank</span></h1>
        <p class="tagline">Your Bank, Anytime, Anywhere.</p>
        <!-- Button to navigate to the accounts page -->
        <router-link to="/accounts">
          <b-button class="cta-button">Go to Accounts</b-button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #0d1b2a; 
  }
  
  .hero-section {
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    background-color: #ffffff; 
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15); 
    max-width: 600px;
    width: 90%;
  }
  
  .hero-section h1 {
    font-size: 2.8em;
    font-weight: bold;
    color: #0d3b66;
    font-family: 'Roboto', sans-serif;
  }
  
  .highlight {
    color: #1b74e4; 
  }
  
  .tagline {
    font-size: 1.4em;
    font-weight: 300;
    color: #333333; 
    margin-bottom: 30px;
    font-family: 'Open Sans', sans-serif;
  }
  
  .cta-button {
    background-color: #1b74e4; 
    font-size: 1.2em;
    padding: 12px 30px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s ease;
    border: none;
  }
  
  .cta-button:hover {
    background-color: #163a8e; 
  }
  
  html, body {
    margin: 0;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  </style>