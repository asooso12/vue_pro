<template>
  <div>
    <div class="banner">
      <div class="banner-head">
        <div v-if="!MainText" class="default-text">
          <img
            class="logo-banner"
            src="../../assets/HCN_CI_remove.png"
            alt=""
          />
          <div class="my-text">IT 업무 관리 시스템</div>
          <div class="banner-sub-head">
          </div>
        </div>
        <div v-else class="present-text">
          {{ MainText }}
          <div class="banner-sub-head">
            <span>{{ SubText }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextScramble from "@/js/bannerani.js";
export default {
  props: {
    MainText: String,
    SubText: String,
    isHome: Boolean,
  },
  methods: {
    textAnimation() {
      const phrases = [
        "Hyper Connected Network",
        "IT 업무 관리 시스템",
      ];

      const el = document.querySelector(".my-text");
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 3000);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    },
  },
  mounted() {
    if (this.isHome) {
      this.textAnimation();
    }
  },

};
</script>

<style>
.logo-banner{
  width: 15vw;
}

.banner {
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url("../../assets/banner.png"); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.banner .banner-head {
  text-align: center;
  font-size: 3vw;
  font-weight: 700;
}

.banner .banner-sub-head {
  font-size: 1.2vw;
  color: #333;
}
.my-text {
  font-size: 1.5vw;
}
</style>
