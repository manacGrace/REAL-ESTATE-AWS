FROM mariadb:10.11

# Set environment variables
ENV MARIADB_ROOT_PASSWORD=dbpassword \
    MARIADB_DATABASE=bdimmo

# Copy the seed.sql file
COPY seed.sql /docker-entrypoint-initdb.d/

# Create a directory for custom initialization scripts
RUN mkdir -p /docker-entrypoint-initdb.d

# Copy the seed.sql file to the initialization directory
COPY seed.sql /docker-entrypoint-initdb.d/

# Set permissions
RUN chown -R mysql:mysql /docker-entrypoint-initdb.d 