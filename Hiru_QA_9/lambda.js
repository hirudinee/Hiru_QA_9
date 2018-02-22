let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	sqs.sendMessage({
		MessageBody: 'this is a test message',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_test',
		DelaySeconds: '0',
		MessageAttributes: {
			"test": {
				"DataType": "String",
				"StringValue": "001"
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
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});



	callback(null, 'Successfully executed');
}