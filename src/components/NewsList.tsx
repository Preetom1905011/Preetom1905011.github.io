import { news } from "../data/news";
import { RichText } from "./RichText";

const monthNumbers: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

type NewsListProps = {
  limit?: number;
};

export function NewsList({ limit }: NewsListProps) {
  const sortedNews = [...news].sort(
    (a, b) =>
      new Date(b.year, monthNumbers[b.month], Number(b.day)).getTime() -
      new Date(a.year, monthNumbers[a.month], Number(a.day)).getTime(),
  );
  const visibleNews = typeof limit === "number" ? sortedNews.slice(0, limit) : sortedNews;

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
