<template>
  <div class="list-wrap">   
      <HeaderIndex></HeaderIndex>      
      <ListItem :listItem="newslatestJson"></ListItem>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HeaderIndex from '../components/HeaderIndex'
import ListItem from '../components/ListItem'
export default {
  name: 'NewsLatest',
  components: {
    HeaderIndex,
    ListItem
  },

  data () {
    return {
      locale: this.$i18n.locale
    }
  },

  methods: {
    ...mapActions([
      'getnewslatestData'
    ])
  },

  computed: {
    ...mapState({
      'newslatestJson': state => state.newslatest.newslatestarr
    })
  },

  mounted() {
    let locale = localStorage.getItem('language') ? localStorage.getItem('language') : this.$i18n.locale;
    this.getnewslatestData({'lang':locale});
  },

}
</script>
