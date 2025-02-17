# Pub-Sub System with Node.js and Redis

This project demonstrates a basic **Publish-Subscribe (Pub-Sub)** system using **Node.js** and **Redis**. It shows how to publish messages to a topic and allows multiple subscribers to receive those messages.

## 🛠️ Prerequisites
Ensure you have the following installed on your system:

1. **Node.js** (v18.x or higher recommended)
2. **Redis** (running on localhost:6379 by default)

To check if you have these installed:

```bash
node -v
redis-server --version
```

## 📦 Setup Instructions

1. **Clone the repository** (or create a directory and copy the provided code).

```bash
git clone <repository-url>
cd <your-directory>
```

2. **Initialize Node.js project** (if not already done):

```bash
npm init -y
```

3. **Install Dependencies**:

```bash
npm install ioredis
```

4. **Ensure Redis is running**:

If Redis is not running, start the Redis server:

```bash
redis-server
```

## ▶️ Run the Pub-Sub System

Execute the script:

```bash
node pubsub.js
```

## 📊 Expected Output

When the script is executed:

1. Both subscribers subscribe to the `news` topic.
2. After 2 seconds, the first message is published and received by both subscribers.
3. After 5 seconds, the second message is published and also received by both subscribers.

Example output:

```
Subscriber 1 subscribed to news
Subscriber 2 subscribed to news
Publishing message: Breaking News!
Subscriber 1 received message from news: Breaking News! Node.js with Redis Pub-Sub works!
Subscriber 2 received message from news: Breaking News! Node.js with Redis Pub-Sub works!
Publishing another message: More Updates!
Subscriber 1 received message from news: More Updates! Redis makes Pub-Sub easy.
Subscriber 2 received message from news: More Updates! Redis makes Pub-Sub easy.
```

## 📚 How It Works

1. **Publisher**: Sends messages to a Redis topic using `publish()`.
2. **Subscribers**: Listen for messages on the same topic using `subscribe()`.
3. **Message Flow**: Each message is broadcast to all active subscribers.

## 🧹 Graceful Shutdown

Press `CTRL + C` to exit the script. The Redis connections will be closed automatically.

## 🛠️ Troubleshooting

1. **Redis is not running:**
   Ensure Redis is installed and started with:
   
   ```bash
   redis-server
   ```

2. **Package issues:**
   Ensure `ioredis` is installed:

   ```bash
   npm install ioredis
   ```

## 📌 Next Steps

- Add more subscribers to different topics.
- Explore persistent messaging with Redis streams.

Enjoy building with Node.js and Redis! 🚀

