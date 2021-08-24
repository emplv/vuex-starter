<template>
    <div>
        <div>
            <span v-for="(number, index) in numbers" :key="index">
                {{ number }}
            </span>
        </div>
        <button @click="sortNumber">Sort</button>
        <button @click="reverseNumbers">Reverse</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // reusing the array reference
            numbers: [...this.$store.state.numbers],
            // numbers: this.$store.state.numbers.slice(),
            // numbers: this.$store.state.numbers.map(item => item),
        };
    },
    methods: {
        sortNumber() {
            this.numbers.sort();
        },
        reverseNumbers() {
            this.numbers.reverse();
        }
    }
}
</script>