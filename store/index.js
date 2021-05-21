export const actions = {
  async getPosts() {
    const res = await this.$axios.get(
      'http://localhost:8055/items/blog_post/?filter[status][_eq]=published&fields=title,excerpt,url,main_image'
    )
    return res
  },
}
export const strict = false
