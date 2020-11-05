const http = require('http');

function requestHandler(req, res) {
    res.write('Github and Cloud Run Integration seems working');
    res.end();
}

const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`listening on port ${port}`));
