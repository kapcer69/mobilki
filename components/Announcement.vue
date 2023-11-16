<script lang="ts">
export default {
  setup() {
    const { announcementArray } = useAnnouncementState();
    return { announcementArray };
  },
};
</script>

<template>
  <div class="announcement" v-for="item in announcementArray" :key="item.id">
    <p class="announcement-date">{{ item.date }}</p>
    <div class="announcement-content">
      <p>{{ item.description }}</p>
      <small class="category">{{ item.category }}</small>
    </div>
    <div class="announcement-actions">
      <button class="btn-round btn-actions" title="Edytuj ogłoszenie">
        <Icon class="icon" name="material-symbols:edit" />
      </button>
      <button class="btn-round btn-actions" title="Usuń ogłoszenie">
        <Icon class="icon" name="material-symbols:close" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables";

.announcement {
  display: flex;
  align-items: center;
  font-weight: 600;

  &-date {
    padding: 0 4rem;
  }

  &-content {
    border-left: 1px solid $accent;
    padding: 1rem;
  }

  &-actions {
    display: flex;
    margin-left: auto;
    margin-right: 1rem;
  }
}

.category {
  color: rgba(0, 0, 0, 0.5);
}

.btn-actions {
  background-color: inherit;

  &:hover,
  &:focus-visible {
    background-color: rgba(202, 202, 202, 0.5);
  }
}

@media (max-width: 580px) {
  .announcement-date {
    padding: 0 2rem;
  }
}

@media (max-width: 500px) {
  .announcement-date {
    padding: 0 1rem;
  }
}
</style>
