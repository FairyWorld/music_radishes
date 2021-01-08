import {
  defineComponent,
  watch,
  ref,
  onUnmounted,
  Component,
  resolveDynamicComponent,
  KeepAlive
} from 'vue'
import { SecondaryLayout } from '@/layout/secondary/secondary'
import { Image } from '@/components/image/index'
import { RouterView, RouteRecordRaw } from 'vue-router'
import { contentRouter } from '@/router/index'
import { SecondaryBar } from '@/components-business/secondary-bar/index'
import { ArtistActions } from '@/interface'
import { parentAP } from '../logic/ap'
import classnames from 'classnames'
import './index.less'

const formatNav = (id: string | string[]): RouteRecordRaw[] => {
  let tp = contentRouter.filter(route => route.path.includes('/artist'))
  if (tp[0]) {
    if (tp[0].children) {
      tp = tp[0].children
        .filter(route => route.path)
        .map(route => ({
          ...route,
          meta: {
            ...route.meta,
            path: route.path.replace(':id', id as string)
          }
        }))
    }
  }
  return tp
}

export default defineComponent({
  name: 'Artist',
  setup() {
    const nav = ref()
    const { state, route, useActions } = parentAP()

    const unwatch = watch(
      () => route.params.id,
      id => {
        if (id) {
          nav.value = formatNav(id)
          useActions(ArtistActions.SET_ACTION_ARTIST_DETAIL, id)
          useActions(ArtistActions.SET_ACTION_ARTIST_ALBUM, id)
        }
      },
      {
        immediate: true
      }
    )

    onUnmounted(() => {
      unwatch()
    })

    return () => (
      <div
        class={classnames('artist', {
          'artist--mobile': window.isMobile
        })}
      >
        <SecondaryLayout
          src={state.artist.cover}
          v-slots={{
            head: () => (
              <>
                <Image
                  src={state.artist.cover}
                  name={classnames('artist-coverimg', {
                    'artist-coverimg--mobile': window.isMobile
                  })}
                />
                <div class="artist-detail">
                  <h1>{state.artist.name}</h1>
                  <div class="artist-detail-authoring">
                    <p>单曲数: {state.artist.musicSize}</p>
                    <p>专辑数: {state.artist.albumSize}</p>
                    <p>MV数: {state.artist.mvSize}</p>
                  </div>
                </div>
              </>
            ),
            body: () => (
              <div
                class={classnames('artist-body', {
                  'artist-body--mobile': window.isMobile
                })}
              >
                <SecondaryBar nav={nav.value} size="small" />
                <RouterView
                  v-slots={{
                    default: (component: { Component: Component }) => (
                      <KeepAlive>
                        {resolveDynamicComponent(component.Component)}
                      </KeepAlive>
                    )
                  }}
                ></RouterView>
              </div>
            )
          }}
        />
      </div>
    )
  }
})
