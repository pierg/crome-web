# syntax=docker/dockerfile:1

# Clone all the repository that are useful
WORKDIR /home
RUN git clone https://github.com/pierg/crome-cgg.git --branch main --single-branch
RUN git clone https://github.com/pierg/crome-contracts.git --branch main --single-branch
RUN git clone https://github.com/pierg/crome-logic.git --branch main --single-branch
RUN git clone https://github.com/pierg/crome-synthesis.git --branch main --single-branch

# Copy all the file that are important
WORKDIR /home/crome-web
COPY . .
COPY ../cert.pem .
COPY ../privkey.pem .

EXPOSE 5000

RUN ./run.sh -s