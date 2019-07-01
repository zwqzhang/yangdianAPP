<template>
  <div class="register">
    <header class="header">
      <div class="nav">
        <v-back class="back"></v-back>
        <span class="center-title">注册</span>
        <span class="tologin" @touchend="$router.push('/login')">登录</span>
      </div>
    </header>
    <div class="main">
      <div class="form">
        <div class="tel">
          <span>手机号:</span>
          <input type="text" v-model="user.phone">
        </div>
        <div class="tel">
          <span class="passt">密码:</span>
          <input type="text" v-model="user.password">
        </div>
        <div class="tel">
          <span>验证码:</span>
          <input type="text">
          <button class="get" @touchend="getnum()">点击获取</button>
        </div>
        <div class="btn" @touchend="register()">下一步</div>
        <div class="check">
          <input type="checkbox">
          <span>我已阅读并同意使用条款和隐私政策</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vBack from "../common/back";
import API from "../../common/js/API";
import { Toast } from "mint-ui";
import { MessageBox } from "mint-ui";

import $ from "jquery";
export default {
  components: {
    vBack
  },
  props: [],
  data() {
    return {
      user: {
        phone: "",
        password: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    getnum() {
      $(".get").attr("disabled", "true");
      clearInterval(timer);
      Toast({
        message: "验证码已发送，请注意查收",
        position: "middle",
        duration: 3000
      });
      var num = 60;
      var timer = setInterval(function() {
        num -= 1;
        $(".get").html("(" + num + ")");
        if (num <= 0) {
          clearInterval(timer);
          $(".get").html("点击获取");
          $(".get").attr("disabled", "false");
        }
      }, 1000);
    },
    register() {
      if (this.user.phone == "" || this.user.password == "") {
        Toast({
          message: "都是必填项",
          position: "middle",
          duration: 3000
        });
        return;
      }

      this.$http({
        url: API.register,
        method: "post",
        data: this.user
      }).then(d => {
        // console.log(d);
        if (d.data.status == 1) {
          Toast({
            message: d.data.msg,
            iconClass: "icon icon-success"
          });
        } else {
          Toast({
            message: d.data.msg,
            position: "middle",
            duration: 3000
          });
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.register {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: $headerheight;
  background: $bgcolor1;
}

.nav {
  margin-top: 0.4rem;
  width: 100%;
  height: $height1;
  display: flex;
  line-height: $height1;
  text-align: center;
  color: $bgcolor;
  font-size: $headersize;
  font-weight: 100;
  font-family: '微软雅黑';
}

.back, .tologin {
  width: 1.2rem;
}

.center-title {
  flex: 1;
}

.main {
  flex: 1;
}

.form {
  width: 80%;
  margin: 1rem auto;
}

.tel {
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  display: flex;
  font-size: 0.32rem;
  color: $sizecolor2;
  border-bottom: 1px solid $bordercolor1;
}

.tel span {
  width: 1.3rem;
  text-align: left;
}

.passt {
  letter-spacing: 0.16rem;
}

.tel input {
  height: 0.7rem;
  margin-top: 0.3rem;
  flex: 1;
  outline: none;
}

.tel .get {
  width: 1.3rem;
  height: 1.28rem;
  background: $bgcolor;
  border: none;
  color: $sizecolor1;
  text-align: center;
}

.btn {
  width: 100%;
  height: 1rem;
  margin: 0.5rem auto;
  border-radius: 5px;
  background: $bgcolor1;
  text-align: center;
  line-height: 1rem;
  color: $bgcolor;
  font-size: 0.3rem;
}

.check {
  height: 0.5rem;
  line-height: 0.5rem;
}

.check span {
  color: $sizecolor3;
}
</style>
