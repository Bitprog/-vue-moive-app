module.exports = {
  // 사전에 정의된 전역 변수 설정
  env: {
    browser: true,
    node: true,
  },
  // 사용 가능한 규칙 세트
  extends: [
    "plugin:prettier/recommended",
    "@salesforce/eslint-config-lwc/recommended",
  ],
  // 구문 분석할 패키지 설정(Babel, ES6^ => ES5)
  parserOptions: {
    parser: "babel-eslint",
  },
  // 추가적인 코드 규칙을 설정
};
