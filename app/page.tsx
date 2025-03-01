import { fetchHeadlines } from "@/lib/news-api"
import { NewsPage } from "@/components/news-page"

export default async function IndexPage() {
  const articles = await fetchHeadlines({ category: "business" })
  return <NewsPage articles={articles} />
}
