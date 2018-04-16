<template>
  <ul>
    <li class="list-item-li" v-for="(item,index) in listItem" :key="index">
      <a>
        <span class="text">
          <span>{{item.title}}</span>
          <span v-if="item.display_date" class="date">{{item.display_date}}</span>
      </span>
      <span v-if="item.images" class="img">
          <img :src="item.images" alt=""/>
          <span v-if="item.multipic" class="tip">
              <i class="iconfont">&#xe61c;</i> {{$t("message.pictureSign")}}
          </span>
      </span>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'list',
    props: ['listItem']
  }
</script>

<style lang="scss">
  @import "../assets/css/listItem"
</style>