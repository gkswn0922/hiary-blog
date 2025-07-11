# hiary-blog

Vue.js 기반 블로그 프로젝트입니다.

## 기능

- 블로그 포스트 조회
- 반응형 디자인
- 간단한 API 통신

## API 통신 설정

### 환경변수 설정

`.env` 파일을 생성하여 API URL을 설정하세요:

```env
VITE_API_URL=http://localhost:3000/api
```

### API 데이터 형식

백엔드에서 다음 형식으로 데이터를 반환해야 합니다:

```json
{
  "success": true,
  "data": [
    {
      "blog_name": "Aiden의 TIL 블로그",
      "desc": "매일매일의 개발 과정과 문제 해결 과정을 기록합니다.",
      "url": "hiary.ai/devsprintlog",
      "tag": "XGBoost, LightGBM, Gradient",
      "series": "인공지능",
      "created_date": "2024-01-15"
    }
  ]
}
```

### API 엔드포인트

- `GET /api/blogs/latest?limit=3` - 최신 포스트 3개 조회

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── components/     # Vue 컴포넌트
├── views/         # 페이지 컴포넌트
├── stores/        # Pinia 상태 관리
└── router/        # Vue Router 설정
```

## 특징

- **간단한 구조**: 복잡한 service 레이어 없이 컴포넌트에서 직접 API 호출
- **최소 TypeScript**: 필수 타입 정의만 포함
- **직관적인 코드**: fetch API를 사용한 간단한 네트워크 통신
