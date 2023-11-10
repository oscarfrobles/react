FROM node:14-alpine 

WORKDIR /app

RUN apk update 

RUN apk add curl wget vim git 

RUN npx create-react-app react-app


WORKDIR /app/react-app/

CMD ["npm","start", "--host 0.0.0.0"]
