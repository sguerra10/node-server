const express = require('express');
const routerApi = require('./router/route');
const port = 3000
const app = express();

routerApi(app);

app.listen(port, () => {
        console.log('Server is running on port ' + port);
})  


