# create a .env file

```bash
touch .env
```
## add .env file

```
PORT=3000
MONGO_URI = "mongodb://127.0.0.1:27017/BooksCollection"
```

# Install dependencies

```
npm install
```

# Run server

```
npm run dev
```

## backend directory structure

```
    -config/
        database.js
    -models/
        bookModel.js
    -routes/
        books.js
    .env
    index.js
    package.json
    readme.md
```

As in Frontend port is set as 3000 of backend so please run this on 3000 port only ,else change backend port and frontend code. 
