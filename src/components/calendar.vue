<template>
  <div id="calendar">
    日历
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import tabBar from '@/components/tabBar'
  export default {
    name: 'calendar',
    components: {
      tabBar
    }
  }
</script>
