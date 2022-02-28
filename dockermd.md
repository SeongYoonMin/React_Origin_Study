# dockerfile build . dockerfile 빌드

# 베이스 이미지 명시. / <이미지이름>:<태그>  / ex. ubuntu:14.04

FROM alpine

# 추가적으로 필요한 파일들을 다운로드 받는다. DockerImage가 생성되기 전에 수행할 쉘 명령어.

# RUN command

# 컨테이너 시작 시 실행 될 명령어를 명시해준다. DockerFile 내에 1회만 사용 가능

CMD [ "echo", "hello" ]

# docker run -p [브라우저포트]:[컨테이너포트] 컨테이너 번호