import app from './app'
const port = process.env.PORT
import './database'
 



 app.listen(port);

 console.log(`Listening on port:${port}`)