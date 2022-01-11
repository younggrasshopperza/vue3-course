<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { id: 1, title: 'Software Developer', details: 'loerm' },
                { id: 2, title: 'Web Designer', details: 'loerm' },
                { id: 3, title: 'Project Manager', details: 'loerm' }
            ]
        }
    }
}
</script>

<style>

</style>