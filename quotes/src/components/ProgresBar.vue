<template>
    <div class="progress">
        <div class="progress">
            <div
                    :style="{width: (quoteCount/10)*100 + '%'}"
                    class="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
            >
                {{quoteCount}}/10
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount'],
        methods: {
            removeQuoteByIndex: function () {
                this.removeQuote(this.index)
            }
        }
    }
</script>
