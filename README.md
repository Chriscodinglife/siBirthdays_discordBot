# siBirthdays Discord Bot

## Getting started

1. docker build -t sibirthday .
2. docker run -v "$(pwd)/secrets:/app/secrets" sibirthday
3. Make sure to login to ECR in AWS
4. aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin <repo>
5. docker tag sibirthday:latest public.ecr.aws/c8x2l0x6/sibirthday:latest
6. docker push <repo>/sibirthday:latest

Also gotta make sure you have the write permissions in ECR Public and STS 
https://docs.aws.amazon.com/AmazonECR/latest/public/docker-push-ecr-image.html

