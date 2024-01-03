const React = require('react');

// This component is for showing the details of a single vegetable.
function Show({ vegetable }) {
  return (
    <html>
      <head>
        <title>Vegetable Detail</title>
      </head>
      <body>
        <h1>{vegetable.name}</h1>
        <p>Color: {vegetable.color}</p>
        <p>{vegetable.isReadyToEat ? 'It is ready to eat' : 'It is not ready to eat'}</p>
        <a href="/vegetables">Back to the list</a>
      </body>
    </html>
  );
}

module.exports = Show;
