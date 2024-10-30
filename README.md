# 전담의 React,Node.js를 활용한 SNS

## 💿프로젝트 소개

+ React.js와 Node.js를 활용하여 SNS웹페이지를 구현하였습니다. 해당 페이지는 사용자간 팔로우,팔로잉,피드 등록 및 좋아요,댓글기능들을 구현하였습니다.

## 📆개발 기간

+ 2024.10.23 ~ 2024.10.29

## ⌨Languges

<img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/nodemon-%2376D04B.svg?&style=for-the-badge&logo=nodemon&logoColor=black" />
<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" />
## 🛠Edit tool

<img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />

## 📈구현 과정

1. 아이디어 구상
  + 기본적인 SNS를 구현하게 되었습니다. 가장 대표적인 Instagram을 모티브하여 제작을 했습니다.

2. DB설계
  + 회원가입을 위한 사용자 테이블
  + 피드 테이블
  + 피드에 첨부될 이미지의 경로가 저장되는 첨부파일 테이블
  + 피드의 '좋아요' 기능을 위한 테이블
  + 피드의 댓글기능을 위한 테이블
  + 사용자간의 팔로우 테이블
    
3. 기능구현
 + 구현된 HTML페이지들을 Eclipse에서 tomcat서버를 이용하여 jsp파일로 변환하여 DB데이터 조회 및 수정 삭제
 + 예외처리(중복확인,빈값처리,길이제한,권한처리(수정,삭제,작성) etc...)


## 🔎Page detail

https://github.com/JeonDam18/reactMiniProject/blob/main/server/Catchup(SNS).txt
