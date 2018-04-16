<template>
  <div class = "header-index">
      <div><i class="iconfont icon-menu"></i></div>
      <div class="title">{{$t("message.title")}}</div>
      <div>
          <span @click="changeLocale">
            <i class="iconfont icon-morevert"></i>
            <span>{{$t("message.lang")}}</span>
          </span>
      </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Header',

    methods: {
      ...mapActions([
        'getnewslatestData'
      ]),
      changeLocale() {
        let locale = this.$i18n.locale
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
        localStorage.setItem('language', this.$i18n.locale)

        let newlocale = this.$i18n.locale;
        this.getnewslatestData({'lang':newlocale});
      },
    },

    created() { //实例创建完成之后的钩子
      this.$i18n.locale = localStorage.getItem('language') ? localStorage.getItem('language') : this.$i18n.locale
    }
  }
</script>

<style lang="scss">
  @import "../assets/css/header"
</style>