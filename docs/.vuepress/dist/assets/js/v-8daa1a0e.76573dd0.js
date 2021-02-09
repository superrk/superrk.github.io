(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[509],{422:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-8daa1a0e",path:"/",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"一：代码整洁 🎉",slug:"一-代码整洁",children:[]},{level:2,title:"二：命名",slug:"二-命名",children:[{level:3,title:"1. 名副其实",slug:"_1-名副其实",children:[]},{level:3,title:"2. 避免误导",slug:"_2-避免误导",children:[]},{level:3,title:"3. 有意义的区分",slug:"_3-有意义的区分",children:[]},{level:3,title:"4.可读",slug:"_4-可读",children:[]},{level:3,title:"5.可搜索",slug:"_5-可搜索",children:[]},{level:3,title:"6.类名和方法名",slug:"_6-类名和方法名",children:[]},{level:3,title:"7.每个概念应对应一个词",slug:"_7-每个概念应对应一个词",children:[]},{level:3,title:"8.添加有意义的语境",slug:"_8-添加有意义的语境",children:[]}]},{level:2,title:"三：函数",slug:"三-函数",children:[{level:3,title:"1.越短小越好",slug:"_1-越短小越好",children:[]},{level:3,title:"2.只做一件事",slug:"_2-只做一件事",children:[]},{level:3,title:"3.每个函数一个抽象层级",slug:"_3-每个函数一个抽象层级",children:[]},{level:3,title:"4.switch",slug:"_4-switch",children:[]},{level:3,title:"5.使用描述性的名称",slug:"_5-使用描述性的名称",children:[]},{level:3,title:"6.函数参数",slug:"_6-函数参数",children:[]},{level:3,title:"7.无副作用，分离操作与获取",slug:"_7-无副作用-分离操作与获取",children:[]},{level:3,title:"8.善用异常",slug:"_8-善用异常",children:[]},{level:3,title:"8.抽离try-catch",slug:"_8-抽离try-catch",children:[]},{level:3,title:"9.代码不要重复",slug:"_9-代码不要重复",children:[]},{level:3,title:"10.持续改进",slug:"_10-持续改进",children:[]},{level:3,title:"11.最短路径,不要啰嗦",slug:"_11-最短路径-不要啰嗦",children:[]}]},{level:2,title:"四：注释",slug:"四-注释",children:[{level:3,title:"1.好注释",slug:"_1-好注释",children:[]},{level:3,title:"2.糟糕的注释",slug:"_2-糟糕的注释",children:[]}]},{level:2,title:"五: 格式",slug:"五-格式",children:[{level:3,title:"1.垂直格式",slug:"_1-垂直格式",children:[]},{level:3,title:"2.横向格式",slug:"_2-横向格式",children:[]}]}],filePathRelative:"Readme.md",git:{updatedTime:1612857477e3,contributors:[{name:"kai",email:"rongkai@haodf.com",commits:1}]}}},210:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(133).uE)('<h2 id="一-代码整洁"><a class="header-anchor" href="#一-代码整洁">#</a> 一：代码整洁 🎉</h2><blockquote><p>让营地比你来时更干净</p></blockquote><p>光明不灭，代码永存</p><h2 id="二-命名"><a class="header-anchor" href="#二-命名">#</a> 二：命名</h2><blockquote><p>合适的命名是头等大事，正如给新生儿起个好名字那样重要。不合适的命名通常是词不达意、误导观众、过度缩写等，由于英文并非我们的母语，找个合适的单词命名似乎真的很难。我建议是先把业务弄清楚，组织会议定下常用业务领域的单词，禁止组员各自发明，比如加号这个业务，既有booking，又有plussign(+)，有可能有jiahao这样的名称，这种不统一会带来一些困扰</p></blockquote><h3 id="_1-名副其实"><a class="header-anchor" href="#_1-名副其实">#</a> 1. 名副其实</h3><p>请看下面这段代码，有几个人能读懂是什么含义。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> i<span class="token punctuation">,</span>j<span class="token punctuation">,</span>k<span class="token punctuation">;</span>\n<span class="token keyword">int</span> dmzjzd<span class="token punctuation">;</span>\n<span class="token keyword">int</span> d<span class="token punctuation">,</span>dt<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>改成下面这样是不是会好些</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> firstIndex<span class="token punctuation">,</span>secondIndex<span class="token punctuation">,</span>thirdIndex<span class="token punctuation">;</span>\n<span class="token keyword">int</span> cleanCode<span class="token punctuation">;</span>\n<span class="token keyword">int</span> date<span class="token punctuation">,</span>dateTime<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-避免误导"><a class="header-anchor" href="#_2-避免误导">#</a> 2. 避免误导</h3><p>举个栗子，listdiff(list1,list2) 这个方法给你的第一印象是做什么的，如果不看注释，可能很多情况下会被理解为计算两个list的差值，然而事实上他是计算list1有但list2没有的，可能更合理的写法是: listfilter(sourceList,exceptList)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token class-name">DoctorInfosResVO</span> <span class="token function">getDoctorInfosBySpaceId</span><span class="token punctuation">(</span>spaceId<span class="token punctuation">)</span>\n <span class="token keyword">public</span> <span class="token class-name">DoctorInfoVO</span> <span class="token function">getDoctorInfoBySpaceId</span><span class="token punctuation">(</span>spaceId<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3-有意义的区分"><a class="header-anchor" href="#_3-有意义的区分">#</a> 3. 有意义的区分</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">changePassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> password1 <span class="token punctuation">,</span><span class="token class-name">String</span> password2<span class="token punctuation">)</span>\n<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">changePassword</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldPassowrd<span class="token punctuation">,</span><span class="token class-name">String</span> newPassword<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4-可读"><a class="header-anchor" href="#_4-可读">#</a> 4.可读</h3><p>主要针对的就是各种缩写和自造词，摒弃这种做法,除非你确认你的团队都把这个缩写固定为某种含义，</p><h3 id="_5-可搜索"><a class="header-anchor" href="#_5-可搜索">#</a> 5.可搜索</h3><p>硬编码通常是不好搜索的，因为通常你不清楚它对应的是什么含义，浪费记忆空间，且查找原始定义是困难的</p><h3 id="_6-类名和方法名"><a class="header-anchor" href="#_6-类名和方法名">#</a> 6.类名和方法名</h3><p>类名应为名词，方法名应为动词</p><p>可以想象一个类叫setProperty，一个方法叫property所带来的困惑了</p><h3 id="_7-每个概念应对应一个词"><a class="header-anchor" href="#_7-每个概念应对应一个词">#</a> 7.每个概念应对应一个词</h3><p>就像插入数据有人喜欢用insert，有人喜欢用save，但一个团队还是尽量保持一种写法。</p><h3 id="_8-添加有意义的语境"><a class="header-anchor" href="#_8-添加有意义的语境">#</a> 8.添加有意义的语境</h3><p>我们经常会用到id这个字段，如果不给其以前缀，则很难清楚其究竟是那个id，因此，我们需要给其具体的语境，通常是通过添加前缀或后缀的方式，但更好的方式是将其放到一个更大的结构体（类）中，给其已明确的含义，但是也别太详细了，这时这些命名就会显得啰嗦</p><h2 id="三-函数"><a class="header-anchor" href="#三-函数">#</a> 三：函数</h2><h3 id="_1-越短小越好"><a class="header-anchor" href="#_1-越短小越好">#</a> 1.越短小越好</h3><blockquote><p>if/else/while语句的代码块应该只有一行，该行应该是一个函数调用语句。 函数的缩进层级不应该多于一层或两层。</p></blockquote><p>当然我并不觉得一定要完全做到这样，如果块内调用的逻辑一眼就能看出是干什么的，也没必要就得写个函数，但是尽量缩小函数层级是应该要追求的目标。</p><h3 id="_2-只做一件事"><a class="header-anchor" href="#_2-只做一件事">#</a> 2.只做一件事</h3><blockquote><ul><li>如果函数只是做了该函数名下同一抽象层上的步骤，则函数只做了一件事。</li><li>要判断函数是否不止做了一件事，就是要看是否能再拆出一个函数。</li></ul></blockquote><h3 id="_3-每个函数一个抽象层级"><a class="header-anchor" href="#_3-每个函数一个抽象层级">#</a> 3.每个函数一个抽象层级</h3><p>有助于阅读和理解</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//  获取个人信息</span>\n<span class="token keyword">private</span> <span class="token class-name">UserDTO</span> <span class="token function">getUserDTO</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> userId<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//获取基本信息</span>\n    … 此处写了<span class="token number">10</span>行\n\n    <span class="token comment">//获取最近的一次订单信息</span>\n    … 此处写了<span class="token number">30</span>行\n\n   <span class="token comment">// 获取钱包余额、可用优惠券张数等</span>\n    … 此处写了<span class="token number">30</span>行\n\n   <span class="token keyword">return</span> userDTO<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">private</span> <span class="token class-name">UserDTO</span> <span class="token function">getUserDTO</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> userId<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">//获取基本信息</span>\n    <span class="token class-name">UserDTO</span> userDTO<span class="token operator">=</span> <span class="token function">getUserBasicInfo</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//获取最近的一次订单信息</span>\n    userDTO<span class="token punctuation">.</span><span class="token function">setUserLastOrder</span><span class="token punctuation">(</span><span class="token function">getUserLastOrder</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 获取钱包、可用优惠券张数等</span>\n    userDTO<span class="token punctuation">.</span><span class="token function">setUserAccount</span><span class="token punctuation">(</span><span class="token function">getUserAccount</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> userDTO<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_4-switch"><a class="header-anchor" href="#_4-switch">#</a> 4.switch</h3><p>把switch埋在较低的抽象层级，一般可以放在抽象工厂底下，用于创建多态对象。典型例子如加号的状态机</p><h3 id="_5-使用描述性的名称"><a class="header-anchor" href="#_5-使用描述性的名称">#</a> 5.使用描述性的名称</h3><p>这个也还是命名，用合适的语言描述出函数的功能</p><blockquote><p>函数越短小、功能越集中，就越便于取个好名字。 别害怕长名称，长而具有描述性的名称，要比短而令人费解的名称好，要比描述性的长注释好。 别害怕花时间取名字。</p></blockquote><h3 id="_6-函数参数"><a class="header-anchor" href="#_6-函数参数">#</a> 6.函数参数</h3><blockquote><ul><li>参数越少越好，0参数最好，尽量避免用三个以上参数</li><li>参数越多，编写单元测试就越困难，因为要写太多的分支了</li><li>别用标识参数，向函数传入bool值是不好的，这意味着函数不止做一件事。可以将此函数拆成两个。</li><li>将参数的顺序编码进函数名，减轻记忆参数顺序的负担，例如,assertExpectedEqualsActual(expected, actual)</li></ul></blockquote><p>如果方法参数将超过3个，建议放在类中包装起来，否则再增加参数时，由于语义的强耦合会导致调用方语法错误。比如多条件的分页查询接口，常常会有很多查询参数，而且有可能增加，封装起来是最好的。</p><h3 id="_7-无副作用-分离操作与获取"><a class="header-anchor" href="#_7-无副作用-分离操作与获取">#</a> 7.无副作用，分离操作与获取</h3><p>典型的就如在get方法里执行了其它操作，比如重置缓存，会话等</p><h3 id="_8-善用异常"><a class="header-anchor" href="#_8-善用异常">#</a> 8.善用异常</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">deletePate</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span> <span class="token operator">==</span> E_OK<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> E_OK<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">yyy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> E_OK<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token function">aaa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">yyy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_8-抽离try-catch"><a class="header-anchor" href="#_8-抽离try-catch">#</a> 8.抽离try-catch</h3><p>最好把try和catch代码块的主体抽离出来，单独形成函数。然后我照着这条写了一个通用的方法。</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">void</span> <span class="token function">simpleTryCatch</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> tryFunc<span class="token punctuation">,</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Exception</span><span class="token punctuation">&gt;</span></span> catchFunc<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">try</span> <span class="token punctuation">{</span>\n            tryFunc<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            catchFunc<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_9-代码不要重复"><a class="header-anchor" href="#_9-代码不要重复">#</a> 9.代码不要重复</h3><p>标准就是你修改每一个功能时，只会修改一处，如果多余1处，ok，那么这就是重复了</p><h3 id="_10-持续改进"><a class="header-anchor" href="#_10-持续改进">#</a> 10.持续改进</h3><p>很少有人能把初稿写的完善，写代码也是如此，我们刚开始写的时候尽可以先为完成功能，然后逐步打磨，拆分函数，改善名称，消除重复。</p><blockquote><p>如何才是一个好的函数，单元测试好写的 --by Me</p></blockquote><h3 id="_11-最短路径-不要啰嗦"><a class="header-anchor" href="#_11-最短路径-不要啰嗦">#</a> 11.最短路径,不要啰嗦</h3><p>短的路径通常来讲段落感更强,逻辑上更容易理解</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">RpcResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Boolean</span><span class="token punctuation">&gt;</span></span> <span class="token function">methodName</span><span class="token punctuation">(</span><span class="token class-name">Long</span> param<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>param <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> param<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token class-name">RpcResponse</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> <span class="token class-name">RpcResponse</span><span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="四-注释"><a class="header-anchor" href="#四-注释">#</a> 四：注释</h2><blockquote><p>Talk is cheap. Show me the code</p></blockquote><h3 id="_1-好注释"><a class="header-anchor" href="#_1-好注释">#</a> 1.好注释</h3><p>好的注释应该简短,准确,最好的注释是没有注释。在我看来，必要的解释，警告，todo算是好的注释, 以下推荐一个代码收起的命令（idea,vs都有）</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token comment">//region 功能描述</span>\n        ···\n        <span class="token comment">//endregion</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_2-糟糕的注释"><a class="header-anchor" href="#_2-糟糕的注释">#</a> 2.糟糕的注释</h3><ol><li>只有你自己看的懂的</li><li>废话（getUserName这个方法需要写注释吗）</li><li>有误导性的注释(这种是最危险的,listdiff 为例，如果写了不准确的注释，还不如不写)</li><li>规矩注释(比如每个方法都要有标准javadoc的注释)</li><li>注释代码（除非你确认在注释只是暂时性的，要不还是乖乖删掉，git和svn的记性绝对比你好）</li></ol><h2 id="五-格式"><a class="header-anchor" href="#五-格式">#</a> 五: 格式</h2><blockquote><p>代码是给机器运行的，但是也是给人看的。</p></blockquote><p>没有格式的典范比如代码混肴器,min.css,min.js，但我想没人会喜欢阅读这类文件吧。那么有个良好的格式显得尤其重要。所以，不要用记事本敲代码(手动狗头)</p><h3 id="_1-垂直格式"><a class="header-anchor" href="#_1-垂直格式">#</a> 1.垂直格式</h3><ol><li>方法间加空行做出区分</li><li>有调用关系的方法应尽量靠近，且调用者处于被调用者的上方</li><li>变量声明尽量靠近调用点，本地变量应该在函数顶部出现</li><li>自顶向下，善用structure</li></ol><h3 id="_2-横向格式"><a class="header-anchor" href="#_2-横向格式">#</a> 2.横向格式</h3><ol><li>一行代码不要超过1屏，通常为多个条件与或，下面是合适的例子</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>        <span class="token keyword">return</span> createOrderParamVO <span class="token operator">!=</span> <span class="token keyword">null</span>\n                <span class="token operator">&amp;&amp;</span> createOrderParamVO<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span>\n                <span class="token operator">&amp;&amp;</span> createOrderParamVO<span class="token punctuation">.</span><span class="token function">getPatientId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span>\n                <span class="token operator">&amp;&amp;</span> createOrderParamVO<span class="token punctuation">.</span><span class="token function">getSpaceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>用空格分隔联系紧密的符号，例如:++,+=,==,&amp;&amp;,||,有一些编程专用字体会有连字符让这些变的更醒目(JetBrains Mono,Fira Code)</li><li>团队规则,在一个团队中，最好有一个统一的代码规则，如果懒得制定，那么用统一的ide的默认规则也是一个选择</li></ol><blockquote><p>idea默认的格式化会自动加上空格，所以，提交代码之前，执行一次格式化(Ctrl+Alt+L)吧，避免合并代码时各种格式不同的问题，找到一个插件叫Save Action,能够在保存的时候自动格式化,可以尝试一下</p></blockquote>',75),p={render:function(n,s){return e}}}}]);