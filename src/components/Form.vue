<template>
    <div>
        <div>
            <label>Name: </label>
            <input :value="name" @input="updateName" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mutationsIds } from "@/store/mutations";

export default {
    computed: {
        ...mapGetters({
            name: 'getName'
        })
    },
    methods: {
        updateName(event) {
            const value = event.target.value;
            this.$store.commit(mutationsIds.updateFormName, value);
        }
    }
}
</script>