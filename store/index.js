export const actions = {
  async getPosts() {
    const res = await this.$axios.get(
      '/items/blog_post/?filter[status][_eq]=published&fields=title,excerpt,url,main_image'
    )
    return res
  },
}
export const strict = false
