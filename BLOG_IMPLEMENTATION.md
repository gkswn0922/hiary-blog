# Aiden's Blog - Vue 구현

Figma 디자인을 기반으로 shadcn-vue 컴포넌트를 사용하여 구현한 개인 블로그 홈페이지입니다.

## 📋 구현된 기능

### 🎨 디자인 구현
- ✅ **네비게이션 바**: 로고, 메뉴 항목 (홈, TIL, 시리즈), 팔로우 버튼
- ✅ **프로필 섹션**: 아바타, 이름, 팔로워 수, 소개글, 소셜 미디어 링크
- ✅ **블로그 카드**: TIL 포스트 카드들 (이미지, 뱃지, 제목, 설명, 더 보기 버튼)
- ✅ **푸터**: 저작권 정보, 이용약관, 개인정보처리방침 링크
- ✅ **반응형 레이아웃**: 데스크톱 최적화된 레이아웃

### 🧩 컴포넌트 구조
```
src/
├── components/
│   ├── BlogNavbar.vue      # 네비게이션 바
│   ├── ProfileSection.vue  # 프로필 섹션
│   ├── BlogCard.vue       # 블로그 포스트 카드
│   └── BlogFooter.vue     # 푸터
├── views/
│   └── BlogHome.vue       # 메인 블로그 홈페이지
└── router/
    └── index.ts           # 라우터 설정
```

## 🚀 설치 방법

### 1. 필수 패키지 설치

먼저 shadcn-vue와 필요한 의존성들을 설치해야 합니다:

```bash
# shadcn-vue 초기화
pnpm dlx shadcn-vue@latest init

# 필요한 컴포넌트들 설치
pnpm dlx shadcn-vue@latest add button card avatar badge

# 아이콘 라이브러리 설치
pnpm install lucide-vue-next

# Tailwind CSS (이미 설치되어 있지 않은 경우)
pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### 2. Tailwind CSS 설정

`tailwind.config.js` 파일이 올바르게 설정되어 있는지 확인하세요:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

## 🎯 주요 특징

### shadcn-vue 컴포넌트 사용
- **Button**: 다양한 variant (primary, outline, ghost) 지원
- **Card**: 블로그 포스트 카드 레이아웃
- **Avatar**: 프로필 이미지 표시
- **Badge**: 카테고리 태그 표시

### 반응형 디자인
- Tailwind CSS를 사용한 모바일 우선 반응형 디자인
- 데스크톱 최적화된 레이아웃 (max-width: 1280px)

### TypeScript 지원
- Vue 3 Composition API + TypeScript
- 타입 안전성을 보장하는 props 인터페이스

## 📝 블로그 포스트 데이터

현재 하드코딩된 3개의 AI/ML 관련 포스트가 포함되어 있습니다:

1. **XGBoost와 LightGBM의 깊은 이해와 현업 적용**
2. **Attention 메커니즘과 Transformer 구조 이해**  
3. **t-SNE와 차원 축소 기법 실습**

## 🔄 확장 가능성

### API 연동
```vue
// BlogHome.vue에서 API 데이터로 교체
const { data: blogPosts } = await $fetch('/api/posts')
```

### 다크 모드 지원
shadcn-vue의 테마 시스템을 활용하여 다크 모드를 쉽게 추가할 수 있습니다.

### 추가 페이지
- TIL 페이지
- 시리즈 페이지  
- 개별 포스트 상세 페이지
- 검색 기능

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: Blue-600 (#2563EB)
- **Text**: Gray-900 (#18181B)
- **Muted**: Gray-600 (#71717A)
- **Border**: Gray-200 (#E4E4E7)

### 타이포그래피
- **헤딩**: Inter 폰트, 다양한 font-weight
- **본문**: Pretendard Variable 폰트
- **크기**: 12px ~ 24px 범위

## 🛠️ 기술 스택

- **Framework**: Vue 3 + TypeScript
- **UI Components**: shadcn-vue
- **Styling**: Tailwind CSS
- **Icons**: Lucide Vue Next
- **Router**: Vue Router
- **Build Tool**: Vite

## 📱 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)  
- Safari (최신 버전)
- Edge (최신 버전)

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 