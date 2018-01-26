const polka = require('polka');
const { json } = require('body-parser');
const cors = require('cors')({ origin:true });
const serve = require('serve-static')('public');
const compress = require('compression')();

const { PORT=3000 } = process.env;

polka()
	.use(cors, json(), serve, compress)
	.use('api', require('./api'))
	.listen(PORT)
	.then(_ => {
		console.log(`> Running on localhost:${PORT}`);
	});

