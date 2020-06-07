const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true
  },
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors:[
    authorSchema
  ]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}
async function updateAuthor(courseId){
  const course = await Course.update({_id:courseId},{
    $unset:{
      'author':''
    }
  });
  // course.author.name = 'Mosh Hamadani';
  // course.save();
}

async function addAuthor(courseId,author){
const course = await Course.findById({_id:courseId});
course.authors.push(author);
course.save();
}

async function removeAuthor(courseId,authorId){
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

// createCourse('Node Course',[ 
//   new Author({ name: 'John' }),
//   new Author({ name: 'Rajesh' }),
  
// ]);
removeAuthor('5d7f68bd470b7d56602f9392','5d7f68bd470b7d56602f9390');
//updateAuthor('5d7e983b7d9b0c5af4434ed9');
//addAuthor('5d7f68bd470b7d56602f9392',new Author({name:'Jack'}))