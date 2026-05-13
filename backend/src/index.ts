import express from 'express';

const PORT = 3000;

const app = express();

app.get('/', (_req, res) => {
	res.json({ status: 'ok' });
});

app.listen(PORT, () => {
	console.log(`Server started on port http://localhost:${PORT}`);
});

const x: string = 123;
