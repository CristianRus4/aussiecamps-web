import type { ArticleTable } from "@/lib/site";

/** A section's data table. The first cell of each row labels it, so it is the row header. */
export function SectionTable({ table }: { table: ArticleTable }) {
  return <div className="price-table-wrap">
    <table className="price-table article-table">
      <caption>{table.caption}</caption>
      <thead><tr>{table.head.map((cell) => <th scope="col" key={cell}>{cell}</th>)}</tr></thead>
      <tbody>{table.rows.map((row, index) => <tr key={`${index}-${row[0]}`}>{row.map((cell, position) => position === 0 ? <th scope="row" key={position}>{cell}</th> : <td key={position}>{cell}</td>)}</tr>)}</tbody>
    </table>
  </div>;
}
