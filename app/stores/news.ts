import { defineStore } from "pinia"
import mockNews from "../../public/mock/mock-news.json"

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: mockNews.news,
  }),
})