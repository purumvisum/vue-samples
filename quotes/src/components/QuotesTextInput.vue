<template>
    <div>
        <div class="form-group">
            <label>Quote</label>
            <textarea class='form-control' v-model="quote"></textarea>
        </div>
        <div class="form-group">
            <Button class='btn btn-primary' @click="addQuoteFromTextfield">Add Quote</Button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['addQuote'],
        data: function () {
            return {
                quote: ''
            }
        },
        methods: {
            addQuoteFromTextfield: function () {
                if (this.quote) {
                    this.addQuote(this.quote)
                } else {
                    console.log('write something')
                }
            }
        }
    }
</script>

<style>
</style>
