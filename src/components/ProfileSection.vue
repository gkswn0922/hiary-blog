<template>
  <div class="w-full border-t border-gray-200">
    <div class="max-w-full mx-auto px-12 py-20">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        <!-- 아바타 -->
        <div class="mb-6">
          <Avatar class="w-32 h-32 avatar-xl">
            <AvatarImage src="./src/assets/avator.svg" alt="Aiden Cho" />
            <AvatarFallback class="text-2xl font-medium">
              AC
            </AvatarFallback>
          </Avatar>
        </div>

        <!-- 프로필 정보 -->
        <div class="text-center space-y-3">
          <h2 class="text-base font-medium text-gray-900">
            Aiden Cho
          </h2>
          <p class="text-base text-gray-600">
            000 팔로워
          </p>

          <!-- 소개글 -->
          <div class="max-w-md mx-auto py-3">
            <p class="text-sm text-gray-600 leading-relaxed">
              데이터 사이언티스트를 꿈꾸는 주니어 개발자입니다.<br>
              XGBoost부터 딥러닝 아키텍처까지, 논문과 실제 구현 사이에서 헤매며 배우고 있습니다.
            </p>
          </div>

          <!-- 소셜 미디어 링크 -->
          <div class="flex items-center justify-center gap-4 pt-2">
            <!-- Github 아이콘 -->
            <button class="social-icon" aria-label="GitHub" @click="navigateTo('https://github.com')">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
              </svg>
            </button>
            <!-- LinkedIn 아이콘 -->
            <button class="social-icon" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
            <!-- Website 아이콘 (Globe) -->
            <button class="social-icon" aria-label="Website">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.67"
                stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '@/components/ui/avatar.vue'
import AvatarFallback from '@/components/ui/avatar-fallback.vue'
import AvatarImage from '@/components/ui/avatar-image.vue'


// 외부 링크 열기 함수
const navigateTo = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 24px;
  color: #71717A;
  background: transparent;
  border: none;
  cursor: pointer;
}

.social-icon:hover {
  color: #09090B;
}

.social-icon svg {
  width: 24px;
  height: 24px;
}
</style>
