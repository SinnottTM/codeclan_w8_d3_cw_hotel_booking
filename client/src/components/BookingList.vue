<template>
  <section id="bookingList">
      <booking v-for="booking in bookings" :booking="booking" />
  </section>
</template>

<script>
import Booking from './Booking.vue';

export default {
  name: 'booking-list',
  components: {
    'booking': Booking
  },
  props: ['bookings']
}
</script>

<style scoped>

#bookingList {
  display: flex;
  flex-flow: wrap;
  padding: 10px;
  justify-content: space-evenly
}


</style>