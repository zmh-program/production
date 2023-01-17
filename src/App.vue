<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <el-container class="app-container">
    <el-header data-aos-duration="500" data-aos="fade-down">
      <el-menu mode="horizontal">
        <el-menu-item index="0" class="logo" onclick="location.href='https://zmh-program.site/'"><img src="@/assets/logo.png" alt>&nbsp;<p>Zh-Website</p></el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="2" onclick="location.href='https://github.com/zmh-program/Zh-Website'"><el-icon><Link /></el-icon> Github</el-menu-item>
        <el-menu-item index="3" onclick="location.href='https://gitee.com/zmh-program/Zh-Website'"><el-icon><Link /></el-icon> Gitee</el-menu-item>
        <el-menu-item index="4" onclick="location.href='https://github.com/zmh-program/production'"><el-icon><Memo /></el-icon> Docs</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
    <el-footer>
      <a href="https://beian.miit.gov.cn/" class="icp" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        鲁ICP备2022034318号-1
      </a>
    </el-footer>
  </el-container>
</template>

<style scoped>
.app-container {
  position: absolute;
}
.logo img {
  width: 36px;
  height: 36px;
  margin-right: 5px;
}
.logo p {
  font-size: 20px;
}
.flex-grow {
  flex-grow: 1;
}
.icp {
  display: flex;
  justify-content: center;
  margin: 35px auto;
  width: max-content;
}
</style>
