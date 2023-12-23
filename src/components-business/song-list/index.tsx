import { defineComponent, toRefs, PropType } from 'vue'
import { Song } from '@/interface/index'
import { formatCount } from '@/utils/index'
import { Skeleton } from 'ant-design-vue'
import { DailyCard } from '@/components-business/song-list/daily'
import './index.less'

const prefix = 'song'

export const SongList = defineComponent({
  name: 'SongList',
  props: {
    songData: {
      type: Object as PropType<Song[]>,
      required: true
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    onClick: {
      type: Function as PropType<(song: Song) => void>,
      required: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { songData, loading } = toRefs(props)
    const clickHandle = (song: Song) => {
      emit('click', song)
    }

    return () => (
      <div class={`${prefix}-list`}>
        <Skeleton
          active
          paragraph={{
            rows: 3,
            width: '100%'
          }}
          loading={loading.value}
        >
          <ul>
            {songData.value.map(song => (
              <li
                class={`${prefix}-list-container`}
                onClick={() => clickHandle(song)}
              >
                <div
                  class={`${prefix}-pic transition-all duration-500 hover:shadow-lg hover:-translate-y-1 overflow-hidden rounded`}
                >
                  <DailyCard src={song.picUrl || song.coverImgUrl} />
                  <div
                    v-show={!!song.playCount}
                    class={`${prefix}-pic-count flex items-center !text-[12px] pt-0.5 pr-0.5`}
                  >
                    <ph-headphones size="16" weight="duotone" class="mr-1" />
                    {formatCount(song.playCount)}
                  </div>
                </div>
                <div class={`${prefix}-title !mt-1`}>{song.name}</div>
              </li>
            ))}
          </ul>
        </Skeleton>
      </div>
    )
  }
})
