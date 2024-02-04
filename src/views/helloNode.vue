<template>
  <div>
    <p>用户名: {{ userInfo.name }}</p>
    <p>性别: {{ userInfo.sex }}</p>
    <p>年龄：{{ userInfo.age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "",
        age: "",
        sex: "",
      },
    };
  },
  created() {
    this.$axios.get("/api/user/getInfo").then((res) => {
      if (res.data) {
        this.userInfo = res.data.data;
      }
      console.log(res, "res-----"); //
    });
  },
  // methods: {
  //   submit() {
  //     var name = document.getElementById("name").value;
  //     var pwd = document.getElementById("pwd").value;
  //     if (name == "" || pwd == "") {
  //       alert("帐号和密码不能为空");
  //     } else {
  //       //向服务器提交数据
  //       axios
  //         .post("http://127.0.0.1:3000/login", {
  //           name: name,
  //           pwd: pwd,
  //         })
  //         .then(function (response) {
  //           //成功时服务器返回 response 数据
  //           alert(response.data);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   },
  // },
};
</script>
