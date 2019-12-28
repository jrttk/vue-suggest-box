<template>
  <div class="suggest-box" v-if="visible" :style="boxPosition">
    <div
      class="suggest-box-img"
      v-bind:style="{
        'background-image':
          'url(https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=820&q=80)'
      }"
    ></div>
    <div class="suggest-box-content">
      <div class="suggest-close" @click="visible = !visible"></div>
      <div>
        <h1>{{ title }}</h1>
        <p>{{ this.contentEllipsis }}</p>
      </div>
      <a href="#">
        Continue reading
        <span>→</span>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import Component from "vue-class-component";

@Component({})
export default class VueSuggestBox extends Vue {
  @Prop({ default: 'btr' }) private position!: string;
  @Prop({ default: "Hello World!" }) private title!: string;
  @Prop({ default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum alias magni." }) private content!: string;

  visible = true;

  get contentEllipsis() {
    return (
      this.content
        .split(" ")
        .splice(0, 20)
        .join(" ") + "..."
    );
  }

  get boxPosition() {
    switch (this.position) {
      case "btr":
        return {
          top: "initial",
          right: "2rem",
          left: "initial",
          bottom: "2rem"
        };
        break;
      case "btl":
        return {
          top: "initial",
          right: "initial",
          left: "2rem",
          bottom: "2rem"
        };
        break;
      case "tl":
        return {
          top: "2rem",
          right: "initial",
          left: "2rem",
          bottom: "initial"
        };
        break;
      case "tr":
        return {
          top: "2rem",
          right: "2rem",
          left: "initial",
          bottom: "initial"
        };
        break;
    }
  }
}
</script>

<style>
.suggest-box {
  width: 400px;
  height: 160px;
  display: flex;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.04), 0 2px 5px rgba(0, 0, 0, 0.04);
  transition: 0.3s ease-in-out;
  border: 1px solid rgba(0,0,0, .03);
}

.suggest-box:hover {
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease-in-out;
}

.suggest-box h1 {
  font-family: sans-serif;
}

.suggest-box p {
  font-family: serif;
  color: #666;
}

.suggest-box-img {
  flex-basis: 120px;
  background: #e2e2e2;
  background-size: cover;
  background-position: center;
}

.suggest-box-content {
  flex: 1;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.suggest-box-content > div > h1 {
  font-size: 16px;
  margin-bottom: 8px;
}

.suggest-box-content > div > p {
  font-size: 15px;
  line-height: 1.2;
}

.suggest-box-content > a {
  font-family: sans-serif;
  font-size: 14px;
  color: #0366d6;
  font-weight: 500;
  text-decoration: none;
}

.suggest-box-content > a > span {
  vertical-align: middle;
  margin-left: 5px;
}

.suggest-close {
  position: absolute;
  top: 15px;
  right: 20px;
  transform: rotate(45deg);
}

.suggest-close:hover {
  cursor: pointer;
}

.suggest-close::after,
.suggest-close::before {
  content: "";
  display: inline-block;
  background: #979797;
  color: white;
  width: 2px;
  height: 14px;
  position: relative;
  border-radius: 10px;
}

.suggest-close::after {
  transform: rotate(90deg);
  left: -2px;
}
</style>
