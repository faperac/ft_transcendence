# Use the official PostgreSQL image from the Docker Hub
FROM postgres:latest

# Environment variables
ENV POSTGRES_DB=database
ENV POSTGRES_USER=fab
ENV POSTGRES_PASSWORD=pass

# Copy the initialization script to the Docker image
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432
