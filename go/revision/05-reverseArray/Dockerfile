FROM golang:latest
RUN mkdir /app
ADD main.go /app/
WORKDIR /app
RUN go build -o main .
CMD [ "/app/main" ]