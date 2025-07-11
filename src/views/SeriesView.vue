<template>
    <div class="min-h-screen bg-white">
        <!-- 네비게이션 -->
        <BlogNavbar />

        <!-- 메인 콘텐츠 -->
        <main class="max-w-full mx-auto px-8 py-24" style="padding: 24px 32px;">
            <div class="series-container">
                <!-- 시리즈 섹션들 -->
                <div v-for="series in seriesData" :key="series.id" class="series-section">
                    <div class="series-info">
                        <!-- 시리즈 헤더 -->
                        <div class="series-header">
                            <div class="series-label-container">
                                <span class="series-label">시리즈</span>
                            </div>
                            <div class="series-title-container">
                                <h2 class="series-title">{{ series.title }}</h2>
                            </div>
                            <div class="series-description-container">
                                <p class="series-description">{{ series.description }}</p>
                            </div>
                        </div>

                        <!-- 모든 TIL 보기 버튼 -->
                        <button class="view-all-button">
                            <span class="button-text">모든 TIL 보기</span>
                            <svg class="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="1.33" stroke-linecap="round"
                                stroke-linejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12,5 19,12 12,19"></polyline>
                            </svg>
                        </button>
                    </div>

                    <!-- 시리즈 카드들 -->
                    <div class="series-cards">
                        <SeriesCard v-for="post in series.posts" :key="post.id" :title="post.title"
                            :description="post.description" :tags="post.tags" :date="post.date"
                            :category="series.title" />
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
import SeriesCard from '@/components/SeriesCard.vue'
import BlogFooter from '@/components/BlogFooter.vue'

// 시리즈 데이터
const seriesData = [
    {
        id: 1,
        title: "인공지능",
        description: "데이터 전처리부터 모델 최적화까지, AI 개발의 전 과정을 기록합니다. 논문 리뷰와 실제 구현의 차이를 분석하고, 캐글 대회에서 얻은 실전 인사이트를 공유합니다. 머신러닝의 수학적 기반부터 최신 딥러닝 아키텍처까지, 이론과 코드를 함께 정리합니다.",
        posts: [
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
                description: "Python API와 sklearn wrapper의 차이점을 분석하고, GOSS 알고리즘의 실제 구현과 논문의 차이를 발견했습니다. Gradient 기반 데이터 중요도 평가 방식을 이해하고 실전 적용 방법을 학습했습니다.",
                tags: "Attention, Transformer, Gradient",
                date: "2025년 9월 1일"
            }
        ]
    },
    {
        id: 2,
        title: "백엔드 설계",
        description: "AWS부터 쿠버네티스까지, 클라우드 네이티브 환경을 구축하고 운영하는 과정을 기록합니다. 서버리스 아키텍처 설계부터 컨테이너 오케스트레이션, CI/CD 파이프라인 구축과 모니터링 시스템 설정까지, DevOps 엔지니어의 실무 경험과 트러블슈팅 노하우를 공유합니다.",
        posts: [
            {
                id: 3,
                title: "Circuit Breaker 패턴으로 마이크로서비스 안정성 확보",
                description: "Spring Cloud Netflix Hystrix를 사용하여 마이크로서비스 간 장애 전파를 방지하는 방법을 학습했습니다. 실제 주문 서비스와 결제 서비스 간의 통신에서 Circuit Breaker를 적용하고, fallback 메서드 구현과 대시보드 모니터링 설정까지 완료했습니다.",
                tags: "Spring Boot, MSA, Circuit Breaker",
                date: "2025년 9월 1일"
            },
            {
                id: 4,
                title: "Redis를 활용한 캐싱 전략과 성능 최적화",
                description: "API 응답 시간을 80% 단축시킨 Redis 캐싱 전략을 정리했습니다. Cache-Aside 패턴 구현부터 TTL 설정, 캐시 무효화 정책까지 실제 적용 사례를 분석했고, Redis Cluster 구성으로 고가용성을 확보하는 방법을 학습했습니다.",
                tags: "Redis, Caching, Performance",
                date: "2025년 9월 1일"
            }
        ]
    }
]
</script>

<style scoped>
.series-container {
    width: 1184px;
    max-width: 100%;
    margin: 0 auto;
}

.series-section {
    display: flex;
    flex-direction: row;
    gap: 72px;
    padding-bottom: 64px;
    margin-bottom: 48px;
    align-items: flex-start;
}

.series-info {
    display: flex;
    flex-direction: column;
    width: 480px;
    flex-shrink: 0;
}

.series-header {
    display: flex;
    flex-direction: column;
    align-self: stretch;
}

.series-label-container {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    padding-bottom: 16px;
}

.series-label {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #71717A;
    flex: 1;
}

.series-title-container {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    padding-bottom: 24px;
}

.series-title {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
    font-size: 60px;
    line-height: 1;
    color: #09090B;
    text-align: left;
    flex: 1;
    margin: 0;
}

.series-description-container {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    align-self: stretch;
    padding-bottom: 24px;
}

.series-description {
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #71717A;
    text-align: left;
    flex: 1;
    margin: 0;
}

.view-all-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #E4E4E7;
    border-radius: 6px;
    background: white;
    cursor: pointer;
    transition: all 0.2s ease;
    width: fit-content;
}

.view-all-button:hover {
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

.series-cards {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    gap: 24px;
    flex: 1;
    min-height: auto;
}

/* 반응형 처리 */
@media (max-width: 1200px) {
    .series-container {
        width: 100%;
        padding: 0 16px;
    }

    .series-section {
        flex-direction: column;
        gap: 32px;
    }

    .series-info {
        width: 100%;
    }

    .series-cards {
        justify-content: center;
        flex-wrap: wrap;
    }
}

@media (max-width: 768px) {
    .series-title {
        font-size: 40px;
    }

    .series-cards {
        flex-direction: column;
        align-items: center;
    }
}
</style>
