<template>
  <div class="container">
    <div class="top-list">
      <h1 class="title">To Do List</h1>
      <input v-model="task" placeholder="Add new task" class="input-add" />
      <button @click="addTask" type="button" class="plus">+</button>
      <ul>
        <li v-for="task in tasks" :key="task" id="item">
          <input
            type="checkbox"
            v-on:change="() => this.updateTask(task.id, task.done)"
            v-model="task.done"
          />
          <span :class="[task.done ? 'done' : '']">{{ task.name }}</span>
        </li>
      </ul>
    </div>
    <footer>
      <div class="grid-columns">
        <router-link to="/">
          <img :src="plus" alt="" class="icon-plus" />
        </router-link>

        <router-link to="/about">
          <img :src="user" alt="" class="icon-user" />
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
import plus from "../assets/img/plus-circle-solid.png";
import user from "../assets/img//users-solid.png";

const api = "https://iaz3qpy5h3.execute-api.us-east-1.amazonaws.com/dev";

export default {
  name: "Home",
  components: {},
  async mounted() {
    const response = await fetch(api + "/todos", {
      method: "get",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    this.tasks = data;
  },
  data() {
    return {
      task: "",
      tasks: [],
      plus,
      user,
    };
  },
  methods: {
    async addTask() {
      const response = await fetch(api + "/todos", {
        method: "post",
        body: JSON.stringify({
          name: this.task,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      this.tasks.push(data);
      this.task = "";
    },
    async updateTask(id, done) {
      await fetch(api + "/todos/" + id, {
        method: "put",
        body: JSON.stringify({
          done,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.top-list {
  text-align: center;
  width: 30%;
  height: 80%;
  background: #fff;
  padding-top: 30px;
  -webkit-box-shadow: 0px -1px 25px -10px rgba(51, 51, 51, 0.88);
  box-shadow: 0px -1px 25px -10px rgba(51, 51, 51, 0.88);
  overflow: scroll;
  overflow-x: hidden;
}
.title {
  color: #3f87f5;
}
.input-add {
  border-style: none;
  height: 30px;
  width: 300px;
  background-color: #f7f7f7;
}
.input-add:focus,
select:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}
button {
  border-radius: 50%;
  border-style: none;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  background-color: #3f87f5;
  cursor: pointer;
}
.plus {
  font-size: 30px;
  font-weight: 500;
  color: #fff;
}
ul {
  list-style: none;
  text-align: start;
}
.done {
  text-decoration: line-through;
}
#item {
  margin-top: 20px;
  margin-bottom: 20px;
}
footer {
  background-color: #3f87f5;
  height: 50px;
  width: 30%;
  bottom: 0;
  position: fixed;
  margin-bottom: 20px;
}

.grid-columns {
  display: grid;
  grid-template-columns: 150px 48px;
  justify-content: center;
  text-align: center;
}
.icon-plus {
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  cursor: pointer;
}
.icon-user {
  width: 45px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .top-list {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .top-list {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 1024px) {
  .top-list {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 768px) {
  footer {
    width: 100%;
  }
}

@media only screen and (max-width: 1024px) {
  footer {
    width: 100%;
  }
}
</style>
