import Link from 'next/link';

export default function BlogPostPreview({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <div className="text-gray-500 text-xs mb-2">{post.date}</div>
      <p className="mb-2">{post.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className="text-primary font-semibold hover:underline">Read more</a>
      </Link>
    </div>
  );
}
