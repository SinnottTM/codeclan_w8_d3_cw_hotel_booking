<template>
  <div id="app">
    <br>
    <h1>Hotel Booking!</h1>
      <booking-form/>
      <booking-list :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingForm from './components/BookingForm.vue';
import BookingList from './components/BookingList.vue';
import BookingService from './services/BookingService.js';

export default {
  name: 'App',
  components: {
    'booking-form': BookingForm,
    'booking-list': BookingList
  },
  data() {
    return {
      bookings: []
    };
  },

  mounted() {
    this.fetchBookings();

    eventBus.$on('delete-booking', id => {
      BookingService.deleteBooking(id)
      .then(() => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings.splice(index, 1);
      })
    });

    eventBus.$on('check-in', booking => {
      const updatedBooking = {
        ...booking, 
        checked_in: true
      };
      BookingService.updateBooking(updatedBooking);
        const index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
        this.bookings.splice(index, 1, updatedBooking)
    });
  
  },

  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
      eventBus.$on('booking-added', (booking) => {
        this.bookings.push(booking)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,117,255,1) 100%);
}
</style>