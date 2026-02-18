<script setup lang="ts">
const route = useRoute();
const route_name = computed(() => route.name);

const links = ref([
  { title: "کالابرگ", to: "account", icon: "icon:ic-nav-kalabarg" },
  { title: "کیف پول", to: "account-wallets", icon: "icon:ic-nav-wallet" },
  { title: "پذیرندگان", to: "account-shops", icon: "icon:ic-nav-shop" },
  { title: "سامانه حمایت", to: "account-hemayat", icon: "icon:ic-nav-hemayat" },
]);

const emit = defineEmits(["goStep"]);
const goStep = (value: number) => {
  emit("goStep", value);
};
</script>

<template>
  <div
    class="flex flex-row justify-around items-center gap-2 sm:gap-4 p-4 w-full bg-white dark:bg-black shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.03)] z-10"
  >
    <NuxtLink
      class="flex flex-1 flex-col items-center gap-2"
      :to="{ name: item.to }"
      v-for="item in links"
    >
      <Icon
        class="stroke-gray-400"
        :class="{ 'stroke-primary!': route_name === item.to }"
        size="20"
        :name="item.icon"
      />
      <span
        class="text-xs text-gray-400"
        :class="{ 'text-primary': route_name === item.to }"
      >
        {{ item.title }}
      </span>
    </NuxtLink>
  </div>
</template>

<style lang="css"></style>
