FROM alpine:3.7 as builder

ARG FIVEM_NUM=2431
ARG FIVEM_VER=2431-350dd7bd5c0176216c38625ad5b1108ead44674d

LABEL maintainer="Spritsail <fivem@spritsail.io>" \
      org.label-schema.vendor="Spritsail" \
      org.label-schema.name="FiveM" \
      org.label-schema.url="https://fivem.net" \
      org.label-schema.description="FiveM is a modification for Grand Theft Auto V" \
      org.label-schema.version=${FIVEM_NUM}

WORKDIR /output

RUN wget -O- http://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/${FIVEM_VER}/fx.tar.xz \
        | tar xJ --strip-components=1 \
            --exclude alpine/dev --exclude alpine/proc \
            --exclude alpine/run --exclude alpine/sys \
 && apk -p $PWD add tini

COPY server.cfg fivem/server.cfg
COPY resources fivem/resources

#================
FROM scratch

COPY --from=builder /output/ /

WORKDIR /fivem
EXPOSE 30120
ENV SERVER_ARGS=""

ENTRYPOINT \
    set -ax; \
    echo "Container started with key: ${LICENCE_KEY}";\
    exec /sbin/tini -- /opt/cfx-server/FXServer \
        +set sv_licenseKey "${LICENCE_KEY}"\
        +set citizen_dir /opt/cfx-server/citizen/ \
        +exec /fivem/server.cfg $0 $@