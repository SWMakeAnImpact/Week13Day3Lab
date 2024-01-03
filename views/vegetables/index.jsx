// Importing React to create components
const React = require('react');

// Creating an Index component for vegetables
function Index({ vegetables }) {
  return (
    <div>
      <h1>Vegetable Index Page</h1>
      <ul>
        {vegetables.map((vegetable, index) => (
          <li key={index}>
            {vegetable.name} - {vegetable.color} - {vegetable.isReadyToEat ? 'Ready to eat' : 'Not ready to eat'}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exporting the component for use in the application
module.exports = Index;
