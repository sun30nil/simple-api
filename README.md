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

if you get an error saying failed to install nginx-core, then you might be running an apache2 server. Please stop the apache2 server using "sudo service apache2 stop", and try the install again.

Now create a package.json and run the command:
    npm install
this will install all dependencies in a folder 'node_modules' in the same project directory.

Write your server code in apiserver.js and you're ready to start your server by executing:

    node apiserver.js

Use the below curl command to POST:

    curl -H "Content-Type: application/json" -X POST -d '{"handlename": "@linuss","tweet": "Retweeted: mongodb v3+ doesnt work with ubuntu 16.04. Need to be fixed soon...","followers": 45}' http://localhost/api/tusers -v

Below is the response you get for the above curl request:

    {"__v":0,"handlename":"@linuss","tweet":"Retweeted: mongodb v3+ doesnt work with ubuntu 16.04. Need to be fixed soon...","followers":45,"_id":"580cb2c3b2c2d92a4806d09d"}sunil@sunil-Vostro-2520:/etc/nginx/sites-enabled$
    
### Installing nginx:

    sudo apt-get install nginx
After installing nginx you've to confiure your webapp to be reverse proxied by an nginx server.

All your nginx defualt config is located at /etc/nginx/nginx.conf

To add your new website under nginx navigate to /etc/nginx/sites-enabled and create a file called default if not already present.

Place the config present in file default0 in your default file and start nginx:

    sudo service nginx start

Whenever you change any nginx conf, just reload nginx using:

    sudo service nginx reload

## Advantages of nginx:
    a) Concurrent Requests: Nginx helps your application scale to handle huge number of concurrent requests. For eg. your machine 4 cores meaning worker_processes = 4 * 2 = 8 and default worker_connections = 768. Thus the number of clients/sec that can be served are 8 * 768 = 6144 (That's a good number by a single server).
    b) Caching: You can cache pages so everytime user visits the same page you don't need talk to server, nginx makes a copy of the same (for a duration you've mentioned) and quickly loads it for you.
    c) Load Balancing: Tomorrow if you get more traffic, you can add more servers and nginx will take of distributing the load to the other servers. For eg. you added three more servers, now you can handle a traffic of 6144 * 4 = 24576 requests/sec. All this can be done while your website is still running.
