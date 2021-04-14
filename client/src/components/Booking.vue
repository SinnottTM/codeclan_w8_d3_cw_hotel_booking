<template>
  <section>
      <div class="form">
        <h2>Name: {{booking.name}}</h2>
        <p>Email: {{booking.email}}</p>
        <p>Checked in? {{booking.checked_in}}</p>
        <br>
        <button class="button" v-on:click="handleDelete(booking._id)">Delete Booking</button>
        <button class="button" v-if="!booking.checked_in" v-on:click="handleCheckin(booking._id)">Check In</button>
     </div>
  </section>
</template>

<script>
import {eventBus} from '../main.js'


export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    handleDelete(id){
      eventBus.$emit('delete-booking', id)
    },

    handleCheckin(id){
      eventBus.$emit('check-in-change', id)
    }
  },
}

</script>

<style>

.button {
display:inline-block;
padding:0.3em 1.2em;
margin:0 0.3em 0.3em 0;
border-radius:2em;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color:#4eb5f1;
text-align:center;
transition: all 0.2s;
}

.button:hover{
background-color:#4095c6;
}

.form {
border-style: solid;
padding: 10px;
}

</style>