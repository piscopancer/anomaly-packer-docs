import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.Caa1YTU6.js";const g=JSON.parse('{"title":"Scripts","description":"","frontmatter":{},"headers":[],"relativePath":"docs/usage/scripts.md","filePath":"docs/usage/scripts.md"}'),t={name:"docs/usage/scripts.md"},n=e(`<h1 id="scripts" tabindex="-1">Scripts <a class="header-anchor" href="#scripts" aria-label="Permalink to &quot;Scripts&quot;">​</a></h1><p>Normal Lua files are known to be dynamically typed thus type-unsafe while IDE does not support strict linting and type checking. Sometimes it can be painful to debug and typos are hard to notice. With TypeScript and a proper IDE like VSCode or Intellij IDEA that provides <a href="https://code.visualstudio.com/docs/editor/intellisense" target="_blank" rel="noreferrer">intellisense</a> developing becomes much easier. TypeScript has originally been used for web apps and fortunately today it&#39;s possible to use TypeScript for anything, including Lua.</p><p>Lua is generated with the help of <a href="#type-declaration-files">type declaration files</a> provided by Anomaly Packer. The process of such generation is called transpilation, this is possible thanks to the <a href="https://www.npmjs.com/package/typescript-to-lua" target="_blank" rel="noreferrer">typescript-to-lua</a> NPM package. Clearly, Anomaly Packer uses it and obeys its <a href="#rules">rules</a>, so should you.</p><h2 id="preparation" tabindex="-1">Preparation <a class="header-anchor" href="#preparation" aria-label="Permalink to &quot;Preparation&quot;">​</a></h2><h3 id="register-scripts" tabindex="-1">Register scripts <a class="header-anchor" href="#register-scripts" aria-label="Permalink to &quot;Register scripts&quot;">​</a></h3><p>TypeScript files under gamedata/scripts will not be included in the build by default. Every script file must be proclaimed as &quot;registered&quot; when packing the build. The packer will search for the script with the name in <code>sourceFileName</code> and rename it into what&#39;s in <code>buildFileName</code>, if specified, otherwise will preserve the name.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0sppv" id="tab-PxkN2EN" checked><label for="tab-PxkN2EN">index.ts</label><input type="radio" name="group-0sppv" id="tab-iMSDADk"><label for="tab-iMSDADk">gamedata/scripts/ghen.ts</label><input type="radio" name="group-0sppv" id="tab-nAKBQKm"><label for="tab-nAKBQKm">build/gamedata/scripts/tuong.script</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">import</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> {</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> pack</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> from</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">anomaly-packer</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">await</span><span style="--shiki-dark:#88C0D0;--shiki-light:#6F42C1;"> pack</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">  scripts</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;"> [</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">{</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> sourceFileName</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">ghen</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> buildFileName</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">tuong</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> }</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">]</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">}</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">)</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">let</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> skibidi</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B48EAD;--shiki-light:#005CC5;"> 1</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">skibidi</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">++</span></span></code></pre></div><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">____exports</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;"> {}</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">skibidi</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#B48EAD;--shiki-light:#005CC5;"> 1</span></span>
<span class="line"><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;">skibidi</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> skibidi</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> +</span><span style="--shiki-dark:#B48EAD;--shiki-light:#005CC5;"> 1</span></span></code></pre></div></div></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#88C0D0;--shiki-light:#6F42C1;">bun</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> run</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> .</span></span></code></pre></div><h3 id="provide-tsconfig" tabindex="-1">Provide tsconfig <a class="header-anchor" href="#provide-tsconfig" aria-label="Permalink to &quot;Provide tsconfig&quot;">​</a></h3><p>Transpilation to Lua requires that a tsconfig is provided in the specific directory that will act the starting point of the transpilation, only TypeScript files inside it will participate. This is so to reduce the transpilation time because you can have 100 TypeScript files in your addon somewhere outside of gamedata/scripts and typescript-to-lua will still transpile them, even though it is pointless.</p><p>This way, Anomaly Packer requires you to have a 2nd tsconfig in gamedata/scripts to treat gamedata/script as a &quot;separate&quot; project and transpile TypeScript files only within this directory. Add this tsconfig to the gamedata/scripts extending your root tsconfig.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-L-o0t" id="tab-y1HKfux" checked><label for="tab-y1HKfux">gamedata/scripts/tsconfig.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#005CC5;">  &quot;</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#005CC5;">extends</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#005CC5;">&quot;</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &quot;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">../../tsconfig.json</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&quot;</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">}</span></span></code></pre></div></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Anomaly Packer will throw an error if you don&#39;t provide a valid tsconfig under gamedata/scripts</p></div><h2 id="type-declaration-files" tabindex="-1">Type declaration files <a class="header-anchor" href="#type-declaration-files" aria-label="Permalink to &quot;Type declaration files&quot;">​</a></h2><p>Type declaration files like game.d.ts is what makes the transpilation possible. They are also called &quot;ambient&quot; files as they do not provide any implementation of code, pretty much like headed files in C++, they only exist for TypeScript&#39;s compiler and your IDE intellisense, so that you can have first class type-safety. You will use these files to access global modules and global functions that exist in _unpacked and those of <a href="https://bitbucket.org/anomalymod/xray-monolith/src/master/" target="_blank" rel="noreferrer">XRay Monolith</a> that were &quot;exported&quot; to Lua with <a href="https://luabind.sourceforge.net/docs.html#scopes" target="_blank" rel="noreferrer">luabind definitions</a>.</p><p>The most basic declaration file is game.d.ts, it accumulates types from Lua modules in _unpacked directory of Anomaly and global functions, namespaces and classes &quot;exported&quot; with luabind from XRay Monolith. This file consists of thousands of line of code and the list is still incomplete. It requires many working hands of the Anomaly modding community to declare as much of types as possible.</p><p>Your addon will most likely use your own type definitions, for example your <code>AddonId</code> can be used very nicely in tandem with <code>mcm.d.ts</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">declare</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;"> McmConfig</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // example_slider_value: number</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // example_text_value: string</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // example_check_value: boolean</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">declare</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> var</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> ui_mcm</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">  |</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#88C0D0;--shiki-light:#6F42C1;">      get</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> &lt;</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;">Key</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> keyof</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;"> McmConfig</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">&gt;(</span><span style="--shiki-dark:#81A1C1;--shiki-light:#005CC5;">this</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#E36209;"> path</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> \`\${</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;">AddonId</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">}</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">/</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">\${</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;">Key</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">}\`</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =&gt;</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;"> McmConfig</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">[</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;">Key</span><span style="--shiki-dark:#D8DEE9FF;--shiki-light:#24292E;">]</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">    }</span></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">  |</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#005CC5;"> undefined</span></span></code></pre></div><p>As you can see, ui_mcm.get function can be strictly typed to only use you <code>AddonId</code> as the prefix of the path. Currently it resolved to <code>any</code> as no <code>AddonId</code> was declared yet. To declare it you will want to create you own declaration file and give it unique name so it does not get accidentally overriden as you run the <a href="#terminal-commands"><code>add</code></a> terminal command.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Jh9n4" id="tab-loeK58C" checked><label for="tab-loeK58C">src/types/my_super_addon.d.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">declare</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;"> AddonId</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;"> &#39;</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;">my_super_addon</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#032F62;">&#39;</span></span></code></pre></div></div></div><p>Now <code>AddonId</code> in mcm.d.ts will resolve to <code>my_super_addon</code> and you will have proper paths in <code>ui_mcm.get</code> function like <code>my_super_addon/jump_height</code></p><h2 id="terminal-commands" tabindex="-1">Terminal commands <a class="header-anchor" href="#terminal-commands" aria-label="Permalink to &quot;Terminal commands&quot;">​</a></h2><p>In order to start accessing the game&#39;s code with TypeScript you need to have at least game.d.ts somewhere inside of your addon directory. You can query this file from Anomaly Packer with the <code>add</code> terminal command.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#88C0D0;--shiki-light:#6F42C1;">bun</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> run</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> anomaly-packer</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> add</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> game</span><span style="--shiki-dark:#A3BE8C;--shiki-light:#032F62;"> src/types</span></span></code></pre></div><p>where</p><ul><li><code>game</code> is the name of the declaration file you are querying from Anomaly Packer. For example, if you work with <a href="https://www.moddb.com/mods/stalker-anomaly/addons/anomaly-mod-configuration-menu" target="_blank" rel="noreferrer">MCM</a>, you will want to have <code>mcm</code> in that place. This way types can be declared for any addon in Anomaly Packer, including <code>monolith_realistic_boobs_beta</code> or whatever addon you need to work with. Read more about contributing your declaration files <a href="./../contribution/type-declarations.html">here</a>.</li><li><code>src/types</code> is directory within your addon of your choosing. If you have not created such directory yet, it will be created for you.</li></ul><p>The above terminal command will result into this file appearing in your project.</p><p>As Anomaly Packer recieves updates and gets its declaration types updated you will want to rerun the <code>add</code> command in order to have the most fresh variables and functions in your TypeScript files. Just be careful not to override your existing declaration files if you already made changes to them to fit your addon&#39;s requirements.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span>src</span></span>
<span class="line"><span>-- types</span></span>
<span class="line"><span>   -- game.d.ts</span></span></code></pre></div><h2 id="rules" tabindex="-1">Rules <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;Rules&quot;">​</a></h2><p>Do not</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>TODO</p>`,33),l=[n];function p(h,o,d,r,k,c){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{g as __pageData,u as default};
