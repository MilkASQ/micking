<template>
  <span>{{time | formatDate}}</span>
  <span>{{time | formatTimeStamp}}</span>
</template>

<script>
  import {formatDate} from "@/assets/js/unit"

  export default {
    data() {
      return {}
    },
    filters: {
      formatDate(time) {
        let date = new Date(parseInt(time) * 1000);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      },
      formatTimeStamp(time) {
        return new Date(time).getTime() / 1000;
      }
    }
  }
</script>
