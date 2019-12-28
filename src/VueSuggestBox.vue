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
@import "./VueSuggestBox.css";
</style>
