# pull official base image
FROM postgres:latest

# Postgres password
ENV POSTGRES_PASSWORD project1

# daatbase name
ENV POSTGRES_DB Reviews

# starting point
COPY init.sql /docker-entrypoint-initdb.d/