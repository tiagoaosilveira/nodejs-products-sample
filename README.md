## Description

This is a NodeJs API which queries and edits a Postgres Database

## Requirements

```bash
brew install node@10.16.0
```

Postgres config:

user : postgres

password : postgres

port : 5432

database : ltdatabase

##### Table creation script:
```
CREATE TABLE products
(
  id serial NOT NULL,
  name character varying(255) NOT NULL,
  quantity integer NOT NULL,
  price numeric(5,2),
  CONSTRAINT products_pkey PRIMARY KEY (id)
)
```

## Dependencies

Install dependencies with:

```bash
cd backend
npm install
```

### Running the api

Run the api with:

```bash
cd backend
nodemon index or node index
```

### Api Functions

##### POST /login - Authenticates the user

Request Body:
```json
{
   "user" : "tiago",
   "pwd"  : "123"
}
```

Response:
```json
 {
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlJPTEVfQURNSU4iLCJpYXQiOjE2MDI4NjMzNzcsImV4cCI6MTYwMzQ2ODE3N30.5Zd5Ge1A2cuQT8ljdd8z-80a99BEeYBXj5cnjj9Lm5Q"
 }
```

##### GET /products - Retrieves all products of the database
Response:
```json
[
    {
        "id": 33,
        "name": "Product 1",
        "quantity": 10,
        "price": "3.00"
    },
    {
        "id": 32,
        "name": "Product 2",
        "quantity": 15,
        "price": "15.00"
    }
]
```

##### GET /products/:id - Retrieves product with specific id
Response:
```json
{
    "id": 33,
    "name": "Product 1",
    "quantity": 10,
    "price": "3.00"
}
```

##### POST /products - Create a product - REQUIRES TOKEN
Request Header:
> Authorization: Bearer {{tokenDev}}

Request:
```json
{
    "name" : "Product 3",
    "quantity" : 50,
    "price" : 10.1
}
```

Response:
```json
{
    "id": 34,
    "name": "Product 3",
    "quantity": 50,
    "price": "10.10"
}
```

##### PUT /products/:id - Update product with specific id - REQUIRES TOKEN
Request Header:
> Authorization: Bearer {{tokenDev}}

Request:
```json
{
    "name" : "Product 3",
    "quantity" : 51,
    "price" : 10.1
}
```

Response:
```json
{
    "id": 33,
    "name": "Product 3",
    "quantity": 51,
    "price": "10.10"
}
```

##### DELETE /products/:id - Remove product with specific id - REQUIRES TOKEN
Request Header:
> Authorization: Bearer {{tokenDev}}

Response:
```json
{
    "message": "Product succesfully removed!"
}
```





