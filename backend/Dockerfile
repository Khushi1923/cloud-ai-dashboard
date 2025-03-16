FROM node:latest

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source code to the container
COPY . .

# Expose port 3000 (the port on which your Express app runs)
EXPOSE 5000

# Command to run the application
# RUN npm run dev
CMD ["npm", "run","dev"]
