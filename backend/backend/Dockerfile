FROM node:19-slim
WORKDIR /backend
COPY . /backend
EXPOSE 3000
RUN npm i
RUN npm run build
CMD [ "npm","run","start"]