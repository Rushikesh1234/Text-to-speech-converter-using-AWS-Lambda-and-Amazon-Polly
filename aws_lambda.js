{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Import the AWS SDK\
const AWS = require('aws-sdk');\
const s3 = new AWS.S3();\
const polly = new AWS.Polly();\
\
// Define the Lambda function\
exports.handler = async (event, context) => \{\
  // Retrieve the bucket name and file key from the event\
  const \{ bucket, key \} = event;\
\
  try \{\
    // Get the text content from the text file stored in S3\
    const s3Object = await s3.getObject(\{ Bucket: bucket, Key: key \}).promise();\
    const text = s3Object.Body.toString();\
\
    // Set the parameters for Amazon Polly\
    const params = \{\
      Text: text,\
      OutputFormat: 'mp3',\
      VoiceId: 'Joanna', // Specify the desired voice for the speech\
    \};\
\
    // Convert text to speech using Amazon Polly\
    const speech = await polly.synthesizeSpeech(params).promise();\
\
    // Upload the speech audio to a new S3 bucket\
    const audioKey = `$\{key\}.mp3`;\
    await s3.putObject(\{ Bucket: 'output-bucket', Key: audioKey, Body: speech.AudioStream \}).promise();\
\
    // Return the URL of the generated audio\
    return \{\
      statusCode: 200,\
      body: `Speech conversion successful. Audio URL: https://s3.amazonaws.com/output-bucket/$\{audioKey\}`,\
    \};\
  \} catch (error) \{\
    // Handle any errors that occur\
    console.error('Error converting text to speech:', error);\
    return \{\
      statusCode: 500,\
      body: 'Speech conversion failed.',\
    \};\
  \}\
\};\
}