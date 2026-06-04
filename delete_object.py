import boto3
session = boto3.Session(profile_name='student2') 
# 2. Use the session to create your S3 client 
s3 = session.client('s3') 
s3.delete_object( 
    Bucket='yashashwani-vscode-bucket', 
    Key='hello.txt' ) 
print("Deleted") 