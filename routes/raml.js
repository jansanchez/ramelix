#!/usr/bin/env node
'use strict';

const fs = require('fs');
const osprey = require('osprey');
const color = require('chalk');
const router = osprey.Router();

const callback = (request, response) => {
	const charset = 'utf-8';
	const name = request.url.replace(/^\//, "");
	const jsonFile = `api/examples/${name}.response.json`;
	console.log(color.magenta('URL Name: ') + color.bold(name));
	console.log(color.cyan('Request:'));
	console.log(color.gray('Body:'));
	console.log(request.body);// logs { deviceId: 'deviceid' }
	try {
		fs.readFile(jsonFile, charset, (err, data) => {
			if (err) {
				throw err;
			}
			response.setHeader('Content-Type', `application/json; charset=${charset}`);
			response.end(data);
			console.log(color.cyan('Response:'));
			console.log(data);
			console.log(color.gray('.').repeat(45));
			console.log('');
		});
	}	catch	(e)	{
		console.log(e);
	}
};

/*
* Routers
*/
router.post('/token', callback);

module.exports = router;
