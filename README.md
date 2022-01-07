# webpack

Setting_Webpack

# Sequence

npm init (-y)

npm install webpack webpack-cil --save-dev

    install -> i도 가능 ( 설치 )
    webpack-cil -> 커맨드 라인으로 실행을 가능케 함
    --save-dev -> -D도 가능 ( 개발용 설치 )

webpack.config.js 파일 생성 -> 설정 파일

    entry -> 시작파일
    output -> 생성되는 최종 파일
    output > path -> 경로

    ! const path를 선언하고, path.resolve(__dirname, 'dist')를 통해 호출

package.json -> scripts ( 명령어를 생성 )

    build 명령어 생성

npm run build -> dist 폴더 생성 및 main.js 파일 생성

    두 개의 파일을 합쳐서 하나의 파일로 만들어진 것을 확인 가능

index.html -> ./dist/main.js 적용

npm install html-webpack-plugin

    js파일만 있으면 안되기에 설치

webpack.config.js에 HtmlWebpackPlugin 추가 후 npm run build 진행

    dist 폴더 아래 index.html 파일 생성
    main.js가 포함되었으나 다른 내용이 빠짐

webpack.config.js에서 plugins에 옵션 추가 후 npm run build 진행

    내용이 포함되어 잘 추출됨, 웹에서 확인 시 정상
    현재 문제는 직접 파일을 열어줘야하며, 내용을 변경할 때마다, build 해줘야 함

npm install webpack-dev-server -D

    개발할 수 있도록 서버를 띄워줌
    webpack.config.js에 devServer 내용 추가
    이후 package.json에서 start 명령어 생성

warning 에러가 발생 -> mode 옵션이 없어 프로덕션으로 실행됐기 때문

    package.json start 명령에 --mode=development 추가

현 상태에서 build 시 경고 발생 mode 옵션이 없기 때문

    build 부분에 --mode=development 추가
    주석이 많이 생기게 됨

일반적인 모드로 진행하기 위해 --mode=development를 production 옵션으로 변경

    npm run build 시 잘 됨

npm install -D style-loader css-loader -> css 적용을 위해 설치

    webpack.config.js에 module 추가
    module 내 use에 들어가는 내용은 배열 뒷 내용부터 적용
    css -> style 순서로 적용

style.css 파일 생성 및 간단한 스타일 추가

    index.js에서 import 진행

npm start로 실행 후 개발자 모드 확인

    head 내부에 internal 형식으로 style 삽입 확인 가능

header.css 생성 후 index.js에 import

    hello 내 문자에 <h1> 태그를 주었을 때,
    header에 반영한 속성이 적용되는 것을 확인 가능

index.html에서 script 부분 제거 후 개발자 모드 확인

    <script defer src="main.js"></script> 삽입 확인 가능

css internal 삽입이 아닌 external로 적용하고 싶을 때

    npm install -D mini-css-extract-plugin
    webpack.config.js 에서 plugins에 선언
    style-loader -> MiniCssExtractPlugin.loader로 변경

npm start 후 개발자 모드 확인

    internal에서 external로 바뀐 것을 확인 가능
    -> <link href="common.css" ..

npm run build 시, dist 폴더 아래 common.css 생성

    style이 합쳐진 것을 확인 가능

npm install -D file-loader -> 이미지를 삽입하고 싶을 때

    webpack.config.js에서 module에 추가
    index.js에 import 후 적용
    여기서 const img를 선언할 때, 따옴표가 아닌 `를 사용해야 함
