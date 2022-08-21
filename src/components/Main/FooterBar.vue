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
          고객 센터<br />
          운영 시간<br />
        </div>
        <div class="right-content">
          서울시 서초구 반포대로 19<br />
          1877 - 8000<br />
          070-8109-1272<br />
          오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)<br />
        </div>
        <!-- <div class="footer-address">
          주소: 서울시 서초구 반포대로 19
        </div>
        <div class="email">대표 문의 1877 - 8000</div>
        <div class="tel">고객센터 070-8109-1272 </div> -->
        <!-- <div class="operating-time">
          운영 시간: 오전 9시 ~ 오후 6시 (주말 및 공휴일 휴무)
        </div> -->
      </section>
    </div>
  </section>
</template>

<script scoped>
export default {
  name: "FooterBar",
};
</script>

<style>
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
  height: 3vw;
  margin-top: 3vw;
  background-color: #414042;
  display: flex;
  justify-content: center;
  padding: 3.5vw;
  color: #fff;
  line-height: 1.6;
}
/* footer-left */
.footer-form .left-area {
  width: 22vw;
  position: relative;
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
  width: 22vw;
  position: relative;
  top: 1.5vw;
  align-self: flex-end;
  display:flex;
  gap: 1rem;
  font-size: 1.2rem;
}
.footer-form .right-area .right-title{
  font-weight: bold;
}

.footer-form .right-area .tel,
.footer-form .right-area .email,
.footer-form .right-area .operating-time,
.footer-form .right-area .footer-address {
  font-size: 0.8vw;
}
</style>
