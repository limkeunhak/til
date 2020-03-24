### 메모리에서 파일을 읽어 응답하기

```javascript
    // S3에서 Object 조회시 application/octet-stream 형식으로 전달됨
    let obj = await s3Manager.getObject({ Bucket: config.AWS.S3_PRIVATE_BUCKET_NAME, Key: contents.Key });

    // 1. content-type 을 설정하여 전달
    res.set('Content-Type', `image/${utils.getFileExtension(contents.Key)}`);
    res.status(200).send(obj.Body);

    // 2. 임시 파일에 저장하고 res.download 이용
    const savedFilePath = `/temp/${contents.Key}`;, {'Content-Type': `application/${utils.getFileExtension(contents.Key)}`}
    
    fs.writeFile(savedFilePath, obj.Body, (err) => {
        if (err) {
            res.status(500).json({ code: resultCode.SERVER_ERROR, data: null });
        } else {
            res.status(200).download(savedFilePath, contents.Key);
        }
    });
```