FROM node

RUN apt-get update && apt-get install -y alsa-base libasound2-dev

VOLUME /dev/snd

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]

EXPOSE 5000
