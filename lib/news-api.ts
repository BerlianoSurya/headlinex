import { Article, Category } from "@/types/articles"

export const fetchHeadlines = async ({
  category,
}: {
  category?: Category
}): Promise<Array<Article>> => {
  const request = await fetch(
    `${process.env.NEWS_API_URL}/top-headlines?apiKey=${process.env.NEWS_API_KEY}&country=us${category ? `&category=${category}` : ""}`
  )
  const articles = (await request.json()) as { articles: Array<Article> }

  return (
    articles?.articles?.filter(
      ({ title, urlToImage }) => title !== "[Removed]" && urlToImage
    ) || []
  )
}
