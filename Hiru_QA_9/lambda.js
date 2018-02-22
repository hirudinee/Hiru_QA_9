let AWS = require('aws-sdk');
const s3 = new AWS.S3();
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	sqs.sendMessage({
		MessageBody: 'this is a test message from s3 trigger',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_test',
		DelaySeconds: '0',
		MessageAttributes: {
			"test": {
				"DataType": "String",
				"StringValue": "001123"
			},
			"test01": {
				"DataType": "Number",
				"StringValue": "001"
			},
			"test00": {
				"DataType": "Binary",
				"BinaryValue": "01"
			}
		}
	}, function (data) {
		console.log('successfull ',data);
	}, function (error) {
		console.log('error ',error);
	});






	callback(null, 'Successfully executed');
}