<template>
  <v-app>
    <v-data-table
      v-model="selected"
      class="elevation-1"
      :headers="headers"
      :items="taskData"
      hide-default-footer
      :single-select="false"
      item-key="system_no"
      :page.sync="page"
      @page-count="pageCount = $event"
      :items-per-page="10"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)" class="text-h4">
          mdi-delete
        </v-icon>
      </template>
      <!-- 칼로리 숫자 색 -->
      <template v-slot:[`item.foodKcal`]="{ item }">
        <v-chip :color="getColor(item.foodKcal)" dark>
          {{ item.foodKcal }}
        </v-chip>
      </template>
    </v-data-table>
    <v-pagination 
    v-model="page" 
    :length="pageCount"
    ></v-pagination>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "TaskList",
  props: {
    taskData : Array,
  },
  data() {
    return {
      today: new Date(),
      sendData: {
        menus: [],
      },
      page: 1,
      pageCount: 5,
      viewCount: 5,
      //https://ayoteralab.tistory.com/entry/Vuejs-08-use-v-data-table 먼말임..
      // https://luerangler-dev.tistory.com/23 중복키 머임...
      dialogDelete: false,
      selected: [],
      expanded: [],
      editedIndex: -1,
      editedItem: {
        name: "",
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      headers: [
        { text: "대분류", align: "start", value: "system_name", sortable: true },
        { text: "분류", align: "start", value: "system_category", sortable: true },
        { text: "시스템 업무", align: "start", value: "task", sortable: true },
        { text: "업무 상세 설명", align: "start", value: "task_description", sortable: true },
        { text: "담당자", align: "start", value: "manager_name", sortable: true },
        { text: "전화번호", align: "start", value: "manager_tel", sortable: true },
        { text: "근태", align: "end", value: "manager_duty", sortable: true },
        // {
        //   text: "시스템(업무)",
        //   align: "end",
        //   value: "task",
        //   sortable: false,
        // },
      ],
    };
  },
  methods: {
    // 칼로리 위험도를 제공하기 위해 1회 당 500kcal이 넘는다면 위험, 300kcal이 넘는다면 경고, 300kcal 이하는 적합
    getColor(calories) {
      if (calories > 500) return "red";
      else if (calories > 300) return "orange";
      else return "green";
    },
    // DB에 식단 저장
    saveMyMenus() {
      if (this.selected.length > 0){
      this.selected.forEach((food) => {
        this.sendData.menus.push({ foodId: food.id, amount: 1 });
      });
      this.sendData.dateTime = this.$store.state.targetDate;
      this.sendData.mealTime = this.$store.state.mealTime;
      this.sendData.username = this.userInfo.username;
      axios({
        method: "post",
        url: `${process.env.VUE_APP_API_URL}/menu/basket/`,
        data: this.sendData,
        headers: {
          Authorization: `JWT ${this.userToken}`,
        },
      })
        .then((res) => {
          // 이미 존재하는 식단일때 수정요청으로 재요청
          if (res.data.menuid){
            axios({
              method: 'put',
              url: `${process.env.VUE_APP_API_URL}/menu/basket/${res.data.menuid}/`,
              data: this.sendData,
              headers: {
                Authorization : `JWT ${this.userToken}`
              }
            })
              .then(() => {
                this.$swal.fire({
                  icon: "success",
                  title: "식단이 수정되었습니다",
                  text: "나의기록 페이지로 이동합니다.",
                })
                  .then(() => {
                    this.menusUpdate([])
                    this.$router.push({ name:'record' })
                  })
              })
              .catch(err => {
                console.log(err)
              })
          }
          else{
            this.$swal.fire({
              icon: "success",
              title: "식단에 저장되었습니다",
              text: "나의기록 페이지로 이동합니다.",
            }).then(()=> {
              this.menusUpdate([])
              this.$router.push({ name:'record' })
            })
          }
          // 전역 장바구니 초기화
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: "식단에 저장하지 못했습니다",
            text: "장바구니를 다시 확인해주세요.",
          });
          console.log(err);
        });
      }
      else {
        this.$swal.fire({
            icon: "error",
            title: "식단에 저장하지 못했습니다",
            text: "식단에 저장할 음식을 선택해주세요.",
          });
      }
    },
    // router
    goToSearch() {
      this.$router.push({ name: "search" });
    },
  },
};
</script>

<style scoped>
.btn-save {
  margin-top: 1vw;
  width: 11vw;
  font-size: 0.8vw;
  border-radius: 0.4vw;
  font-size: 1vw;
}

.elevation-1 {
  margin-top: 2rem;
}
</style>
