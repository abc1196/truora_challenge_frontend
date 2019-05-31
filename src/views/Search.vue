<template>
  <div class="home">
    <SearchCommponent msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchCommponent from '@/components/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    SearchCommponent,
  },
})
export default class Search extends Vue {}
</script>