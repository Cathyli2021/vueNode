<template>
  <div style="width: 500px; margin: auto">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$axios
        .post("/api/login", {
          name: this.form.name,
          pwd: this.form.password,
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.userInfo = res.data;
            this.$router.push({
              path: '/helloNode'
            })
            this.$message.success(res.data.message);
          } else {
            this.$message.error(res.data);
          }
        });
    },
  },
};
</script>
