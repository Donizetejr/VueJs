<template name="Component-name">
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-form="c in 5" :key="c" />
    </div>
</template>
<script>
import Contador from './Contador.vue'
export default {
   components: { 'app-contador': Contador }
}
</script>
<style>

</style>