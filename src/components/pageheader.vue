<template>
  <div class="card-header">
    <div class="float-left">{{title}}</div>
    <div class="float-right">
      <b-button
        :title="$t('dic.help')"
        variant="primary"
        v-show="visible"
        @click="onClick"
        size="sm"
      >
        <i class="fa fa-question fa-lg"></i>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      default: null
    }
  },
  computed: {
      visible() { return typeof this.onClick === "function"; }
  },
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
    /* Onclick(e) {
        
    } */
  }

}
</script>

<style scoped>
.btn {
  padding: 0.05rem 0.5rem 0.2rem 0.5rem;
  vertical-align: top;
}
</style>