<template>
  <el-container class="container-home">
    <el-aside :width="isOpen?'200px':'64px'">
      <div class="logo" :class="{minLogo:!isOpen}"></div>
      <el-menu
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="!isOpen"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggleAside" class="el-icon-s-fold icon"></span>
        <span class="text">江苏传智播客教育有限公司</span>
        <!-- 下拉菜单 -->
        <el-dropdown class="list">
          <span class="el-dropdown-link">
            <img class="user-icon" src="../../assets/avatar.jpg" alt />
            <span class="user-name">用户名</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <!-- 二级路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 表示左菜单是展开还是收起
      isOpen: true
    }
  },
  methods: {
    // 切换左菜单
    toggleAside () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="less" scoped>
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: #002244 url(../../assets/logo_admin.png) no-repeat center /
        140px auto;
    }
    .minLogo {
      background: #002244 url(../../assets/logo_admin_01.png) no-repeat center
    }
    .el-menu {
      border-right: 0;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      font-size: 16px;
      vertical-align: middle;
    }
    .list {
      float: right;
      .user-icon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .user-name {
        color: #333;
        font-weight: bold;
        vertical-align: middle;
        margin-left: 6px;
      }
    }
  }
}
</style>
