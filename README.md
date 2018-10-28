# hackattack2018
This is the application for Queens College Hackattack 2018. 

# HOW TO EXPRESS
    npm install in the "queens-express" directory to download dependencies
    npm start in order to get the application running
    application will restart whenever any change is made to app.js
    the port will be your environment ip address, can be changed
    
# HOW TO EJS
    create new html files with .ejs extension
    express will read files from the views directory and .ejs ending does not need to be added when routing
<<<<<<< HEAD
    allows us to include embedded javascript in our html
    
# HOW TO MONGODB
    go into your working directory
    insert the following commands: 
        sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
        echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
        sudo apt-get update
        sudo apt-get install -y mongodb-org
    cd into the root directory:
        mkdir data
        echo "mongod --dbpath=data --nojournal" > mongod
        chmod a+x mongod
    Run this command in the root directory in a separate terminal from your working one:
        ./mongod
=======
    allows us to include embedded javascript in our html.
    
>>>>>>> e41c1aad5e36a089d029a2057980b0b58217c564
