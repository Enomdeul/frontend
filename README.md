<img width="1015" height="570" alt="" src="https://github.com/user-attachments/assets/73a6cab1-018b-454a-8415-df4f8bf9e73b" />

<br>

## + AS : Add ( ) Skills!
**+ AS**는 기획자, 디자이너, 개발자가 서로가 가진 스킬을 공유하며 함께 성장할 수 있도록 청춘들을 매칭해주는 **React Native 기반 하이브리드 앱**입니다.

<br>

### 주요 기능
1. **스플래시 / 회원가입 / 로그인** : 프로필 카드 생성을 위한 회원가입 및 로그인
   
| 스플래시 | 회원가입 | 로그인 |
|-----------|-------------|--------|
|<img width="475" height="776" alt="" src="https://github.com/user-attachments/assets/1c6faf4a-e464-4344-bf0c-8d88f889411b" />|<img width="475" height="776" alt="" src="https://github.com/user-attachments/assets/35e349d3-cded-414e-898a-2c12d06dda96" />|<img width="475" height="776" alt="" src="https://github.com/user-attachments/assets/21334b57-476f-48da-a177-6e9d6d00934c" />|

2. **온보딩** : 작성한 기본 정보, 나의 스킬 및 더하고 싶은 스킬, 소개를 토대로 프로필 카드 생성

| 기본 정보 | 나의 스킬 | 더하고 싶은 스킬 | 소개 | 생성된 프로필 카드 |
|-----------|---------|--------|--------|--------|
|<img width="497" height="771" alt="" src="https://github.com/user-attachments/assets/71fb0202-7a08-47d1-aff4-35a9e53fa2c4" />|<img width="497" height="771" alt="" src="https://github.com/user-attachments/assets/3503229e-b12b-4024-a0c4-40dffb63d206" />|<img width="497" height="771" alt="" src="https://github.com/user-attachments/assets/b8a90616-be36-4028-96c2-07f74f6484b7" />|<img width="497" height="771" alt="" src="https://github.com/user-attachments/assets/efe3aed8-51d5-4b51-b334-737afe4517f0" />|<img width="488" height="773" alt="" src="https://github.com/user-attachments/assets/c0d73f1f-a7f8-4703-ba6a-36aef1d32654" />|

3. **유저 매칭** : 프로필 카드 생성시 선택한 나의 스킬 및 더하고 싶은 스킬을 토대로 유저 탐색 및 1:1 매칭

| 홈 | 다른 유저 프로필 카드 | 매칭 요청 | 매칭 요청 완료 |
|-----------|-------------|--------|-------|
|<img width="488" height="773" alt="" src="https://github.com/user-attachments/assets/e4db19a1-8b91-4f22-af64-2354b946d003" />|<img width="488" height="773" alt="" src="https://github.com/user-attachments/assets/f6c76eae-c874-47fb-8b52-d1712e86eedc" />|<img width="488" height="773" alt="" src="https://github.com/user-attachments/assets/91af6b4e-9588-49fc-8436-af7f85234535" />|<img width="488" height="770" alt="" src="https://github.com/user-attachments/assets/6e8b32a8-ee8d-4ce9-a9cb-850fbc45e90a" />|

| 제안 받은 매칭 | 다른 유저 프로필 카드 | 매칭 수락 | 매칭 거절 |
|-----------|-------------|--------|-------|
|<img width="488" height="773" alt="" src="https://github.com/user-attachments/assets/191de283-6dc0-4fbc-b45d-367d75a132cb" />|<img width="488" height="770" alt="" src="https://github.com/user-attachments/assets/9930d5c8-d465-4f25-b96e-0a71907d2ac2" />|<img width="488" height="770" alt="" src="https://github.com/user-attachments/assets/81cb1633-ecdd-44a9-bf8b-ef32ac9cbfa9" />|<img width="488" height="770" alt="" src="https://github.com/user-attachments/assets/bcb72c8d-aac0-49a3-8f13-7ba934e66541" />|

<br>

### 기술 스택
| 기술 | 목적 | 플랫폼 |
|------|------|--------|
| React | UI 라이브러리 | Web |
| React Native | 크로스 플랫폼 모바일 앱 개발 | Mobile |
| TypeScript | 타입 안정성 | Web, Mobile |
| Vite | 빌드 도구 및 개발 서버 | Web |
| Expo | React Native 개발 플랫폼 | Mobile |
| React Router | 클라이언트 사이드 라우팅 | Web |
| TanStack Query | 서버 상태 관리 및 데이터 페칭 | Web |
| Axios | HTTP 클라이언트 | Web |
| Tailwind CSS | 유틸리티 기반 CSS 프레임워크 | Web |

<br>

### 브랜치 전략

#### 브랜치 타입

| 브랜치 | 목적 |
|--------|------|
| `main` | 프로덕션 배포 |
| `develop` | 개발 통합 |
| `feature/*` | 기능 개발 |

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
