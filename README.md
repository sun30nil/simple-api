# Building a simple api using Nodejs and Mongodb as a datastore.

    OS: Ubuntu
    Webserver: Nodejs
    Database (NoSQL): Mongodb

#### Install nodejs:
sudo apt-get install nodejs

Install npm - to install the nodejs package manager:
sudo apt-get install npm

#### Installing latest stable mongodb package:

To get a reliable package source for mongo db follow the below steps:

    a) sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
    
    b) echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
    
    c) sudo apt-get update
    
    d) sudo apt-get install -y mongodb-org