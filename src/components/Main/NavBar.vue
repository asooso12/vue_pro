<template>
  <div class="nav">
    <div class="logo" @click="goToHome">
      <span class="hcn" style="color: #414042">Hyper Connected Network</span>
    </div>
    <div class="menu">
      <div class="login-join">
        <button
          class="bttn-stretch bttn-md bttn-danger login-btn"
        @click="goToHome">
        <p id="nav-text">Home</p>
        </button>
        <button 
        class="bttn-stretch bttn-md bttn-danger join-btn"
        @click="searchTeam"
        >
        <p id="nav-text">팀원조회</p>
        </button>
        <TeamModal :modalState="modalState" :teamData="teamData"/>
      </div>
    </div>
  </div>
</template>

<script>
import TeamModal from "@/components/Main/TeamModal.vue"
import axios from 'axios';

export default {
  name: "NavBar",
  data() {
    return {
      teamData: [{
        manager_no:0,
        manager_name:"",
        manager_tel:"",
        manager_duty:"",
      }],
      modalState: false
    };
  },
  components :{
    TeamModal
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "HomeView" }).catch(() => {});
    },
    searchTeam() {
      axios({
         method: "get",
         url: `http://localhost:8000/api/search/team`
       })
       .then((res) => {
         console.log(res);
         this.teamData = res.data;
         this.modalState = !this.modalState;
       })
       .catch((err) => {
         console.log(err)
       })
    },
  },
};
</script>

<style>
@font-face {
  font-family: 'SEBANG_Gothic_Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SEBANG_Gothic_Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.hcn {
  font-size: 1.1rem
}
a {
  text-decoration: none;
  color: black;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 2;
  opacity: 0.8;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8vh;
  margin: 0 auto;
  background-color: #fff;
}
.nav .logo {
  display: inline-block;
  font-weight: 700;
  font-size: 2vw;
  margin-left: 4vw;
}
.nav .logo:hover {
  cursor: pointer;
}
.nav .menu {
  margin-right: 5vw;
}
.nav .menu .login-join .login-btn {
  border-radius: 0.4vw;
  font-size: 0.8vw;
  width: 5vw;
  height: 100%;
  margin-right: 1vw;
}
.nav .menu .login-join .join-btn {
  border-radius: 0.4vw;
  margin-right: 2vw;
  font-size: 0.8vw;
  font-weight: 400;
  height: 100%;
  width: 5vw;
}
.bttn-unite.bttn-success:after,
.bttn-unite.bttn-success:before {
  background: #25ab9b;
}

#nav-text {
  font-weight: 700;
}
</style>
