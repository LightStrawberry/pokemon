<template>
  <div class="info-card">
    <div class="abilities">
      <a class="abilities-title">Abilities</a>
      <div class="abilities-list">
        <div class="abilities-list-item" v-for="(item,index) in pokemon.abilities" :key="index" :data-current="index" @click="show-abilitie">
          {{item.ability.name}}
        </div>
      </div>
    </div>
    <div class="base-stats">
      <a class="base-stats-title">Base Stats</a>
      <div class="base-stats-list">
        <div class="base-stats-item" v-for="(item,index) in pokemon.stats" :key="index" :data-current="index" @click="show-abilitie">
          <p class="stat-name">{{item.stat.name}}</p>
          <p class="stat-value" v-bind:style="{width: (item.base_stat / 180) * 65 + '%'}" >{{item.base_stat}}</p>
        </div>
        <div class="base-stats-item">
          <p class="stat-name">total</p>
          <p class="">" "</p>
        </div>
      </div>
    </div>
    <div class="evolution-chain">
      <a class="evolution-chain-title">Evolution Chain</a>
      <div class="evolution-chain-form">
        <!-- <div><evolution :evolution='pokemon_species.evolution_chain'></evolution></div> -->
        <div>
          <div class="" v-for="(item,index) in evolution_chain" :key="index" :data-current="index">
            <div class="evolution-evo-item" v-if="item.next !== ''"> <a>level up {{ item.next }}</a></div>
            <div class="evolution-stats-item">
              <img v-bind:src=" 'https\://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + item.id + '.png' " class="evolution-pokemon-img" />
              <div class="evolution-stat-name">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import fly from '@/utils/fly'
import Evolution from '@/components/evolution'

export default {
  components: {
    'evolution': Evolution
  },

  props: {
    pokemon: Object,
    pokemon_species: Object,
    evolution_chain: Array,
    default () {
      return {}
    }
  },

  methods: {
    getTotal (arr) {
      if (arr === undefined || arr === null) {
        return 0
      }
      var sums = 0
      for (var i in arr) {
        sums += arr[i].base_stat
      }
      return sums.toString()
    }
    // getImg (id) {
    //   return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'
    // }
  }
}
</script>


<style>
.info-card {
  padding-top: 50rpx;
}
.abilities-title {
  margin: 30rpx 20rpx 10rpx 40rpx;
}
.abilities-list {
  margin: 10px 10px;
  padding: 10rpx 10rpx;
  border: 1px solid red;
  border-radius: 5px;
}
.abilities-list-item {
  width: 95%;
  text-align: center;
  border-radius: 5px;
  background-color: red;
  margin: 5px auto;
}

.base-stats-title {
  margin: 30rpx 20rpx 10rpx 40rpx;
}

.base-stats-item {
  width: 95%;
  margin: 5px auto;
  height: 60rpx;
  display: flex;
}

.stat-name {
  float: left;
  width: 35%;
  text-align: right;
  margin: 10rpx;
  font-size: 0.8em;
}

.stat-value {
  float: right;
  font-size: 0.8em;
  margin: 10rpx;
  background-color: red;
  text-align: right;
  padding: 0 10rpx;
}

.evolution-chain {
  height: 450rpx;
}

.evolution-chain-title {
  margin: 30rpx 20rpx 10rpx 40rpx;
}

.evolution-chain-form {
  float: left;
  margin: auto;
  width: 100%;
  text-align: center;
}

.evolution-stats-item {
  float: left;
  width: 150rpx;
  padding: 20rpx;
  margin: 10rpx;
}

.evolution-stat-name {
  font-size: 0.6em;
  background: red;
  border-radius: 0 0 20rpx 20rpx;
  height: 150rpx;
  margin: auto;
}

.evolution-pokemon-img {
  width: 150rpx;
  height: 150rpx;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #FFE4E1;
}

.evolution-evo-item {
  font-size: 0.4em;
  width: 50rpx;
  float: left;
  padding-top: 150rpx;
}
</style>