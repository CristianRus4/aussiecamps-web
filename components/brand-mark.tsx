export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand" aria-label="AussieCamps home">
      <span className="brand-mark" aria-hidden="true" />
      {!compact && <span>AussieCamps</span>}
    </span>
  );
}
