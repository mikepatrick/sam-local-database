## SAM local

A simple function demonstrating connecting to a database running on the docker host.

### Versions

- Docker Toolbox on Windows 7
- Docker  17.10.0-ce
- sam version 0.2.11

### Notes

- Local IP is used for MySQL connection string.  As of Docker 18.0.3, `docker.host.internal` can be used instead.
- MySQL user needs permission to connect from this host.  For example,   
   - `CREATE USER 'mike'@'192.168.1.6' IDENTIFIED BY 'password';`

### Debugging SAM

`yarn debug-sam`

Use "SAM Local" VSCode debug configuration in launch.json.
