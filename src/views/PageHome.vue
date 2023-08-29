<template>
  <div class="bg-white py-24 sm:py-32 bg-neutral-content">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">이야기</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">자유롭게 작성하려고 만든 웹페이지</p>
        <button @click="goToWrite" class="btn btn-outline btn-success">글 작성</button>
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
              <td><a v-on:click="fnView(`${post.id}`)">{{ post.title }}</a></td>
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
import axios from 'axios';

export default {
  data() {
    return {
      posts: [], // 데이터를 저장할 배열
    };
  },
  methods: {
    async getList() {
      const url = "http://localhost:8080/posts?page=0&size=10";

      try {
        const response = await axios.get(url);
        this.posts = response.data; // 데이터를 컴포넌트의 데이터에 저장
      } catch (error) {
        console.error('게시글 조회 중 에러 발생 : ', error)
      }
    },
    goToWrite() {
      this.$router.push('/write');
    },
    fnView(postId) {
      this.$router.push({
        path: '/post', // 절대 경로로 수정
        query: { id: postId }, // 쿼리 스트링에 postId 추가
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style>
/* 필요한 스타일을 추가할 수 있습니다. */
</style>
