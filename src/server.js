import http from 'http'; // Import the HTTP module
import { Server } from 'socket.io';
import cors from 'cors';
import app, { connectDB } from './app';

const { PORT } = process.env;
app.use(cors());

const server = http.createServer(app); // Create an HTTP server using the Express app
const io = new Server(server); // Create a Socket.IO server and attach it to the HTTP server

// Socket.IO event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Example: Handle a custom event
  socket.on('customEvent', (data) => {
    console.log('Custom event received:', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const startServer = async () => {
  try {
    // First, establish the database connection
    await connectDB();

    // If the database connection is successful, start the server
    server.listen(PORT, () => {
      console.log(`🍏 Server is running on: http://localhost:${PORT} ... 🌊`);
    });
  } catch (err) {
    console.error(`❌ Error starting the server: ${err}`);
    process.exit(1);
  }
};

startServer();