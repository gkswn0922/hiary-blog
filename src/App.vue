<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const transitionName = ref('page-right')

// 라우트 변경 감지하여 애니메이션 방향 결정
watch(route, (to, from) => {
  const toIndex = to.meta.index as number || 0
  const fromIndex = from?.meta.index as number || 0

  // 탭 순서: 홈(0) → TIL(1) → 시리즈(2)
  if (toIndex > fromIndex) {
    transitionName.value = 'page-right' // 오른쪽으로 이동
  } else {
    transitionName.value = 'page-left' // 왼쪽으로 이동
  }
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition :name="transitionName" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style scoped>
/* 페이지 전환 애니메이션 - 방향별 슬라이드 */
.page-right-enter-active,
.page-right-leave-active,
.page-left-enter-active,
.page-left-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 오른쪽으로 이동 (홈 → TIL → 시리즈) */
.page-right-enter-from {
  opacity: 0;
  transform: translateX(50px) scale(0.98);
}

.page-right-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(0.98);
}

/* 왼쪽으로 이동 (시리즈 → TIL → 홈) */
.page-left-enter-from {
  opacity: 0;
  transform: translateX(-50px) scale(0.98);
}

.page-left-leave-to {
  opacity: 0;
  transform: translateX(50px) scale(0.98);
}

.page-right-enter-to,
.page-right-leave-from,
.page-left-enter-to,
.page-left-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
