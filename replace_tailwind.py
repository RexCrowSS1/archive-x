import re

content = """export default function JavPage(){
    return(
// <!-- Header Section -->
<header className="mb-12 border-b border-outline-variant pb-8">
<div className="flex items-center gap-2 mb-4">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest border border-outline-variant px-2 py-1 rounded-sm bg-surface-container-highest">Language Ref</span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest border border-primary/30 px-2 py-1 rounded-sm bg-primary/5">Active</span>
</div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Modern Javascript Archive</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                A definitive reference for ECMAScript specifications, detailing core fundamentals, advanced architectural patterns, and framework ecosystems. Designed for high-performance application development.
            </p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/* Main Content Column */}
<div className="lg:col-span-8 space-y-12">
{/* Core Fundamentals Section */}
<section>
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary/70">architecture</span>
                        Core Fundamentals
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Bento Box 1: Variables -->
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">data_object</span>
</div>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-4 border-b border-outline-variant/50 pb-2">Lexical Declarations</h3>
<ul className="space-y-3 font-mono-code text-mono-code text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="text-primary font-medium w-12">let</span>
<span className="text-on-surface-variant/70 text-xs">Block-scoped, reassignable.</span>
</li>
<li className="flex items-start gap-2">
<span className="text-primary font-medium w-12">const</span>
<span className="text-on-surface-variant/70 text-xs">Block-scoped, immutable binding.</span>
</li>
<li className="flex items-start gap-2 opacity-50 line-through">
<span className="text-error font-medium w-12">var</span>
<span className="text-xs">Function-scoped, hoisted. Legacy.</span>
</li>
</ul>
</div>
{/* <!-- Bento Box 2: Data Types --> */}
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">category</span>
</div>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-4 border-b border-outline-variant/50 pb-2">Type System</h3>
<div className="space-y-4">
<div>
<div className="font-mono-code text-[11px] text-on-surface-variant uppercase mb-1">Primitives (Pass by Value)</div>
<div className="font-mono-code text-mono-code text-primary/80">String, Number, Boolean, Null, Undefined, Symbol, BigInt</div>
</div>
<div>
<div className="font-mono-code text-[11px] text-on-surface-variant uppercase mb-1">References (Pass by Ref)</div>
<div className="font-mono-code text-mono-code text-primary/80">Object, Array, Function, Date, Map, Set</div>
</div>
</div>
</div>
{/* <!-- Bento Box 3: Functions --> */}
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">functions</span>
</div>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-4 border-b border-outline-variant/50 pb-2">Execution Contexts</h3>
<div className="space-y-3 font-mono-code text-mono-code">
<div className="bg-surface-container p-2 rounded border border-outline-variant/30 text-xs">
<span className="text-on-surface-variant/50">// Arrow Function (Lexical 'this')</span><br/>
<span className="text-primary">const</span> <span className="text-[#e2e2e2]">mapData</span> = (<span className="text-[#b4b4bd]">items</span>) =&gt; items.<span className="text-primary">map</span>(i =&gt; i * 2);
                                </div>
<div className="text-on-surface-variant text-xs mt-2">
                                    Favored for concise syntax and non-binding of `this`, `arguments`, `super`, or `new.target`.
                                </div>
</div>
</div>
{/* <!-- Bento Box 4: Async --> */}
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg hover:border-primary/50 transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl">sync_alt</span>
</div>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-4 border-b border-outline-variant/50 pb-2">Concurrency Model</h3>
<div className="space-y-3 font-mono-code text-mono-code">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs text-on-surface-variant">Event Loop Non-Blocking I/O</span>
</div>
<div className="flex justify-between items-center text-xs border-t border-outline-variant/30 pt-2">
<span className="text-on-surface-variant">Promises</span>
<span className="text-primary">.then().catch()</span>
</div>
<div className="flex justify-between items-center text-xs border-t border-outline-variant/30 pt-2">
<span className="text-on-surface-variant">Syntactic Sugar</span>
<span className="text-primary">async / await</span>
</div>
</div>
</div>
</div>
</section>
{/* <!-- Advanced Patterns Section (Large Code Block) --> */}
<section>
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary/70">memory</span>
                        Advanced Patterns
                    </h2>
<div className="bg-[#0e0e10] border border-outline-variant rounded-lg overflow-hidden shadow-2xl relative">
<!-- Code Block Header -->
<div className="bg-surface-container border-b border-outline-variant px-4 py-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#353437]"></div>
<div className="w-3 h-3 rounded-full bg-[#353437]"></div>
<div className="w-3 h-3 rounded-full bg-[#353437]"></div>
</div>
<span className="font-mono-code text-[11px] text-on-surface-variant ml-4">useFetchData.js</span>
</div>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
<!-- Code Content -->
<pre className="p-6 overflow-x-auto font-mono-code text-[13px] leading-relaxed text-[#c4c7c8]"><code><span className="text-[#8e9192]">// Custom Hook Pattern for Data Fetching with AbortController</span>
<span className="text-primary">import</span> { useState, useEffect, useCallback } <span className="text-primary">from</span> <span className="text-[#e2e2e2]">'react'</span>;

<span className="text-primary">export const</span> <span className="text-[#e2e2e2]">useFetchData</span> = (url, options = {}) =&gt; {
  <span className="text-primary">const</span> [data, setData] = <span className="text-primary">useState</span>(<span className="text-primary">null</span>);
  <span className="text-primary">const</span> [loading, setLoading] = <span className="text-primary">useState</span>(<span className="text-primary">false</span>);
  <span className="text-primary">const</span> [error, setError] = <span className="text-primary">useState</span>(<span className="text-primary">null</span>);

  <span className="text-primary">const</span> fetchData = <span className="text-primary">useCallback</span>(<span className="text-primary">async</span> (abortController) =&gt; {
    <span className="text-primary">setLoading</span>(<span className="text-primary">true</span>);
    <span className="text-primary">try</span> {
      <span className="text-primary">const</span> response = <span className="text-primary">await</span> <span className="text-[#e2e2e2]">fetch</span>(url, {
        ...options,
        signal: abortController.signal
      });
      
      <span className="text-primary">if</span> (!response.ok) <span className="text-primary">throw new</span> <span className="text-[#e2e2e2]">Error</span>(`HTTP error! status: ${response.status}`);
      
      <span className="text-primary">const</span> json = <span className="text-primary">await</span> response.<span className="text-[#e2e2e2]">json</span>();
      <span className="text-primary">setData</span>(json);
    } <span className="text-primary">catch</span> (err) {
      <span className="text-primary">if</span> (err.name === <span className="text-[#e2e2e2]">'AbortError'</span>) {
        console.<span className="text-[#e2e2e2]">log</span>(<span className="text-[#e2e2e2]">'Fetch aborted'</span>);
      } <span className="text-primary">else</span> {
        <span className="text-primary">setError</span>(err);
      }
    } <span className="text-primary">finally</span> {
      <span className="text-primary">setLoading</span>(<span className="text-primary">false</span>);
    }
  }, [url]);

  <span className="text-primary">useEffect</span>(() =&gt; {
    <span className="text-primary">const</span> controller = <span className="text-primary">new</span> <span className="text-[#e2e2e2]">AbortController</span>();
    <span className="text-primary">fetchData</span>(controller);
    
    <span class="text-primary">return</span> () =&gt; {
      controller.<span className="text-[#e2e2e2]">abort</span>(); <span class="text-[#8e9192]">// Cleanup on unmount</span>
    };
  }, [fetchData]);

  <span className="text-primary">return</span> { data, loading, error };
};</code></pre>
</div>
</section>
<!-- Framework Ecosystem Section -->
<section>
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary/70">hub</span>
                        Framework Ecosystem
                    </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<!-- React -->
<div className="flex flex-col items-center justify-center p-8 bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-colors rounded-lg group cursor-pointer text-center">
<span className="material-symbols-outlined text-5xl mb-4 text-on-surface-variant group-hover:text-primary transition-colors">view_quilt</span>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">React</h3>
<p className="font-mono-code text-[11px] text-on-surface-variant/70">Component-based UI Library. Virtual DOM architecture.</p>
</div>
<!-- Vue -->
<div className="flex flex-col items-center justify-center p-8 bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-colors rounded-lg group cursor-pointer text-center">
<span className="material-symbols-outlined text-5xl mb-4 text-on-surface-variant group-hover:text-primary transition-colors">dashboard_customize</span>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">Vue.js</h3>
<p className="font-mono-code text-[11px] text-on-surface-variant/70">Progressive Framework. Reactive data binding system.</p>
</div>
<!-- Next.js -->
<div className="flex flex-col items-center justify-center p-8 bg-surface-container-low border border-outline-variant hover:bg-surface-container transition-colors rounded-lg group cursor-pointer text-center">
<span className="material-symbols-outlined text-5xl mb-4 text-on-surface-variant group-hover:text-primary transition-colors">layers</span>
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-2">Next.js</h3>
<p className="font-mono-code text-[11px] text-on-surface-variant/70">React Framework for Production. SSR & SSG support.</p>
</div>
</div>
</section>
</div>
<!-- Sidebar / Metadata -->
<aside className="lg:col-span-4">
<div className="sticky top-28 bg-surface-container-lowest border border-outline-variant rounded-lg p-6">
<h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-6 border-b border-outline-variant pb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">info</span>
                        Module Metadata
                    </h3>
<div className="space-y-6">
<!-- Meta Item 1 -->
<div>
<div className="font-mono-code text-[10px] text-on-surface-variant uppercase mb-1">Execution Engine</div>
<div className="flex items-center justify-between font-body-md text-body-md text-primary bg-surface-container px-3 py-2 border border-outline-variant/30 rounded-sm">
<span>V8 Engine</span>
<span className="material-symbols-outlined text-sm text-on-surface-variant">bolt</span>
</div>
</div>
<!-- Meta Item 2 -->
<div>
<div className="font-mono-code text-[10px] text-on-surface-variant uppercase mb-1">Standard</div>
<div className="flex items-center justify-between font-body-md text-body-md text-primary bg-surface-container px-3 py-2 border border-outline-variant/30 rounded-sm">
<span>ECMAScript 2023</span>
<span className="material-symbols-outlined text-sm text-on-surface-variant">book</span>
</div>
</div>
<!-- Meta Item 3 -->
<div>
<div className="font-mono-code text-[10px] text-on-surface-variant uppercase mb-1">Target Environments</div>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 bg-surface-container border border-outline-variant/50 text-[11px] font-mono-code text-on-surface rounded-sm">Node.js</span>
<span className="px-2 py-1 bg-surface-container border border-outline-variant/50 text-[11px] font-mono-code text-on-surface rounded-sm">Browser (DOM)</span>
<span className="px-2 py-1 bg-surface-container border border-outline-variant/50 text-[11px] font-mono-code text-on-surface rounded-sm">Deno</span>
<span className="px-2 py-1 bg-surface-container border border-outline-variant/50 text-[11px] font-mono-code text-on-surface rounded-sm">Bun</span>
</div>
</div>
<div className="border-t border-outline-variant/50 pt-6 mt-6">
<div className="font-mono-code text-[10px] text-on-surface-variant uppercase mb-3">Archive Status</div>
<div className="flex items-center gap-2 text-xs font-mono-code text-on-surface">
<span className="w-2 h-2 bg-primary rounded-full"></span>
                                 Maintained & Active
                             </div>
</div>
<button className="w-full mt-4 bg-primary text-background font-label-sm text-label-sm py-3 rounded-sm uppercase tracking-wider hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span>
                            Export Module Specs
                        </button>
</div>
</div>
</aside>
</div>
    )
}
"""

colors = {
"tertiary-fixed": "#e3e1ea",
"on-secondary-container": "#b4b4bd",
"on-surface-variant": "#c4c7c8",
"error-container": "#93000a",
"primary": "#ffffff",
"on-secondary-fixed-variant": "#45464e",
"surface-container": "#201f22",
"on-primary-container": "#636565",
"primary-fixed-dim": "#c6c6c7",
"primary-fixed": "#e2e2e2",
"on-primary": "#2f3131",
"secondary-container": "#45464e",
"surface-container-lowest": "#0e0e10",
"secondary-fixed-dim": "#c6c6cf",
"on-background": "#e5e1e4",
"tertiary": "#ffffff",
"outline": "#8e9192",
"on-error-container": "#ffdad6",
"on-surface": "#e5e1e4",
"surface-variant": "#353437",
"on-secondary-fixed": "#1a1b22",
"inverse-primary": "#5d5f5f",
"secondary-fixed": "#e2e1eb",
"on-tertiary-fixed-variant": "#46464d",
"on-tertiary-container": "#64646b",
"outline-variant": "#444748",
"on-tertiary-fixed": "#1b1b21",
"surface-bright": "#39393b",
"tertiary-fixed-dim": "#c7c5ce",
"on-primary-fixed-variant": "#454747",
"background": "#131315",
"tertiary-container": "#e3e1ea",
"surface": "#131315",
"surface-container-low": "#1c1b1d",
"on-secondary": "#2f3037",
"surface-tint": "#c6c6c7",
"on-error": "#690005",
"surface-dim": "#131315",
"on-tertiary": "#303037",
"surface-container-highest": "#353437",
"surface-container-high": "#2a2a2c",
"inverse-surface": "#e5e1e4",
"inverse-on-surface": "#313032",
"secondary": "#c6c6cf",
"on-primary-fixed": "#1a1c1c",
"error": "#ffb4ab",
"primary-container": "#e2e2e2"
}

typography = {
"font-headline-lg-mobile": "font-['Geist']",
"text-headline-lg-mobile": "text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold",
"md:font-headline-lg": "md:font-['Geist']",
"md:text-headline-lg": "md:text-[48px] md:leading-[1.1] md:tracking-[-0.02em] md:font-semibold",
"font-body-lg": "font-['Geist']",
"text-body-lg": "text-[18px] leading-[1.6] font-normal",
"font-headline-md": "font-['Geist']",
"text-headline-md": "text-[24px] leading-[1.3] font-medium",
"font-label-sm": "font-['Geist']",
"text-label-sm": "text-[12px] leading-[1.0] tracking-[0.05em] font-medium",
"font-mono-code": "font-['Geist']",
"text-mono-code": "text-[13px] leading-[1.5] font-normal",
"font-body-md": "font-['Geist']",
"text-body-md": "text-[14px] leading-[1.5] font-normal"
}

# Apply Typography
for k, v in typography.items():
    content = re.sub(r'\b' + re.escape(k) + r'\b', v, content)

# Border Radius carefully
# Note: we must order them to avoid partial replacements. Or we can just use lookaround to avoid replacing `rounded` inside `rounded-lg`.
content = re.sub(r'\brounded-full\b', 'rounded-[0.75rem]', content)
content = re.sub(r'\brounded-lg\b', 'rounded-[0.25rem]', content)
content = re.sub(r'\brounded-sm\b', 'rounded-[0.125rem]', content)
# For `rounded` alone, make sure it's not followed by a dash
content = re.sub(r'\brounded\b(?!-)', 'rounded-[0.125rem]', content)

# Sort colors by length descending
sorted_colors = sorted(colors.items(), key=lambda x: len(x[0]), reverse=True)

def replace_color_class(match):
    prefix = match.group(1) # e.g. text-, bg-, hover:text-
    color_name = match.group(2)
    suffix = match.group(3) or "" # e.g. /50 or empty string
    hex_code = colors[color_name]
    return f"{prefix}[{hex_code}]{suffix}"

color_names_pattern = "|".join(re.escape(k) for k, v in sorted_colors)
pattern = r'\b([a-z0-9:-]+-)(%s)(/[0-9]+)?\b' % color_names_pattern

content = re.sub(pattern, replace_color_class, content)

wrapper_top = """
    return (
        <div className="font-['Geist'] bg-[#131315] text-[#e5e1e4] min-h-screen">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');
                
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 24px 24px;
                }

                /* Custom Scrollbar for a more technical feel */
                ::-webkit-scrollbar { width: 8px; height: 8px; }
                ::-webkit-scrollbar-track { background: #131315; }
                ::-webkit-scrollbar-thumb { background: #353437; border-radius: 4px; }
                ::-webkit-scrollbar-thumb:hover { background: #444748; }
                `}
            </style>
            <div className="p-8 pb-20">
"""

content = content.replace("    return(\n", wrapper_top)
content = content.replace("    )", "            </div>\n        </div>\n    )")

# Also, there's a comment `<!-- Header Section -->` which is HTML style, React uses `{/* */}`
content = content.replace("// <!-- Header Section -->", "{/* Header Section */}")
content = content.replace("<!-- Bento Box 1: Variables -->", "{/* Bento Box 1: Variables */}")
content = content.replace("<!-- Bento Box 2: Data Types -->", "{/* Bento Box 2: Data Types */}")
content = content.replace("<!-- Bento Box 3: Functions -->", "{/* Bento Box 3: Functions */}")
content = content.replace("<!-- Bento Box 4: Async -->", "{/* Bento Box 4: Async */}")
content = content.replace("<!-- Advanced Patterns Section (Large Code Block) -->", "{/* Advanced Patterns Section (Large Code Block) */}")
content = content.replace("<!-- Code Block Header -->", "{/* Code Block Header */}")
content = content.replace("<!-- Code Content -->", "{/* Code Content */}")
content = content.replace("<!-- Framework Ecosystem Section -->", "{/* Framework Ecosystem Section */}")
content = content.replace("<!-- React -->", "{/* React */}")
content = content.replace("<!-- Vue -->", "{/* Vue */}")
content = content.replace("<!-- Next.js -->", "{/* Next.js */}")
content = content.replace("<!-- Sidebar / Metadata -->", "{/* Sidebar / Metadata */}")
content = content.replace("<!-- Meta Item 1 -->", "{/* Meta Item 1 */}")
content = content.replace("<!-- Meta Item 2 -->", "{/* Meta Item 2 */}")
content = content.replace("<!-- Meta Item 3 -->", "{/* Meta Item 3 */}")
content = content.replace("{/* <!-- Bento Box", "{/* Bento Box")


with open("/Users/sayyidinaanshariahmad/Projects/WebSchool/all-docs/src/components/Jav/javpage.jsx", "w") as f:
    f.write(content)

