/**
 * সাইটের পরিচয় আর এই পথের সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা পথের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath আর `docs/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "গ্লোবাল কোম্পানির system design",
  short: "গ্লোবাল system design",
  emoji: "🌐",
  description:
    "big tech-এর ৪৫ মিনিটের system design আর frontend design রাউন্ডের জন্য — আট সিস্টেম লেখা আর ঘড়ির নিচে মুখে, ছয়টা UI, ১৬৮ দিনে, learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন পথের progress আলাদা থাকে */
  storagePrefix: "gsd",
  /** এই পথ কবে শুরু হবে জানা নেই — প্রস্তাব নেই, আজকের তারিখ দেখায় */
  suggestedStart: null,
};
