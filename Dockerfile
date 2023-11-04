FROM node:16-alpine
# 경로 설정
WORKDIR /app

COPY package.json .

# install dependencies
RUN npm install

# 현재 디렉토리의 모든 파일 복사(to WORKDIR)
# 세이브 하고 도커 돌립시다ㅜㅠ
COPY . .
# 포트 노출
EXPOSE 3000

# Lez Rollllllll
CMD ["npm", "start"]
