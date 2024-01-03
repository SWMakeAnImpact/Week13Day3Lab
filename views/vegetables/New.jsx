const React = require('react');

// This component is for rendering a form to create a new vegetable.
function New() {
  return (
    <html>
      <head>
        <title>Add New Vegetable</title>
      </head>
      <body>
        <h1>Add New Vegetable</h1>
        <form method="POST" action="/vegetables">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="color">Color:</label>
            <input type="text" id="color" name="color" required />
          </div>
          <div>
            <label>
              <input type="checkbox" name="isReadyToEat" />
              Ready to Eat
            </label>
          </div>
          <input type="submit" value="Add Vegetable" />
        </form>
        <a href="/vegetables">Back to the list</a>
      </body>
    </html>
  );
}

module.exports = New;
