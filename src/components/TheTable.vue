<template>
  <div class="table">
    <template v-if="!isEmptyData">
      <div class="table-row header">
        <span class="table-col title" v-for="(title, idx) in titles" :key="idx">{{ title }}</span>
      </div>

      <div v-if="!isArrayData" class="table-row body">
        <slot />
        <span class="table-col">
          <slot
            name="actions"
          />
        </span>
      </div>

      <template v-else>
        <div class="table-row body" v-for="(item, idx) in data" :key="idx">
          <slot :item="item" :index="idx" />
          <span class="table-col">
            <slot
              name="actions"
              :item="item"
              :index="idx"
            />
          </span>
        </div>
      </template>
    </template>

    <TheEmpty v-else />
  </div>

</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import TheEmpty from '@/components/TheEmpty.vue'

const { data } = defineProps({
	data: {
		type: [Array, Object],
		default: () => [[], {}]
	},
	titles: {
		type: Array as PropType<string[]>,
		default: () => [],
	},
})

const isArrayData = computed(() => {
	return Array.isArray(data)
})

const isEmptyData = computed(() => {
	return data === null || data?.length === 0
})


</script>

<style lang="sass" scoped>
.table
  display: grid
  grid-template-columns: 1fr
  color: $color-blue_3
  &-row
    border: 1px solid $color-blue_2
    margin-bottom: -1px
    padding: 0 5px
    align-items: center
  &-col
    padding: 5px 0
    &:last-child
      text-align: center
  .header
    background-color: $color-gold_1

  .header,
  .body
    display: grid
    grid-auto-flow: column
    grid-template-columns: 1fr
    grid-auto-columns: 1fr

</style>