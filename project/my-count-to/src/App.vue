<template>
  <span ref="countup"></span>
</template>

<script>
import { CountUp } from "countup.js";
export default {
  name: "my-count-to",
  data() {
    return {
      numAnim: null
    };
  },
  props: {
    end: {
      type: Number,
      default: 2018
    },
    options: {
      type: Object
    }
  },
  mounted() {
    this.initCountUp();
  },
  methods: {
    initCountUp() {
      this.numAnim = new CountUp(this.$refs.countup, this.end, this.options);
      this.numAnim.start();
    }
  }
};
</script>
