# node-docker-app

## Dockfile
FROM : 어떤 이미지를 사용해서 빌드할것인지 결정
```dockerfile
FROM node:16
```

WORKDIR : 이미지 안에 애플리케이션 코드를 넣기 위해 디렉토리 생성
```dockerfile
WORKDIR /usr/src/app
```

COPY: 로컬에 있는 파일을 복사 
```dockerfile
COPY package*.json ./
```
RUN : 명령어 실행(의존성 설치)

```dockerfile
RUN npm install
```

EXPOSE : 포트 매핑
```dockerfile
EXPOSE 3000
```

CMD : 서버 구동 명령어
```dockerfile
CMD [ "node", "app.js" ]
```

## Docker 명령어 실행

docker build . -t <name>/node-docker-app:<version>
```bash
docker build . -t choidaegeon/node-docker-app:0.0.1
```

## Docker 이미지 실행

docker run -p <포트포워딩포트>:<node 3000포트> -d <이미지명>

```dockerfile
docker run -p 49160:3000 -d choidaegeon/node-docker-app:0.0.3
```