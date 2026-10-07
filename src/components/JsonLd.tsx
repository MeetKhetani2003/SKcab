interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/** Renders schema.org JSON-LD. "<" is escaped to prevent script injection. */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
