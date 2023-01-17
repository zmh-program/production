<template>
  <el-carousel :interval="4000" type="card" class="carousel">
    <el-carousel-item><img src="@/assets/screenshot/profile.png" alt></el-carousel-item>
    <el-carousel-item><img src="@/assets/screenshot/chat.png" alt></el-carousel-item>
    <el-carousel-item><img src="@/assets/screenshot/index.png" alt></el-carousel-item>
    <el-carousel-item><img src="@/assets/screenshot/functions.png" alt></el-carousel-item>
    <el-carousel-item><img src="@/assets/screenshot/production.png" alt></el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.carousel {
  width: 100%;
  height: max-content;
  margin: 20px 0;
}

.carousel img {
  width: 100%;
  object-fit: cover;
}
</style>
