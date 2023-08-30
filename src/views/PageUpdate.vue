<template>
  <div class="bg-white py-24 sm:py-32 bg-neutral-content">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" >게시글 수정</h2>
        <button class="btn btn-outline btn-success" @click="goBack">뒤로 가기</button>
        <div class="mt-6">
          <div class="mb-4">
            <label for="title" class="block text-gray-700 text-sm font-bold mb-2">제목</label>
            <input
                v-model="title"
                type="text"
                id="title"
                class="input input-bordered w-full"
                placeholder="제목을 입력하세요"
            />
          </div>
          <div>
            <label for="content" class="block text-gray-700 text-sm font-bold mb-2">내용</label>
            <textarea
                v-model="content"
                id="content"
                class="input input-bordered w-full h-40"
                placeholder="내용을 입력하세요"
            ></textarea>
          </div>
        </div>
        <div class="mt-6">
          <button class="btn btn-primary" @click="saveChanges">저장</button>
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
      title: "", // 수정된 제목
      content: "", // 수정된 내용
    };
  },
  methods: {
    // 뒤로 가기 버튼 클릭 시
    goBack() {
      this.$router.go(-1); // 뒤로 가기
    },
    // 수정 내용 저장
    async saveChanges() {
      const postId = this.$route.params.id; // 수정 대상 게시글 ID
      const url = `http://localhost:8080/post/${postId}`;
      try {
        // 수정된 데이터를 서버에 보내기
        await axios.patch(url, {
          title: this.title,
          content: this.content,
        });
        // 수정 완료 후, 페이지 이동 등 필요한 동작 수행
        this.$router.push('/');
      } catch (error) {
        console.error("게시글 수정 중 에러 발생: ", error);
      }
    },
  },
};
</script>

<style scoped>
/* 필요한 스타일을 추가할 수 있습니다. */
</style>
