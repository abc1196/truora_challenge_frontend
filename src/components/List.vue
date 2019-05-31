<template>
  <b-container>
    <!-- Domains List -->
    <b-spinner variant="primary" type="grow" label="Loading" v-if="computedLoading"></b-spinner>
    <p class="loading" v-if="computedDomains.length < 1">No has realizado búsquedas</p>
    <div align-h="center" class="row" v-if="computedDomains.length > 0">
      <div
        class="col-md-5"
        style="margin: 16px;"
        v-for="domain in computedDomains"
        :key="domain.id"
      >
        <Card :domain="domain"/>
      </div>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
// @ts-ignore
import Card from "@/components/Card";
import DomainService from "@/services/domains";
import Domain from "@/data/Domain";

@Component({
  components: {
    Card
  }
})
export default class List extends Vue {
  loading: boolean = false;
  domains: Array<Domain> = [];

  created() {
    this.loading = true;
    DomainService.getDomains()
      .then(domains => {
        this.domains = domains;
      })
      .catch(error => {
        return error;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  get computedLoading() {
    return this.loading;
  }

  get computedDomains() {
    return this.domains;
  }
}
</script>