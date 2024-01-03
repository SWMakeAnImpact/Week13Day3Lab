const express = require('express');
const app = express();
const vegetableRoutes = require('./routes/vegetableRoutes');

app.set('view engine', 'jsx'); // if you're using a JSX view engine
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/vegetables', vegetableRoutes); // use vegetable routes

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
