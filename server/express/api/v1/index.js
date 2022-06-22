const path = require('node:path');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const router = require('express').Router();
const testRouter = require('./router/test.router');

const swaggerDocument = YAML.load(path.join(__dirname + '/swagger.yaml'));

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/test', testRouter);

module.exports = router;
