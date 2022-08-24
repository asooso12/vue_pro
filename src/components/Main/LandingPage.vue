<template>
  <div id="body">
    <!-- 비회원일 때 랜딩 페이지  adsf-->
    <div id="logout" v-if="!isMain">
      <div id="to-top">
        <div class="material-icons arrow" @click="toTop">arrow_upward</div>
      </div>
      <!-- middle -->
      <section class="middle-section">
      <section class="middle-section scroll-spy">
        <div class="inner">
          <img
            src="../../assets/picture1.png"
            alt=""
            class="recommend_page back-to-position to-right delay-0"
          />

          <div class="text-group">
            <p id="title1">업무 분류별 검색</p>
            <p id="description1">지원받을 시스템을 선택하고, 한눈에 확인하세요.</p>
            <p id="system_category">고객관리 내부관리시스템 대외지원시스템 인프라기획 정보보호</p>
          </div>
        </div>
      </section>

      <section class="middle-section2 scroll-spy">
        <div class="inner">
          <img
            src="../../assets/picture2.png"
            alt=""
            class="my_page back-to-position to-right delay-0"
          />

          <div class="text-group">
            <p id="title2">담당자 검색 & 업무 상세 검색 서비스</p>
            <p id="description2">검색창에 담당자 이름이나
            <p id="description2">업무의 상세 내용, 키워드를 검색하여
            <p id="description2"> 빠르게 검색해보세요.</p>
          </div>
        </div>
      </section>
      </section>

      </div>
      <!-- bottom -->
      <section class="bottom-section scroll-search">
        <div class="inner">
          <img
            class="bottom-bg"
            src="../../assets/hcn_landing.gif"
            alt=""
          />
          <div class="bottom-section text-group">
            <p id="description3">서비스 이용에 관해</p>
            <p id="description3">무엇이든지 알려드립니다. </p>
            <button class="bttn-unite bttn-md bttn-danger start-btn" @click="pageToggle">IT팀 지원받기</button>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import scroll from "../../js/scroll.js";
export default {
  name: "MainDescription",
  data() {
    return {
      userName: null,
      isMain: false,
    };
  },
  methods: {
    startScrollEvent() {
      scroll();
    },
    pageToggle() {
      this.$router.push({ name: 'MainView' }).catch(() => {})
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    this.startScrollEvent();
  },
};
</script>

<style scoped>
#logout{
  background: linear-gradient(to top, #FDF7F1, #fff);
}
#to-top {
  width: 3vw;
  height: 3vw;
  background-color: #ff0000 ;
  color: #fff;
  border: 0.1vw solid #fff;
  border-radius: 0.4vw;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1.5vw;
  right: 1.5vw;
  z-index: 9999;
}
#to-top .arrow {
  font-size: 1.5vw;
}
.text-highlight {
  background: linear-gradient(to top, #b7fef6 50%, transparent 50%);
}

.middle-section {
  position: relative;
  top: 5rem;
  background: transparent;
}

.middle-section .inner {
  position: relative;
  height: 40vh;
  width: 60vw;
  margin: 0 auto;
}
.middle-section .inner .recommend_page {
  display: block;
  position: absolute;
  width: 23vw;
  left: 3vw;
}
.middle-section .text-group {
  position: absolute;
  top: 3vw;
  left: 30vw;
  width: 30vw;
  height: 8vw;
}
/* middle-sction2 */
.middle-section2 {
  height: 100%;
}
.middle-section2 .inner {
  position: relative;
  height: 52vh;
  width: 60vw;
  margin: 0 auto;
  top: 4vw;
  background: transparent;
}
.middle-section2 .inner .my_page {
  display: block;
  position: absolute;
  width: 23vw;
  right: -1vw;
}
.middle-section2 .text-group {
  position: absolute;
  top: 4vw;
  left: 4vw;
}

/* bottom */
.bottom-section {
  height: 37vw;
}
.bottom-section .inner {
  position: relative;
  height: 34vw;
  width: 45vw;
  margin: 0 auto;
  top: 2vw;
}
.bottom-section .inner .bottom-bg {
  display: block;
  position: absolute;
  width: 42vw;
  left: -13vw;
}

.bottom-section .text-group {
  width: 26vw;
  display: block;
  justify-content: flex-end;
  flex-wrap: wrap;
  left: 27vw;
  position: absolute;
  top: 7vw;
  text-align: center;
}

.bottom-section .start-btn {
  margin-top: 1vw;
  margin-right: 1vw;
  margin-bottom: 1vw;
  width: 10vw;
  height: 2vw;
  font-size: 1vw;
  border-radius: 0.3vw;
  height: 2.5vw;
}
.bottom-section.scroll-search {
  background: #FDF7F1;
  /* background: transparent; */
}
/*BACK TO POSITION*/
.back-to-position {
  opacity: 0;
  transition: 1s;
}
.back-to-position.to-right {
  transform: translateX(-150px);
}
.back-to-position.to-left {
  transform: translateX(150px);
}
.show .back-to-position {
  opacity: 1;
  transform: translateX(0);
}
.show .back-to-position.delay-0 {
  transition-delay: 0s;
}
.show .back-to-position.delay-1 {
  transition-delay: 0.3s;
}
.show .back-to-position.delay-2 {
  transition-delay: 0.6s;
}
.show .back-to-position.delay-3 {
  transition-delay: 0.9s;
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

#title1 {
  margin: 1rem;
  font-size: 2em;
  font-weight: 700;
}

#title2 {
  margin: 1rem;
  font-size: 2rem;
  font-weight: 700;
}

#system_category {
  margin: 1rem;
  font-weight: 700;
  font-size: 1.3rem;
}

#description1{
  margin: 1rem;
  font-weight: 500;
  font-size: 1.3rem;
}
#description2{
  margin: 1rem;
  font-weight: 500;
  font-size: 1.3rem;
}

#description3{
  margin: 1rem;
  font-size: 2rem;
  font-weight: 700;
  align-content: center;
}

</style>