<template>
<div>
  <!-- <b-table striped hover :items="this.$store.state.read.data" :fields="fields"></b-table> -->
  <b-table striped hover :items="getRead()"></b-table>
  <b-table striped hover :items="items" :fields="fields"></b-table>
  <b-pagination-nav :link-gen="linkGen" :number-of-pages="3" use-router align="right"></b-pagination-nav>
</div>
</template>

<script>
export default {
  name: 'Read',
    computed: {
      items () {
        return this.$store.dispatch('read');
      }
    },
     data() {
      return {
      }
    },
    methods: {
      getRead() {
        return this.$store.state.read.data
      },
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
        }
    }
}
</script>