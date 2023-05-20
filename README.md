# Text-to-speech-converter-using-AWS-Lambda-and-Amazon-Polly


In this project, I developed a text-to-speech converter using AWS Lambda and Amazon Polly. The goal was to convert text files into lifelike speech.

To begin, I set up an AWS account and created an S3 bucket. The S3 bucket served as the storage location for the text files that needed to be converted to speech.

Next, I configured Amazon Polly by creating a new IAM user with the necessary permissions for the service. This allowed me to access and utilize Amazon Polly's text-to-speech capabilities.

Using AWS Lambda, I wrote a function that integrated with Amazon Polly. The function was responsible for retrieving the text files stored in the S3 bucket and invoking Amazon Polly's text-to-speech conversion functionality. AWS Lambda, as a serverless computing service, enabled me to execute the function without the need to provision or manage servers.

Furthermore, I integrated the text-to-speech converter with a web application, allowing users to convert their text to speech. This integration involved connecting the web application to the AWS Lambda function and providing a user-friendly interface for inputting text and receiving the corresponding speech output.

In terms of tools, I utilized various AWS services such as AWS Cloud, Amazon S3 Bucket, Amazon Polly, and AWS Lambda. The AWS Command Line Interface (CLI) was used for managing and interacting with these services efficiently. Additionally, I employed DynamoDB, a NoSQL database service provided by AWS, to store any necessary metadata or additional information related to the text-to-speech conversions.

On the front-end side of the web application, I leveraged Angular.js, a popular JavaScript framework, to build a dynamic and interactive user interface. For the back-end, I used Node.js, a JavaScript runtime, to handle server-side operations and communicate with the AWS services.

Throughout the development process, I utilized Git for version control, enabling efficient collaboration, code management, and tracking of project changes.

In summary, this project involved setting up AWS infrastructure with an S3 bucket and configuring Amazon Polly. I implemented a text-to-speech conversion function using AWS Lambda, integrated it with a web application built with Angular.js and Node.js, and utilized Git for version control. The end result was a text-to-speech converter that allowed users to convert text files into lifelike speech using AWS services.
