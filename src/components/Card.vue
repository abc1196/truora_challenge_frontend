<template>
  <div>
    <!-- Domain -->
    <b-card no-body class="text-left">
      <b-card-header>
        <b-row>
          <b-col cols="2">
            <b-card-img :src="domain.logo" alt  class="float-left" style="height: 24px; max-width: 24px;" img-top></b-card-img>
          </b-col>
          <b-col cols="7">
            <b-card-title>{{domain.id}}</b-card-title>
            <b-card-sub-title class="mb-2">{{domain.title}}</b-card-sub-title>
          </b-col>
          <b-col cols="3">
            <b-card-text class="float-right">
              <font-awesome-icon v-if="!domain.isDown" icon="check-circle" class="check-icon"/>
              <font-awesome-icon v-if="domain.isDown" icon="times-circle" class="times-icon"/>
              {{ domain.isDown ? "Down" : "Up" }}
            </b-card-text>
          </b-col>
        </b-row>
      </b-card-header>
      <b-card-body class="text-center">
        <b-card-sub-title>SSL Grade</b-card-sub-title>
        <b-card-text>
          <h1>
            <b-badge
              v-if="domain.sslGrade === 'A+' || domain.sslGrade === 'A' "
              variant="success"
            >{{ domain.sslGrade}}</b-badge>
            <b-badge
              v-if="domain.sslGrade === 'B' || domain.sslGrade === 'C' "
              variant="warning"
            >{{ domain.sslGrade}}</b-badge>
            <b-badge
              v-if="domain.sslGrade === 'D' || domain.sslGrade === 'E' || domain.sslGrade === 'F' "
              variant="danget"
            >{{ domain.sslGrade}}</b-badge>
          </h1>
        </b-card-text>
        <b-button v-on:click="getServers" variant="primary">
          Servers
          <b-badge
            :if="domain.servers !== null"
            variant="light"
          >{{domain.servers !== null ? domain.servers.length : 0}}</b-badge>
        </b-button>
      </b-card-body>
      <b-card-footer>
        <b-card-sub-title style="margin-bottom: 8px;">Domain status one hour ago</b-card-sub-title>SSL Grade
        <b-badge
          v-if="domain.sslGrade === 'A+' || domain.sslGrade === 'A' "
          variant="success"
        >{{ domain.sslGrade}}</b-badge>
        <b-badge
          v-if="domain.sslGrade === 'B' || domain.sslGrade === 'C' "
          variant="warning"
        >{{ domain.sslGrade}}</b-badge>
        <b-badge
          v-if="domain.sslGrade === 'D' || domain.sslGrade === 'E' || domain.sslGrade === 'F' "
          variant="danget"
        >{{ domain.sslGrade}}</b-badge>
        <b-card-text>{{ domain.serversChanged ? "The servers have been updated" :"No changes in the servers"}}</b-card-text>
      </b-card-footer>
    </b-card>

    <!-- Servers Modal -->
    <b-modal ref="my-modal" scrollable :title="domain.id + ' Servers'">
      <b-list-group v-for="server in domain.servers" :key="server.address">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          {{server.address}}
          {{server.owner}} ({{server.country}})
          <b-badge
            v-b-tooltip.hover
            title="SSL Grade"
            v-if="server.sslGrade === 'A+' || server.sslGrade === 'A' "
            variant="success"
          >{{ server.sslGrade}}</b-badge>
          <b-badge
            v-b-tooltip.hover
            title="SSL Grade"
            v-if="server.sslGrade === 'B' || server.sslGrade === 'C' "
            variant="warning"
          >{{ server.sslGrade}}</b-badge>
          <b-badge
            v-b-tooltip.hover
            title="SSL Grade"
            v-if="server.sslGrade === 'D' || server.sslGrade === 'E' || server.sslGrade === 'F' "
            variant="danger"
          >{{ server.sslGrade}}</b-badge>
        </b-list-group-item>
      </b-list-group>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import Domain from "@/data/Domain";
import Server from "@/data/Server";

@Component
export default class Card extends Vue {
  @Prop() domain!: Domain;

  @Emit()
  getServers() {
    // @ts-ignore
    this.$refs["my-modal"].show();
  }
  @Emit()
  hideModal() {
    // @ts-ignore
    this.$refs["my-modal"].hide();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check-icon {
  color: #28a745;
}
.times-icon {
  color: #dc3545;
}
</style>