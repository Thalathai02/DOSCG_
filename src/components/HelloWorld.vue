<template>
<div class="bg">
  <div class=" d-flex w-100 h-100 p-3 mx-auto flex-column container">
    <h1 >Welcome to DOSCG</h1>
    <p class="lead">power Vue.JS V3 and Bootstrap V4</p>
    <p class="lead">
      <a href="/portfolio" class="btn btn-lg btn-danger">About Me</a>
      <a href="/API" class="btn btn-lg btn-danger">API</a>
    </p>
  </div></div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,
html {
  height: 100%;
}
.container {
  margin: 0 auto;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1,
h2 {
  font-weight: normal;
  color: #E6F6FF;
}
p{
  font-weight: normal;
  color: #E6F6FF;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #E6F6FF;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.bg {
  background-image: url('https://scontent.fcnx4-1.fna.fbcdn.net/v/t1.0-9/65748277_1881443575288950_5915350193540169728_o.jpg?_nc_cat=107&_nc_eui2=AeFa9_GntsciAiSZ-aq_KZN3EWr7jcpKefVpNSxs3ImB5-VpMt1q5ZFNURFXF_54kShJkoAVzZ5fDe8NHtwNs1KBNQhTo_sxXyg427l6gOOWCw&_nc_oc=AQmNWONZ4_Ot3mxwmp0s-RpSIaG0GlP_TvNkH7YQtIPTKA3BfNltEpSCppyw3JN3gKntpNDXYGQjr_zHlGpFmoef&_nc_ht=scontent.fcnx4-1.fna&oh=03dc47d1fc9cfcc0159cb773ef85b1f0&oe=5ECFBA75');
    height: 900px;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
