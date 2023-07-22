import{_ as n,o as s,c as a,d as t}from"./app-a5bf9053.js";const e={},p=t(`<h1 id="上传文件" tabindex="-1"><a class="header-anchor" href="#上传文件" aria-hidden="true">#</a> 上传文件</h1><p>这么重要又<strong>难受</strong>的场景，框架肯定是已经考虑好了。话不多说，上代码：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> rule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@aomex/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> body <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@aomex/web&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@aomex/router&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  mount<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> rule<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      avatar<span class="token operator">:</span> rule<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">action</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> avatar<span class="token punctuation">,</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
    avatar<span class="token punctuation">.</span>size<span class="token punctuation">;</span> <span class="token comment">// number</span>
    avatar<span class="token punctuation">.</span>filepath<span class="token punctuation">;</span> <span class="token comment">// string</span>
    avatar<span class="token punctuation">.</span>newFilename<span class="token punctuation">;</span> <span class="token comment">// string</span>
    avatar<span class="token punctuation">.</span>hash<span class="token punctuation">;</span> <span class="token comment">// string</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过web应用定制的<code>rule.file()</code>验证器，我们可以轻松愉快地获得文件句柄。后续转移目录或者上传到云存储空间，那还不是手到擒来？</p><p>当然文件验证器也允许做一些定制化的操作：</p><table><thead><tr><th>扩展</th><th>说明</th></tr></thead><tbody><tr><td><code>.maxSize(type:number|string)</code></td><td>允许的最大体积。可以传递数字<small>（单位byte）</small>或者字符串。比如： <code>1024</code>、 <code>15MB</code></td></tr><tr><td><code>.mimeTypes(mineOrExt:string[])</code></td><td>允许的媒体类型。比如<code>.html</code>、<code>.png</code>, <code>image/*</code></td></tr><tr><td><code>.optional()</code></td><td>允许数据是 <code>undefined, null, &#39;&#39;</code>或者<strong>不传</strong>，统一转换成<strong>undefined</strong></td></tr><tr><td><code>.docs({ ... })</code></td><td>扩展openapi的配置，允许多次调用，默认采用合并对象的形式收集配置。<br>如果需要覆盖原来的docs配置，则传递第二个参数为<code>replace</code></td></tr><tr><td><code>.transform(fn)</code></td><td>数据验证成功后触发，允许我们对数据进行最后的转换操作</td></tr></tbody></table>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","upload.html.vue"]]);export{d as default};
