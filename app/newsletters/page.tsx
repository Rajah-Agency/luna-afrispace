import { ArrowRightIcon } from 'lucide-react';
import { blogs } from '../constant';

export default function Newsletters() {
  return (
    <main className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-widest text-glow">
            MISSION LOGS
          </h1>
          <p className="font-body text-xl text-luna-muted-steel max-w-2xl mx-auto">
            Latest updates, research findings, and stories from the African space
            frontier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`#blog-${blog.id}`}
              className="group flex flex-col bg-luna-deep-navy/30 border border-luna-royal-blue/30 hover:border-luna-glow-blue transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col grow">
                <span className="font-body text-sm text-luna-muted-steel mb-3">
                  {blog.date}
                </span>
                <h2 className="font-heading text-2xl text-white mb-4 group-hover:text-luna-glow-blue transition-colors">
                  {blog.title}
                </h2>
                <p className="font-body text-luna-muted-steel mb-6 grow">
                  {blog.excerpt}
                </p>
                <div className="flex items-center text-luna-glow-blue font-heading tracking-widest text-sm mt-auto">
                  READ ARTICLE{' '}
                  <ArrowRightIcon
                    size={16}
                    className="ml-2 group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
