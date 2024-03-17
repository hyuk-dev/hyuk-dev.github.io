---
title: Jekyll Chirpy 테마 설치하는 방법
date: 2024-03-17 15:30:00 +0900
categories: [가이드]
tags: [블로그, 테마]
author: lee
---

## 테마 소개
Chirpy 테마는 cotes2020 님께서 제작한 Jekyll 기반 테마입니다.

이 테마는 현재 6천이상의 stars를 받았으며, 한국어 설정이 가능하기 때문에 국내에서 이 테마를 사용하시는 분들이 많아 보입니다.

제가 Chirpy 테마를 선택한 이유는 코드의 Copy 기능과 한글화 기능, 심플한 디자인 때문이었습니다.

## 테마 설치하기
테마 설치 자체는 어렵지 않으나 설치하면서 오류가 발생하는 경우가 많았습니다.

인내심을 가지고 천천히 설치를 하면서 중간중간 에러가 발생하면 검색을 해서 코드 수정이나 설정 변경등을 진행해주시면 됩니다.

### 1. 테마 Fork 진행
먼저 [Chripy 테마 깃허브 사이트](https://github.com/cotes2020/jekyll-theme-chirpy) 에 접속하셔서 본인의 repo로 Fork 해주시길 바랍니다.

![이미지](assets/img/Chirpy-fork.png)


### 2. 테마 config 파일 수정
repo 에 들어가셔서 Code 에 바로있는 _config.yml 파일을 여시고 아래에 해당하는 부분을 찾아 수정하시면 됩니다.

- lang: ko-KR
- timezone: Asia/Seoul
- title: 원하는 제목
- tagline: 부 제목
- description: 검색 시 제목 아래 표기될 내용
- url: 자신의 깃허브 페이지 주소

### 3. 깃헙 repo 세팅 수정
`Settings-Pages-Build and deployment` 로 들어가셔서 Source를 `GitHub Actions` 로 변경해주세요.

![이미지](assets/img/build-and-deploy.png)

### 4. 깃허브 페이지 주소로 들어가서 확인
본인의 깃허브 페이지 주소를 웹 브라우저로 접속해서 정상적으로 Chirpy 테마가 적용된 Jekyll 사이트가 출력되는지 확인합니다.

### 5. 오류 관련 질문
오류 관련 질문은 댓글로 남겨주시길 바랍니다. 답변까지는 시간이 꽤 걸릴 수 있습니다. 최대한 아는 정보를 바탕으로 알려드릴테니, 어려움을 겪고 있다면 답변 남겨주시길 바랍니다.