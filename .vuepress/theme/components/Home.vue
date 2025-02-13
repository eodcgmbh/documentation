<template>
  <main
    class="home"
    aria-labelledby="main-title"
  >
    <header class="hero">
      <img src="/images/logo.png" alt="openEO Platform">

      <p class="description">
        This is the user manual for the European EO cloud service provider <strong>openEO Platform</strong>.
        Get started now:
      </p>

      <p class="action">
        <NavLink class="action-button" :item="{link: 'https://openeo.org/documentation/1.0/datacubes.html', text: 'Data Cubes'}"/>
        <NavLink class="action-button" :item="{link: '/getting-started/editor/', text: 'Editor'}"/>
        <NavLink class="action-button" :item="{link: '/getting-started/javascript/', text: 'JavaScript'}"/>
        <NavLink class="action-button" :item="{link: '/getting-started/jupyterlab/', text: 'JupyterLab'}"/>
        <NavLink class="action-button" :item="{link: '/getting-started/python/', text: 'Python'}"/>
        <NavLink class="action-button" :item="{link: '/getting-started/r/', text: 'R'}"/>
      </p>

      <p class="description">
        If you can't find what you are looking for, please submit a request to our <a href="https://forums.openeo.cloud" target="_blank">community forums</a> or <a href="https://openeo.cloud/contact/" target="_blank">contact us</a> directly.
      </p>
    </header>
<!--
    <div class="features">
      <div class="feature">
        <h2>Get started</h2>
        <ul>
          <li>ToDo</li>
        </ul>
      </div>
      <div class="feature">
        <h2>Service Offerings</h2>
        <ul>
          <li>ToDo</li>
        </ul>
      </div>
      <div class="feature">
        <h2>
          Use Cases
        </h2>
        <ul>
          <li>ToDo</li>
        </ul>
      </div>
    </div>
-->
    <Content class="theme-default-content custom"/>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  props: ['blog', 'defaultVersion'],

  computed: {
    data () {
      return this.$page.frontmatter
    }
  }
}
</script>

<style lang="stylus">
.home
  padding-top $navbarHeight
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 40rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
