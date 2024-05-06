FROM node:18-alpine

# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./ 
# Run npm install
RUN npm install
# Bundle app source
COPY . .
# Expose port 3000
EXPOSE  5173

CMD ["npm", "start"] 