FROM node:20-alpine
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose React's default port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]