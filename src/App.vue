<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <header>
    

    <div class="wrapper">
      <nav>
        <RouterLink to="/" Home></RouterLink>
        <RouterLink to="/About" about></RouterLink>
        <RouterLink to="/CrearUsuario" create></RouterLink>
        <RouterLink to="/ListarUsuario" list></RouterLink>

      </nav>
      
    </div>
  </header>

  <RouterView />
</template>