<template>
  <p style="display: flex;">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/" style="margin-right: 6px;">Go to Home</router-link>
    <router-link to="/about/2">Go to About</router-link>
  </p>
  
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>

  <Welcome />
</template>

<script setup>
  import Welcome from './components/Welcome.vue'
</script>