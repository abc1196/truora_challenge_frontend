<template>
  <div class="home">
    <ListComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListComponent from '@/components/List.vue'; // @ is an alias to /src

@Component({
  components: {
    ListComponent,
  },
})
export default class List extends Vue {}
</script>