FROM node:24-alpine
WORKDIR /app

# Install exactly what package-lock.json says (same command GitHub Actions runs)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project
COPY . .

# Expose React's default port
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]