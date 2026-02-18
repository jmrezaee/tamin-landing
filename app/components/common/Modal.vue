<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const isDesktop = useMediaQuery("(min-width: 640px)");
const Modal = computed(() => ({
  Root: isDesktop.value ? Dialog : Drawer,
  Trigger: isDesktop.value ? DialogTrigger : DrawerTrigger,
  Content: isDesktop.value ? DialogContent : DrawerContent,
  Header: isDesktop.value ? DialogHeader : DrawerHeader,
  Title: isDesktop.value ? DialogTitle : DrawerTitle,
  Description: isDesktop.value ? DialogDescription : DrawerDescription,
  Footer: isDesktop.value ? DialogFooter : DrawerFooter,
  Close: isDesktop.value ? DialogClose : DrawerClose,
}));

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  has_footer: {
    type: Boolean,
    default: false,
  },
});

const open = ref(false);
const useModal = (value: boolean) => {
  open.value = value;
};

defineExpose({
  useModal,
});
</script>

<template>
  <component :is="Modal.Root" v-model:open="open">
    <component
      :is="Modal.Content"
      class="sm:max-w-md"
      :class="[{ 'px-2 pb-8 *:px-4': !isDesktop }]"
      :showCloseButton="!isDesktop"
    >
      <component :is="Modal.Header">
        <component :is="Modal.Title"> {{ title }} </component>
        <component :is="Modal.Description"> {{ description }} </component>
      </component>
      <slot name="default" />
      <component :is="Modal.Footer" class="pt-4" v-if="has_footer">
        <component :is="Modal.Close" as-child>
          <Button> متوجه شدم </Button>
        </component>
      </component>
    </component>
  </component>
</template>

<style lang="css"></style>
