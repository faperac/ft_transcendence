FROM postgres:16.3-alpine3.19

ENV POSTGRES_DB=database
ENV POSTGRES_USER=fab
ENV POSTGRES_PASSWORD=pass

COPY init.sql /docker-entrypoint-initdb.d/

# defaut Postgres port
EXPOSE 5432
