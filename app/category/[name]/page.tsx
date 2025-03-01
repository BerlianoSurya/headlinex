import { Category } from "@/types/articles"
import { fetchHeadlines } from "@/lib/news-api"
import { NewsPage } from "@/components/news-page"

const CategoryPage = async ({
  params: { name },
}: {
  params: { name: Category }
}) => {
  const headlines = await fetchHeadlines({ category: name })
  console.log(headlines)
  return <NewsPage articles={headlines} />
}
export default CategoryPage
