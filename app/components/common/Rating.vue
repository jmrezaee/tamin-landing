<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  maxStars: {
    type: Number,
    default: 5,
  },
});

const emit = defineEmits(["update:modelValue"]);

const rating = ref(props.modelValue);
function updateRating(newRating: number) {
  emit("update:modelValue", newRating);
  rating.value = newRating;
}
</script>

<template>
  <div class="star-rating ltr">
    <span
      v-for="(star, index) in maxStars"
      :key="index"
      :class="{ active: index < rating }"
      @click="updateRating(index + 1)"
    >
      <svg
        class="block size-5 cursor-pointer"
        :class="[props?.modelValue >= index ? 'text-blue' : 'text-grey']"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
        />
      </svg>
    </span>
  </div>
</template>

<style scoped>
.star-rating {
  display: inline-flex;
  font-size: 1.5rem;
}

.star-rating span {
  cursor: pointer;
  margin: 0 0.1rem;
}

.star-rating span.active {
  color: #ffaa00; /* gold color */
}

.star-rating span:not(.active) {
  color: #cccccc33; /* gray color */
}
</style>
