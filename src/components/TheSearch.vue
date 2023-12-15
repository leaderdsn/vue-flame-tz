<template>
  <div class="search">
    <input 
      class="search__input"
      v-model="searchQuery" 
      type="text"
      placeholder="Введите текст"
      @input="onInputSearch"
      @keyup.enter="onInputSearch"
    />
    <div v-if="isShowOptions" class="search__options" @clickOutside="isShowOptions = false">
      <TheSpin v-if="isLoading" />
      <ul v-else class="search__list">
        <li v-for="item in options"  class="search__list-item" :key="item.name" @click="onClickOptionsItem(item.url!)">
            <strong class="search__list-item_name">{{ item.name }}</strong>
            <span>height:</span> {{ item.height }}
            <span>mass:</span> {{ item.mass }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import usePeoples from '@/composables/usePeoples'
import TheSpin from '@/components/TheSpin.vue'
import { IPeople } from '@/types/types'

const { getSearchData } = usePeoples()
const searchQuery = ref('')
const options = ref<IPeople[]>([])
const isLoading = ref(false)
const isShowOptions = ref(false)
const router = useRouter()

document.addEventListener('click', () => {
	isShowOptions.value = false
})

const onClickOptionsItem = (path: string) => {
	router.push({ path })
}

const onInputSearch = async () => {
	isShowOptions.value = true
	isLoading.value = true

	const data = await getSearchData({ search: searchQuery.value })
	if (data) {
		options.value = data
	}
	isLoading.value = false
}
</script>


  <style lang="sass" scoped>
  .search
    min-width: 350px
    position: relative
    margin: 0 auto
    color: $color-blue_3
    &__options
      position: absolute
      top: 42px
      left: 0
      right: 0
      background-color: $color-neutral_2
      border-radius: 5px
      box-shadow: 0 2px 4px $color-blue_2
    &__list
      list-style: none
      text-align: left
      padding-left: 0
      max-height: 200px
      overflow-y: auto
      border-radius: 5px
      margin: 0
    &__list-item
      display: grid
      grid-auto-columns: max-content
      grid-auto-flow: column
      gap: 10px
      width: 100%
      padding: 10px 
      border-bottom: 1px solid $color-gold_2
      background-color: $color-neutral_2
      cursor: pointer
      &:hover
        background-color: $color-magenta_1
        .dropdown__list-item_name
          color: $color-gold_1
      &:last-child
        border-bottom: 0
      &_name
        color: $color-gold_3
    &__input
      width: 100%
      height: 30px
      border: 2px solid $color-gold_1
      padding-left: 5px
      border-radius: 15px
      text-indent: 5px
      background-color: $color-neutral_2
      &::placeholder
        color: $color_blue_1
      &:focus
        outline: none
        border: 2px solid $color-magenta_2
    .select-item
      height: 32px
      border-bottom: 1px solid $color-blue_3
      border-radius: 4px
      display: flex
      justify-content: space-between
      align-items: center
</style>