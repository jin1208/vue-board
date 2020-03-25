<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
   
    <router-link to="/"><b-navbar-brand>BIL CRUD</b-navbar-brand></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/Create" tag="b-nav-item">Create</router-link>
        <router-link to="/Read" tag="b-nav-item">Read</router-link>
        <router-link to="/Update" tag="b-nav-item" disabled>Update</router-link>
        <b-nav-item disabled >Delete</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>
