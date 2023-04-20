<template>



</template>

<script>

export default {
    name: "Task",
    data() {
        return {
            task : ""
        }
    },
    watch : {
        task : function(newTask, oldTask) { //eslint-disable-line
            this.emitter.emit("task-update", newTask)
        }
    },
}

</script>
