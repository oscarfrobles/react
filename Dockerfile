FROM node:14-alpine 

WORKDIR /app

RUN apk update 

RUN apk add curl wget vim git 


RUN npx create-react-app react-app

#RUN cd react-app && chmod -Rf 755 *

#RUN file="$(ls -al /app/react-app)" && echo $file #> /app/salida.txt

#RUN package="$(cat /app/react-app/package.json)"  && echo $package

#COPY ./data/react-app/package.json

#COPY ./data/ /app/react-app/

 
WORKDIR /app/react-app/

CMD ["npm","start", "--port 3000", "--host 0.0.0.0"]
