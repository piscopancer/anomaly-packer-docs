import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.Caa1YTU6.js";const g=JSON.parse('{"title":"Type Declarations","description":"","frontmatter":{},"headers":[],"relativePath":"docs/contribution/type-declarations.md","filePath":"docs/contribution/type-declarations.md"}'),t={name:"docs/contribution/type-declarations.md"},n=e(`<p>Thanks for visiting this section 💖. All contributors are welcome to take part in the development of this package.</p><p><a href="https://github.com/piscopancer/anomaly-packer" target="_blank" rel="noreferrer">GitHub repo</a></p><hr><h1 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-label="Permalink to &quot;Type Declarations&quot;">​</a></h1><p>Currently there are more than several thousand lines of code in game.d.ts and there are dozens of modules that have not been provided with proper type declarations yet. Where you see <code>TODO</code>, you will realize that this part of the declaration file is either a WIP or there was not any work done towards it yet. For example</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ePD2-" id="tab-rqGLbjD" checked><label for="tab-rqGLbjD">game.d.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">declare</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> var</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> tasks_guide</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#6F42C1;"> TODO</span></span></code></pre></div></div></div><p>This module comes from the _unpacked directory and you can contribute to the project by replacing this <code>TODO</code> with a proper object that will illustrate the global variables and functions avaliable in this module.</p><p>It will also be nice if you leave a comment that your declaration is not fully complete, so that other contributors know that this place can be improved, like so</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-v4pwW" id="tab-Ajwsbai" checked><label for="tab-Ajwsbai">game.d.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes nord github-light vp-code" tabindex="0"><code><span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">// WIP</span></span>
<span class="line"><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">declare</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;"> var</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#24292E;"> tasks_guide</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#88C0D0;--shiki-light:#6F42C1;">  some_func</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#81A1C1;--shiki-light:#005CC5;">this</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">,</span><span style="--shiki-dark:#D8DEE9;--shiki-light:#E36209;"> index</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#81A1C1;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#8FBCBB;--shiki-light:#005CC5;"> number</span></span>
<span class="line"><span style="--shiki-dark:#616E88;--shiki-light:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-dark:#ECEFF4;--shiki-light:#24292E;">}</span></span></code></pre></div></div></div><p>All avaliable type declaration files can be worked with on <a href="https://github.com/piscopancer/anomaly-packer/tree/master/src/types" target="_blank" rel="noreferrer">GitHub</a>.</p>`,10),l=[n];function p(r,o,h,d,c,k){return i(),a("div",null,l)}const b=s(t,[["render",p]]);export{g as __pageData,b as default};