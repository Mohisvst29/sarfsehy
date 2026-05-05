const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const uri = env.split('MONGODB_URI=')[1].split('\n')[0].replace(/\"/g, '').trim();
const mongoose = require('mongoose');
mongoose.connect(uri).then(async () => {
  const Post = mongoose.models.Post || mongoose.model('Post', new mongoose.Schema({}, { strict: false }));
  const post = await Post.findById('69fa389d094b92c013a339c5');
  console.log('POST:', post);
  process.exit(0);
}).catch(console.error);
