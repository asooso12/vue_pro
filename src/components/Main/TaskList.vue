<template>
  <v-app>
    <v-data-table
      v-model="selected"
      class="elevation-1"
      :headers="headers"
      :items="taskData"
      hide-default-footer
      :single-select="false"
      item-key="task_no"
      :page.sync="page"
      @page-count="pageCount = $event"
      :items-per-page="10"
    >
      
      <template v-slot:[`item.system_name`]="{ item }">
        <v-chip :color="getColor(item.system_name)" dark>
          {{ item.system_name }}
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
      //https://ayoteralab.tistory.com/entry/Vuejs-08-use-v-data-table
      // https://luerangler-dev.tistory.com/23
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
        { text: "대분류", align: "start", value: "system_name", sortable: true, width: '10%'},
        { text: "분류", align: "start", value: "system_category", sortable: true, width: '10%' },
        { text: "시스템 업무", align: "start", value: "task", sortable: true, width: '15%' },
        { text: "업무 상세 설명", align: "start", value: "task_description", sortable: true, width: '45%' },
        { text: "담당자", align: "start", value: "manager_name", sortable: true,  width: '10%' },
        { text: "전화번호", align: "start", value: "manager_tel", sortable: true ,  width: '10%'},
      ],
    };
  },
  methods: {
    getColor(system_name) {
      if (system_name == "고객관리") return "#a2b5db";
      else if(system_name == "내부관리시스템") return "#663e65";
      else if(system_name == "대외지원시스템") return "#ba97a4";
      else if(system_name == "인프라 기획") return "#786775";
      else if(system_name == "정보보호") return "#97b2ba";

      else return "red";
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

.v-application--wrap {
    min-height: 80vh;
}
</style>
