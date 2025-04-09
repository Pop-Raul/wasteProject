# Waste Skip Selection App

This project is a responsive web application built with **Vite** and **React**, designed to help users select an appropriate skip size for their waste disposal needs.

# Technology

- **Vite** – chosen for its lightning-fast build time and modern development experience.
- **Axios** – used to perform a `GET` request to an external API that provides skip data based on location.
- **Material UI (MUI)** – selected as the UI component library for its ease of use, rich component set, and out-of-the-box responsive design system.

## 📦 Features

- **Live API Integration**: Data is fetched dynamically from  
  [`https://app.wewantwaste.co.uk/api/skips/by-location`](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft), using Axios.
  
- **Responsive Design**: Works seamlessly on both desktop and mobile.

- **Skip Selection**: Users can view skip options, including size and pricing, and select the most suitable one.

- **Component-Based Architecture**: The app uses reusable React components like `SkipCard` and `SkipSelectionPage` for modular and maintainable code.

