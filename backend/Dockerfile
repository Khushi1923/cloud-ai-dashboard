FROM node:latest

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code to the container
COPY . .

# Set environment variable for Cloud Run
ENV PORT=3000

# Start the application (use npm start for production)
CMD ["npm", "start"]


