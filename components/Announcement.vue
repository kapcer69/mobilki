<script lang="ts" setup>
import type { Announcement } from "~/interfaces/Announcement";

const { removeItem, updateItem } = useAnnouncementState();
const router = useRouter();

const props = defineProps<{
  id: number;
  date: string;
  description: string;
  category: string;
  announcement: Announcement;
}>();

const onEdit = (updatedItem: Announcement) => {
  updateItem(updatedItem);
  router.push({ path: "edit", query: { id: updatedItem.id } });
};
</script>

<template>
  <div class="announcement">
    <p class="announcement-date">{{ props.date }}</p>
    <div class="announcement-content">
      <p>{{ props.description }}</p>
      <small class="category">{{ props.category }}</small>
    </div>
    <div class="announcement-actions">
      <button
        class="btn-round btn-actions"
        title="Edytuj ogłoszenie"
        @click="onEdit(props.announcement)"
      >
        <Icon class="icon" name="material-symbols:edit" />
      </button>
      <button
        class="btn-round btn-actions"
        title="Usuń ogłoszenie"
        @click="removeItem(props.id)"
      >
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
