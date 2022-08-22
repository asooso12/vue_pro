<template>
  <div class="home">
    <BannerBar 
      :isHome="true"
    />
    <SearchBar :isHom="true"
    />
    <div id="login">
      <div class="main-section-login">
        <div class="main-title">IT 부서 지원 검색</div>
        <div class="main-sub-title">
          시스템을 선택하여 검색해보세요!
        </div>
        <div class="card-section">
          <div class="menu-recommend-card">
            <router-link :to="{ name: 'a' }">
              <div>고객관리</div>
              <span>나에게 꼭 맞는 식단을 추천해드립니다.</span>
              <img src="../assets/recommend-card.svg" alt="" />
            </router-link>
          </div>

          <div class="menu-search-card">
            <router-link :to="{ name: 'b'}">
              <div>내부관리시스템</div>
              <span>어떤 음식이든 검색해보세요!</span>
              <img src="../assets/search-card.svg" alt="" />
            </router-link>
          </div>

          <div class="menu-record-card">
            <router-link :to="{ name: 'c' }">
              <div>대외지원시스템</div>
              <span>내 기록을 남겨보세요.</span>
              <img src="../assets/record-card.svg" alt="" />
            </router-link>
          </div>
          <div class="menu-record-card">
            <router-link :to="{ name: 'c' }">
              <div>인프라기획</div>
              <span>내 기록을 남겨보세요.</span>
              <img src="../assets/record-card.svg" alt="" />
            </router-link>
          </div>
          <div class="menu-record-card">
            <router-link :to="{ name: 'c' }">
              <div>정보보호</div>
              <span>내 기록을 남겨보세요.</span>
              <img src="../assets/record-card.svg" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import BannerBar from "@/components/Main/BannerBar.vue";
import SearchBar from "@/components/Main/SearchBar.vue"

export default {
  name: "MainView",
  components: {
    BannerBar,
    SearchBar
  }
};
</script>

<style>
/* Login 랜딩 페이지 */
#login {
  margin: 0 5vw;
}
a {
  width: 100%;
  height: 100%;
}
.main-section-login .main-title {
  font-size: 2vw;
  font-weight: 700;
  margin-top: 1.5vw;
  margin-left: 0.5vw;
}
.main-section-login .main-sub-title {
  font-size: 1.3vw;
  margin-left: 0.5vw;
}

.card-section {
  display: flex;
  font-size: 1.8vw;
  justify-items: center;
  margin-top: 1vw;
  color: #333;
}
.card-section span {
  display: block;
  font-size: 1vw;
  margin-left: 1.2vw;
  color: #333;
}
.card-section div {
  margin-left: 1.1vw;
  margin-top: 0.3vw;
  font-weight: 700;
}

.card-section .menu-recommend-card,
.card-section .menu-search-card,
.card-section .menu-record-card {
  display: flex;
  flex-direction: column;
  padding: 0.5vw;
  margin: 0.3vw;
  width: 33vw;
  height: 23vw;
  border: solid #414042 0.2vw;
  border-radius: 1vw;
  cursor: pointer;
}
.card-section .menu-recommend-card a,
.card-section .menu-search-card a,
.card-section .menu-record-card a {
  position: relative;
}

.card-section .menu-search-card img,
.card-section .menu-record-card img,
.card-section .menu-recommend-card img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  max-width: 100%;
  max-height: 75%;
  object-fit: cover;
}

.scroll-bar {
  position: absolute;
  width: 3vw;
  height: 8px;
  left: 50%;
  bottom: 5rem;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.scroll-bar:first-child {
  animation: move 3s ease-out 1s infinite;
}

.scroll-bar:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.scroll-bar:before,
.scroll-bar:after {
  content: "";
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #aaa;
}

.scroll-bar:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.scroll-bar:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(2rem);
  }
  67% {
    opacity: 1;
    transform: translateY(3rem);
  }
  100% {
    opacity: 0;
    transform: translateY(4rem) scale3d(0.5, 0.5, 0.5);
  }
}
</style>
