import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.Caa1YTU6.js";const g=JSON.parse('{"title":"Gamedata","description":"","frontmatter":{},"headers":[],"relativePath":"docs/usage/gamedata.md","filePath":"docs/usage/gamedata.md"}'),e={name:"docs/usage/gamedata.md"},n=t(`<h1 id="gamedata" tabindex="-1">Gamedata <a class="header-anchor" href="#gamedata" aria-label="Permalink to &quot;Gamedata&quot;">​</a></h1><p>Anomaly Packer uses a file-based approach, supposing that there is a gamedata directory in the root of the addon.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span>addon</span></span>
<span class="line"><span>-- gamedata</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Gamedata directory is required, otherwise the packer will throw an error.</p></div><p>Gamedata directory contents will be copied 1 to 1 to the resulting build directory. However it&#39;s not actually the case for every file. While reading through gamedata the packer will check for the file extensions to determine what to do. Any file will be simply copied into the build directory, unless it is a TypeScript file. For TypeScript files, their default exported function will be run in order to get the returned value that it exports, normally a <code>string</code>. For example,</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-P7WZW" id="tab-1Yb8m9D" checked><label for="tab-1Yb8m9D">addon/gamedata/configs/text/eng/translation_example.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> {</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> Texts</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> from</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">anomaly-packer</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> default</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> function</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#E36209;">t</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;"> Texts</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">  const</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#005CC5;"> someTranslations</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> t</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">.</span><span style="--shiki-dark:#88C0D0;--shiki-light:#6F42C1;">translation</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">    text_1</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">Hello stalker. Why are you here?</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">    text_2</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">I am here for Joe.</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">    text_3</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &quot;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">I don&#39;t like this stupid joke.</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&quot;</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">  }</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">)</span></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">  return</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> someTranslations</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">}</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Packer will throw an error if no default exported function is found in a TypeScript file.</p></div><h2 id="scripts-directory" tabindex="-1">Scripts directory <a class="header-anchor" href="#scripts-directory" aria-label="Permalink to &quot;Scripts directory&quot;">​</a></h2><p>Scripts directory under gamedata/scripts is a reserved directory that has several requirements.</p><p>First of all, no directories inside it are allowed, only files. Any files are allowed, including TypeScript files but all of them must be direct children of the scripts directory</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span>gamedata</span></span>
<span class="line"><span>-- scripts</span></span>
<span class="line"><span>   -- my_addon.lua</span></span>
<span class="line"><span>   -- my_addon_mcm.ts</span></span>
<span class="line"><span>   -- utils.ts</span></span></code></pre></div><p>TypeScript files will be <a href="./scripts.html#terminal-commands">transpiled to Lua</a> and other files like <code>.script</code> will be copied to the build directory untouched.</p>`,12),l=[n];function p(h,r,d,k,o,c){return a(),i("div",null,l)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};