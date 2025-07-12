<template>
  <div class="min-h-screen bg-white">
    <!-- 네비게이션 -->
    <BlogNavbar />

    <!-- 메인 콘텐츠 -->
    <main class="max-w-full mx-auto px-8 py-16">
      <div class="max-w-7xl mx-auto">
        <!-- 로딩 상태 -->
        <div v-if="isLoading" class="loading-container">
          <div class="loading-spinner"></div>
          <p class="loading-text">시리즈 데이터를 불러오는 중...</p>
        </div>

        <!-- 에러 상태 -->
        <div v-else-if="error" class="error-container">
          <div class="error-icon">⚠️</div>
          <h3 class="error-title">데이터를 불러올 수 없습니다</h3>
          <p class="error-message">{{ error }}</p>
          <button class="retry-button" @click="loadSeriesData">
            다시 시도
          </button>
        </div>

        <!-- 시리즈 카드들 -->
        <div v-else-if="seriesData.length > 0" class="space-y-12 series-cards-container">
          <div class="card-wrapper" v-for="series in seriesData" :key="series.url">
            <BlogCard :title="series.blog_name" :description="series.desc" :tags="series.tag"
              :date="formatDate(series.created_date)" class="series-card" />
          </div>
        </div>

        <!-- 데이터가 없는 경우 -->
        <div v-else class="empty-container">
          <div class="empty-icon">📚</div>
          <h3 class="empty-title">아직 시리즈가 없습니다</h3>
          <p class="empty-message">첫 번째 시리즈를 만들어보세요!</p>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <BlogFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BlogNavbar from '@/components/BlogNavbar.vue'
import BlogCard from '@/components/BlogCard.vue'
import BlogFooter from '@/components/BlogFooter.vue'

// 간단한 타입 정의
interface SeriesPost {
  blog_name: string
  desc: string
  url: string
  tag: string
  series: string
  created_date: string
}

// 반응형 데이터
const seriesData = ref<SeriesPost[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)

// 날짜 포맷팅 함수
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  } catch {
    return dateString
  }
}

// 시리즈 데이터 로드 함수
const loadSeriesData = async () => {
  isLoading.value = true
  error.value = null

  try {
    // API URL 설정
    // const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
    // const USER_ID = 'user123'

    // const response = await fetch(`${API_URL}/series?userId=${USER_ID}`)

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`)
    // }

    // const data = await response.json()

    // 하드코딩된 데이터 사용
    const data = [
      {
        blog_name: "인공지능 시리즈",
        desc: "데이터 전처리부터 모델 최적화까지, AI 개발의 전 과정을 기록합니다. 논문 리뷰와 실제 구현의 차이를 분석하고, 캐글 대회에서 얻은 실전 인사이트를 공유합니다. 머신러닝의 수학적 기반부터 최신 딥러닝 아키텍처까지, 이론과 코드를 함께 정리합니다.",
        url: "hiary.ai/series/artificial-intelligence",
        tag: "AI, Machine Learning, Deep Learning",
        series: "인공지능",
        created_date: "2025-09-01"
      },
      {
        blog_name: "백엔드 설계 시리즈",
        desc: "AWS부터 쿠버네티스까지, 클라우드 네이티브 환경을 구축하고 운영하는 과정을 기록합니다. 서버리스 아키텍처 설계부터 컨테이너 오케스트레이션, CI/CD 파이프라인 구축과 모니터링 시스템 설정까지, DevOps 엔지니어의 실무 경험과 트러블슈팅 노하우를 공유합니다.",
        url: "hiary.ai/series/backend-design",
        tag: "Backend, DevOps, AWS",
        series: "백엔드 설계",
        created_date: "2025-08-20"
      }
    ]

    if (data && Array.isArray(data)) {
      seriesData.value = data
    } else {
      error.value = '시리즈 데이터를 불러올 수 없습니다.'
    }
  } catch (err) {
    error.value = '네트워크 오류가 발생했습니다.'
    console.error('시리즈 데이터 로드 실패:', err)
  } finally {
    isLoading.value = false
  }
}

// 컴포넌트 마운트 시 데이터 로드
onMounted(() => {
  loadSeriesData()
})
</script>

<style scoped>
/* 시리즈 카드 커스터마이징 */
.series-cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.series-cards-container :deep(.blog-card) {
  width: 1200px;
  max-width: 100%;
}

.series-cards-container :deep(.image-placeholder) {
  width: 300px;
}

.series-cards-container :deep(.text-content) {
  padding: 24px 32px 24px 0;
}

/* 로딩 스타일 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 16px;
}

.loading-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #E4E4E7;
  border-top: 3px solid #2563EB;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #71717A;
  margin: 0;
}

/* 에러 스타일 */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 16px;
}

.error-icon {
  font-size: 48px;
}

.error-title {
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #18181B;
  margin: 0;
}

.error-message {
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #71717A;
  text-align: center;
  margin: 0;
}

.retry-button {
  padding: 8px 16px;
  border: 1px solid #E4E4E7;
  border-radius: 6px;
  background: white;
  color: #18181B;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
}

.retry-button:hover {
  background: #F4F4F5;
}

/* 빈 상태 스타일 */
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 16px;
}

.empty-icon {
  font-size: 48px;
}

.empty-title {
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #18181B;
  margin: 0;
}

.empty-message {
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #71717A;
  text-align: center;
  margin: 0;
}

@media (max-width: 1200px) {
  .series-cards-container :deep(.blog-card) {
    width: 100%;
    max-width: 1200px;
  }
}
</style>
