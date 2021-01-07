import { defineComponent, PropType, inject, ref } from 'vue'
import { Skeleton } from 'ant-design-vue'
import classnames from 'classnames'
import './secondary.less'

export const SecondaryLayout = defineComponent({
  name: 'Secondary',
  props: {
    src: {
      type: String as PropType<string>,
      default: ''
    }
  },
  setup(props, { slots }) {
    const loading = inject('loading', ref(false))

    return () => (
      <div
        class={classnames('secondary', {
          'secondary--mobile': window.isMobile
        })}
      >
        <Skeleton
          class="secondary-head--skeleton"
          active
          title={false}
          avatar={{
            shape: 'square',
            size: 'large'
          }}
          paragraph={{
            rows: 5,
            width: [500, 200, 300, 100, 300]
          }}
          loading={loading.value}
        >
          <div class="secondary-head">
            <div
              v-show={window.isMobile}
              class="secondary-head-image"
              style={{
                backgroundImage: `url(${props.src})`
              }}
            ></div>
            {slots.head && slots.head()}
          </div>
        </Skeleton>
        <Skeleton
          class="secondary-body--skeleton"
          active
          title={false}
          paragraph={{
            rows: 10,
            width: '100%'
          }}
          loading={loading.value}
        >
          <div class="secondary-body">{slots.body && slots.body()}</div>
        </Skeleton>
      </div>
    )
  }
})
