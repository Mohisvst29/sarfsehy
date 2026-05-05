const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const uri = env.split('MONGODB_URI=')[1].split('\n')[0].replace(/\"/g, '').trim();
const mongoose = require('mongoose');
mongoose.connect(uri).then(async () => {
  const Post = mongoose.models.Post || mongoose.model('Post', new mongoose.Schema({}, { strict: false }));
  const posts = await Post.find({});
  console.log('POSTS COUNT:', posts.length);
  console.log('POST IDs:', posts.map(p => p._id.toString()));
  process.exit(0);
}).catch(console.error);
