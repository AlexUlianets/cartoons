************
Technologies
************

 - react: "^16.5.2",
 - react-dom: "^16.5.2",
 - npm: '6.4.1'
 - react-bootstrap: "^1.0.0-beta.5",
 - react-redux: "^5.0.5",
 - react-router: "^4.3.1",
 - redux: "^3.7.2",
 - babel-core: "^6.21.0"

************
Installation
************

- npm install
- npm start


************
Externals
************

We can change url in webpack.json. Here it is example:

    externals: {
        config: JSON.stringify({
            apiUrl: 'https://s3.amazonaws.com'
        })
    }