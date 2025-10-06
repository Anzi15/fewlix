"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Eye,
  ArrowUpDown,
  Grid3X3,
  List,
  Sparkles
} from 'lucide-react'

// Mock Firebase data structure
const mockBlogs = [
  {
    id: '1',
    slug: 'ai-in-design-revolution',
    title: 'The AI Revolution in Creative Design',
    excerpt: 'How artificial intelligence is transforming the design industry and what it means for creative professionals.',
    featuredImage: '/api/placeholder/400/250',
    category: 'Design',
    tags: ['AI', 'Design', 'Innovation'],
    publishedAt: { toDate: () => new Date('2024-01-15') },
    readTime: 8,
    views: 1247,
    status: 'published'
  },
  {
    id: '2',
    slug: 'brand-identity-2024',
    title: 'Building Memorable Brand Identities in 2024',
    excerpt: 'Essential strategies for creating brand identities that stand out in today\'s crowded digital landscape.',
    featuredImage: '/api/placeholder/400/250',
    category: 'Branding',
    tags: ['Branding', 'Strategy', 'Identity'],
    publishedAt: { toDate: () => new Date('2024-01-10') },
    readTime: 6,
    views: 892,
    status: 'published'
  },
  {
    id: '3',
    slug: 'ux-design-principles',
    title: '10 UX Design Principles Every Designer Should Know',
    excerpt: 'Fundamental principles that will elevate your user experience design and create better digital products.',
    featuredImage: '/api/placeholder/400/250',
    category: 'UX/UI',
    tags: ['UX', 'Design', 'Principles'],
    publishedAt: { toDate: () => new Date('2024-01-05') },
    readTime: 12,
    views: 1563,
    status: 'published'
  },
  {
    id: '4',
    slug: 'motion-graphics-trends',
    title: 'Motion Graphics Trends Shaping 2024',
    excerpt: 'Explore the latest trends in motion design and how to incorporate them into your creative projects.',
    featuredImage: '/api/placeholder/400/250',
    category: 'Motion',
    tags: ['Motion', 'Animation', 'Trends'],
    publishedAt: { toDate: () => new Date('2024-01-01') },
    readTime: 5,
    views: 734,
    status: 'published'
  },
  {
    id: '5',
    slug: 'web-design-performance',
    title: 'Web Design Performance Optimization Guide',
    excerpt: 'How to create beautiful websites that load fast and provide exceptional user experiences.',
    featuredImage: '/api/placeholder/400/250',
    category: 'Web Design',
    tags: ['Web Design', 'Performance', 'Optimization'],
    publishedAt: { toDate: () => new Date('2023-12-28') },
    readTime: 10,
    views: 1023,
    status: 'published'
  },
  {
    id: '6',
    slug: 'color-psychology-branding',
    title: 'The Psychology of Color in Branding',
    excerpt: 'Understanding how color choices influence consumer perception and brand recognition.',
    featuredImage: '/api/placeholder/400/250',
    category: 'Branding',
    tags: ['Color', 'Psychology', 'Branding'],
    publishedAt: { toDate: () => new Date('2023-12-20') },
    readTime: 7,
    views: 845,
    status: 'published'
  }
]

const categories = ['All', 'Design', 'Branding', 'UX/UI', 'Motion', 'Web Design', 'Strategy']
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'reading-time', label: 'Reading Time' }
]

export default function BlogsPage() {
  const router = useRouter()
  const [blogs, setBlogs] = useState(mockBlogs)
  const [filteredBlogs, setFilteredBlogs] = useState(mockBlogs)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [email, setEmail] = useState('')
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')
  const blogsPerPage = 6

  // Simulate Firebase data fetching
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  // Filter and sort blogs
  useEffect(() => {
    let result = [...blogs]

    // Apply search filter
    if (searchTerm) {
      result = result.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      result = result.filter(blog => blog.category === selectedCategory)
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.publishedAt.toDate() - a.publishedAt.toDate())
        break
      case 'oldest':
        result.sort((a, b) => a.publishedAt.toDate() - b.publishedAt.toDate())
        break
      case 'popular':
        result.sort((a, b) => b.views - a.views)
        break
      case 'reading-time':
        result.sort((a, b) => a.readTime - b.readTime)
        break
    }

    setFilteredBlogs(result)
    setCurrentPage(1)
  }, [blogs, searchTerm, selectedCategory, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const startIndex = (currentPage - 1) * blogsPerPage
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage)

  // Newsletter subscription
  const subscribeToNewsletter = async (e) => {
    e.preventDefault()
    if (!email) return

    setNewsletterLoading(true)
    setNewsletterMessage('')

    try {
      // Simulate Firebase call - replace with actual Firebase implementation
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if email already exists (simulated)
      const existingEmails = ['test@example.com', 'user@gmail.com'] // Replace with actual Firebase query
      if (existingEmails.includes(email)) {
        setNewsletterMessage('You are already subscribed to our newsletter!')
        return
      }

      // Add to Firebase collection (simulated)
      // await addDoc(collection(db, 'newsletter'), {
      //   email: email,
      //   subscribedAt: new Date(),
      //   status: 'active'
      // })

      setNewsletterMessage('Successfully subscribed to our newsletter! 🎉')
      setEmail('')
    } catch (error) {
      setNewsletterMessage('Error subscribing. Please try again.')
    } finally {
      setNewsletterLoading(false)
    }
  }

  const handleBlogClick = (slug) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#07093d] to-[#69de37] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-white/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Creative Insights & Trends</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
              FEWLIX
              <span className="block text-white">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Insights, trends, and strategies from our creative team. 
              Stay updated with the latest in design, technology, and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-8 py-3 text-gray-900 focus:outline-none focus:border-green-500 appearance-none transition-colors"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="relative">
                <ArrowUpDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-8 py-3 text-gray-900 focus:outline-none focus:border-green-500 appearance-none transition-colors"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-green-500 text-white' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' 
                      ? 'bg-green-500 text-white' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Showing {currentBlogs.length} of {filteredBlogs.length} articles
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-green-500 hover:text-green-600 text-sm font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="container mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          </div>
        ) : currentBlogs.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {/* Grid/List View */}
            <div className={
              viewMode === 'grid' 
                ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                : "grid gap-6 mb-12"
            }>
              {currentBlogs.map((blog) => (
                <BlogCard 
                  key={blog.id} 
                  blog={blog} 
                  viewMode={viewMode}
                  onClick={() => handleBlogClick(blog.slug)}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:border-green-500 hover:text-green-500 transition-colors"
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      currentPage === page
                        ? 'bg-green-500 text-white'
                        : 'border border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-500'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:border-green-500 hover:text-green-500 transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-[#07093d] to-[#69de37] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Stay Updated
            </h2>
            <p className="text-white/90 text-xl mb-8">
              Get the latest articles and insights delivered to your inbox
            </p>
            
            <form onSubmit={subscribeToNewsletter} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="submit"
                disabled={newsletterLoading}
                className="bg-white text-[#07093d] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {newsletterMessage && (
              <div className={`mt-4 p-3 rounded-lg ${
                newsletterMessage.includes('already') 
                  ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-500/30'
                  : newsletterMessage.includes('Successfully')
                  ? 'bg-green-500/20 text-green-200 border border-green-500/30'
                  : 'bg-red-500/20 text-red-200 border border-red-500/30'
              }`}>
                {newsletterMessage}
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) rotate(240deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

// Blog Card Component
function BlogCard({ blog, viewMode, onClick }) {
  if (viewMode === 'list') {
    return (
      <div 
        onClick={onClick}
        className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-500 cursor-pointer transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-xl"
      >
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0 w-full md:w-48 h-32 bg-gradient-to-br from-[#07093d] to-[#69de37] rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-green-500/20 group-hover:to-gray-200 transition-all duration-300" />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <span className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                {blog.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blog.publishedAt.toDate().toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blog.readTime} min read
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {blog.views}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
              {blog.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {blog.excerpt}
            </p>

            <div className="flex gap-2">
              {blog.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid View
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-green-500 cursor-pointer transition-all duration-300 hover:scale-105 group shadow-sm hover:shadow-xl"
    >
      <div className="aspect-video bg-gradient-to-br from-[#07093d] to-[#69de37] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
            {blog.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {blog.publishedAt.toDate().toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime} min read
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-500 transition-colors line-clamp-2">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Eye className="w-4 h-4" />
            <span className="text-sm">{blog.views} views</span>
          </div>
          
          <div className="flex gap-2">
            {blog.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}