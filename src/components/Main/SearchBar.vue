<template>
  <div class="search-bar">
    <h2>담당자와 업무 상세 내용을 검색해보세요!</h2>
    <input type="text" v-model="keyword" @keyup.enter="searchKeyword" />
    <button class="material-icons search-btn" @click="searchKeyword">
      search
    </button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SearchBar",
  data() {
    return {
      keyword: null, // 검색키워드
      taskData: {
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
      }
    }
  },
  methods: {
    searchKeyword() {
      axios({
        method: "get",
        url: `http://localhost:8000/api/search/word/${this.keyword}`
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
.search-bar {
  background: #78767a;
  width: 100%;
  height: 10vh;
  display: flex;
  position: relative;
  align-items: center;
}
.search-bar h2 {
  margin: 0;
  font-size: 1.5vw;
  position: absolute;
  left: 13vw;
  color: #fff;
}
.search-bar form {
  position: absolute;
  right: 8vw;
}
.search-bar input {
  background: #fff;
  position: absolute;
  right: 13vw;
  height: 5vh;
  width: 22vw;
  border-radius: 0.7vw;
  border: none;
  font-size: 1vw;
  outline: none;
  padding-left: 1vw;
  font-family: "MinSans-Regular";
}
.search-bar input:focus {
  animation: input-focus 0.3s ease-in-out;
  animation-fill-mode: forwards;
}
.search-bar input:not(:focus) {
  animation: input-blur 0.3s ease-out;
}
.search-bar .search-btn {
  position: absolute;
  right: 13.5vw;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
@keyframes input-focus {
  from {
    width: 22vw;
  }
  to {
    width: 30vw;
  }
}
@keyframes input-blur {
  from {
    width: 30vw;
  }
  to {
    width: 22vw;
  }
}
</style>
