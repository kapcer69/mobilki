<script lang="ts">
export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    navigateTo(path: string) {
      this.router.push(path);
    },
  },
};
</script>

<template>
  <main>
    <Header />
    <div class="content-header">
      <h1>Ogłoszenia</h1>
      <button
        class="btn-round"
        title="Dodaj ogłoszenie"
        @click="navigateTo('/edit')"
      >
        <Icon class="icon" name="material-symbols:add" />
      </button>
    </div>
    <Announcement class="color" />
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
