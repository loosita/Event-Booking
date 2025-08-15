# Use Node.js official image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and pachage-lock.json first
COPY package*.json ./

# Installing dependencies 
RUN npm install

# Copy all other files 
COPY . .

# Expose the port
EXPOSE 3000

# Command ot run when container starts
CMD ["node","server.js"]


