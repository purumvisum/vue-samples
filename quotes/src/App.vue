<template>
    <div class="container">
        <label>Progress</label>
        <progressBar :quoteCount='quotes.length'></progressBar>
        <quotesTextInput :addQuote="addQuote"></quotesTextInput>
        <div class="row">
            <quote
                    class="col-sm-6 col-md-4 col-lg-3"
                    v-for='(quote, index) in quotes'
                    :removeQuote = 'removeQuote'
                    :quote = 'quote'
                    :index = 'index'
            >
            </quote>
        </div>
        <div class="alert alert-info text-center">Click on a Quote to delete it</div>
    </div>
</template>

<script>
    import QuotesTextInput from './components/QuotesTextInput.vue';
    import Quote from './components/Quote.vue';
    import ProgresBar from './components/ProgresBar.vue';
    export default {
        components: {
            progressBar: ProgresBar,
            quotesTextInput: QuotesTextInput,
            quote: Quote
        },
        data: function () {
            return {
                quotes: []
            }
        },
        methods: {
            addQuote: function(quote)  {
                if(this.quotes.length < 10) {
                    this.quotes.push(quote)
                }
            },
            removeQuote: function(quoteIndex)  {
               this.quotes.splice(quoteIndex, 1);
            }
        }
    }
</script>

<style>
</style>
