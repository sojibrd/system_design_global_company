# system_design_global_company

big tech মানের কোম্পানির ৪৫ মিনিটের system design রাউন্ড আর frontend design রাউন্ডের প্রস্তুতি — দেশে থেকে, রিমোটে। ১৬৮ দিনে: design doc-এর ছয় সেকশন আর frontend-এর ছয় ধাপ, আট সিস্টেমের ইংরেজি design doc (URL shortener, rate limiter, `srdtube`, chat, news feed, file storage, ride sharing, video streaming), প্রতিটা ৪৫′ টাইমারে মুখে, ছয়টা UI, আর শেষে এলোমেলো তুলে ঘড়ির নিচে। শেখার বিজ্ঞান মেনে; দিন ১৬৮-এ থামা।

এটা **স্বাধীন পথ** — আগে অন্য কোনো system design সাইট লাগে না। [লোকাল](https://sojibrd.github.io/system_design_local_company/) আর [রিমোট](https://sojibrd.github.io/system_design_remote_company/) আলাদা সাইট; এখানে পথ বদলালে কাজের ধরনই বদলায়। `switch_in_6_month_global_company`-এর দিন ০০৮–১৭৫-এ system design-এর যে ঘরগুলো আছে (বেশিরভাগ মঙ্গল, বৃহস্পতি, শনি, রবি), এই সাইট সেই ঘরের কাজ — plan থেকে হুবহু সরানো (ব্যবহারকারীর সিদ্ধান্ত ২০২৬-০৯-১৫)। শুরুর তারিখ ⏳, সাইট প্রথমবার খুললে জিজ্ঞেস করে।

**লাইভ:** https://sojibrd.github.io/system_design_global_company/

## Functional Requirement

- **আজ (`/`):** প্রথমবার খুললে শুরুর তারিখ জিজ্ঞেস করে। তারপর দেখায় ক্যালেন্ডারের আজকের দিনটা, এই ক্রমে: জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন।
- **Rail:** ৫টা পাতার লিংক, gauge আর ৬টা ব্লক। শুধু খোলা ব্লকের দিনগুলো দেখায়।
- **দিন (`/day/<nnn>/`) · ব্লক (`/block/<slug>/`):** প্রতিটা ক্যালেন্ডার দিন আছে; plan-এ design-এর ঘর না থাকলে দিনটা "বিরতি", কেন ফাঁকা তা লেখা।
- **সূত্রের chip:** কাজে `(ডক ১৩)` থাকলে এই সাইটের ঐ ডকের পাতা; `(sim url-shortener · scalable)` থাকলে এই সাইটের simulator-এর ঐ সিস্টেম।
- **ডক (`/docs/`, `/doc/<nn>/`):** ২৫টা ডক এই সাইটেই (`guide/`)। প্রতিটা পাতায় আগে এই পথের কোন দিনের কোন কাজে আসে, তারপর পুরো ডক; plan-এর বাইরেরগুলো তালিকায় আলাদা নিচে।
- **simulator (`/simulation/<id>/`):** URL Shortener আর Rate Limiter, তিন লেভেল (functional → reliable → scalable) — React Flow-র ক্যানভাসে ধাপে ধাপে।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ টিকের দিন থেকে ১/৩/৭/২১ দিন পরে ফেরে।
- **নিয়ম (`/rules/`):** `docs/00-rules.md` হুবহু।
- **🧠 chip:** `learning_to_learn`-এর পাঁচটা ডকের সব বিষয়। chip চাপলে এক লাইনে কারণ, সাথে ঐ সাইটের লিংক।

## Non-Functional Requirement

- **সত্যের উৎস `docs/`।** কোডে কোনো দিন বা কাজ হার্ডকোড নেই। কাজের `(ডক n)` যদি `guide/`-এ না থাকে বা `(sim … · …)` যদি `app/lib/sources.ts`-এ না মেলে, **build ভাঙে।** simulator-এর ভেতরের রেফারেন্স ধরে `npm run check:simulations` (CI-তে build-এর আগে)।
- **design doc-এর লেখা এই repo-তে নয়** — প্রজেক্টের নিজের repo-তে (`srdtube`-এর `DESIGN.md`)। সাইটে নোটের ঘর নেই, ইচ্ছাকৃত।
- **ফাইলে তারিখ নেই।** "আজ" মানে ক্যালেন্ডারের তারিখ, plan পেছায় না।
- **Static export → GitHub Pages।** Backend নেই। Progress শুধু `localStorage`-এ, একমাত্র `app/hooks/useProgress.ts` দিয়ে। `app/lib/plan.ts` server-only।
- **Theme contract অলঙ্ঘনীয়, সাইট dark-only।**
- **তিন পথের কোড একই।** পার্থক্য শুধু `app/lib/site.ts`, `next.config.ts`-এর basePath, `package.json`-এর নাম আর `docs/`-এ; `guide/` তিনটাতেই এক।
- **স্ট্যাক:** Next.js 16, React 19, TypeScript, Tailwind v4, react-markdown, React Flow (`@xyflow/react`), lucide-react।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [guide/](guide/) | ২৫টা system design ডক — অবসরপ্রাপ্ত `system_design` থেকে হুবহু, তিন পথে এক |
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য, সত্যের উৎস, চিহ্ন, "আজ", plan-এর ঘর আর বিরতির দিন, ছয় সেকশন, ৪৫′-এর বসা, frontend-এর ছয় ধাপ, আট সিস্টেম, ঝালাই, `learning_to_learn`, যা করবেন না, দিন ১৬৮-এর পরে |
| [docs/01-templates.md](docs/01-templates.md) | দিন ০০১–০২৮ (plan ০০৮–০৩৫): ছয় সেকশন আর ছয় ধাপের কার্ড, দুই পুরনো সিস্টেমের অনুমান, autocomplete, `srdtube`-এর doc |
| [docs/02-out-loud.md](docs/02-out-loud.md) | দিন ০২৯–০৫৬ (plan ০৩৬–০৬৩): URL shortener, rate limiter, `srdtube` ৪৫′-এ মুখে; scoping; চারটা ধারণা; chat-এর doc |
| [docs/03-a-system-a-week.md](docs/03-a-system-a-week.md) | দিন ০৫৭–০৮৪ (plan ০৬৪–০৯১): chat, news feed, file storage — লেখা আর মুখে; infinite feed; browser-এর ছবি |
| [docs/04-last-two-systems.md](docs/04-last-two-systems.md) | দিন ০৮৫–১১২ (plan ০৯২–১১৯): ride sharing, video streaming; file upload, chat UI, video player |
| [docs/05-random-draws.md](docs/05-random-draws.md) | দিন ১১৩–১৪০ (plan ১২০–১৪৭): এলোমেলো UI, প্রথম দুই মিনিট, ৪৫′-এ মুখে, আট সিস্টেমের পাতা |
| [docs/06-weak-spots.md](docs/06-weak-spots.md) | দিন ১৪১–১৬৮ (plan ১৪৮–১৭৫): পুরনো আর দুর্বল সিস্টেম, এলোমেলো UI, দুই ছাঁচ; দিন ১৬৮-এ থামা |

## প্রজেক্ট-নির্দিষ্ট নিয়ম

### তথ্য বদলানোর ক্রম

`brainstorming/ASSUMPTIONS.md` → `brainstorming/` (`system-design-*.md`) → `switch_in_6_month_global_company/docs/` → এই ফোল্ডার। plan-এর design-এর ঘর আর এই সাইটের দিন একসাথে বদলান — সাইটের দিন = plan-এর দিন − ৭।

### ব্লক ফাইলের ছাঁচ

- `# ব্লক ১ — নাম` · `*দিন ০০১–০২৮ · plan-এর দিন ০০৮–০৩৫*` (শেষে `· dip` থাকলে হোমে সতর্কতা) · `> **ব্লক শেষে:** …` · `### দিন ০০৭ · শিরোনাম` · `- [ ] ২৫′ …` · `> **দিন শেষে:** …`
- দিনের নম্বর সব ব্লক মিলিয়ে পরপর থাকতে হবে, না থাকলে build ভাঙে। কাজ ছাড়া দিন (`### দিন ০০১ · বিরতি`) চলে।
- কাজে `(ডক ১৩)` বা `(ডক ১১ · ডক ১৩)` = `guide/`-এর ডক (ফাইল না থাকলে build ভাঙে); `(sim rate-limiter · scalable)` = simulator, তালিকা `app/lib/sources.ts`-এ — `app/lib/simulations/`-এ সিস্টেম বা লেভেল যোগ হলে ওখানেও।
- `⚑` = মাইলফলক, `🔁` = ঝালাই হবে, শেষে `🧠 (নাম · নাম)`। নতুন 🧠 নাম লিখলে তিন repo-র `app/lib/principles.ts`-এ যোগ করুন।

### Progress key

| key | মান |
|---|---|
| `gsd:v1:start` | শুরুর তারিখ `"YYYY-MM-DD"` |
| `gsd:v1:task` | কাজ শেষের তারিখ। id = দিন + কাজের **লেখা** থেকে hash |
| `gsd:v1:check` | দিন শেষ (`d007`) ও ব্লক শেষ (`b1`)-এর হ্যাঁ/না |
| `gsd:v1:review` | 🔁 ঝালাইয়ের অবস্থা `{ base, step }` |

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run check:simulations   # simulator-এর node/edge রেফারেন্স (node ≥ 22.6)
npm run build    # static export → out/
```

push করলে `.github/workflows/deploy.yml` সাইটটা GitHub Pages-এ তোলে।
