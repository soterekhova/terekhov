<script>
import gsap from 'gsap'
import imagesloaded from 'imagesloaded'
import { resetScroll } from '~/scripts/utils/resetScroll'
import { loadAnimation } from '~/scripts/loadAnimation'
import { anchorHandler } from '~/scripts/utils/anchorScroll'

const onLoad = () => {
  loadAnimation()
  document.querySelector('[data-wait]').removeAttribute('data-wait')
}

export default {
  transition() {
    window.scetch?.figures?.forEach(f => {
      window.scetch.removeFigure(f._id)
    })

    const rewealer = document.querySelector('.rewealer')
    const rewealerWhite = document.querySelector('.rewealer-white')

    return {
      mode: 'out-in',
      enter(el, done) {
        resetScroll()

        if (this.$route.query.anchor) {
          el.style.opacity = 0
          const target = document.querySelector(this.$route.query.anchor)
          anchorHandler(target, () => {
            gsap.to(el, { duration: 0.5, opacity: 1 })
            this.$router.replace({ query: null })
          })
        }

        gsap.to(rewealer, { duration: 0.5, opacity: 0, onComplete: done })
        gsap.to(rewealerWhite, { duration: 0.5, opacity: 0 })

        if (document.querySelector('[data-wait]')) {
          imagesloaded(document.querySelector('[data-wait]'), onLoad)
        } else {
          loadAnimation()
        }
      },
      leave(_, done) {
        window.ss && (window.ss.isFixed = true)
        gsap.fromTo(
          rewealer,
          { y: '100%', opacity: 1 },
          {
            duration: 1.5,
            y: '0%',
            delay: 0.2,
            ease: 'power1.inOut',
            onComplete: done,
          }
        )
        gsap.fromTo(
          rewealerWhite,
          { opacity: 0 },
          {
            duration: 1,
            opacity: 0.8,
            ease: 'power1.inOut',
          }
        )
      },
    }
  },
  computed: {
    isLoaded() {
      return this.$store.state.app.loaded
    },
  },
  watch: {
    isLoaded() {
      if (this.isLoaded) {
        if (document.querySelector('[data-wait]')) {
          imagesloaded(document.querySelector('[data-wait]'), onLoad)
        } else {
          loadAnimation()
        }
      }
    },
  },
}
</script>