// Import the ioredis package
const Redis = require('ioredis');

// Create Redis publisher and subscriber instances
const publisher = new Redis();
const subscriber1 = new Redis();
const subscriber2 = new Redis();

const topic = 'news';


subscriber1.subscribe(topic, (err, count) => {
  if (err) console.error('Subscriber 1 error:', err);
  console.log(`Subscriber 1 subscribed to ${topic}`);
});

subscriber1.on('message', (channel, message) => {
  console.log(`Subscriber 1 received message from ${channel}: ${message}`);
});

subscriber2.subscribe(topic, (err, count) => {
  if (err) console.error('Subscriber 2 error:', err);
  console.log(`Subscriber 2 subscribed to ${topic}`);
});

subscriber2.on('message', (channel, message) => {
  console.log(`Subscriber 2 received message from ${channel}: ${message}`);
});

setTimeout(() => {
  console.log('Publishing message: Breaking News!');
  publisher.publish(topic, 'Breaking News! Node.js with Redis Pub-Sub works!');
}, 2000);

setTimeout(() => {
  console.log('Publishing another message: More Updates!');
  publisher.publish(topic, 'More Updates! Redis makes Pub-Sub easy.');
}, 5000);

process.on('SIGINT', () => {
  console.log('Closing Redis connections...');
  publisher.disconnect();
  subscriber1.disconnect();
  subscriber2.disconnect();
  process.exit();
});
