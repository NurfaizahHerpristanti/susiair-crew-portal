import { defineStore } from "pinia"

export const useNotificationStore = defineStore(
  "notifications",
  {
    state: () => ({
      notifications: [
        {
          id: 1,
          title: "Medical Certificate expires in 12 days",
          icon: "medical",
          unread: true,
        },
        {
          id: 2,
          title: "Flight SUB → BPN updated",
          icon: "flight",
          unread: true,
        },
        {
          id: 3,
          title: "New company memo available",
          icon: "memo",
          unread: false,
        },
      ],
    }),

    getters: {
      unread(state) {
        return state.notifications.filter(
          n => n.unread,
        ).length
      },
    },
  },
)