<template>
  <EquipmentsTableList  :equipments="data?.equipments ?? []" :show-title="true" :spaced="true" />
</template>

<script lang="ts" setup>
import type { Equipment } from "@prisma/client";

definePageMeta({
  layout: "sidebar",
});

const storeLoader = useGlobalLoaderStore()

const { data, status, error } = await useFetch<{ equipments: Equipment[] }>('/api/equipments');
storeLoader.isLoading = status.value
</script>

<style></style>
