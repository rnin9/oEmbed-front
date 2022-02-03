# 백엔드 테스트 (Front)

해당 백엔드 테스트의 프론트페이지는 React의 CRA로 구성되었습니다. [Create React App](https://github.com/facebook/create-react-app).

## How to Run

해당 프로젝트의 프론트를 실행하기위해서, 해당 순서를 지켜주세요!

```bash
# description 현재 프로젝트의 package.json에 적힌 모든 패키지(packages)를설치하기 위해 terminal에 입력해주세요.
$ npm install
```



```bash
# description 브라우저에서 확인하기위해 프로젝트를 run 시켜주세요.
$ npm run start
```


* [http://localhost:3000](http://localhost:3000)
* [http://localhost:3000/home](http://localhost:3000/home) 

위 두개의 url을 브라우저에 입력하시면, front 페이지를 확인하실 수 있습니다.<br/><br/>

## 실행화면

```
프로그램 실행 시, URL을 입력하는 Input html이 존재하고, 입력한 URL에 대한 oEmbed Data를 수집할 수 있습니다. 
수집가능한 플랫폼은 Twitter, Instagram, Youtube, Vimeo입니다.
```
![image](https://user-images.githubusercontent.com/62874963/152295312-891ae47c-83e9-4329-93b6-28e2b8c41082.png)

## 실행예시 (트위터)

![image](https://user-images.githubusercontent.com/62874963/152295787-efea0225-a12e-4864-8a97-3889880c6d01.png)





 __※ Backend Server가 먼저 동작하고 있는지 확인 후, 테스트 url을 입력해주세요!__
 
 
 ## Front Page Q&A
 
 >Q1: 화면의 contents들이 뭉개져서 나옵니다!
 >> 전체화면에서, chrome web Browser %100 일때, 가장 이상적인 방식으로 화면에 표현됩니다. 전체화면으로 결과물을 봐 주세요!
 <br/>
 
 >Q2: Instagram의 thumbnail_url 이미지가 제대로 출력되지 않는것 같습니다.
 >>   Instagram oEmbed Api에서 가져온 Data중, thumbnail_url은 cross-origin-resource-policy를 same-origin으로 가지고 있어 이미지를 미리보기할 때, SOP (same-origin-policy)를 위반한 형태라 표현할 수가 없습니다.<br/>
 >>   ~~하지만 client가 instagram url scheme을 통해 oEmbed 데이터를 request할 때, 구현된 Nest Backend Server 의 '/public/instagramImage/' directory에서 이미지 파일이 서버에 저장되는것을 확인하실 수 있으며, 백엔드와 프론트를 분리하여 개발했기에 백엔드의 public 폴더에 접근하지 못하는점 양해 부탁드립니다.~~
 >>   열려져 있는 localhost:3001/public/InstagramImage/~-image.png로 접근할 수 있습니다. (2022-01-24 수정) 
____
<h4 align='right'> written by kang min ju 2022/01/20</h4>
