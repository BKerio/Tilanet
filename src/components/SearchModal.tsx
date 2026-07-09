import { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, ChevronRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks, services, companyInfo } from '@/data/siteData';

export const SearchModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const searchData = useMemo(() => {
    const data: Array<{title: string, path: string, description: string, category: string}> = [];

    // Add main pages from navLinks
    navLinks.forEach(link => {
      if (link.href !== '#' && !link.children && link.href !== '/services') {
        data.push({
          title: link.label,
          path: link.href,
          description: `${link.label} page for ${companyInfo.shortName}`,
          category: 'Pages'
        });
      }
    });

    // Add Services parent page
    data.push({
      title: 'Services Overview',
      path: '/services',
      description: 'View all supplier services and core focus areas.',
      category: 'Pages'
    });

    // Add individual services
    services.forEach(service => {
      data.push({
        title: service.title,
        path: `/services`, // Since we don't have individual service pages yet
        description: service.description,
        category: 'Services'
      });
    });

    return data;
  }, []);

  const [results, setResults] = useState(searchData);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) || 
      item.description.toLowerCase().includes(lowerQuery) ||
      item.category.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query, searchData]);

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  // Group results by category
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchData>);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-24 pb-4 px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <Search className="h-5 w-5 text-gray-500 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${companyInfo.shortName} services, pages, or solutions...`}
              className="flex-1 bg-transparent border-none outline-none px-4 text-base text-gray-900 dark:text-gray-100 placeholder-gray-500"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <button 
              onClick={onClose}
              className="ml-2 text-xs font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              ESC
            </button>
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
            {query.trim() === '' ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-20" />
                <p className="text-sm">Start typing to search across the site...</p>
                
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {['Supply', 'Logistics', 'Procurement', 'ICT'].map(term => (
                    <button 
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-4 p-2">
                {Object.entries(groupedResults).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-2">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {items.map((item, idx) => (
                        <button
                          key={`${item.path}-${idx}`}
                          onClick={() => handleSelect(item.path)}
                          className="w-full text-left flex items-start px-3 py-3 rounded-xl hover:bg-[#f3e6de]/50 group transition-colors"
                        >
                          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg group-hover:bg-white transition-colors mr-3 mt-0.5 shadow-sm">
                            <FileText className="h-4 w-4 text-gray-500 group-hover:text-[#d64c12]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate group-hover:text-[#d64c12] transition-colors">
                                {item.title}
                              </h4>
                              <ChevronRight className="h-4 w-4 text-[#d64c12] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate mt-0.5">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <p className="text-sm">No results found for "{query}"</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SearchModal;
