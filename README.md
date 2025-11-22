# react-native-todo

### 체크포인트

- [x] expo project 설치
- [x] vite project 설치
- [x] web에 shadcn/ui 세팅 [(공식 문서)](https://ui.shadcn.com/docs/installation/vite)
- [x] react-native-webview 기반 WebView 렌더링
- [x] Figma MCP 기반 React + Tailwind 컴포넌트 생성 [(framelink)](https://www.framelink.ai/)
- [x] React Router 기반 라우터 구성
- [x] React Query와 Supabase를 사용한 API 구현
- [x] EAS 빌드 통해 테스트 APK 생성 (ios는?)
- [ ] Splash 처리
- [ ] native 기능 구현

<br>

### 개발 환경 실행 방법

**1. web**

```bash
cd web
npm install
npm run dev
```

**2. mobile**

```bash
cd mobile
npm install
npx expo start
```

**사전 준비**

- [ ] 레포지토리 클론
- [ ] 환경 변수(.env.\*)설정
- [ ] 개발 환경 실행에 앞서 테스트용 [android 이뮬레이터](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated&mode=development-build&buildEnv=local) 또는 [ios 시뮬레이터](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=development-build&buildEnv=local) 실행 필요

<br>

### native 라이브러리 설치

expo sdk 버전에 호환되는 라이브러리 버전 설치

```bash
npx expo install <라이브러리명>
```
