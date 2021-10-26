<template>
  <div>
    <el-container class="home-container">
      <!-- 头部 -->
      <el-header>
        <div>
          <img src="../assets/logo.png" />
          <span>电商后台管理系统</span>
        </div>
        <el-button type="primary" @click="logout">退出</el-button>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        
        <el-aside :width="isCollapse? '64px':'200px'">
          <div class="toggle-button" @click="toggleCollapse">|||</div>
          <!-- 侧边栏菜单 -->
          <el-menu
            background-color="#3b818c"
            text-color="#fff"
            active-text-color="#409eff"
            :unique-opened="true"
            :collapse="isCollapse"
            :collapse-transition="false"
            :router="true"
            default-active="/users"
          >
            <!-- 一级菜单 -->
            <el-submenu
              :index="item.id + ''"
              v-for="item in menulist"
              :key="item.id"
            >
              <!-- 一级菜单的模板区域 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-location"></i>
                <!-- 文本 -->
                <span>{{ item.authName }}</span>
              </template>


              <!-- 二级菜单 -->
              <el-menu-item
                :index="subItem.path + '/'"
                v-for="subItem in item.children"
                :key="subItem.id"
                
              >
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name:'home',
  data() {
    return {
      menulist: [],
      isCollapse: false
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenuList() {
      const { data: res } = await this.$http.get("menus");
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      console.log(this.menulist);
    },
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 800px;
}
.el-header {
  background: #134857;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
  align-items: center;
  color: #fff;
  font-size: 20px;
  img {
    width: 50px;
    height: 50px;
  }
  > div {
    display: flex;
    align-items: center;
    span {
      padding: 10px;
    }
  }
}

.el-aside {
  background: #3b818c;
  .el-menu {
    border-right: none;
  }
}

.el-main {
  background: #b0d5df;
}
.toggle-button {
  background: rgb(121, 161, 167);
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>