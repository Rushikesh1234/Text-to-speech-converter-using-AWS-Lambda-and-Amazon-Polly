// Import the AWS SDK
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const polly = new AWS.Polly();

// Define the Lambda function
exports.handler = async (event, context) => {
  // Retrieve the bucket name and file key from the event
  const { bucket, key } = event;

  try {
    // Get the text content from the text file stored in S3
    const s3Object = await s3.getObject({ Bucket: bucket, Key: key }).promise();
    const text = s3Object.Body.toString();

    // Set the parameters for Amazon Polly
    const params = {
      Text: text,
      OutputFormat: 'mp3',
      VoiceId: 'Joanna', // Specify the desired voice for the speech
    };

    // Convert text to speech using Amazon Polly
    const speech = await polly.synthesizeSpeech(params).promise();

    // Upload the speech audio to a new S3 bucket
    const audioKey = `${key}.mp3`;
    await s3.putObject({ Bucket: 'output-bucket', Key: audioKey, Body: speech.AudioStream }).promise();

    // Return the URL of the generated audio
    return {
      statusCode: 200,
      body: `Speech conversion successful. Audio URL: https://s3.amazonaws.com/output-bucket/${audioKey}`,
    };
  } catch (error) {
    // Handle any errors that occur
    console.error('Error converting text to speech:', error);
    return {
      statusCode: 500,
      body: 'Speech conversion failed.',
    };
  }
};
