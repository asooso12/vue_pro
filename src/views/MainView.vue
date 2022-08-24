<template>
  <div class="home">
    <BannerBar :isHome="true"/>
    <SearchBar 
      :isHome="true"
      @setInput="updateData"
    />
    <div id="login">
      <div class="main-section-login">
        <div class="main-title">IT 부서 지원 검색</div>
        <div class="main-sub-title">
          시스템을 선택하여 검색해보세요!
        </div>
        <div>
        <ul class="category">
          <li id="system_1" class="category-item category-item--current animate__animated animate__fadeInUp">
          <div class="category-link" @click="searchSystem(1)">고객관리</div>
          </li>
          <li id="system_2" class="category-item category-item--current animate__animated animate__fadeInUp">
          <div class="category-link" @click="searchSystem(2)">내부관리시스템</div>
          </li>
          <li id="system_3" class="category-item category-item--current animate__animated animate__fadeInUp">
          <div class="category-link" @click="searchSystem(3)">대외지원시스템</div>
          </li>
          <li id="system_4" class="category-item category-item--current animate__animated animate__fadeInUp">
          <div class="category-link" @click="searchSystem(4)">인프라기획</div>
          </li>
          <li id="system_5" class="category-item category-item--current animate__animated animate__fadeInUp">
          <div class="category-link" @click="searchSystem(5)">정보보호</div>
          </li>
        </ul>
        </div>
        <TaskList 
          :taskData="taskData"
        />
      </div>
    </div>
  </div>
</template>

<script scoped>
import BannerBar from "@/components/Main/BannerBar.vue";
import SearchBar from "@/components/Main/SearchBar.vue"
import TaskList from "@/components/Main/TaskList.vue";
import axios from 'axios';

export default {
  name: "MainView",
  data() {
    return {
      taskData: [{
        system_no:0,
        system_name:"",
        system_category:"",
        task_no:0,
        task:"",
        task_description:"",
        manager_no:0,
        manager_name:"",
        manager_tel:"",
        manager_duty:""
      },],
      selectedKey: 0,
    }
  },
  components: {
    BannerBar,
    SearchBar,
    TaskList,
  },
  methods: {
    updateData(emitData){
      this.taskData = emitData;
    },
    // setInput(taskData) {
    //   this.taskData = taskData;
    // }, 내가 했던 emit.. 
    searchSystem(key){
      var searchSystemKeyword = '';
      switch(key) {
        case 1:
          searchSystemKeyword = '/고객관리';
          this.buttonChange(key)
          break;
        case 2:
          searchSystemKeyword = '/내부관리시스템';
          this.buttonChange(key)
          break;
        case 3:
          searchSystemKeyword = '/대외지원시스템';
          this.buttonChange(key)
          break;
        case 4:
          searchSystemKeyword = '/인프라 기획';
          this.buttonChange(key)
          break;
        case 5:
          searchSystemKeyword = '/정보보호';
          this.buttonChange(key)
          break;
        default:
          break;
      }
      axios({
        method: "get",
        url :`http://localhost:8000/api/search/system${searchSystemKeyword}`
      }).then((res) => {
        console.log(res)
        this.taskData = res.data
      }).catch((err) => {
        console.log(err)
      })
      this.selectedKey = key
    },
    buttonChange(number){
      const newSelectedCategory = document.querySelector(`#system_${number}`);
      const nowSelectedCategory = document.querySelector(`#system_${this.selectedKey}`);
      if (this.selectedKey == 0){
        newSelectedCategory.classList.toggle('selected');
      }
      else if (this.selectedKey != number){
        newSelectedCategory.classList.toggle('selected');
        nowSelectedCategory.classList.toggle('selected');
      }
    }
  },
  mounted() {
    this.searchSystem(0)
  }
};
</script>

<style>
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

.card-section .menu-customer-card,
.card-section .menu-internal-system-card,
.card-section .menu-system-card,
.card-section .menu-infra-card,
.card-section .menu-information-protection-card {
  display: flex;
  flex-direction: column;
  /* padding: 0.5vw; */
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

.btn-save {
  margin-top: 1vw;
  width: 11vw;
  font-size: 0.8vw;
  border-radius: 0.4vw;
  font-size: 1vw;
}

.category {
  display: flex;
  margin: 2vw auto 0vw;
  width: 89vw;
  cursor: pointer;
}

ul{
  list-style: none;
}

.category-item--current {
  z-index: 1;
}

.category-item--current .category-link {
  border-color: #414042;
  color: #000000;
  font-weight: 700;
}

.category-item {
  width: 100%;
  color: #000;
  border-color: #000;
}

.category-item.selected{
  z-index: 999;
}
.category-item.selected .category-link{
  color: #ff0000;
  border-color: #ff0000;
}

.category-item:first-child .category-link {
  margin-left: 0;
  width: 100%;
}

.category-link {
  align-items: center;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  color: #999;
  display: flex;
  font-size: flex;
  height: 6.24vh;
  justify-content: center;
  margin-left: -1px;
  text-align: center;
  transition: color 0.35s ease, box-shadow 0.35s ease;
  width: calc(100% + 1px);
}

/* .category-link:hover {
  color: #ff0000;
} */

</style>
