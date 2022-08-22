<template>
  <div>
    <a :href="loginLink" target="_blank">
      <Button text="Faça Login" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import Button from "@/components/Button.vue";
const loginLink = `https://api.imgur.com/oauth2/authorize?response_type=token&client_id=${
  import.meta.env.VITE_APP_IMGUR_CLIENT_ID
}`;
</script>

<style></style>
