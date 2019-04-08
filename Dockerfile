FROM node:11
WORKDIR /usr/src/app/
COPY /package.json .
COPY /package-lock.json .
RUN ["npm", "install", "--only=prod"]
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start-prod"]