<template>
  <div id="video_circle_01" :class="$style.video_circle_01" />
  <div id="video_circle_02" :class="$style.video_circle_02" />
  <div id="video_circle_03" :class="$style.video_circle_03" />
</template>

<style module>
.video_circle_01,
.video_circle_02,
.video_circle_03 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.1;
  position: absolute;
  border-radius: 100%;
  background-color: #0000003d;
  z-index: 100;
  height: 500px;
  width: 500px;
}
.video_circle_02 {
  width: 700px;
  height: 700px;
  opacity: 0.2;
}
.video_circle_03 {
  width: 900px;
  height: 900px;
  opacity: 0.3;
}
</style>
