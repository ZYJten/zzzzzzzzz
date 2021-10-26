<template>
  <div id="back">
    <div class="login">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :rules="loginFormRules"
        :model="loginForm"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">提交</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      loginFormRules: {
        //用户名
        username: [
          { required: true, message: "请输入登录名称", tigger: blur },
          { min: 1, max: 5, message: "长度在1-5个字符", trigger: blur },
        ],
        //密码
        password: [
          { required: true, message: "请输入登录密码", tigger: blur },
          { min: 6, max: 15, message: "长度在6-15个字符", trigger: blur },
        ],
      },
    };
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        const {data:res} = await this.$http.post("login", this.loginForm);
        console.log(res);
        if (res.meta.status !== 200) return this.$message.error('登录失败');
        this.$message.success('登录成功');
        window.sessionStorage.setItem("token",res.data.token)
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style lang='less' scoped>
#back {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(49, 146, 125);
}
.login {
  width: 450px;
  height: 300px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgb(255, 255, 255);
  border: rgb(194, 193, 190);
  border-radius: 3px;
  box-shadow: 1px 1px 3px rgb(172, 171, 171);

  .avatar_box {
    height: 130px;
    width: 130px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>