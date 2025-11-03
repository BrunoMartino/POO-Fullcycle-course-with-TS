FROM node:22.8.0-slim

ARG NODEMON_VERSION=3.1.7

RUN apt update && \
  apt install -y curl && \
  apt install -g nodemon@${NODEMON_VERSION}

WORKDIR /home/node/app

RUN chown -R node:node /home/node

COPY start.sh /
RUN chmod +x /start.sh

USER node

EXPOSE 3000

#start script executa dois comandos, primeiro instala as dependências e depois mantém o container de pé

CMD ["/start.sh"]