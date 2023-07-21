# NYT Books

This is a simple frontend application developed with React.js to explore the NYT best sellers.

It sends requests to the NYT Books API and displays the books in organized, scrollable lists. Book titles redirect to the Amazon page for that book (when that information is available).

## Running the Application

Running the application is quite simple.

After cloning this repo, you'll need to install the modules using:
```
npm install
```

Then you'll need to create a `.env` file in the root of the project with your NYT API key:

```
REACT_APP_NYT_BOOKS_KEY=<YOUR KEY HERE>
```

Finally, run:
```
npm start
```

That should start the server on port 3000.
