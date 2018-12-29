<template>
  <div class="pokemon">
    <div class="pokemon-base">
      <a class="pokemon-id" >{{ pokemon.id }}</a>
      <a class="pokemon-name" >{{ pokemon.name }}</a>
      <img :src='base_img' class="pokemon-img">
    </div>
    <div class="pokemon-tab">
      <div class="pokemon-tab-item" :class="{active:changeNav == index}" v-for="(item,index) in navList" :key="index" :data-current="index" @click="swichNav">
        {{item.name}}
      </div>
    </div>
    <info v-if="changeNav==0" :pokemon="pokemon" :pokemon_species="pokemon_species" :evolution_chain="evolution_chain"></info>
    <moves v-else-if="current==1" :pokemon="pokemon" :moves="moves"></moves>
    <more v-else-if="current==2" :pokemon="pokemon" ></more>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import info from '@/components/info'
import moves from '@/components/moves'
import more from '@/components/more'
import fly from '@/utils/fly'

export default {
  config: {
    navigationBarTitleText: 'DETAIL'
  },

  mpType: 'page',

  data () {
    return {
      pokemon: {},
      pokemon_species: {},
      evolution_chain: {},
      moves: {},
      base_img: '',
      navList: [{name: 'INFO'}, {name: 'MOVES'}, {name: 'MORE'}],
      changeNav: 0,
      current: null
    }
  },

  components: {
    info: info,
    moves: moves,
    more: more
  },

  computed: {
    ...mapState([
      'count'
    ])
  },

  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),

    swichNav (e) {
      const current = e.currentTarget.dataset.current
      this.changeNav = current
      this.current = current
    }
  },

  mounted () {
    const id = this.$root.$mp.query.id
    fly.get('pokemon/' + id + '/#!method=get').then((res) => {
      console.log(res.data)
      this.base_img = res.data.sprites.front_default
      this.pokemon = res.data
    }).catch((e) => {
      console.log(e)
    })
    fly.get('pokemon-species/' + id + '/#!method=get').then((res) => {
      console.log(res.data)
      this.pokemon_species = res.data
      var chains = res.data.evolution_chain
      console.log(chains)
      var chainList = []
      do {
        console.log(chains)
        if (chains === [] || chains === undefined) {
          break
        }
        var minLevel = ''
        if (chains.evolution_details[0] !== undefined) {
          minLevel = chains.evolution_details[0].min_level
        }
        chainList.push({'name': chains.species.name, 'id': chains.species.id, 'next': minLevel})
        chains = chains.evolves_to[0]
      }
      while (true)
      console.log(chainList)
      this.evolution_chain = chainList
    }).catch((e) => {
      console.log(e)
    })
  },
  onUnload () {
    this.pokemon = {}
  }
}
</script>

<style>
.pokemon {
  background-color: #FDF5E6;
  width: 100%;
}

.pokemon-base {
  width: 100%;
  height: 250rpx;
  background-color: rgb(199, 4, 20);
}

.pokemon-id {
  float: left;
  width: 100rpx;
  margin: 30rpx;
}

.pokemon-name {
  float: left;
  width: 100rpx;
  margin: 30rpx;
}

.pokemon-img {
  float: right;
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx 0 0 100rpx;
  background-color: white;
}

.pokemon-tab {
  margin-top: -50rpx;
}

.pokemon-tab-item {
  float: left;
  width:33%;
  margin:auto;
  text-align:center;
}

.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>