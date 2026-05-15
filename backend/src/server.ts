import app from './app.js';
import 'dotenv/config';

const port = process.env.PORT;
const host = process.env.HOST;

app.listen({host, port}, () => {
	console.log(`Server started on port http://${host}:${port}`);
});
