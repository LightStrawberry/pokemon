<template>
  <div class="md-item">
    <image v-if="movie.images" class="md-item__background" :src="movie.images.large" mode="aspectFill"/>
    <block v-if="movie.title">
      <view class="md-item__meta">
        <image class="md-item__poster" :src="movie.images.large" mode="aspectFit"/>
        <text class="md-item__title">{{ movie.title }}({{ movie.year }})</text>
        <text class="md-item__info">评分：{{ movie.rating.average }}</text>
        <text class="md-item__info">导演：<block v-for="director in movie.directors" :key="director.id"> {{ director.name }} </block></text>
        <text class="md-item__info">主演：<block v-for="cast in movie.casts" :key="cast.id"> {{ cast.name }} </block></text>
      </view>
      <view class="md-item__summary">
        <text class="md-item__label">摘要：</text>
        <text class="md-item__content">{{ movie.summary }}</text>
      </view>
    </block>
  </div>
</template>