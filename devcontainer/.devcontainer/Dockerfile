FROM node:lts

ARG DEBIAN_FRONTEND=noninteractive

# Configure apt
RUN apt-get update \
&& apt-get -y install --no-install-recommends apt-utils 2>&1

# Verify various tools installed
RUN apt-get install -y git procps curl sqlite3

# Clean up
RUN apt-get autoremove -y \
 && apt-get clean -y \
 && rm -rf /var/lib/apt/lists/*

RUN npm set @sap:registry=https://npm.sap.com && npm install --global @sap/cds

COPY vscode-cds-1.2.11.vsix /tmp/  
