<template>
    <div class="quote" @click="removeQuoteByIndex">
        {{quote}}
    </div>
</template>

<script>
    export default {
        props: ['quote', 'index', 'removeQuote'],
        methods: {
            removeQuoteByIndex: function () {
                this.removeQuote(this.index)
            }
        }
    }
</script>

<style>
    .quote {
        font-family: 'Arizona';
        font-size: 20px;
        font-style: italic;
        border: 1px solid;
        border-radius: 13px;
        padding: 40px;
        margin: 10px;
        text-align: center;
    }

    .quote:hover {
        background: #99ef9d;
        cursor: pointer;
    }
</style>
