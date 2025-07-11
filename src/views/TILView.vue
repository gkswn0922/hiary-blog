<template>
  <div class="min-h-screen bg-white">
    <!-- 네비게이션 -->
    <BlogNavbar />

    <!-- 메인 콘텐츠 -->
    <main class="max-w-full mx-auto px-8 py-16">
      <div class="max-w-7xl mx-auto">
        <!-- TIL 카드들 -->
        <div class="space-y-12 til-cards-container">
          <div class="card-wrapper" v-for="post in tilPosts" :key="post.id">
            <BlogCard :title="post.title" :description="post.description" :tags="post.tags" :date="post.date"
              class="til-card" />
          </div>
        </div>

        <!-- 페이지네이션 -->
        <div class="mt-12 pt-12 border-t border-gray-200">
          <div class="flex justify-between items-center">
            <button class="pagination-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.33"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
              이전
            </button>

            <div class="flex items-center gap-2">
              <div class="pagination-number pagination-number-active">1</div>
              <div class="pagination-number">2</div>
              <div class="pagination-number">3</div>
            </div>

            <button class="pagination-button">
              다음
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.33"
                stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- 푸터 -->
    <BlogFooter />
  </div>
</template>

<script setup lang="ts">
import BlogNavbar from '@/components/BlogNavbar.vue'
import BlogCard from '@/components/BlogCard.vue'
import BlogFooter from '@/components/BlogFooter.vue'

// TIL 포스트 데이터
const tilPosts = [
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
    tags: "t-SNE, PCA, dimension",
    date: "2025년 8월 29일"
  },
  {
    id: 4,
    title: "Optimizer 시리즈 심층 분석 - SGD부터 AdamW까지",
    description: "각 옵티마이저의 동작 원리와 수학적 배경을 이해했습니다. Momentum, RMSProp, Adam 등의 발전 과정을 따라가며 per-parameter 학습률 조정의 중요성을 깨달았고, 실제 프로젝트에서의 선택 기준을 정리했습니다.",
    tags: "Optimization, SGD, AdamW",
    date: "2025년 8월 28일"
  },
  {
    id: 5,
    title: "YOLO 알고리즘 구현과 객체 탐지 실습",
    description: "실시간 객체 탐지의 대표 모델인 YOLO를 처음부터 구현해보았습니다. Grid cell의 개념부터 Anchor box 설정, IoU 계산까지 직접 코딩하면서 One-stage detector의 작동 원리를 완벽히 이해했습니다.",
    tags: "Computer Vision, YOLO",
    date: "2025년 8월 27일"
  },
  {
    id: 6,
    title: "배치 정규화 vs 레이어 정규화 - 언제 무엇을 써야 할까?",
    description: "Batch Norm, Layer Norm, Instance Norm, Group Norm의 차이점을 실험으로 확인했습니다. 각 정규화 기법의 수학적 근거와 구현 방식을 비교하고, CNN과 RNN에서의 적절한 사용 사례를 정리했습니다.",
    tags: "Batch Norm, Layer Norm, Instance Norm",
    date: "2025년 8월 26일"
  }
]
</script>

<style scoped>
.pagination-button {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  color: #09090B;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.pagination-button:hover {
  background-color: rgba(244, 244, 245, 0.5);
}

.pagination-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 500;
  color: #18181B;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.pagination-number:hover {
  background-color: rgba(244, 244, 245, 0.5);
}

.pagination-number-active {
  background-color: #18181B;
  color: #FAFAFA;
}

/* TIL 카드 커스터마이징 */
.til-cards-container {
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

.til-cards-container :deep(.blog-card) {
  width: 1200px;
  max-width: 100%;
}

.til-cards-container :deep(.image-placeholder) {
  width: 300px;
}

.til-cards-container :deep(.text-content) {
  padding: 24px 32px 24px 0;
}

@media (max-width: 1200px) {
  .til-cards-container :deep(.blog-card) {
    width: 100%;
    max-width: 1200px;
  }
}
</style>
