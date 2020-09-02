FROM alpine:latest

ARG FIVEM_VER=2431-350dd7bd5c0176216c38625ad5b1108ead44674d

RUN apk add --no-cache ca-certificates curl
RUN curl https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/${FIVEM_VER}/fx.tar.xz | tar xJ -C /srv

WORKDIR /srv

#copy your resources to server
COPY resources/ resources/
COPY server.cfg server.cfg

EXPOSE 30120/tcp 30120/udp

ENTRYPOINT ["sh", "/srv/run.sh"]
CMD ["+exec", "/srv/server.cfg"]