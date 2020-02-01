<template>
<div>
 <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
      <a class="navbar-brand" href="/">DOSCG</a>
      <b-button
        v-b-toggle.collapse-1 variant="danger"
      >
        <span class="navbar-toggler-icon"></span>
      </b-button>
      <b-collapse class="navbar-collapse collapse" id="collapse-1">
        <ul class="navbar-nav mt-auto">
          <li class="nav-item">
            <a class="nav-link" href="/portfolio">
              My portfolio
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/API">API</a>
          </li>
        </ul>
      </b-collapse>
    </nav>
    <div>
</div>
</div>
</template>

<script>
export default {
  name: 'NavBAR'
}
</script>  

<style scoped>
h1, h2 {
  font-weight: normal;
  
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
  color: #42b983;
}
.bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
</style>