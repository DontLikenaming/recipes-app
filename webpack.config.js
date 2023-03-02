const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",        // 진입(시작) 파일
    output: {
        path: path.join(__dirname, "dist"),     // 번들 파일 저장 위치
        filename: "app.bundle.js"   // 따로 filename을 지정하지 않으면
                                    // 기본 파일 이름은 main.js
    },
    module: {   // 각 파일에 대한 세부적인 번들링 작업 정의
        rules: [
            { test: /\.js$/i,    // 정규표현식(.js로 끝나는 파일 지정)
            exclude: /node_modules/, loader: "babel-loader" },
            // node_modules를 제외한 나머지는 babel-loader을 이용해 트랜스파일링
            { test: /\.png$/,
                use: [{ loader: "file-loader",},],},
        ]
    },
    devServer: {    // 서버 구동 시 관련 내용 설정
        static: path.join(__dirname, 'dist'),
        open: true, // 자동으로 브라우저 실행
        hot: true,  // 수정사항 발생 시 브라우저에 즉시 반영
    },
    plugins: [
        new HtmlWebpackPlugin({ //dist 안에 index.html 자동 생성
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
