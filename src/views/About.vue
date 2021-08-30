<template>
  <div class="container">
    <div class="top-list">
      <div class="banner">
        <p class="text-banner">Hello</p>
        <img :src="list" class="list" />
        <p class="sub-text">No more wasted time at shopping</p>
      </div>
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
import user from "../assets/img/users-solid.png";
import list from "../assets/img/list.png";

export default {
  name: "About",

  data() {
    return {
      plus,
      user,
      list,
    };
  },
};
</script>

<style>
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
}
.banner {
  background-color: #3f87f5;
  width: 300px;
  height: 300px;
  margin-bottom: 300px;
  margin-left: 13%;

  border-radius: 50px;
}
.text-banner {
  color: #fff;
  font-size: 2rem;
  padding-top: 25px;
}
.list {
  width: 120px;
  height: 120px;
}
.sub-text {
  color: #fff;
  font-size: 1.2rem;
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
