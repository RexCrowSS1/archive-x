import re

with open('src/components/Jav/javpage.jsx', 'r') as f:
    content = f.read()

# 1. Replace the advanced patterns code block with CodeSnippet
code_block_start = content.find('<div className="bg-[#0e0e10] border border-[#444748] rounded-[0.25rem] overflow-hidden shadow-2xl relative">')
code_block_end = content.find('</section>', code_block_start)

if code_block_start != -1 and code_block_end != -1:
    snippet = """<CodeSnippet 
                filename="useFetchData.js" 
                code={`// Custom Hook Pattern for Data Fetching with AbortController
import { useState, useEffect, useCallback } from 'react';

export const useFetchData = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (abortController) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        ...options,
        signal: abortController.signal
      });
      if (!response.ok) throw new Error(\`HTTP error! status: \\${response.status}\`);
      const json = await response.json();
      setData(json);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => {
      controller.abort(); // Cleanup on unmount
    };
  }, [fetchData]);

  return { data, loading, error };
};`}
              />
              """
    content = content[:code_block_start] + snippet + content[code_block_end:]


# 2. Add framer-motion wrapping
# Wrap sections with motion.div
content = content.replace('<header ', '<motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} ')
content = content.replace('</header>', '</motion.header>')

# For sections and aside, we can use framer-motion viewport animations
content = content.replace('<section>', '<motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>')
content = content.replace('</section>', '</motion.section>')

content = content.replace('<aside ', '<motion.aside initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} ')
content = content.replace('</aside>', '</motion.aside>')

# 3. Add light mode classes for theme toggle
replacements = {
    'bg-[#131315]': 'bg-white dark:bg-[#131315]',
    'text-[#e5e1e4]': 'text-slate-800 dark:text-[#e5e1e4]',
    'text-[#ffffff]': 'text-slate-900 dark:text-[#ffffff]',
    'text-on-[#353437]': 'text-slate-600 dark:text-[#9ca3af]',
    'bg-[#1c1b1d]': 'bg-slate-50 dark:bg-[#1c1b1d]',
    'border-[#444748]': 'border-slate-200 dark:border-[#444748]',
    'border-[#ffffff]/30': 'border-slate-300 dark:border-[#ffffff]/30',
    'bg-[#ffffff]/5': 'bg-slate-100 dark:bg-[#ffffff]/5',
    'bg-[#353437]': 'bg-slate-200 dark:bg-[#353437]',
    'hover:border-[#ffffff]/50': 'hover:border-slate-400 dark:hover:border-[#ffffff]/50',
    'bg-[#201f22]': 'bg-slate-100 dark:bg-[#201f22]',
    'hover:bg-[#201f22]': 'hover:bg-slate-100 dark:hover:bg-[#201f22]',
    'bg-[#0e0e10]': 'bg-slate-50 dark:bg-[#0e0e10]',
    'bg-[#ffffff]': 'bg-slate-900 dark:bg-[#ffffff]',
    'text-[#131315]': 'text-white dark:text-[#131315]',
    'text-on-[#131315]': 'text-slate-700 dark:text-[#d1d5db]',
    'hover:bg-[#e2e2e2]': 'hover:bg-slate-700 dark:hover:bg-[#e2e2e2]',
    'text-[#ffb4ab]': 'text-red-500 dark:text-[#ffb4ab]'
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('src/components/Jav/javpage.jsx', 'w') as f:
    f.write(content)
