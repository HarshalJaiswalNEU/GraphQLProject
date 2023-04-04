client app
 docker build -t my-react-app .
 docker run -p 3000:3000 my-react-ap

Server app
 docker build -t my-node-app .
 docker run -p 80:80 -p 3001:3001 my-node-app 