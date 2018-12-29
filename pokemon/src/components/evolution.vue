<template>
    <div class="evolution-form">
        <p>{{ evolution.species.name }}</p>
        <p>2222211</p>
    </div>
</template>


<script>
// import fly from '@/utils/fly'

export default {
  props: {
    evolution: Object,
    default () {
      return {}
    }
  },
  mounted () {
  },
  methods: {
    getForm (obj) {
      if (obj === undefined || obj === null) {
        return {}
      } else {
        console.log('11111')
        console.log(obj.species.name)
        console.log('22222')
        return obj.species.name
      }
    }
  }
}
</script>