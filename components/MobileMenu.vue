<template>
  <div class="mobile-menu" :class="{ 'mobile-menu--active': isOpen }">
    <div class="mobile-menu__wrap">
      <div class="mobile-menu__top">
        <nuxt-link
          class="mobile-menu__logo"
          :to="localePath('index')"
          @click.native="closeMenu"
          >Igor Terekhov</nuxt-link
        >
        <div
          class="mobile-menu__act mobile-menu__act--close"
          @click="closeMenu"
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="15.4956"
              y1="14.4956"
              x2="1.35343"
              y2="0.353509"
              stroke="#1E1E1E"
            ></line>
            <line
              x1="0.646447"
              y1="14.4956"
              x2="14.7886"
              y2="0.353435"
              stroke="#1E1E1E"
            ></line>
          </svg>
        </div>
      </div>
      <nav class="mobile-menu__nav anchors">
        <ul class="mobile-menu__nav-list">
          <li
            v-for="item in items"
            :key="item._uid"
            class="mobile-menu__nav-item"
            @click="closeMenu"
          >
            <nuxt-link class="mobile-menu__nav-link" :to="item.to">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu__bottom">
        <div class="mobile-menu__language">
          <a
            class="mobile-menu__language-link"
            :class="[
              $i18n.locale === 'ru' && 'mobile-menu__language-link--active',
            ]"
            :href="langLink"
          >
            ru
          </a>

          <a
            class="mobile-menu__language-link"
            :class="[
              $i18n.locale === 'en' && 'mobile-menu__language-link--active',
            ]"
            :href="langLink"
          >
            en
          </a>
        </div>
        <div class="mobile-menu__right">
          <a class="mobile-menu__email" href="mailto:artiter@gmail.com"
            >artiter@gmail.com</a
          >
          <p class="mobile-menu__copyr">
            © 2021
            {{
              $i18n.locale === 'en'
                ? 'all rights reserved'
                : 'все права защищены'
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    langLink: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
  },
}
</script>