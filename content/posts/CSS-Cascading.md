---
title: "CSS Cascading을 해보자."
date: 2024-12-04T14:12:00+09:00
# weight: 1
# aliases: ["/first"]
categories: ["CSS"]
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
UseHugoToc: true
---

# Cascading이란?

스타일 시트나 규칙이 서로 겹칠 때 어떤 걸 적용할 지를 정하는 것입니다.

# Cascading 3요소

## Specificity

우선순위로 해석됩니다.  
```
/* 1순위 - 인라인 스타일 */


/* [HTML] */

<div style="background-color:green;">



/* 2순위 - 아이디 선택자 */


/* [HTML] */
<div id="test"></div>

/* [CSS] */
#test {

}



/* 3순위 - 클래스 선택자등... */


/* [HTML] */

<div class="test"></div>

/* [CSS] */

.test{
  
}

```

1순위는 인라인, 2순위는 아이디, 3순위는 클래스 이렇게 기억해두면 좋겠습니다.

## Source order