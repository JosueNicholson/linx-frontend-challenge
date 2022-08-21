<template>
  <div>
    <a :href="loginLink" target="_blank">Login</a>
  </div>
</template>

<script lang="ts" setup>
const loginLink = `https://api.imgur.com/oauth2/authorize?response_type=token&client_id=${
  import.meta.env.VITE_APP_IMGUR_CLIENT_ID
}`;
</script>

<style></style>
