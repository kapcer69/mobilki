<script lang="ts" setup>
const { announcementArray } = useAnnouncementState();
const router = useRouter();
</script>

<template>
  <main>
    <Header />
    <div class="content-header">
      <h1>Ogłoszenia</h1>
      <button
        class="btn-round"
        title="Dodaj ogłoszenie"
        @click="router.push('edit')"
      >
        <Icon class="icon" name="material-symbols:add" />
      </button>
    </div>
    <Announcement
      class="color"
      v-for="(item, index) in announcementArray"
      :key="index"
      :id="index"
      :date="item.date"
      :description="item.description"
      :category="item.category"
      :announcement="item"
    />
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables";

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.color:nth-child(odd) {
  background-color: $secondary;
}

.color:last-child {
  border-bottom: 1px solid $accent;
}
</style>
