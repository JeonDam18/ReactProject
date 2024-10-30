# 전담의 React,Node.js를 활용한 SNS

## 💿프로젝트 소개

+ 사용자간 언어교환 시스템을 매칭해주는 페이지로 기본적인 로그인,회원가입,게시판의 CRUD를 구현하였습니다.

## 📆개발 기간

+ 2024.10.23 ~ 2024.10.29

## ⌨Languges


![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
<img src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white" />
<img src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white" />
<img src="https://img.shields.io/badge/nodemon-%2376D04B.svg?&style=for-the-badge&logo=nodemon&logoColor=black" />
## 🛠Edit tool

![Eclipse](https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 📈구현 과정

1. 아이디어 구상
  + 언어에대한 관심이 있던중 언어교환 시스템을 구현해봐야 겠다고 생각함
  + 실질적인 매칭들은 게시글에 의해 구현이 되어 신뢰도가 떨어져 기본적인 사용자들간의 정보를 노출(SELFIE,자기소개,선호하는 시간 ETC..) 회원들의 정보가 노출되어있기 때문에 회원들만 MAIN페이지 접속가능


2. DB설계
  + 회원가입을 위한 사용자 테이블(첨부파일은 경로로 읽어온다)
  + 게시물을 위한 테이블
  + 사용자들간의 매칭을 위한 테이블(신청한 사람과 신청받은 사람의 매칭된 테이블)
  + F&Q를 위한 테이블

3. HTML/CSS구현
  + jsp 구현 전에 VScode를 이용하여 전반적인 UI를 구현한다(버튼,페이지 이동등 간단한 기능포함)

    
4. 기능구현
 + 구현된 HTML페이지들을 Eclipse에서 tomcat서버를 이용하여 jsp파일로 변환하여 DB데이터 조회 및 수정 삭제
 + 예외처리(중복확인,빈값처리,길이제한,권한처리(수정,삭제,작성) etc...)


## 🔎Page detail

https://github.com/JeonDam18/Miniproject/blob/master/src/main/webapp/WEB-INF/document/%EC%96%B8%EC%96%B4%EA%B5%90%ED%99%98%EC%8B%9C%EC%8A%A4%ED%85%9C%EB%AC%B8%EC%84%9C%EC%A0%95%EB%A6%AC.txt
