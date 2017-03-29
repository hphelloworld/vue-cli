<template>
    <div class="index">{{msg}}
    <p>{{message}}</p>
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
            title: 'hello',
            msg: 'Use Vue'
        }
    },
    computed: mapState([
        'message'
    ]),
    mounted: function() {
        document.title = this.title;
        $(".index").css("color", '#222');
        this.$store.commit('MESSAGE', 'hello');
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
