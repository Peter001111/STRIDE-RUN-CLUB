import { NavItem, WhyJoinCard, InfoCard, PrizeCard, StepItem, GalleryItem, FaqItem } from "./types";

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Join", href: "#why-join" },
  { label: "Current Challenge", href: "#current-challenge" },
  { label: "How to Join", href: "#how-to-join" },
  { label: "Community", href: "#community" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const WHY_JOIN_CARDS: WhyJoinCard[] = [
  {
    id: "habit",
    title: "Stay Active",
    description: "Build a consistent walking or running habit to keep your body moving and mind fresh.",
    iconName: "Flame",
  },
  {
    id: "community",
    title: "Join a Community",
    description: "Connect with like-minded, friendly people who are also committed to wellness and movement.",
    iconName: "Users2",
  },
  {
    id: "track",
    title: "Track Your Progress",
    description: "Use seamless tools inside the Pacer App to monitor your daily steps, distance, active minutes, and consistency.",
    iconName: "TrendingUp",
  },
  {
    id: "motivation",
    title: "Get Motivated",
    description: "Participate in structured collective challenges, receive daily motivational pushes, and stay thoroughly encouraged.",
    iconName: "Trophy",
  },
];

export const INFO_CARDS: InfoCard[] = [
  {
    id: "duration",
    label: "Challenge Duration",
    value: "20 Days",
    iconName: "Calendar",
  },
  {
    id: "target",
    label: "Daily Target",
    value: "10,000 Steps",
    iconName: "Footprints",
  },
  {
    id: "period",
    label: "Challenge Period",
    value: "June 10 – 30",
    iconName: "Clock",
  },
  {
    id: "app",
    label: "Tracking App",
    value: "Pacer App",
    iconName: "Smartphone",
  },
  {
    id: "whatsapp",
    label: "Community Group",
    value: "Stride WhatsApp",
    iconName: "MessageSquareText",
  },
];

export const PRIZE_CARDS: PrizeCard[] = [
  {
    place: "1st Place",
    rewardValue: "₦10,000",
    shares: "300 UCAP Shares",
    criteria: "Highest Total Steps",
    bgGrad: "from-[#FFD700]/10 to-[#FFD700]/5 border-[#FFD700]/30",
    iconName: "AwardGold",
  },
  {
    place: "2nd Place",
    rewardValue: "₦5,000",
    shares: "100 TIP Shares",
    criteria: "Second Highest Total Steps",
    bgGrad: "from-[#C0C0C0]/10 to-[#C0C0C0]/5 border-[#C0C0C0]/30",
    iconName: "AwardSilver",
  },
  {
    place: "3rd Place",
    rewardValue: "₦5,000",
    shares: "20 UACN Shares",
    criteria: "Third Highest Total Steps",
    bgGrad: "from-[#CD7F32]/10 to-[#CD7F32]/5 border-[#CD7F32]/30",
    iconName: "AwardBronze",
  },
];

export const STEP_ITEMS: StepItem[] = [
  {
    number: 1,
    text: "Join the Stride Run Club WhatsApp Group",
    subText: "Your main hub for accountability, general talk, wellness updates, and official prompt notifications.",
  },
  {
    number: 2,
    text: "Download the Pacer: Walking & Step Tracker app",
    subText: "Available on both iOS and Android platforms. Syncs automatically in the background.",
  },
  {
    number: 3,
    text: "Create an account or log in",
    subText: "Takes less than a minute. Ensure permission for step tracking is granted.",
  },
  {
    number: 4,
    text: "Join the Stride challenge using the link or challenge code",
    subText: "Use the deep linking code inside the app to jump directly into the active leaderboard.",
    highlight: true,
  },
  {
    number: 5,
    text: "Allow the app to track your steps",
    subText: "Integrate with Apple Health or Google Fit for effortless high-precision background syncing.",
  },
  {
    number: 6,
    text: "Start walking and stay consistent",
    subText: "Log your daily steps, check daily accountability prompts, and track community milestones.",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal1",
    category: "Community Walk",
    title: "Morning Routine",
    description: "Our members starting their day strong with fresh outdoor steps.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal2",
    category: "Challenge Flyer",
    title: "20 Days Walk Challenge",
    description: "The current campaign poster encouraging daily 10k steps tracking.",
    imageUrl: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal3",
    category: "Step Tracker",
    title: "Consistent Pacing",
    description: "A close-up of our daily target metrics on a modern smartwatch interface.",
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal4",
    category: "Wellness Session",
    title: "Daily Stretches",
    description: "Preparing our feet and ankles for active steps during morning routines.",
    imageUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal5",
    category: "Gear Check",
    title: "Ready to Stride",
    description: "Comfortable athletic footwear ready to walk out the door for those daily 10k steps.",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "gal6",
    category: "Scenic Trails",
    title: "Track & Field Steps",
    description: "Beautiful tracks and public parks selected by community run clubs representing local walks.",
    imageUrl: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80&w=800",
  },
];

export const OFFICIAL_LINKS = {
  whatsappGroup: "https://chat.whatsapp.com/EKM1pGjVCCCAYSYQuESp8x",
  pacerChallenge: "https://www.mypacer.com/challenges/bbo8qz35/stride-20-days-walk-challenge",
  appleStore: "https://apps.apple.com/us/app/pacer-pedometer-step-counter/id600446812",
  googlePlay: "https://play.google.com/store/apps/details?id=cc.pacer.androidapp",
  instagram: "https://instagram.com/striderunclub.ng",
  tiktok: "https://www.tiktok.com/@striderunclub_",
  officialWhatsAppContact: "https://wa.me/2349028091233", // formatting Nigerian WhatsApp link safely
  rawWhatsAppContact: "090-280-912-331"
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-join-1",
    category: "joining",
    question: "How do I join Stride Run Club?",
    answer: "Joining is completely free and instant! Simply click any of our 'Join Stride Run Club' buttons to enter our main accountability WhatsApp group. It acts as our hub for general guidelines, announcements, and motivation."
  },
  {
    id: "faq-join-2",
    category: "joining",
    question: "Is there any membership fee or subscription?",
    answer: "No, Stride Run Club is a 100% free community. There are absolutely no hidden costs, subscriptions, or registration fees to participate in our events or regular walking challenges."
  },
  {
    id: "faq-challenge-1",
    category: "challenge",
    question: "What is the 20 Days Walk Challenge?",
    answer: "It is our current active campaign where participants strive to reach a daily target of 10,000 steps from June 10 to June 30. The emphasis is on building long-term fitness consistency through shared accountability and amazing cash or share rewards."
  },
  {
    id: "faq-challenge-2",
    category: "challenge",
    question: "Can I still join the challenge if June 10 has already passed?",
    answer: "Absolutely! Even if you join mid-campaign, you can register in the Pacer app to start building your daily habits. It counts as excellent practice for our periodic surprise bonus rewards, which can be won regardless of individual start dates."
  },
  {
    id: "faq-pacer-1",
    category: "pacer",
    question: "How does the Pacer App sync my daily steps?",
    answer: "The Pacer App automatically accesses your phone's interior motion sensors or links directly to Apple Health (iOS) and Google Fit (Android). It operates seamlessly in the background with minimal battery drainage."
  },
  {
    id: "faq-pacer-2",
    category: "pacer",
    question: "Where do I input the Stride Challenge Code?",
    answer: "Once the Pacer app is installed, navigate to the search bar or 'Enter Challenge Code' area and input: BBO8QZ35. Alternatively, click any of our direct 'Join Pacer Challenge' buttons to join directly."
  },
  {
    id: "faq-community-1",
    category: "community",
    question: "Are challenge leaderboards or personal participant data public on this website?",
    answer: "No. Individual fitness results, telemetry data, and direct list names are kept confidentially secured. All active scores and real-time community rankings are visible only inside the official Pacer App challenge group to protect our members."
  },
  {
    id: "faq-community-2",
    category: "community",
    question: "Does the club organize physical walking meetups?",
    answer: "Yes! Alongside our continuous virtual tracking events, Stride Run Club coordinates optional physical weekend morning routines, collaborative trails, and stretching sessions. Details are always shared inside our WhatsApp group."
  }
];

