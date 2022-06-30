const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  // .then(x => {
  //   console.log(`Connected to the database: "${x.connection.name}"`);
  //   // Before adding any recipes to the database, let's remove all existing ones
  //   return Recipe.deleteMany()
  // })
  // .then(() => {
  //   Recipe.insertMany(data)
  //   .then(recipe => console.log(recipe.title))
  //   .catch(error => console.log('Error is:', error))

  // })
  // .catch(error => {
  //   console.error('Error connecting to the database', error);
  
  //  Recipe.findOneAndUpdate(
    //    {title: "Rigatoni alla Genovese"},
    //    {duration: 100}
    //  )
    //  .then(success => console.log('Update successfull', success))
    //  .catch(err => console.log('UH OH:', err))
    
    Recipe.deleteOne({title: 'Carrot Cake'})
    .then(success => console.log('One Deleted', success ))
    .catch(err => console.log('UH OH:', err))
    // });