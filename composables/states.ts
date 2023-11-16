import type { Announcement } from "~/interfaces/Announcement";

export const useAnnouncementState = () => {
  const announcementArray = useState<Announcement[]>(
    "announcementArray",
    () => []
  );

  const addItem = (item: Announcement) => {
    announcementArray.value.push({
      id: item.id,
      date: item.date,
      category: item.category,
      description: item.description,
    });
  };

  const removeItem = (itemId: number) => {
    announcementArray.value = announcementArray.value.filter(
      (item) => item.id !== itemId
    );
  };

  const updateItem = (updatedItem: Announcement) => {
    const index = announcementArray.value.findIndex(
      (item) => item.id === updatedItem.id
    );
    if (index !== -1) {
      announcementArray.value[index] = updatedItem;
    }
  };

  return { announcementArray, addItem, removeItem, updateItem };
};
