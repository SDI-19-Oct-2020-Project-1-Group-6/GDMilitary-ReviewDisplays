# pull official base image
FROM node:current-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

# add app
COPY . ./

# start app
CMD ["npm", "start"]