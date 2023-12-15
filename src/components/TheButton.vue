import { computed } from 'vue';
<template>
  <button 
    :class="['button', typeClass]" 
    @click="$emit('click')" 
    :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { type } = defineProps({
	type: {
		type: String,
		default: () => ''
	},
	disabled: {
		type: Boolean,
		default: () => false
	}
})

defineEmits(['click'])

const typeClass = computed(() => {
	switch (type) {
	case 'primary':
		return 'button--primary'
	case 'outline':
		return 'button--outline'
	default:
		return ''
	}
})
</script>

<style lang="sass" scoped>
button
  padding: 0
  border: none
  font: inherit
  color: inherit
  background-color: transparent
  cursor: pointer
  &:not(disabled):hover
    color: $color-gold_2
    border-color: $color-blue_3
  &.button
    background-color: transparent
    border: 2px solid $color-gold_2
    border-radius: 15px
    color: $color-blue_3
    background-color: $color-neutral_2
    height: 30px
    box-sizing: border-box
    padding: 0 15px
    &--primary
      background-color: $color-gold_2
      &:hover
        background-color: $color-blue_3
        color: $color-neutral_1
        border-color: $color-blue_3
    &:disabled
      border: none
      color: $color-neutral_1
      background-color: $color-neutral_2
      cursor: no-drop
</style>


