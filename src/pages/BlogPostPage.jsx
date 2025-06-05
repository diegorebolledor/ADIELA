import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '@/components/common/PageTransition';
import SEO from '@/components/common/SEO';
import { Clock, UserCircle, Tag, ArrowLeft } from 'lucide-react';

// Placeholder data - replace with actual data from an API or CMS
const blogPosts = [
  {
    id: '1',
    slug: 'the-ancient-allure-of-colombian-emeralds',
    title: 'The Ancient Allure of Colombian Emeralds: A Gem of Gods and Kings',
    excerpt: 'Delve into the rich history of Colombian emeralds, treasured by indigenous cultures long before the Spanish arrival, and revered as symbols of power, protection, and eternal spring.',
    content: `
      <p class="lead">Long before Spanish conquistadors set foot in the New World, the vibrant green fire of Colombian emeralds captivated the hearts and minds of indigenous cultures like the Muisca and Inca. These weren''t just beautiful stones; they were sacred artifacts, symbols of power, fertility, and eternal life.</p>
      
      <figure class="my-8">
        <img src="/assets/images/blog/muisca_raft.jpg" alt="Muisca Raft Offering" class="rounded-lg shadow-lg mx-auto">
        <figcaption class="text-center text-sm text-neutral-text-light mt-2">The legendary Muisca raft, central to El Dorado rituals, often featured emeralds.</figcaption>
      </figure>

      <h2>The Muisca and the Legend of El Dorado</h2>
      <p>For the Muisca people, inhabiting the highlands of present-day Colombia, emeralds were considered the tears of Fura, a mythical woman. The most significant emerald mines, like Muzo and Chivor, were sacred sites. Emeralds played a crucial role in their ceremonies, most famously in the legend of El Dorado (“The Gilded One”). This ritual involved a newly appointed chieftain, covered in gold dust and adorned with emeralds, offering treasures into Lake Guatavita.</p>

      <h2>Incan Veneration</h2>
      <p>Further south, the Inca Empire also held emeralds in high esteem, associating them with Umina, the goddess of health. They acquired many of their finest emeralds through trade with the Muisca. Incan royalty and nobility adorned themselves with these gems, believing in their protective and status-enhancing properties.</p>
      
      <h2>Symbolism and Beliefs</h2>
      <ul>
        <li><strong>Protection:</strong> Emeralds were widely believed to ward off evil spirits and protect the wearer from harm, especially during travel or battle.</li>
        <li><strong>Prestige & Power:</strong> Owning and wearing emeralds was a clear indicator of high social standing, wealth, and divine favor.</li>
        <li><strong>Fertility & Rebirth:</strong> The vibrant green color connected emeralds to nature, agriculture, and the cycle of life, making them symbols of fertility and rebirth.</li>
        <li><strong>Healing:</strong> Many ancient cultures attributed healing properties to emeralds, believing they could cure ailments and improve eyesight.</li>
      </ul>

      <p>The arrival of the Spanish in the 16th century marked a dramatic shift. While they marveled at the abundance and quality of Colombian emeralds, their quest for these gems led to exploitation and conflict. However, it also introduced these magnificent stones to the European courts and the rest of the world, cementing their status as one of the most prized gemstones globally.</p>
      
      <p>Today, Colombian emeralds continue to be the benchmark for quality, their deep, verdant hues and historical significance making them not just jewelry, but a tangible connection to a rich, ancient past. At Emerald Heritage, we honor this legacy by sourcing our gems ethically and crafting pieces that tell these timeless stories.</p>
    `,
    date: '2024-05-28',
    author: 'Emerald Heritage Archives',
    category: 'History & Lore',
    tags: ['colombian emeralds', 'muisca', 'inca', 'el dorado', 'ancient history', 'gemstone lore'],
    imageUrl: '/assets/images/blog/ancient_emeralds.jpg', // TODO: Replace with actual image path
    readingTime: '5 min read'
  },
  // Add other posts here, matching the structure for slug-based retrieval
];

// Helper function to fetch post by slug
const getPostBySlug = (slug) => blogPosts.find(p => p.slug === slug);

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return (
      <PageTransition>
        <div className="container-max section-padding text-center">
          <h1 className="text-3xl font-bold text-emerald-primary mb-4">Post Not Found</h1>
          <p className="text-neutral-text-light mb-6">We couldn't find the article you were looking for.</p>
          <Link to="/journal" className="btn-primary">Back to Journal</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title={`${post.title} | Emerald Heritage Journal`}
        description={post.excerpt}
        keywords={post.tags ? post.tags.join(', ') : 'emerald journal, colombian emeralds'}
        image={post.imageUrl}
      />
      <div className="container-max section-padding">
        <article className="max-w-3xl mx-auto">
          {/* Back to Journal Link */}
          <div className="mb-8">
            <Link to="/journal" className="inline-flex items-center text-emerald-primary hover:text-emerald-primary-dark transition-colors ease-apple text-sm group">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform ease-apple" />
              Back to The Emerald Journal
            </Link>
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <Link to={`/journal?category=${post.category.toLowerCase()}`} className="text-sm font-medium text-gold-secondary hover:text-gold-secondary-dark uppercase tracking-wider mb-2 inline-block">{post.category}</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-primary mb-4 leading-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center text-sm text-neutral-text-light space-x-4">
              <span className="flex items-center"><UserCircle size={16} className="mr-1.5" /> {post.author}</span>
              <span className="flex items-center"><Clock size={16} className="mr-1.5" /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center"><Clock size={16} className="mr-1.5" /> {post.readingTime}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.imageUrl && (
            <figure className="mb-8 rounded-lg overflow-hidden shadow-lg">
              <img src={post.imageUrl} alt={post.title} className="w-full h-auto object-cover" />
            </figure>
          )}

          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none prose-emerald 
                       prose-headings:font-serif-display prose-headings:text-emerald-primary 
                       prose-p:leading-relaxed prose-p:text-neutral-text 
                       prose-a:text-emerald-primary hover:prose-a:text-emerald-primary-dark 
                       prose-strong:font-semibold prose-strong:text-neutral-text 
                       prose-ul:list-disc prose-ul:pl-6 prose-li:marker:text-emerald-primary
                       prose-figure:my-6 prose-figcaption:text-sm prose-figcaption:text-center prose-figcaption:text-neutral-text-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-neutral-border">
              <h4 className="text-sm font-semibold text-neutral-text mb-2 flex items-center"><Tag size={16} className="mr-2"/>Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link key={tag} to={`/journal?tag=${tag.toLowerCase()}`} className="px-3 py-1 text-xs bg-cream-accent text-emerald-primary hover:bg-emerald-primary-light hover:text-white rounded-full transition-colors ease-apple">
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio - Placeholder */}
          {/* <div className="mt-10 pt-6 border-t border-neutral-border">
            <div className="flex items-center">
              <img src="/path-to-author-image.jpg" alt={post.author} className="w-16 h-16 rounded-full mr-4"/>
              <div>
                <h4 className="font-semibold text-lg text-neutral-text">{post.author}</h4>
                <p className="text-sm text-neutral-text-light">Author bio goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div> */}
          
          {/* Share Buttons - Placeholder */}
          {/* <div className="mt-8 pt-6 border-t border-neutral-border flex items-center space-x-3">
              <span className="text-sm font-semibold">Share this story:</span>
              <button className="btn-outline !px-3 !py-1.5 text-xs">Facebook</button>
              <button className="btn-outline !px-3 !py-1.5 text-xs">Twitter</button>
              <button className="btn-outline !px-3 !py-1.5 text-xs">LinkedIn</button>
          </div> */}

        </article>
      </div>
    </PageTransition>
  );
};

export default BlogPostPage; 