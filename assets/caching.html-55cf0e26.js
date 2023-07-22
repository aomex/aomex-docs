import{_ as n,o as s,c as a,d as t}from"./app-a5bf9053.js";const e={},p=t(`<h1 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h1><p>数据共享离不开缓存，可能是临时缓存，也可能是持久化缓存。框架提供了统一的缓存操作风格，并提供了常用的缓存引擎</p><ul><li>MemoryCache (内置)</li><li>RedisCache (<a href="">@aomex/redis-cache</a>, <a href="">@aomex/ioredis-cache</a>)</li></ul><blockquote><p>缓存的数据类型包括：<code>T = string | number | object | boolean</code></p></blockquote><h2 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get</h2><p><strong>类型：</strong> <code>&lt;T&gt;(key: string, defaultValue?: T): Promise&lt;T | null&gt;</code><br><strong>说明：</strong> 获取缓存。如果未找到缓存并且未提供默认值，则返回<code>null</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> MemoryCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@aomex/core&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  keyPrefix<span class="token operator">:</span> <span class="token string">&#39;cache_&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 可选参数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;default data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;default data&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h2><p><strong>类型：</strong> <code>(key: string, value: T, durationMs?: number): Promise&lt;boolean&gt;</code><br><strong>说明：</strong> 设置缓存。可以指定过期时间（毫秒）</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sleep <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@aomex/core&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 设置内容</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;data1&#39;</span>

<span class="token comment">// 指定2秒后过期</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data1&#39;</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;data1&#39;</span>
<span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h2><p><strong>类型：</strong> <code>(key: string, value: T, durationMs?: number): Promise&lt;boolean&gt;</code><br><strong>说明：</strong> 设置缓存。如果缓存已经存在，则设置失败，返回<code>false</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sleep <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@aomex/core&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 设置内容</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;data1&#39;</span>

<span class="token comment">// 指定2秒后过期</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data1&#39;</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">await</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;data2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> exists</h2><p><strong>类型：</strong> <code>(key: string): Promise&lt;boolean&gt;</code><br><strong>说明：</strong> 查看缓存是否存在</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">exists</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getorset" tabindex="-1"><a class="header-anchor" href="#getorset" aria-hidden="true">#</a> getOrSet</h2><p><strong>类型：</strong> <code>&lt;T&gt;(key: string, orSet: () =&gt; T | Promise&lt;T&gt;, durationMs?: number): Promise&lt;T&gt;</code><br><strong>说明：</strong> 获取缓存。如果没有值，则设置该缓存</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">getOrSet</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;value&#39;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;value&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getanddelete" tabindex="-1"><a class="header-anchor" href="#getanddelete" aria-hidden="true">#</a> getAndDelete</h2><p><strong>类型：</strong> <code>&lt;T&gt;(key: string, defaultValue?: T): Promise&lt;T&gt;</code><br><strong>说明：</strong> 获取缓存后立即将该值从引擎中删除。如果未找到缓存并且未提供默认值，则返回<code>null</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">getAndDelete</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &#39;value&#39;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h2><p><strong>类型：</strong> <code>(key: string): Promise&lt;boolean&gt;</code><br><strong>说明：</strong> 删除指定缓存</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">set</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deleteall" tabindex="-1"><a class="header-anchor" href="#deleteall" aria-hidden="true">#</a> deleteAll</h2><p><strong>类型：</strong> <code>(): Promise&lt;boolean&gt;</code><br><strong>说明：</strong> 删除所有缓存</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">deleteAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">set</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">set</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;key2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","caching.html.vue"]]);export{k as default};
