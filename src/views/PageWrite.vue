<template>
  <div class="bg-white py-24 sm:py-32 bg-neutral-content">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <input type="text" placeholder="제목을 입력해주세요." v-model="title" class="input input-bordered w-full max-w-xs text-sky-50"/>
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">{{ author }}</p>
        <button class="btn btn-outline btn-success" v-on:click="fnSave">등록</button>
        <div
            class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
        </div>
        <div class="board-contents">
          <textarea id="" cols="100" rows="20" v-model="content" class="w3-input w3-border" style="resize: none;"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: '', // 제목 입력 필드의 값을 저장할 데이터
      content: '', // 내용 입력 필드의 값을 저장할 데이터
    };
  },
  methods: {
    async fnSave() {
      const url = "http://localhost:8080/post"; // 게시글 목록 엔드포인트 URL로 수정

      try {
        // 게시글 데이터를 서버에 전송
        await axios.post(url, {
          title: this.title, // 제목
          content: this.content, // 내용
        });

        // 게시글 등록 성공 시, 리다이렉트 로직을 여기에 추가합니다.
        this.$router.push('/'); // 홈 화면으로 리다이렉트

      } catch (error) {
        console.error('게시글 등록 중 에러 발생 : ', error);
      }
    },
  },
};
</script>

<style>
/* 필요한 스타일을 추가할 수 있습니다. */
</style>
