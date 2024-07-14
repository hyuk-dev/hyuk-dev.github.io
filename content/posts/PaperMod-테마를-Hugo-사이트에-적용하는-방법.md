---
title: "PaperMod 테마를 Hugo 사이트에 적용하는 방법"
date: 2024-07-13T20:04:46+09:00
# weight: 1
# aliases: ["/first"]
categories: ["Hugo"]
author: "Lee"
showToc: true
TocOpen: true
draft: false
hidemeta: false
comments: true
disableHLJS: false # to disable highlightjs
disableShare: true
hideSummary: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: false
ShowRssButtonInSectionTermList: true
UseHugoToc: false
---

# 개발 환경 설치하기
아래의 개발 환경들을 필수로 설치해주셔야 합니다.

## Git 설치
>Hugo에 테마를 적용할 때 Git을 사용하기 때문에 설치를 미리 해주셔야합니다. <br/>

[Git 설치링크](https://git-scm.com/downloads){:target="_blank"} <br/>

Git 설치를 완료하셨다면, `git --version` 명령어를 cmd창에서 입력하여 버전이 제대로 나오는지 확인해주세요. <br/>
성공적으로 설치가 되었다면 아래와 같이 현재 설치된 git의 버전이 나올 것입니다.

![깃버전 확인 이미지](/posts/img/cmd-git-version.png){:target="_blank"}

## Go 설치
>Hugo가 Go로 만들어진 언어이므로 Go를 먼저 설치해주도록 합시다.

[Go 설치링크](https://go.dev/doc/install){:target="_blank"}

Go 설치를 완료하셨다면 마찬가지로 `go version` 을 cmd 창에서 입력해주세요.

![고 버전 확인 이미지](/posts/img/go-version-cmd.png)

## Hugo 설치
>이제 드디어 Hugo를 설치할 차례입니다.

[Hugo 설치링크](https://gohugo.io/installation/){:target="_blank"}

아 참고로, Hugo 설치는 명령어를 통해 진행합니다.   
설치할 때 헷갈리시면 아래 링크에서 방법을 확인해주세요.

[Hugo 설치방법 링크](https://www.devkuma.com/docs/hugo/overview/){:target="_blank"}



# Hugo 사이트 생성

먼저, Hugo 사이트가 저장될 곳으로 경로를 수정한 뒤   
(ex: `cd 원하는 경로`)   

`hugo new site [사이트명] --format yaml` 명령어를 사용해줍니다.   
[사이트명] 부분은 원하는 사이트명으로 수정해주세요.

# PaperMod 테마 설치

>Git Submodule 방식으로 설치하는 것이 PaperMod 문서에서 추천하고 있으므로 해당 방법으로 설치해보겠습니다.

```cmd
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

```cmd
git submodule update --init --recursive
```
두 명령어를 입력하시고 엔터 누르셨으면 다음 단계로 넘어가시면 됩니다.

# Hugo 사이트 설정

먼저, Hugo 사이트 폴더에 `config.yml` 파일을 생성하여 주시길 바랍니다.   
그다음에 해당 파일을 열고 수정해주시면 되는데,   

[PaperMod 예제 깃허브](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite) 에서 config.yml 파일을 여시고 복사해와서 자신이 원하는대로 커스터마이징 해주시면 됩니다.

제가 설정했던 config.yml 은 아래와 같습니다.

```
baseURL: "https://hyuk.dev/"
title: 이동혁 기술 블로그
paginate: 5
theme: PaperMod

enableRobotsTXT: true
buildDrafts: false
buildFuture: false
buildExpired: false

minify:
  disableXML: true
  minifyOutput: true

params:
  env: production # to enable google analytics, opengraph, twitter-cards and schema.
  title: 이동혁 기술 블로그
  description: "이동혁 백엔드 개발자의 기술 블로그 입니다."
  keywords: [블로그, 백엔드, 개발자, 기술]
  author: Lee
  # author: ["Me", "You"] # multiple authors
  images: ["<link or path of image for opengraph, twitter-cards>"]
  DateFormat: "January 2, 2006"
  defaultTheme: auto # dark, light
  disableThemeToggle: false

  ShowReadingTime: true
  ShowShareButtons: true
  ShowPostNavLinks: true
  ShowBreadCrumbs: true
  ShowCodeCopyButtons: true
  ShowWordCount: true
  ShowRssButtonInSectionTermList: true
  UseHugoToc: true
  disableSpecial1stPost: false
  disableScrollToTop: false
  comments: false
  hidemeta: false
  hideSummary: false
  showtoc: false
  tocopen: false

  assets:
    # disableHLJS: true # to disable highlight.js
    # disableFingerprinting: true
    favicon: "<link / abs url>"
    favicon16x16: "<link / abs url>"
    favicon32x32: "<link / abs url>"
    apple_touch_icon: "<link / abs url>"
    safari_pinned_tab: "<link / abs url>"

  label:
    text: "HYUK.DEV"
    icon: /apple-touch-icon.png
    iconHeight: 35

  # profile-mode
  profileMode:
    enabled: false # needs to be explicitly set
    title: ExampleSite
    subtitle: "This is subtitle"
    imageUrl: "<img location>"
    imageWidth: 120
    imageHeight: 120
    imageTitle: my image
    buttons:
      - name: Posts
        url: posts
      - name: Tags
        url: tags

  # home-info mode
  homeInfoParams:
    Title: "안녕하세요! \U0001F44B"
    Content:  백엔드 개발자 이동혁의 블로그에 방문해주셔서 감사합니다.

  socialIcons:
    #- name: x
    #  url: "https://x.com/"
    #- name: stackoverflow
    #  url: "https://stackoverflow.com"
    - name: github
      url: "https://github.com/hyuk-dev"

  analytics:
    google:
      SiteVerificationTag: "XYZabc"
    bing:
      SiteVerificationTag: "XYZabc"
    yandex:
      SiteVerificationTag: "XYZabc"

  cover:
    hidden: true # hide everywhere but not in structured data
    hiddenInList: true # hide on list pages and home
    hiddenInSingle: true # hide on single page

  editPost:
    URL: "https://github.com/hyuk-dev/hyuk-dev.github.io/tree/main/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link

  # for search
  # https://fusejs.io/api/options.html
  fuseOpts:
    isCaseSensitive: false
    shouldSort: true
    location: 0
    distance: 1000
    threshold: 0.4
    minMatchCharLength: 0
    limit: 10 # refer: https://www.fusejs.io/api/methods.html#search
    keys: ["title", "permalink", "summary", "content"]
menu:
  main:
    #- identifier: categories
    #  name: 카테고리
    #  url: /categories/
    #  weight: 10
    - identifier: tags
      name: 카테고리
      url: /categories/
      weight: 20
    - identifier: portfolio
      name: 포트폴리오
      url: https://portfolio.hyuk.dev/
      weight: 30
# Read: https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs#using-hugos-syntax-highlighter-chroma
pygmentsUseClasses: true
markup:
  highlight:
    noClasses: false
    # anchorLineNos: true
    # codeFences: true
    # guessSyntax: true
    # lineNos: true
    # style: monokai
```

>여기서 좀 신경써주셔야 할 부분이 있는데   
editPost: 뒤의 링크가 다음과 같은 방식으로 설정되어야 합니다.

https://github.com/[깃허브아이디]/[레포지터리명]/tree/[브랜치명]/content

또한, content 폴더내에 posts 폴더를 추가하고 그 안에 포스팅들을 넣어야만 메인 페이지에서 작성된 글의 목록을 볼 수 있습니다.

# Hugo 사이트에 글쓰기

글을 쓸 때에는 `/content/posts/` 아래에 `[제목].md` 파일을 생성해주신 다음에 아래와 같은 형식으로 작성해주시면 됩니다.

```
---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
# weight: 1
# aliases: ["/first"]
tags: ["태그"]
author: "Lee"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: true
disableHLJS: false # to disable highlightjs
disableShare: true
hideSummary: false
searchHidden: false
ShowReadingTime: false
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: false
ShowRssButtonInSectionTermList: true
UseHugoToc: false
---
```

>필요한 부분은 커스터마이징 해서 사용해주시면 됩니다. 

md 파일을 따로 저장해둔 다음에 복사해서 글을 작성하시면 편하게 글을 쓰실 수 있습니다.

# Hugo의 장점

- 속도가 빠릅니다.
- 포스팅 글을 저장하고 수정하는 것이 편리합니다. (로컬환경)