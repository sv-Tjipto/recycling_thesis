# Use official Node.js LTS Alpine image (lightweight)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend files
COPY backend/ ./backend/
WORKDIR /app/backend

# Install backend dependencies
RUN npm install

# Create the data directory for SQLite
RUN mkdir -p ./data

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
