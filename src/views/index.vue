<script setup>
import ScreenShot from '@/components/ScreenShot.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <el-container class="container">
      <h1 data-aos="fade-down" data-aos-duration="600" onclick="location.href='https://zmh-program.site/'">Zh-Website</h1>
      <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">We are an Open Source Deep Reinforcement Learning training platform</p>
      <el-row :gutter="20" class="operation-row" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
        <RouterLink to="/start"><el-button type="success" class="el-button--large" plain><el-icon><Flag /></el-icon>&nbsp;Quick Start</el-button></RouterLink>
        <RouterLink to="/docs"><el-button type="primary" class="el-button--large" plain><el-icon><Memo /></el-icon>&nbsp;Docs</el-button></RouterLink>
      </el-row>
      <ScreenShot data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000" />
  </el-container>
</template>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
  overflow-y: hidden;
}

.container h1 {
  font-size: 46px;
  font-weight: 600;
  background: linear-gradient(315deg,#42d392 25%,#647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.operation-row {
  margin: 40px auto;
  gap: min(5.5vw, 28px);
}
.container p {
  display: flex;
  font-size: 30px;
  font-weight: bold;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 20px 45px;
  text-align: center;
}

@media (max-width: 768px) {
  .container h1 {
    font-size: xx-large;
  }
  .container p {
    padding: 10px 15px;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.01cm;
  }
}
</style>