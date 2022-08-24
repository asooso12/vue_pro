<template>
  <div>
    <sweet-modal title="HCN IT TEAM" width="30%" id="main-modal" ref="modals" modal-theme="dark" overlay-theme="light">
      <div class="modal">
        <!-- https://albertotorre.github.io/sweet-modal-vue-evolution/ -->
        <section class="food-modal-header">
          <div class="menu-internal-system-card">
              <ul v-for="(idx) in teamData"
              :key="idx.no">
              <li> {{idx.manager_name}}  </li>
              <li> tel.{{idx.manager_tel}}</li>
              </ul>
          </div>
        </section>

        <section class="food-modal-bottom">
          <div class="inner">
            <div class="food-modal-bottom-text">시간 나면 바꾸기,,,,,,,,,,,,시간나면,,,,,,,,,,,,,,,,,,,,,,,,,,</div>
          </div>
        </section>
      </div>
    </sweet-modal>
  </div>
</template>

<script>
export default {
  name: "TeamModal",
  props: {
    modalState: Boolean,
    teamData: Array,
  },
  data() {
    return {
      subMenu: null,    // 추가메뉴
      selectFlag: false,
      newData: null,
    };
  },
  methods: {
    showModal() {
      this.$refs.modals.open("main-modal");
    },
  },
  watch: {
    modalState() {
      if (this.modalState){
        this.showModal()
      }
    }
  }
};
</script>

<style>
.sweet-modal {
  max-width: 100vw;
  overflow-x: hidden;
  width: 200vw;
}

.food-modal-text {
  font-weight: 700;
  align-self: center;
}
.food-modal-name {
  font-size: 1.6vw;
}
.food-modal-kcal {
  font-size: 1.4vw;
}
.food-modal-g {
  font-size: 1.2vw;
}

.modal-img {
  width: 12vw;
  height: 23vh;
  border-radius: 10px;
}
.modal-bottom-img {
  width: 10vw;
  height: 10vw;
  border-radius: 10px;
}
#my-chart {
  width: 30vw;
}

.pocket-btn {
  width: 10vw;
  height: 2vw;
  font-size: 1vw;
  display: block;
  border-radius: 0.5vw;
  left: 84%;
  top: 1vw;
}

.food-modal-header {
  display: flex;
  justify-content: space-evenly;
}
.food-set {
  width: 31vw;
  display: flex;
  justify-content: space-around;
  align-self: center;
}
.food-modal-text {
  font-weight: 700;
  align-self: center;
}

.food-modal-bottom {
  padding: 0.78vw;
  position: relative;
  top: 1.2vw;
  width: 100%;
}
.food-modal-bottom .swiper-wrapper {
  display: flex;
  justify-content: center;
  height: 15.42vh;
}

.food-modal-bottom-text {
  font-size: 1vw;
  font-weight: 700;
  text-align: left;
  position: relative;
  left: 2.1vw;
  margin-bottom: 10px;
}
.modal-bottom-img {
  width: 7.8vw;
  height: 15.42vh;
  margin: 10px;
  border-radius: 10px;
}
.modal-bottom-img:hover {
  cursor: pointer;
}
.sub-food-name {
  font-size: 0.9vw;
}

.my-swiper {
  width: 50vw;
}
.swiper-prev,
.swiper-next {
  width: 1.6vw;
  height: 3.23vh;
  outline: none;
  border: 3px solid #ffffff;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  color: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
}

.swiper-next {
  right: 2.1vw;
}
.swiper-prev:hover,
.swiper-next:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
.swiper-container {
  overflow: visible;
}
.swiper-slide {
  opacity: 0.4;
  transition: opacity 0.3s;
}
.swiper-slide-active,
.swiper-slide-active + .swiper-slide,
.swiper-slide-active + .swiper-slide + .swiper-slide,
.swiper-slide-active + .swiper-slide + .swiper-slide + .swiper-slide {
  opacity: 1;
}
.modal-bottom-img:hover {
  filter: brightness(40%);
}
.submenu {
  position: relative;
}
.modal-bottom-img-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  z-index: -1;
  color:#eee;
  cursor:pointer;
}
.modal-bottom-img:hover + .modal-bottom-img-text {
  opacity: 1;
  z-index: 1;
  cursor: pointer;
}
.read-more {
  position: absolute;
  top: 8vh;
  margin-left: 4.3vw;
  z-index: 1;
  color: #fff;
  font-size: 0.7vw;
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
.card-section .menu-customer-card,
.card-section .menu-internal-system-card,
.card-section .menu-system-card,
.card-section .menu-infra-card,
.card-section .menu-information-protection-card {
  display: flex;
  flex-direction: column;
  padding: 0.5vw;
  margin: 0.3vw;
  width: 33vw;
  height: 5vw;
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
</style>
