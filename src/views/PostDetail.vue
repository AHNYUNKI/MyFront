<template>
  <div class="bg-white py-24 sm:py-32 bg-neutral-content">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ title }}</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">{{ author }}</p>
        <button class="btn btn-outline btn-success" @click="goToUpdate">수정</button>
        <button class="btn btn-outline btn-success" @click="goToDelete">삭제</button>
        <div
            class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
        </div>
        <p class="text-left ...">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: '',
      author: '',
      content: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    async fnGetView() {
      const url = "http://localhost:8080/post/" + this.$route.query.id;
      try {
        const response = await axios.get(url);
        this.title = response.data.title
        this.author = response.data.author
        this.content = response.data.content
      } catch (error) {
        console.error('게시글 조회 중 에러 발생 : ', error)
      }
    },
    async goToDelete() {
      const postId = this.$route.query.id;
      const url = `http://localhost:8080/post/${postId}`;
      try {
        await axios.delete(url);
        // 삭제 성공 시, 리다이렉트 등 필요한 동작을 수행
        this.$router.push("/"); // 예시: 목록 페이지로 이동
      } catch (error) {
        console.error("게시글 삭제 중 에러 발생: ", error);
      }
    },
    async goToUpdate() {
      // 수정 페이지로 이동
      this.$router.push(`/update/${this.$route.query.id}`);
    },
  }
};
</script>

<style lang="scss" scoped>

</style>
