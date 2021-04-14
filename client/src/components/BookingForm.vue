<template>
  <section>
      <form id="booking-form" v-on:submit.prevent="addBooking" method="post">
        <br>
        <h2>Booking Form</h2>
        <div>
          <label for="name">Name: </label>
          <input type="text" id="name"
          v-model="name" required/>
        </div>
        <br>
        <div>
          <label for="email">Email: </label>
          <input type="text" id="email"
          v-model="email" required/>
        </div>
        <br>
        <div>
          <label for="checked_in">Checked In  </label>
          <input type="checkbox" id="checked_in"
          v-model="checked_in" />
        </div>
        <br>

        <input class="button" type="submit" value="Save"
        id="save" />
        
      </form>
  </section>
</template>

<script>

import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
  name: 'booking-form',
  data() {
    return {
      name: '',
      email: '',
      checked_in: false
    }
  },

  methods: {
        addBooking(){
      const booking = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
        }
      BookingService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res))
      this.name = '',
      this.email = '',
      this.checked_in = false
    }
  }
}
</script>

<style scoped>
#booking-form{
color: antiquewhite;
background: rgb(198,0,86);
background: radial-gradient(circle, rgba(198,0,86,1) 0%, rgba(0,117,255,1) 100%);
}
</style>