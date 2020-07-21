# node-rest-api
Node.js Rest API best practices with JWT, mongoDB and AWS 

npm install

npm start

# Register ( Method: POST )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/user/register

Body:
{
  "name": "training",
  "email": "training@gmail.com",
  "password": "training"
}

# Login  ( Method: POST )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/user/login

Body:
{
  "email": "training@gmail.com",
  "password": "training"
}

# ADD Post ( Method: POST )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/posts/

Headers:
Content-Type: application/json
auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE3MTZiNzAwZjMyYzE4NjgxMGIyNGEiLCJpYXQiOjE1OTUzNDg3NjN9.eoY9Fm1Hi2KnDJwG26sGwNgAtzzOpCV6rKULClxjKi4

Body:
{
  "subject": "subject",
  "article": "article details",
  "tags": ["subject","article","training"]
}

# GET Posts ( Method: GET )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/posts/

Headers:
Content-Type: application/json
auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE3MTZiNzAwZjMyYzE4NjgxMGIyNGEiLCJpYXQiOjE1OTUzNDg3NjN9.eoY9Fm1Hi2KnDJwG26sGwNgAtzzOpCV6rKULClxjKi4


# GET Single Post ( Method: GET )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/posts/:postId

Headers:
Content-Type: application/json
auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE3MTZiNzAwZjMyYzE4NjgxMGIyNGEiLCJpYXQiOjE1OTUzNDg3NjN9.eoY9Fm1Hi2KnDJwG26sGwNgAtzzOpCV6rKULClxjKi4


# Update Single Post ( Method: PUT )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/posts/:postId

Headers:
Content-Type: application/json
auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE3MTZiNzAwZjMyYzE4NjgxMGIyNGEiLCJpYXQiOjE1OTUzNDg3NjN9.eoY9Fm1Hi2KnDJwG26sGwNgAtzzOpCV6rKULClxjKi4


# Delete Single Post ( Method: DELETE )

http://noderestapi-env.eba-v5bv8qbb.eu-central-1.elasticbeanstalk.com/api/posts/:postId

Headers:
Content-Type: application/json
auth-token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjE3MTZiNzAwZjMyYzE4NjgxMGIyNGEiLCJpYXQiOjE1OTUzNDg3NjN9.eoY9Fm1Hi2KnDJwG26sGwNgAtzzOpCV6rKULClxjKi4
