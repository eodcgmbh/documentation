<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" :defaultVersion="defaultVersion" />

    <main v-else-if="$page.frontmatter.news" class="page">
      <div class="theme-default-content news">
        <h1>{{ $page.frontmatter.title }}</h1>
        <small class="news-meta">Written
          <template v-if="$page.frontmatter.date">on <em>{{ $page.frontmatter.date | date }}</em></template>
          <template v-if="$page.frontmatter.author">by <em>{{ $page.frontmatter.author }}</em></template>.
        </small>
        <Content />
      </div>
    </main>

    <main v-else-if="shouldShowFullpage" class="fullpage" :class="{page: !$page.frontmatter.stripCSS}">
      <Content class="fullpage-content" />
    </main>

    <main v-else-if="$page.frontmatter.custom" class="page">
      <Content class="theme-default-content custom" />
    </main>

    <Page v-else :sidebar-items="sidebarItems">
      <slot name="page-top" #top />
      <slot name="page-bottom" #bottom />
    </Page>

  </div>
</template>

<script>
import dayjs from 'dayjs';
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { resolveSidebarItems } from '@theme/util'

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {

    shouldShowFullpage() {
      return !!this.$page.frontmatter.fullpage;
    },

    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && !this.shouldShowFullpage
        && !frontmatter.news
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    });
  },

  filters: {
    date(date) {
      return dayjs(date).format('MMMM D, YYYY')
    }
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.news-meta
  margin-bottom 2em
  display block

.fullpage
	width 100%
	padding-top 3.6rem
	height calc(100vh - 3.6rem)
	border 0
</style>