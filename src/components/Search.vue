<template>
  <b-container class="base-container bv-example-column">
    <b-form align-h="center" style="margin-bottom: 16px;" @submit="onSubmit" @reset="onReset">
      <!-- Using components -->
      <b-input-group class="mt-3">
        <b-form-input v-model="computedQuery" placeholder="Search Domain..."></b-form-input>
        <b-input-group-append>
          <b-button type="submit" variant="primary">
            <font-awesome-icon icon="search"/>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
    <b-spinner variant="primary" type="grow" label="Loading" v-if="computedLoading"></b-spinner>
    <Card v-if="computedShowDomain" :domain="domain"/>

    <!-- Error Modal -->
    <b-modal ref="error-modal" title="Error">{{computedErrorMessage}}</b-modal>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import DomainService from "@/services/domains";
import Domain from "@/data/Domain";
// @ts-ignore
import Card from "@/components/Card";

@Component({
  components: { Card }
})
export default class Search extends Vue {
  query: string = "";
  loading: boolean = false;
  showDomain: boolean = false;
  domain!: Domain;
  errorMessage: string = "";

  @Emit()
  private onSubmit(evt: Event) {
    evt.preventDefault();
    this.showDomain = false;
    this.domain = new Domain();
    this.loading = true;
    DomainService.getDomain(this.query)
      .then(response => {
        if (response.code === 400 || response.code === 500) {
          this.errorMessage = response.message;
          this.showModal();
        } else {
          this.domain = response;
          this.showDomain = true;
        }
      })
      .catch(error => {
        this.errorMessage = error;
        this.showModal();
      })
      .finally(() => {
        this.loading = false;
      });
  }

  @Emit()
  private onReset(evt: Event) {
    evt.preventDefault();
    this.query = "";
  }

  @Emit()
  showModal() {
    // @ts-ignore
    this.$refs["error-modal"].show();
  }
  @Emit()
  hideModal() {
    // @ts-ignore
    this.$refs["error-modal"].hide();
  }

  get computedQuery() {
    return this.query;
  }

  set computedQuery(query: string) {
    this.query = query;
  }

  get computedDomain() {
    return this.domain;
  }

  set computedDomain(domain: Domain) {
    this.domain = domain;
  }

  get computedLoading() {
    return this.loading;
  }

  get computedShowDomain() {
    return this.showDomain;
  }

  set computedShowDomain(showDomain: boolean) {
    this.showDomain = showDomain;
  }

  get computedErrorMessage() {
    return this.errorMessage;
  }

  set computedErrorMessage(errorMessage: string) {
    this.errorMessage = errorMessage;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base-container {
  min-height: 100vh;
  overflow: hidden;
}
</style>