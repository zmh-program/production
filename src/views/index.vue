<script setup>

</script>

<template>
  <el-container>
    <el-header class="header">
      <h1 data-aos="fade-down" data-aos-duration="600" onclick="location.href='https://zmh-program.site/'">Zh-Website</h1>
      <p data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">We are an Open Source Deep Reinforcement Learning training platform</p>
      <el-row :gutter="20" class="operation-row" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
        <el-button type="success">Quick Start</el-button>
        <el-button type="primary" plain>Docs</el-button>
      </el-row>
    </el-header>
  </el-container>
</template>
<style>
.header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;
}

.header h1 {
  font-size: 42px;
  background: linear-gradient(315deg,#42d392 25%,#647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
}

.operation-row {
  margin: 20px auto;
}
.header p {
  display: flex;
  font-size: 30px;
  font-weight: bold;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: monospace;
  padding: 20px 45px;
  text-align: center;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: xx-large;
  }
  .header p {
    padding: 10px 15px;
    font-size: 20px;
  }
}
</style>