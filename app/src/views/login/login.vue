<template>
  <div class="loginBox">
    <div  class="login">
      <h1>登录</h1>
      <div class="log-content">
        <div class="login-item">
          <h2>用户名</h2>
          <Input type="text"  prefix="ios-person-outline" v-model="username" placeholder="用户名" style="height: 50px;" class="input">
          </Input>
        </div>
        <div class="login-item">
          <h2>密码</h2>
          <Input type="password" prefix="ios-lock-outline" v-model="password" placeholder="密码" class="input">
          </Input>
        </div>
        <Button type="primary" id="login" size="large" @click="handleSubmit()">登录</Button>
      </div>
    </div >
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit (name) {
      this.$router.push({ path: '/home/inforCollecHome' })
    }
  }
}
</script>

<style scoped>
.loginBox{
  position: relative;
  width: 100%;
  height: 768px;
  background-image: url("../../../public/images/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
  .login{
    width:420px;
    height:430px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 0px rgba(57,57,57,0.26);
    border-radius:10px;
    position: absolute;
    left: 805px;
    top: 123px;
    background: white;
  }
.login h1{
  color: white;
  height: 76px;
  line-height: 76px;
  font-weight: 600;
  font-size: 24px;
 text-align: center;margin-bottom: 40px;
  background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  border-radius:10px 10px 0px 0px;
}
.log-content .input{
  width: 260px;
  height: 50px;
  margin: 10px 0;
}
  #login{
    margin: 20px 83px 20px;
    width: 254px;height: 48px;
    border-radius:28px;
    background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  }
  .login-item{
    margin-left: 80px;
  }
  .login-item p{

  }
</style>
