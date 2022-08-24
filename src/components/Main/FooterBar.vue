<template>
  <section>
    <div class="footer-form">
      <section class="left-area">
        <div class="footer-logo">HCN</div>
        <span>Hyper Connected Network</span> <br/>
        <span>IT 업무관리 시스템</span>
        <div class="footer-sub-text">
          Copyright © 2020 HCN All rights reserved.
        </div>
      </section>
      <section class="right-area">
        <div class="right-title">
          주소<br />
          대표 문의<br />
          일반 문의 <br />
          운영 시간<br />
        </div>
        <div class="right-content">
          서울시 서초구 반포대로 19<br />
          070-8109-1299<br />
          1877-8000<br />
          오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)<br />
        </div>
      </section>
    </div>
  </section>
</template>

<script scoped>
export default {
  name: "FooterBar",
};
</script>

<style scoped>
@font-face {
  font-family: 'SEBANG_Gothic_Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.footer-logo{
  font-family: 'SEBANG_Gothic_Bold';
}

/* footer */
.footer-form {
  height: 10vw;
  /* margin-top: 3vw; */
  background-color: #414042;
  display: flex;
  justify-content: space-around;
  position: relative;
  bottom: 0;
  /* padding: 3.5vw; */
  color: #fff;
  line-height: 1.6;
  width: 100%;
  z-index: -1;
}
/* footer-left */
.footer-form .left-area {
  width: 22vw;
  position: absolute;
  right: 50%;
  display: block;
  top: 1.5vw;
  align-self: flex-end;
}
.footer-form .left-area .footer-logo {
  font-size: 2vw;
  font-weight: 700;
}

.footer-form .left-area .footer-developer {
  font-size: 0.8vw;
  font-weight: 700;
}
.footer-form .left-area .footer-sub-text {
  font-size: 0.9vw;
}

/* footer-right */
.footer-form .right-area {
  width: 50vw;
  position: absolute;
  top: 1.5vw;
  align-self: flex-end;
  display: block;
  display:flex;
  gap: 1rem;
  left: 50%;
  font-size: 1.2rem;
  line-height: 2.1;
}
.footer-form .right-area .right-title{
  font-weight: bold;
  /* line-height: 2; */
}

.footer-form .right-area .tel,
.footer-form .right-area .email,
.footer-form .right-area .operating-time,
.footer-form .right-area .footer-address {
  font-size: 0.7vw;
}
</style>
