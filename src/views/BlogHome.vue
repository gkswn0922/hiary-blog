<template>
  <div class="min-h-screen bg-white">
    <!-- 네비게이션 -->
    <BlogNavbar />

    <!-- 프로필 섹션 -->
    <ProfileSection />

    <!-- 메인 콘텐츠 -->
    <main class="max-w-full mx-auto px-12 py-8">
      <div class="max-w-7xl mx-auto space-y-12">
        <!-- 블로그 포스트 카드들 -->
        <div class="home-cards-container">
          <div class="card-wrapper" v-for="post in blogPosts" :key="post.id">
            <BlogCard :title="post.title" :description="post.description" :tags="post.tags" :date="post.date" />
          </div>
        </div>

        <!-- 모든 게시물 보기 버튼 -->
        <div class="flex justify-center pt-1">
          <button class="all-posts-button">
            <span class="button-text">모든 게시물 보기</span>
            <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <BlogFooter />
  </div>
</template>

<script setup lang="ts">
import BlogNavbar from '@/components/BlogNavbar.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import BlogCard from '@/components/BlogCard.vue'
import BlogFooter from '@/components/BlogFooter.vue'

// 블로그 포스트 데이터
const blogPosts = [
  {
    id: 1,
    title: "XGBoost와 LightGBM의 깊은 이해와 현업 적용",
    description: "Python API와 sklearn wrapper의 차이점을 분석하고, GOSS 알고리즘의 실제 구현과 논문의 차이를 발견했습니다. Gradient 기반 데이터 중요도 평가 방식을 이해하고 실전 적용 방법을 학습했습니다.",
    tags: "XGBoost, LightGBM, Gradient",
    date: "2025년 9월 1일"
  },
  {
    id: 2,
    title: "Attention 메커니즘과 Transformer 구조 이해",
    description: "RNN의 발전된 형태인 Attention 메커니즘의 작동 원리를 학습했습니다. Self-attention부터 Transformer 아키텍처까지 구현하며, 왜 이 기술이 NLP의 표준이 되었는지 이해했습니다.",
    tags: "Attention, Transformer, NLP",
    date: "2025년 8월 30일"
  },
  {
    id: 3,
    title: "t-SNE와 차원 축소 기법 실습",
    description: "고차원 데이터 시각화를 위한 t-SNE의 원리를 이해하고 구현했습니다. PCA와의 차이점을 비교하며, 각 차원 축소 기법의 장단점과 적절한 사용 사례를 학습했습니다.",
    tags: "t-SNE, PCA",
    date: "2025년 8월 29일"
  }
]
</script>

<style scoped>
.all-posts-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  justify-content: center;
}

.all-posts-button:hover {
  background: #F4F4F5;
}

.button-text {
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #18181B;
}

.arrow-icon {
  width: 16px;
  height: 16px;
  color: #18181B;
  flex-shrink: 0;
}

/* 홈 카드 커스터마이징 */
.home-cards-container {
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

.home-cards-container :deep(.blog-card) {
  width: 1200px;
  max-width: 100%;
}

.home-cards-container :deep(.image-placeholder) {
  width: 300px;
}

.home-cards-container :deep(.text-content) {
  padding: 24px 32px 24px 0;
}

@media (max-width: 1200px) {
  .home-cards-container :deep(.blog-card) {
    width: 100%;
    max-width: 1200px;
  }
}
</style>
