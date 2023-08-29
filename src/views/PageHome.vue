<template>
  <div class="bg-white py-24 sm:py-32 bg-neutral-content">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">이야기</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">자유롭게 작성하려고 만든 웹페이지</p>
        <button class="btn btn-outline btn-success">글 작성</button>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            <!-- 데이터를 반복하며 행 생성 -->
            <tr class="hover" v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.author }}</td>
              <td>{{ post.hit }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    // 게시글 목록을 저장할 ref 변수
    const posts = ref([]);

    // Axios를 사용하여 데이터 가져오기
    const fetchData = async () => {
      try {
        // 백엔드 API 엔드포인트로 변경
        const response = await axios.get('http://localhost:8080/posts?page=0&size=10');
        posts.value = response.data; // 백엔드에서 반환한 데이터를 저장
      } catch (error) {
        console.error('게시글을 가져오는 중 에러 발생:', error);
      }
    };

    // 컴포넌트가 마운트된 후 데이터 가져오기
    onMounted(() => {
      fetchData();
    });

    return {
      posts,
    };
  },
};
</script>

<style>
/* 필요한 스타일을 추가할 수 있습니다. */
</style>
