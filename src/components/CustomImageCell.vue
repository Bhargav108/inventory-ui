<template>
  <span>
    <el-image :src="thumb" :preview-src-list="srcList">
      <div slot="placeholder" class="image-slot">
        Loading
        <span class="dot">...</span>
      </div>
    </el-image>
  </span>
</template>

<script>
export default {
  name: "custom-image-cell",
  props: ["thumb", "srcList"],
  data() {
    return {
      previewImage: false
    };
  },
  created() {}
};
</script>

<style scoped>
</style>