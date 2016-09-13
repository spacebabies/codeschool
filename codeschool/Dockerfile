FROM node:argon

RUN npm install webpack -g

WORKDIR /codeschool/
COPY . /codeschool/
RUN npm install

CMD npm run build-production
