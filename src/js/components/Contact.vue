<template>
    <div class="popup">
        <button class="popup-close" title="Close popup"
            v-on:click="$emit('close')"></button>
        <p>
            Find me on Discord: <strong>Czit#6666</strong><br>
            Find me in Tibia: <strong>Nienienie</strong>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>
