<template>
    <div class="form">
        <div>
            <label>Name: </label>
            <input v-model="name" />
        </div>
    </div>
</template>

<script>
// import { mutationsIds } from "@/store/mutations";
import { mutationsIds } from "../store/mutations";

export default {
    computed: {
        // name: ''
        name: {
            // custom getter for "this.name"
            get () {
                // return this.$store.getters.getName;
                return this.$store.state.form.name;
            },
            // custom setter for "this.name"
            // happening inside Vue JS, and doing something like: this.name = value;
            set (value) {
                this.$store.commit(mutationsIds.updateFormName, value);
            },
        }
    }
}
</script>

<style scoped>
.form {
    margin: 10px;
    padding: 10px;
    background: #f9f9f9;
    border: 1px solid #2e2e2e;
}
</style>