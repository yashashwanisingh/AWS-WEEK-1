import boto3 
session = boto3.Session(profile_name='student2') 
# 2. Use the session to create your S3 client 
s3 = session.client('s3') 
response = s3.list_objects_v2( 
    Bucket='yashashwani-vscode-bucket' ) 
for obj in response.get('Contents', []): 
    print(obj['Key']) 
     