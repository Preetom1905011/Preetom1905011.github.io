import { news } from "../data/news";
import { RichText } from "./RichText";

type NewsListProps = {
  limit?: number;
};

export function NewsList({ limit }: NewsListProps) {
  const visibleNews = typeof limit === "number" ? news.slice(0, limit) : news;

  return (
    <ul className="news-list">
      {visibleNews.map((item, index) => (
        <li key={`${item.month}-${item.year}-${index}`}>
          <span className="date-label">
            {item.month} {item.year}:
          </span>{" "}
          <RichText segments={item.content} />
        </li>
      ))}
    </ul>
  );
}
