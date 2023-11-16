<script lang="ts">
export default {
  setup() {
    const { announcementArray, addItem, removeItem, updateItem } =
      useAnnouncementState();
    const router = useRouter();
    return { announcementArray, addItem, removeItem, updateItem, router };
  },
  data() {
    return {
      id: 0,
      date: "",
      category: "",
      description: "",
    };
  },
  methods: {
    onSubmit() {
      this.addItem({
        id: this.id,
        date: this.date,
        category: this.category,
        description: this.description,
      });
      this.router.push("/");
    },
    navigateTo(path: string) {
      this.router.push(path);
    },
  },
};
</script>

<template>
  <Header />
  <div class="content">
    <h2 class="title">Dodaj/edytuj</h2>
    <form class="edit" @submit.prevent="onSubmit()">
      <div class="edit-group">
        <label for="date">Wybierz datę:</label>
        <input type="date" class="input" v-model="date" />
      </div>
      <select class="input" v-model="category">
        <option value="">Wybierz kategorię</option>
        <option value="wazne">Ważne komunikaty</option>
        <option value="z_zycia_szkoly">Z życia szkoły</option>
      </select>
      <input
        type="text"
        placeholder="Opis"
        class="input"
        v-model="description"
      />

      <div class="btn-group">
        <button
          type="button"
          class="btn btn-secondary"
          @click="navigateTo('/')"
        >
          Anuluj
        </button>
        <button type="submit" class="btn">Ok</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/variables";
.content {
  padding: 3rem;
}

.title {
  margin-bottom: 2rem;
}

.edit {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50%;

  &-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}

.btn {
  width: 100%;
  text-transform: uppercase;
}

.btn-group {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

@media (max-width: 650px) {
  .edit {
    max-width: none;
  }
}
</style>
