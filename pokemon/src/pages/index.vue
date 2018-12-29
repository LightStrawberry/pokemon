<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="pokemons">
      <ul>
        <li v-for="(item, id) in pokemons" :key="id" :data-id="id" :id="item.id" class="pokemon" @click="todetail(item.id)">
          <img :src='item.sprites' class="pokemon-img">
          <p class="pokemon-name">{{ item.name }}</p>
        </li>
      </ul>
    </div>
    <!-- <a href="/pages/counter" class="counter">去往Vuex示例页面</a> -->
  </div>
</template>

<script>
import card from '@/components/card'
import fly from '@/utils/fly'

export default {
  mpType: 'page',

  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      pokemons: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '/packageA/logs'
      this.$router.push(url)
    },
    todetail (id) {
      console.log(111)
      console.log(id)
      const url = '/pages/pokemon?id=' + id
      this.$router.push(url)
      // wx.switchTab({url: '/pages/pokemon'})
      console.log(333)
    },
    getData () {
      console.log(444)
      wx.request({
        url: 'http://10.1.78.193:8000/api/v2/pokemon/',
        data: {
          limit: 20,
          offset: 0
        },
        header: {
          'content-type': 'application/json'
        },
        success (res) {
          console.log(res.data)
        },
        complete (res) {
          console.log(2333)
        }
      })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    fly.get('pokemon/#!method=get').then((res) => {
      console.log(res.data)
      this.pokemons = res.data.results
    }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<style scoped>
.pokemon {
  display: flex;
  position: absoult;
  top: 348rpx;
  bottom: 92rpx;
  height: 12vh;
  width: 100%;
  overflow: hidden;
  float: left;
  border-bottom:1px solid #ddd;
}

.pokemon-img {
  width: 150rpx;
  height: 150rpx;
  float: left;
}

.pokemon-name {
  margin:auto 0;
  padding:3vh;
}
  
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}


.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
