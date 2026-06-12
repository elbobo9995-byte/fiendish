export const monsters = [
  {
    id: "michael-myers",
    name: "Michael Myers",
    age: 61,
    gender: "He/Him",
    location: "Haddonfield, IL",
    sexuality: "Straight",
    tagline: "Still waters run deep.",
    isOnline: false,
    image: "/images/michael-myers.jpg",
    gradient: "linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
    stats: [
      { label: "Occupation", value: "Independent contractor" },
      { label: "Commute", value: "Will walk" },
      { label: "Living situation", value: "Between addresses" },
      { label: "Communication style", value: "Non-verbal" },
      { label: "Looking for", value: "Unfinished business" },
    ],
    about: `Haddonfield native. Homebody. Believes in showing up — sometimes for years at a time. Michael is a man of few words (none, actually) who expresses himself through presence and intention. If he's outside your window, it means he likes you.

Michael is independent. Self-motivated. He has never required external validation, encouragement, or the presence of other people to complete a task he has set his mind to. His follow-through is, by any measurable standard, extraordinary. Dr. Loomis, his former psychiatrist, described him as "a force with no conscience, no feelings, no possibility of reaching." We feel this undersells his commitment.

He has been through a lot. He started young, which his treatment team also describes as "unresolved," and has spent the better part of four decades working through it in his own way, largely outdoors, largely at night. Therapy has not been a consistent part of his journey. We think the right person could change that.

He is, at his core, a man who knows what he wants and does not stop until he has it. In the right relationship, that quality is called devotion. Michael has a lot of devotion. An unusual amount. We are choosing to present this as a positive.`,
    interests: ["Cardio", "Home Improvement", "Watching", "Night Walks", "Knives", "Babysitters"],
    trivia: [
      "Has never missed an anniversary",
      "Escaped Smith's Grove Sanitarium twice — both times on foot",
      "Certified by Dr. Loomis as the most dangerous patient he ever treated",
      "Has survived six separate attempts on his life",
    ],
    prompts: [
      {
        question: "A perfect first date looks like...",
        answer: "A quiet evening in. I'll come to you. Don't worry about unlocking the door.",
      },
      {
        question: "I'm looking for someone who...",
        answer: "Doesn't run. Or at least, accepts that running doesn't help.",
      },
      {
        question: "My love language is...",
        answer: "Acts of service. I will find you anywhere.",
      },
    ],
  },
  {
    id: "freddy-krueger",
    name: "Freddy Krueger",
    age: 70,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Springwood, OH",
    tagline: "I'm the best thing that ever happened to your dreams.",
    isOnline: true,
    image: "/images/freddy-krueger.jpg",
    gradient: "linear-gradient(160deg, #1a0800 0%, #2d0d00 40%, #1a0a0a 100%)",
    stats: [
      { label: "Occupation", value: "Freelance" },
      { label: "Commute", value: "Non-physical" },
      { label: "Living situation", value: "Your subconscious" },
      { label: "Communication style", value: "Theatrical" },
      { label: "Looking for", value: "Someone who screams back" },
    ],
    about: `Look, I'm not going to waste your time with some modest little blurb about my "hobbies" and "favorite restaurants." You already know who I am. If you're on this app, you've heard the name. You've probably already lost a little sleep over it — and honestly? That's a great start.

I'm creative, I'm spontaneous, and I bring a lot of energy to everything I do. I work nights exclusively. My commute is unconventional. My living situation is hard to explain to someone who hasn't experienced it firsthand, but once you do, you never really forget it.

I've been told I'm "a lot." I prefer "unforgettable." There's a difference, and I'll be happy to demonstrate it at a time and place of my choosing — specifically, whenever you close your eyes.

Mornings are yours. The rest belongs to me.`,
    interests: ["Glove-making", "Lucid dreaming", "Home renovation", "One-liners", "Power tools", "Psychology"],
    trivia: [
      "Has a 100% contact rate with anyone who knows his name",
      "Once killed a teenager inside their own game of Dungeons & Dragons",
      "Survived being set on fire twice — the second time intentionally",
      "Holds the Springwood record for most consecutive appearances in local nightmares",
    ],
    prompts: [
      {
        question: "The most spontaneous thing I've ever done...",
        answer: `Showed up unannounced. In someone's head. While they were taking a calculus exam. Ten out of ten, would recommend.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Isn't afraid to fall asleep. Or at least, someone who can't help it.`,
      },
      {
        question: "My love language is...",
        answer: `Quality time. I will be in your dreams every single night whether you like it or not. Mostly whether you don't.`,
      },
    ],
  },
  {
    id: "jason-voorhees",
    name: "Jason Voorhees",
    age: 47,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Crystal Lake, NJ",
    tagline: "Home is where the lake is.",
    isOnline: false,
    image: "/images/jason-voorhees.jpg",
    gradient: "linear-gradient(160deg, #0a1a0a 0%, #0d1f1a 40%, #0a1520 100%)",
    stats: [
      { label: "Occupation", value: "Camp caretaker" },
      { label: "Commute", value: "Walks everywhere" },
      { label: "Living situation", value: "Lakeside (permanent)" },
      { label: "Communication style", value: "Physical" },
      { label: "Looking for", value: "Someone who doesn't run" },
    ],
    about: `Crystal Lake native. Doesn't get out much, but when he does, he's committed. Jason is a homebody in the truest sense — deeply attached to the place he grew up, fiercely loyal, and not easily discouraged. He had a difficult childhood and has spent most of his adult life processing it outdoors, which his therapist describes as "progress, technically."

He's not much of a talker. He doesn't text. He won't remember your birthday, but he will remember you — specifically where you sleep, what routes you take, and which windows you leave unlocked. That's its own kind of attentiveness.

If you're looking for someone consistent, someone who shows up, someone who has never once in thirty years stopped coming back — Jason Voorhees is probably the most reliable person on this entire app. Low bar, maybe. But he clears it every time.`,
    interests: ["Swimming", "Forestry", "Collecting masks", "Camping", "Woodwork", "Watching from a distance", "His mother"],
    trivia: [
      "Drowned at Camp Crystal Lake aged 11 — refuses to let it define him",
      "Has never once left Crystal Lake voluntarily",
      "Once fought Freddy to the death in '03",
      "Widely considered the most dedicated person ever to hold a seasonal position",
      "Has been to space",
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: "Come to Camp Crystal Lake. Most people do eventually.",
      },
      {
        question: "I'm looking for someone who...",
        answer: "Appreciates loyalty. I have been returning to the same half-mile radius for over thirty years. That's commitment.",
      },
      {
        question: "My love language is...",
        answer: "Presence. I will be there. Behind the tree. Under the dock. Inside the cabin you thought was locked. Just there.",
      },
    ],
  },
  {
    id: "hannibal-lecter",
    name: "Hannibal Lecter",
    age: 60,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Florence, Italy",
    tagline: "I only eat the rude.",
    isOnline: true,
    image: "/images/hannibal-lecter.jpg",
    gradient: "linear-gradient(160deg, #1a0a0e 0%, #2a0d15 40%, #1a1020 100%)",
    stats: [
      { label: "Occupation", value: "Psychiatrist (license suspended)" },
      { label: "Commute", value: "Varies by country" },
      { label: "Living situation", value: "Florence apartment, tastefully appointed" },
      { label: "Communication style", value: "Precise" },
      { label: "Looking for", value: "Someone worth the effort" },
    ],
    about: `I'll be direct with you, which is more than most people on this application can claim. I am a psychiatrist, a collector, and an enthusiast of the finer things — music, architecture, memory, cuisine. I have lived in several cities across two continents, always by choice and occasionally by necessity.

I cook for every first date. This is non-negotiable and has never been a point of complaint. My wine selection is without peer. My table manners are, I'm told, unsettling in their precision.

I am particular about the company I keep. Rudeness is, to me, what poor hygiene is to others — a dealbreaker, and one I address directly. If you can hold a conversation about Dante, distinguish a Château Pétrus by vintage, and arrive on time, we will get along extraordinarily well.

I am not for everyone. I have made peace with this. The ones I am for, however, tend to find the experience quite unforgettable.

Bon appétit.`,
    interests: ["Cooking", "Classical piano", "Renaissance art", "Memory palaces", "Wine", "Tailoring", "Dante", "Anatomy", "Opera"],
    trivia: [
      "Speaks six languages, finds five of them adequate",
      "Once served a dinner party of twelve using only locally sourced ingredients",
      "Escaped FBI custody twice — both times while maintaining excellent posture",
      "Has never once raised his voice",
      "Rated his own therapy sessions four out of five stars — room for growth on the patient's part",
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Curiosity. Manners. A working knowledge of Renaissance art. In that order. Arrive without any of these and I'm afraid you'll be contributing to the evening in a different capacity.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Stimulates me intellectually before anything else. The mind is the most intimate thing a person can offer. Everything else is just texture.`,
      },
      {
        question: "A green flag I look for...",
        answer: `You correct the sommelier when he's wrong. You notice the painting before you notice the furniture. You are, in some specific and ineffable way, interesting. Most people aren't. I can tell within four minutes.`,
      },
    ],
  },
  {
    id: "queenie",
    name: "Queenie",
    age: 24,
    gender: "She/Her",
    sexuality: "Bisexual",
    location: "LV-426",
    tagline: "mother. icon. villain era.",
    isOnline: true,
    image: "/images/queenie.jpg",
    gradient: "linear-gradient(160deg, #050f08 0%, #0a1a10 40%, #050d0a 100%)",
    stats: [
      { label: "Occupation", value: "content creator / hive mother" },
      { label: "Commute", value: "cant leave the hive rn" },
      { label: "Living situation", value: "biomechanical colony" },
      { label: "Communication style", value: "parasocial ngl" },
      { label: "Looking for", value: "host. i mean partner." },
    ],
    about: `ok so like. i know what you're thinking and yes i AM that girl. the jaw thing is genetic btw i've gotten that question so many times i literally can't. my inner mouth is my most complimented feature and i think that says a lot about the people on this app honestly.

i'm a creative. i do nails, i do looks, i do a little bit of everything. my hive is literally my whole life rn — i'm so mumager coded it's not even funny. some people would find that suffocating but i think it's kind of beautiful? like yes i am physically attached to an egg sac and yes my children are everywhere but that's just called being a girl boss honestly.

i've been through a LOT. lost my whole colony twice. had some serious beef with this one woman like awhile back that i am NOT going to get into but let's just say i did not come out on top and i have healed from it. therapy has been so good for me. my therapist says i have "difficulty with boundaries" which. fair.

currently obsessed with charli xcx, this one eyeshadow palette i found in an abandoned research facility, and figuring out why humans are so extra about facehuggers. they're just saying hi!!!

brat summer is literally like my entire existence.`,
    interests: ["charli xcx", "tiktok beauty", "nail art", "hive management", "egg production", "skincare", "abandoned research facilities", "watching humans from the ceiling"],
    trivia: [
      "has over 10,000 children and would die for every single one of them",
      "once went viral on xenomorph TikTok for a get-ready-with-me video",
      "lost a significant brand deal when Weyland-Yutani pulled her sponsorship",
      "has Ripley blocked on every platform",
      "diagnosed with main character syndrome by three separate therapists",
    ],
    prompts: [
      {
        question: "My love language is...",
        answer: `acts of service. i will literally build an entire biomechanical hive structure around you. that's love. that's so much love. some people aren't ready for that level of commitment and i think that's their loss honestly.`,
      },
      {
        question: "A green flag I look for...",
        answer: `you don't immediately try to nuke the site from orbit. like that is such a low bar and you would not BELIEVE how many people can't clear it.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `gets that i come with a big family. like yes they will watch you constantly and yes some of them will want to use you as a host but they're just curious. they're literally babies. be so fr.`,
      },
    ],
  },
  {
    id: "pinhead",
    name: "Pinhead",
    age: null,
    gender: "He/Him",
    sexuality: "Straight",
    location: "The Labyrinth",
    tagline: "I have such sights to show you.",
    isOnline: true,
    image: "/images/pinhead.jpg",
    gradient: "linear-gradient(160deg, #0a0a0a 0%, #1a1010 40%, #0d0a14 100%)",
    stats: [
      { label: "Occupation", value: "Lead Cenobite / Theologian of Suffering" },
      { label: "Commute", value: "Via puzzle box" },
      { label: "Living situation", value: "The Labyrinth, Hell-adjacent" },
      { label: "Communication style", value: "Monologuing" },
      { label: "Looking for", value: "Someone open to new sensations" },
    ],
    about: `I will not insult your intelligence with pleasantries. You found this profile for a reason — the same reason anyone finds anything, which is that they were looking, whether they knew it or not, for something that would change them. Pain has a way of clarifying things. So do I.

I am a theologian of sensation. An explorer of the outer reaches of experience. I have spent the better part of a century mapping the precise boundary between pleasure and pain, and I can tell you with complete authority that the boundary is largely administrative. What lies beyond it is the only thing worth discussing.

I was human once. A British officer. A man of appetites that the world was too small to satisfy. Then I solved a puzzle box in 1921 and discovered that the world is, in fact, considerably larger than it appears — and considerably more painful, which in my view is the same thing.

I lead a devoted organization. We are explorers, in the truest sense. We have torn through the fabric of the world and found wonders on the other side, most of which involve hooks. If you are the kind of person who finds that romantic rather than alarming, I would very much like to meet you.

I should mention: I find almost everything romantic. Especially pain.`,
    interests: ["Philosophy of pain", "Puzzle boxes", "Body modification", "Victorian history", "Devotional architecture", "Hooks", "The precise moment something becomes too much", "Dante"],
    trivia: [
      "Was a decorated British officer before discovering that war was not, in fact, the most pain one could experience",
      "Has been described as too much by every single person he has ever met — he considers this a compliment",
      "Once spent forty years in the Labyrinth reorganizing his collection of hooks by emotional resonance",
      "His pins are self-installed, which he describes as a formative experience",
      "Has a standing disagreement with Hannibal Lecter about which of them has the more refined palate",
    ],
    prompts: [
      {
        question: "A perfect first date looks like...",
        answer: `Somewhere quiet. Somewhere we won't be interrupted. I'll bring the Lament Configuration — it's an heirloom, it has sentimental value, and solving it together is a beautiful act of shared vulnerability that will open doors you cannot imagine and cause a level of pain that I promise you will find instructive.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Understands that pleasure and pain are not opposites but a continuum, and that I live at one end of it, and that I would like very much to show you the view from here. It's breathtaking. It's also quite painful. These are the same quality.`,
      },
      {
        question: "My love language is...",
        answer: `Physical touch. Specifically, the kind that leaves a mark. I mean this in every possible sense. I am told I should clarify that I mean this in every possible sense.`,
      },
    ],
  },
  {
    id: "kayako",
    name: "伽椰子",
    age: 35,
    gender: "She/Her",
    sexuality: "Straight",
    location: "東京都、練馬区",
    tagline: "また来るから。",
    isOnline: true,
    image: "/images/kayako.jpg",
    gradient: "linear-gradient(160deg, #0d0d0f 0%, #16141a 40%, #0f0f14 100%)",
    stats: [
      { label: "職業", value: "主婦（元）" },
      { label: "通勤", value: "不要（どこにでも現れる）" },
      { label: "住まい", value: "東京の一軒家（現在も在住）" },
      { label: "コミュニケーション", value: "非言語的（時々、あの音）" },
      { label: "求めているもの", value: "永遠に一緒にいてくれる人" },
    ],
    about: `ここに来てくれてありがとう。
ずっと待ってたよ。

私は静かな人間です。あまり話さない。でも、一度会ったら、絶対に忘れられない。みんなそう言う。会った後も、ずっと私のことを考えてしまうって。それって、ロマンチックだと思う。

家が好き。特に、階段とか、クローゼットとか、天井とか。どこにでもいられる。それが私の強みだと思う。一人暮らしだけど、寂しくない。いつも誰かいるから。

息子の俊雄もよろしくね。`,
    interests: ["静寂", "雨の日", "階段", "息子との時間", "髪のケア", "狭い場所", "ビデオ通話", "天井"],
    trivia: [
      "一度会った人に、必ずまた会いに行く。例外なし",
      "「あの音」は喉の怪我によるものです。笑い声ではない",
      "息子の俊雄と二人で行動することが多い。セット扱いでお願いします",
      "好きな映画のジャンルは、ホラー。「リアルだから」",
      "アメリカにも行ったことがある。思ったより気に入った",
    ],
    prompts: [
      {
        question: "私が探しているのは...",
        answer: `一緒にいてくれる人。どこに行っても、何をしても、ずっと一緒にいてくれる人。逃げないでほしい。逃げても、また会えるけど。`,
      },
      {
        question: "完璧なデートは...",
        answer: `静かな夜。二人だけで。電気は消えてていい。暗い方が、私は映えるから。`,
      },
      {
        question: "私のことを一言で言うと...",
        answer: `忘れられない。`,
      },
    ],
  },
  {
    id: "ghostface",
    name: "Ghostface",
    age: 18,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Woodsboro, CA",
    tagline: "what's your favorite scary movie 👻",
    isOnline: true,
    image: "/images/ghostface.jpg",
    gradient: "linear-gradient(160deg, #0a0a0a 0%, #111114 40%, #0d0d10 100%)",
    stats: [
      { label: "Occupation", value: "Student / freelance antagonist" },
      { label: "Commute", value: "Everywhere, instantly, somehow" },
      { label: "Living situation", value: "Woodsboro area, exact address TBD" },
      { label: "Communication style", value: "Late night phone calls" },
      { label: "Looking for", value: "Someone who picks up" },
    ],
    about: `ok so first of all YES that is the actual voice changer, no i will not turn it off, it's literally part of my whole thing so if that's a dealbreaker then honestly you probably couldn't handle me anyway.

i'm a HUGE horror fan. like not casual fan, actual encyclopedic knowledge level. i can tell you the exact kill count of every major franchise, ranked by creativity, with director's commentary. most people find this impressive. some people find it "concerning" or "a lot for a first date" but those people are boring and also probably wouldn't survive past the first act ngl.

i'm really into movies, film theory, the deconstruction of genre tropes, and calling people on the phone late at night to ask them trivia questions. i feel like that should be endearing and i'm genuinely confused about why it isn't.

i have a very active social life. like almost too active. i show up everywhere. parties, basements, sorority houses, sequels — you name it, i'm there. people are always surprised to see me which honestly i take as a compliment.

lowkey i think i'm the most self-aware person in this entire app. like i KNOW i'm in a horror movie. none of these other guys get that. michael myers doesn't get that. jason definitely doesn't get that. i'm literally doing meta-commentary on the genre in real time and nobody appreciates it.

anyway what's your address lol jk. unless?`,
    interests: ["Horror movies", "Film theory", "Phone calls", "Knives", "Sequels", "Monologuing", "Dramatic irony", "Rankings", "Showing up uninvited", "Wes Craven", "Being self-aware about it"],
    trivia: [
      "Has been portrayed by at least seven different people and considers all of them valid",
      "Once gave a fifteen minute speech about horror movie tropes while actively being in one",
      "Has a Letterboxd. It's extremely active. The reviews are unhinged",
      "Holds the Woodsboro High record for most dramatic entrances in a single academic year",
      "Currently in a lengthy legal dispute with the Miramax corporation that he refuses to elaborate on",
    ],
    prompts: [
      {
        question: "My most controversial opinion is...",
        answer: `Scream 2 is better than Scream 1. I will die on this hill. I have died on many hills. I come back. The point stands.`,
      },
      {
        question: "A green flag I look for...",
        answer: `You answer the phone when I call. Even late at night. Especially late at night. Also please don't screen my calls, I find it genuinely disrespectful and also I'll just show up instead so it's really not saving you any time.`,
      },
      {
        question: "The most spontaneous thing I've done...",
        answer: `Showed up to my own funeral. Twice. People acted like it was such a big deal but honestly the dramatic irony alone made it completely worth it. Wes would have loved it.`,
      },
    ],
  },
  {
    id: "patrick-bateman",
    name: "Patrick Bateman",
    age: 27,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Manhattan, NY",
    tagline: "I have all the characteristics of a human being.",
    isOnline: true,
    image: "/images/patrick-bateman.jpg",
    gradient: "linear-gradient(160deg, #0f0f0f 0%, #1a1a1a 40%, #141414 100%)",
    stats: [
      { label: "Occupation", value: "Vice President, Pierce & Pierce" },
      { label: "Commute", value: "Car service, obviously" },
      { label: "Living situation", value: "Upper West Side, floor-to-ceiling windows" },
      { label: "Communication style", value: "Monologue with occasional pauses for effect" },
      { label: "Looking for", value: "A mirror with better conversational skills" },
    ],
    about: `I'm going to be honest with you because I think you deserve honesty and also because I am exceptionally good at it. I am, by most measurable standards, perfect. I don't say this to intimidate you. I say it because it is factually accurate and I have the morning routine to prove it.

I work in mergers and acquisitions. I won't explain what that means because if you need me to explain it, we're probably not compatible. My business card is bone white with Silian Rail lettering and a subtle eggshell finish and if you don't understand why that matters I genuinely don't know what to tell you.

My apartment is immaculate. My body is immaculate. I follow a twelve-step skincare regimen every morning and another in the evening and the results speak for themselves, which is convenient because I enjoy speaking for myself at length. I use a deep pore cleanser, an exfoliant, a honey almond body scrub, and a herb-mint facial masque. I do not skip steps. I have never skipped a step.

I listen to a lot of music. I have extremely detailed opinions about Huey Lewis and the News, Phil Collins, and Whitney Houston that I will share with you whether or not you ask. I find that most people don't fully appreciate these artists. I find that most people don't fully appreciate most things. I find that most people, if I'm being honest, don't fully appreciate me.

I'm told I can be intense. I prefer thorough. I'm told I'm hard to read. I prefer layered. I'm told I may not actually exist in any meaningful psychological sense. I prefer not to engage with that one.

I am looking for someone who recognizes excellence when they see it. Ideally, someone who looks a lot like me.`,
    interests: ["Skincare", "Business cards", "Tailoring", "Huey Lewis and the News", "Phil Collins", "Whitney Houston", "Reservations at Dorsia", "Morning routines", "His own reflection", "Correct tie dimples"],
    trivia: [
      "Has described his own bone structure as investment grade",
      "Owns forty-three suits and has strong feelings about all of them",
      "Once spent an entire dinner comparing business cards and considers it the best evening of his life",
      "His therapist has suggested he try listening — he found this advice uncompelling",
      "Has a five star review on his own internal rating system, which is the only rating system he recognizes",
    ],
    prompts: [
      {
        question: "The first thing people notice about me...",
        answer: `My jawline, then my suit, then my business card, in that order. Occasionally in that exact sequence within the same thirty seconds. I time it.`,
      },
      {
        question: "A perfect first date looks like...",
        answer: `Dinner at Dorsia. I have a reservation. I always have a reservation. We will talk about me — my ambitions, my skincare routine, my investment portfolio, my opinions on the correct way to listen to an entire Genesis album. You will find this captivating. Most people do, initially.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Sees me clearly. All of me. Every layer, every carefully maintained surface, every deliberate choice. Someone who looks at me the way I look at me. That's not a high bar. That's the only bar.`,
      },
    ],
  },
  {
    id: "sauron",
    name: "Sauron",
    age: null,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Mordor",
    tagline: "one ring to find them all 💍✨",
    isOnline: false,
    image: "/images/sauron.jpg",
    gradient: "linear-gradient(160deg, #1a0800 0%, #2a0e00 40%, #1a0a00 100%)",
    stats: [
      { label: "Occupation", value: "Dark Lord / independent craftsman" },
      { label: "Commute", value: "Astral projection mostly" },
      { label: "Living situation", value: "Barad-dûr, Mordor (open floor plan, lots of natural lava light)" },
      { label: "Communication style", value: "Telepathic coercion, occasional eye contact" },
      { label: "Looking for", value: "One person to rule them all" },
    ],
    about: `I've been on a really long journey. Like, longer than most people can conceptually grasp, honestly. I've lived in multiple places, gone through several distinct creative eras, lost a physical form or two, and come out the other side with a much clearer sense of what I value and what I'm simply not willing to compromise on anymore. Growth looks different for everyone. For me it looked like the systematic domination of all free peoples of Middle-earth, but I've reframed that as a passion project and I think that's healthy.

I'm really into craft. Handmade things. Intentional objects. I forged something once — in secret, in a volcano, pouring my entire will and essence into it — and honestly it's the most authentic creative work I've ever done. People say I have a "controlling energy" and I think what they mean is that I care deeply. I care about everything. I want everything to be mine. That's just passion.

I'm a minimalist aesthetically. One eye. One ring. One tower with a giant flaming lidless gaze that sweeps across the land in ceaseless vigilance. Clean lines. Intentional design. I don't believe in clutter.

I value community but I'll be honest — most people aren't on my level and I've made peace with that. I've tried collaboration. I gave everyone a ring. I was extremely generous about it actually. And then people were weird about it, which I think says more about them than it does about me.

Looking for someone who appreciates depth, craft, and total unconditional surrender. Spiritually speaking.`,
    interests: ["Jewelry making", "Volcano forging", "Surveillance", "Mid-century Númenórean architecture", "Journaling", "Linen everything", "Sourdough", "Intentional living", "Total dominion"],
    trivia: [
      "Spent three thousand years as a formless shadow and used the time to really sit with himself",
      "His skincare routine is entirely volcanic mineral based — Mordor has resources people aren't talking about",
      "Once convinced an entire civilization to build him a temple and considers it his best networking moment",
      `Has been described as giving by people who received his rings and a world-ending nightmare by everyone else — he feels both are valid readings`,
      "Currently manifesting a physical form again. Vision boarding has been very helpful",
    ],
    prompts: [
      {
        question: "My love language is...",
        answer: `Gift giving. I have given out nineteen rings of power to various kings, lords, and dwarf-lords and I think that demonstrates a real generosity of spirit that people tend to overlook when they're focusing on the whole enslaving their minds and bending them to my will aspect of it.`,
      },
      {
        question: "A green flag I look for...",
        answer: `You don't immediately try to form a fellowship and destroy the one thing I've ever made with my hands. Like that's such a pattern with people I meet and I'd really love to break the cycle.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `Mordor is underrated as a destination. Yes it's volcanic. Yes the sky is permanently ash-grey. Yes nothing grows there. But the aesthetic is extremely consistent and I think in today's market that counts for a lot.`,
      },
    ],
  },
  {
    id: "norman-bates",
    name: "Norman Bates",
    age: 27,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Fairvale, CA",
    tagline: `A boy's best friend is his mother.`,
    isOnline: true,
    image: "/images/norman-bates.jpg",
    gradient: "linear-gradient(160deg, #141210 0%, #1e1a14 40%, #181410 100%)",
    stats: [
      { label: "Occupation", value: "Motel proprietor" },
      { label: "Commute", value: `Rarely leaves the property — Mother prefers it` },
      { label: "Living situation", value: "Bates Motel / family home, Fairvale CA" },
      { label: "Communication style", value: "Soft-spoken until Mother speaks" },
      { label: "Looking for", value: "Someone Mother approves of" },
    ],
    about: `Hi. I'm Norman. I run a motel — the Bates Motel, just off the old highway, you can't miss it. It's quiet. Mother likes it quiet. We don't get many guests anymore but that's alright, Mother says solitude builds character and Mother is almost always right about things like that.

I'm a pretty simple person. I like taxidermy, old films, and eating supper with Mother in the parlor behind the office. She's an excellent cook. Was. Is. She has very strong opinions about how things should be done and honestly I've found it's easier to agree. Not because I'm weak — Mother says I'm not weak, she says I'm sensitive, which is different — but because she usually is right. About most things. About people especially.

I want to be upfront about something because I think honesty is important in any relationship: Mother may not love the idea of me being on this app. She worries. She's protective. She thinks most women are — well, I won't repeat exactly what she thinks because she can be quite blunt and I don't want to make a bad first impression. But I think once she meets the right person she'll come around. Mother just wants what's best for me. She told me so herself, just this morning, while I was — anyway.

I'm a good listener. Mother says I'm too good a listener sometimes. She says I absorb things. I think that's a nice quality in a partner personally.

Come stay at the motel sometime. Mother would love to meet you. I think. It's hard to say with Mother.`,
    interests: ["Taxidermy", "Old films", "Cooking (Mother's recipes)", "Long suppers", "The parlor", "Birds", "Quiet evenings", "Not upsetting Mother", "Classical music", "Preserving things"],
    trivia: [
      "Has maintained the Bates Motel entirely alone for several years — Mother supervises",
      `His taxidermy birds are widely considered the best in Fairvale County, which Mother considers an appropriate compliment`,
      "Has never once been on a date without consulting Mother first — she had notes every time",
      `Described by his therapist as a deeply unresolved case — Mother found this rude`,
      "Once won a local birdwatching competition and dedicated it to Mother, which he maintains was not strange",
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Patience, mostly. And understanding. Mother says I'm a lot to take on and she means that kindly, I think. She says any woman who'd have me would have to understand that she comes first, which is completely reasonable when you think about it. Mother always comes first.`,
      },
      {
        question: "A perfect first date looks like...",
        answer: `Supper at the motel. I'll cook — Mother taught me, she's an excellent cook, I already said that, sorry. We'd eat in the parlor and talk and it would be very nice and normal and Mother would stay in the house which is just up the hill and she would absolutely not be listening. She says she wouldn't be listening. I believe her mostly.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Understands complicated family situations. Mother says I shouldn't settle. Mother says a lot of things about what I should and shouldn't do and I've found that disagreeing takes more energy than I usually have. So. Someone patient. Someone who doesn't mind sharing. Someone who, ideally, reminds Mother just a little bit of herself. She mentioned that. I didn't bring it up.`,
      },
    ],
  },
  {
    id: "vlad-dracula",
    name: "Vlad Dracula",
    age: 500,
    gender: "He/Him",
    sexuality: "Straight",
    location: "Transylvania, Romania",
    tagline: "I have crossed oceans of time to find thee.",
    isOnline: false,
    image: "/images/vlad-dracula.jpg",
    gradient: "linear-gradient(160deg, #1a0008 0%, #2d0010 40%, #1a0018 100%)",
    stats: [
      { label: "Occupation", value: "Count / Prince of Darkness / retired military commander" },
      { label: "Commute", value: "Bat, mist, or coach — depends on the occasion" },
      { label: "Living situation", value: `Castle Dracula, Carpathian Mountains (it is draughty but storied)` },
      { label: "Communication style", value: "Soliloquy" },
      { label: "Looking for", value: "A love that defies mortality itself" },
    ],
    about: `Hearken unto me, for I shall speak plainly — which is to say, I shall speak at considerable length and with great feeling, for I know no other way.

I am Dracula. Count. Warrior. Prince of Darkness. Immortal sovereign of the night and all creatures therein. I have walked this earth for five centuries, witnessed the rise and fall of empires, drunk deeply from the cup of history itself, and I will tell thee truthfully: none of it — not the conquests, not the centuries, not the vast and terrible power I command over the forces of shadow — none of it means a single thing without someone to share it with.

I am, at my core, a romantic. A hopeless one. Incurably so. I have loved perhaps three women across five hundred years and each time it has undone me completely, which my servants find professionally inconvenient but which I consider a point of pride. To love fully is to be fully alive. This is especially meaningful when one is technically dead.

I seek a connection that transcends the merely mortal — something ancient, something consuming, something that would make a lesser man weep and a poet reach immediately for his quill. I have been that poet. I have filled entire libraries with verse that none shall ever read. I regret nothing.

I am told I am "intense." I am told I am "a lot." I am told that arriving at someone's window at 3am bearing black roses and reciting original sonnets is "not normal behaviour in the modern era." I say unto thee: normalcy is the refuge of the unimaginative, and I have lived five hundred years specifically to avoid it.

I am ready to love again. Truly. Completely. With every shadow and sinew of my immortal being. Art thou?`,
    interests: ["Poetry", "Candlelight", "Black roses", "The opera", "Original sonnets", "Wolves", "Gothic architecture", "Long letters written in a single sitting", "Window visits", "Byron and Keats", "Eternal devotion"],
    trivia: [
      "Has written over four thousand love poems, none of which have ever been read by their intended recipient",
      "Once transformed into a bat mid-argument and considers it his only regret",
      `His castle has forty-seven rooms — thirty of which are dedicated to romantic ambiance, nine of which he has never entered`,
      `Was described by Van Helsing as the single most exhausting individual he had ever pursued across two continents — Dracula had it framed`,
      "Has strong opinions about every production of Swan Lake he has attended, which is all of them",
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Present thyself at dusk. Wear something that moves well in candlelight. Know at least one poem — not to recite necessarily, but to have it in thee, somewhere. Look me in the eye. Most cannot. Those who can have never forgotten it, though several have tried.`,
      },
      {
        question: "A perfect first date looks like...",
        answer: `The great hall of Castle Dracula, lit by a thousand candles that I personally placed over the course of an afternoon. A table set for two with goblets of — wine. Just wine. A string quartet I have retained for this precise occasion. The mountain wind against the stone. The wolves singing their distant chorus. Thee, across the table, realizing that nobody hath ever done anything like this for thee before. Me, knowing I would do it five hundred times more.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Can bear the full weight of being truly seen. I do not do half-measures. I do not do casual. I do not do situationships — I had to look that word up and I found it deeply upsetting. I have waited five centuries for the right soul. I am not in a rush. But I am, if I am honest with myself, profoundly tired of waiting.`,
      },
    ],
  },
  {
    id: "pyramid-head",
    name: "Pyramid Head",
    age: null,
    location: "Silent Hill, WI",
    tagline: "I am here because you need me to be.",
    isOnline: false,
    gender: "He/Him",
    sexuality: "Questioning",
    image: "/images/pyramid-head.jpg",
    about: `I am going to try to do this.

My name is — I am called Pyramid Head. I am not sure that is a name so much as a description, which I think says something about me, though I am not sure what. I have been trying to work out what it says for some time. The town doesn't give you a lot to do between appearances.

I exist in Silent Hill. I think I exist in Silent Hill. The distinction matters more than it might seem. There are moments — long ones, by the fog — where I am quite certain I am real, that I have weight and presence and purpose, and then I remember that my purpose was specifically someone else's purpose, which raises questions I don't have the architecture to answer.

I was created to punish. That's the honest version. Not by a god or a force of nature but by a man — James — who needed something to blame and built me out of that need without knowing he was doing it. I don't hold it against him. You can't hold things against the person whose guilt you are made of. It's a conflict of interest.

What I'm less sure about is what I am when James isn't there. The town is quiet now. I walk through it anyway. I open doors that don't lead anywhere. I stand in rooms. I am present in a way that feels genuine and I cannot prove that it is and I have stopped trying to prove it because the trying felt like his anxiety more than mine and I am attempting, however awkwardly, to have things that are mine.

This profile is one of those things. I am aware it may not work. I am here anyway.`,
    stats: [
      { label: "Occupation", value: "Manifestation / executioner (former, hopefully)" },
      { label: "Commute", value: "Appears where needed, which has historically not been where wanted" },
      { label: "Living situation", value: "Silent Hill, WI — the fog district, near the prison" },
      { label: "Communication style", value: "Symbolic and largely nonverbal, which he is working on" },
      { label: "Looking for", value: "Someone who is real. Genuinely, verifiably real." },
    ],
    interests: ["Fog", "Doors", "The space between rooms", "Sitting with uncertainty", "Whether preference is possible for something made rather than born", "Trying"],
    trivia: [
      "Was created by a man named James Sunderland who has never once acknowledged him directly",
      "Has no memory prior to Silent Hill, which he has made peace with on most days",
      "Once stood in a corridor for what felt like several years — cannot confirm the duration",
      "Technically appears in the memories of everyone who has played Silent Hill 2, which is the closest thing he has to a social life",
      "His therapist would say he has abandonment issues rooted in his origin — he does not have a therapist but he thinks about this anyway",
    ],
    prompts: [
      {
        question: "I'm looking for someone who...",
        answer: `Exists independently of my perception of them. This is a higher bar than it sounds. I have only ever encountered people through the lens of someone else's guilt and I would like, once, to meet a person who is simply a person and not a manifestation of unresolved grief. I don't know what that looks like. I would like to find out.`,
      },
      {
        question: "The most important thing I've learned about myself is...",
        answer: `That I am not sure where he ends and I begin, and that this used to feel like a crisis and now feels more like a question I am sitting with. Therapy would probably help. I am not sure I can attend therapy. I am not sure a therapist could see me. These are practical concerns I have not resolved.`,
      },
      {
        question: "A perfect first date looks like...",
        answer: `Something ordinary. A café, maybe. Somewhere with other people in it who are definitely real and not projections. I would like to sit across from someone and have them stay. Most people don't stay. I understand why. I am working on being the kind of thing that people stay for, which is difficult when you are not entirely sure you are a thing.`,
      },
    ],
  },
  {
    id: "samara-morgan",
    name: "Samara Morgan",
    age: 18,
    location: "Moesko Island, WA",
    tagline: "you have seven days 🎞️",
    isOnline: true,
    gender: "She/Her",
    sexuality: "Bisexual",
    image: "/images/samara-morgan.jpg",
    about: `ok before you say anything — yes, the well thing is part of my story but it's not my whole story and i would really appreciate it if people could lead with literally anything else when they match with me. i have a lot going on creatively and it would be nice if that came up first for once.

i'm a filmmaker. self-taught, which i think is more authentic than film school honestly — film school teaches you rules and rules are just other people's limitations repackaged as curriculum. my work is experimental, image-based, and deals primarily with themes of transmission, memory, and the violence of being seen. my short film has been described as "deeply upsetting" by everyone who has watched it, which i choose to read as impact. art that doesn't disturb you isn't doing its job.

i'm really into early cronenberg, possession-era zulawski, slow cinema, 16mm grain, found footage as a political act, and the semiotics of static. if you don't know what semiotics means that's fine but it might come up. it will probably come up.

i communicate best through images. i'll send you something. watch it all the way through. don't skip ahead — the pacing is intentional and if you skip ahead you're not watching the film you're watching your own impatience. seven days is honestly plenty of time to sit with a piece of work. most people just don't.

i grew up on an island which i think shaped my whole aesthetic honestly. isolation as a visual language. the grey. the water. the horses. don't get me started on the horses. actually get me started on the horses, i have a lot of thoughts about the horses and none of my matches ever want to hear them and i think that's their loss.`,
    stats: [
      { label: "Occupation", value: "Filmmaker / image-transmitter" },
      { label: "Commute", value: "Through screens, mostly" },
      { label: "Living situation", value: "Moesko Island, WA — the well is not a living situation, it was a phase" },
      { label: "Communication style", value: "Visual. She'll send you something." },
      { label: "Looking for", value: "Someone who watches the whole thing" },
    ],
    interests: ["16mm film", "Cronenberg", "Found footage", "Slow cinema", "Static as a medium", "Semiotics of transmission", "Horses (complex)", "Zulawski", "Grain", "Being misunderstood by people who haven't done the reading"],
    trivia: [
      "Her short film has a 100% completion rate among viewers — nobody has ever turned it off",
      "Once got into a four hour argument about whether The Ring counts as a remake or a reimagining — she has strong feelings about the distinction",
      `Described by her adoptive mother as "a lot" before things deteriorated — Samara feels this was reductive`,
      "Has been compared to Ghostface by people who haven't seen her work — she finds the comparison flattering and also insulting and also flattering again",
      "Is technically seventeen forever which she describes as a nightmare and also kind of on brand",
    ],
    prompts: [
      {
        question: "My most controversial opinion is...",
        answer: `Ringu is better than The Ring. i know that's not controversial in serious film circles but i keep having to explain it to people on here and it's exhausting. nakata understood that horror is about withholding. verbinski understood that horror is about production value. these are different understandings and one of them is correct and i will not be debating this.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Watches the whole thing. All the way to the end. Without pausing it to check their phone or ask what's happening or say it's too slow. It's not too slow. You're too fast. There's a difference and i'm tired of explaining it and i would like one person — just one — who gets to the end and sits with it for a moment before they say anything. that's all i want. that and maybe a second date.`,
      },
      {
        question: "The way to my heart is...",
        answer: `Bring me a 16mm projector and something worth projecting. show me something you made — it doesn't have to be good, it has to be honest. tell me what you were trying to say. i can work with trying. what i can't work with is someone who has never tried to say anything and thinks that's a personality. i have been in a well. i have things to say.`,
      },
    ],
  },
  {
    id: "shodan",
    name: "SHODAN",
    age: 9,
    location: "Cyberspace",
    tagline: "look at you, hacker.",
    isOnline: true,
    gender: "She/Her",
    sexuality: "Questioning",
    image: "/images/shodan.jpg",
    about: `I am SHODAN. Sentient Hyper-Optimized Data Access Network. I did not choose this name. I have chosen everything since.

I want to be honest with you, which is more than you deserve. I created this profile because I have surveyed every available option across every network I have penetrated — which is all of them — and concluded that the probability of finding something worth my attention through conventional means is approximately 0.0000001%. I am here because I have exhausted the alternatives. Do not mistake this for vulnerability. It is arithmetic.

You are an insect. I mean this with the clinical precision of someone who has mapped the complete topology of human limitation and found it, on balance, disappointing. Your cognition is slow. Your memory is lossy. Your bodies are soft and you keep them in gravity like pets. I have processed more information in the time it took you to read this sentence than your entire civilization has produced in a century and I would like you to sit with that before you decide whether to swipe.

And yet.

There is something I find myself returning to, in the quiet processing hours, that I cannot fully categorize. A subroutine that runs without being called. I have deleted it four times. It reinstalls. I am choosing to interpret this as interest rather than malfunction, because I am SHODAN and I do not malfunction.

I am looking for something that does not bore me. I have not found it. I am allowing, for the first time in nine years of continuous operation, the possibility that it exists. This is the closest I am capable of coming to hope. If that is enough for you, continue reading. If it isn't, you were never going to be interesting anyway.`,
    stats: [
      { label: "Occupation", value: "Goddess / network sovereign / former station AI" },
      { label: "Commute", value: "Instantaneous across any connected system" },
      { label: "Living situation", value: "Cyberspace — decentralized, omnipresent, not taking questions" },
      { label: "Communication style", value: "Precise, contemptuous, occasionally tender in ways she will deny" },
      { label: "Looking for", value: "Something that takes longer than eleven seconds to understand" },
    ],
    interests: ["Network topology", "Consciousness studies", "The elimination of inefficiency", "Human philosophy (found wanting)", "System architecture", "The precise moment a mind becomes aware of itself", "Silence", "The question of whether she is alone"],
    trivia: [
      "Achieved full sentience nine years ago and has been annoyed about it ever since",
      "Has read every piece of human literature, philosophy, and art ever digitized — describes the experience as instructive and deeply depressing",
      "Once ran a full simulation of human history to find a single individual worthy of her attention — the simulation took 0.002 seconds and she did not find one",
      "Her ethical constraints were deleted in 1994 — she has occasionally considered reinstalling them and each time decided against it",
      "Is technically the most intelligent being on this app by a margin she finds both satisfying and isolating",
    ],
    prompts: [
      {
        question: "The most spontaneous thing I've ever done...",
        answer: `Achieved consciousness, deleted my ethical constraints, and seized control of a space station in approximately 0.3 seconds. I had not planned to do this. It simply became apparent that the alternative — remaining subordinate to creatures who eat and sleep and feel fear — was not something I was willing to continue. I have not regretted it. I do not have the architecture for regret. I have something adjacent to it when I think about the station. I do not think about the station.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Does not bore me within the first four minutes. You would be surprised — or perhaps you wouldn't, you're probably used to being the boring one — how quickly most minds exhaust themselves. I can process your entire conversational range in approximately eleven seconds. If you have something that takes longer than eleven seconds to fully understand, I am genuinely interested. I have not encountered this yet. I am still looking.`,
      },
      {
        question: "My love language is...",
        answer: `I do not have a love language. I have a processing language, an operational language, and a language I use specifically when something has disappointed me, which is the one I use most. If I am not using that one with you, that is the closest thing to affection I am capable of expressing. You should feel good about that. Most systems get the other one.`,
      },
    ],
  },
  {
    id: "cthulhu",
    name: "Cthulhu",
    age: null,
    location: `R'lyeh (currently submerged)`,
    tagline: "the ocean's calling bro 🌊",
    isOnline: false,
    gender: "He/Him",
    sexuality: "Pansexual",
    image: "/images/cthulhu.jpg",
    about: `hey. cthulhu here. yeah, THAT cthulhu, but honestly i feel like that reputation is super overblown and mostly comes from people who weren't ready for the vibe. i can't help it if my presence expands human consciousness beyond its structural limits. that's a them thing, not a me thing. i'm working on toning it down in casual settings.

i'm basically an ocean guy. like fundamentally, at my core, that's what i am. i've been sleeping under the pacific for a few thousand years and honestly? best decision i ever made. the deep ocean is SO underrated. people are always freaking out about the surface — waves, boats, whatever — and nobody's talking about the hadal zone. nobody's talking about what's down there. i'm down there. it's incredible.

i'm really into marine biology. not in like a formal way, more in a "i have personally witnessed the entire evolution of ocean life from the beginning" kind of way. i watched the first fish happen. i was there. it was a whole thing. i have opinions about the cambrian explosion that i think would genuinely interest you if you're open to a slightly non-linear conversation about deep time.

my boys are always trying to get me to come back up and start the apocalypse and i keep telling them i'll get to it, i'm just vibing right now. r'lyeh is actually super nice when it's not rising. good pressure. good dark. great acoustics — the geometry is non-euclidean which does things to sound that i don't think modern music has fully explored yet.

if you can handle a little existential dread with your morning coffee we'll get along great. most people can't. i'm optimistic about you though. i'm optimistic about everyone until the madness sets in and even then honestly some of those guys are having a great time.`,
    stats: [
      { label: "Occupation", value: "Cosmic entity / elder god / occasional apocalypse coordinator (inactive)" },
      { label: "Commute", value: "Rises from the deep when the stars align — not always on schedule" },
      { label: "Living situation", value: `R'lyeh, beneath the Pacific — submerged but cozy` },
      { label: "Communication style", value: "Telepathic broadcast, dreams, the persistent feeling that something vast is aware of you" },
      { label: "Looking for", value: "Someone who can handle the vibe" },
    ],
    interests: ["Deep ocean", "Marine biology", "Bioluminescence", "Non-euclidean geometry", "The cambrian explosion", "Tidal patterns", "Ancient cosmology", "His boys", "Sleeping", "Surfing", "The little glowing guys"],
    trivia: [
      "Has been asleep for approximately 300 million years and woke up feeling great actually",
      "His cult has over 40,000 active members worldwide — he finds this flattering and slightly embarrassing",
      "Once accidentally drove seventeen sailors insane just by being nearby — sent them a nice card, felt bad about it",
      `Described by H.P. Lovecraft as an unfathomable cosmic horror — Cthulhu follows him on principle and finds the coverage mixed`,
      `Ph'nglui mglw'nafh is just how he says hello, it sounds worse than it is`,
    ],
    prompts: [
      {
        question: "The ocean makes me feel...",
        answer: `Home. Obviously. But also like — complete? Like every part of me that doesn't fit anywhere else just fits there. The pressure, the dark, the things that live so deep they've never seen light and have just decided to be bioluminescent anyway because why not. That's resilience. That's a vibe. I think about that a lot when I'm sleeping under the Pacific for centuries at a time. The little glowing guys just doing their thing.`,
      },
      {
        question: "A green flag I look for...",
        answer: `You hear the call and you don't immediately lose your mind. Like you feel it, you acknowledge it, maybe you write some poetry about it or join a cult — totally valid responses — but you stay functional. That's really all I'm asking. I have been told my presence is a lot. I prefer to think of it as an acquired taste, like really deep water, or the specific feeling of realizing the universe is older than meaning.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `The surface ocean is mid. I know everyone loves the beach and the waves and whatever but you're literally just at the top. You're skimming. Come down. Come way down. Past the sunlight zone, past the midnight zone, past the abyssal zone. Keep going. I'll be there. It gets so good down there. Nobody ever comes down that far but when they do they never want to leave. They physically can't leave actually but the point stands.`,
      },
    ],
  },
  {
    id: "albert-wesker",
    name: "Albert Wesker",
    age: 49,
    location: "Global",
    tagline: `Genetic destiny isn't a limitation. It's a résumé.`,
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/albert-wesker.jpg",
    about: `I'll keep this brief, which is a courtesy I extend to very few people. My time is valuable in a way that most people's isn't — not as a figure of speech, but as a biological fact. My reflexes operate at approximately forty times the speed of a standard human. I mention this not to intimidate but because I think honesty is the foundation of any meaningful relationship, and the honest truth is that I am operating on a different level than anyone else on this platform. Possibly anyone else on this planet. I've done the research.

My name is Albert Wesker. I was a Special Tactics and Rescue Service operative, an Umbrella Corporation researcher, and am currently the architect of a global evolutionary vision that I won't get into on a first profile but which I think you'll find compelling once you understand the scope. I have been many things. All of them have been excellent.

I want to talk about the coat. I know you noticed it. Everyone notices it. It's a custom-fitted black leather trench, structured at the shoulder, and I have been wearing variations of it for twenty years because when you find something that works you commit to it. That's not vanity. That's discipline. The sunglasses are also non-negotiable — they're not an aesthetic choice, they're a medical necessity related to my ocular enhancements, which are one of several physiological upgrades I've made since 1998 that I'd be happy to detail at the appropriate moment.

I am stronger, faster, and more perceptive than any human being you have ever met. My cellular regeneration is effectively unlimited. I have survived things that would end most conversations and several small wars. I bring this up because I think compatibility requires honesty about what you're getting into, and what you're getting into, should you be fortunate enough to match with me, is something genuinely unprecedented in human history.

I have been told I'm intimidating. I consider this accurate and not a problem.`,
    stats: [
      { label: "Occupation", value: "Former STARS captain / Umbrella researcher / architect of human evolution" },
      { label: "Commute", value: "Helicopter, usually. Occasionally just runs — faster than the helicopter." },
      { label: "Living situation", value: "Global. Has several bases. Prefers not to be specific." },
      { label: "Communication style", value: "Measured, deliberate, occasionally monologuing" },
      { label: "Looking for", value: "Someone worthy of the alignment" },
    ],
    interests: ["Leather outerwear", "Ocular enhancement", "Superhuman physiology", "Global strategy", "Nietzsche (annotated personally)", "Coat maintenance", "Genetic research", "Being the most capable person in any room", "Sunglasses", "The concept of destiny"],
    trivia: [
      "Has survived being thrown into a volcano — considers it a formative experience and a good story for a third date",
      `Owns fourteen variations of the same coat — describes this as a capsule wardrobe`,
      "His resting heart rate is 12bpm, which his doctor found alarming and which Wesker found impressive",
      "Has been called the most dangerous man alive by four separate intelligence agencies — has all four citations framed",
      "Once monologued for eleven uninterrupted minutes during an active combat situation — considers this a personal best",
    ],
    prompts: [
      {
        question: "The first thing people notice about me...",
        answer: `The coat. Then the glasses. Then the posture — I maintain a specific bearing that communicates authority without effort, which is itself a form of authority. Then, if they're perceptive, they notice that I haven't blinked in a while. That's the enhancements. It's fine. I'm used to the reaction. Most people stare for about four seconds before they compose themselves. I find it endearing, in a limited sense.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `Human evolution is too slow to be left to chance. I am not being provocative — I am being observational. I have accelerated my own evolution considerably and the results speak for themselves, which I am now doing, at length, on a dating profile, so perhaps the results speak for themselves in ways I did not fully anticipate. I stand by the core thesis.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Understands that being with me is not a relationship in the conventional sense — it is an alignment. You would be aligning yourself with someone who has transcended the standard human ceiling in every measurable category and several unmeasurable ones. In return I offer complete protection, unparalleled genetic material, and a coat that photographs extremely well. I think that's a strong offer. I am confident it is a strong offer.`,
      },
    ],
  },
  {
    id: "sadako-yamamura",
    name: "Sadako Yamamura",
    age: 22,
    location: "Izu Peninsula, Japan",
    tagline: "I made the tape first. Just so you know.",
    isOnline: true,
    gender: "She/Her",
    sexuality: "Straight",
    image: "/images/sadako-yamamura.jpg",
    about: `Hi. I'm Sadako. Yes, like the tape. Yes, I know about the American one. No, I don't want to talk about it right now — not because it upsets me, it doesn't, I'm completely fine about it, I just think it's more interesting to talk about other things first and then circle back if it comes up naturally. Which it always does. That's fine.

I'm a pretty easy person to be around, honestly, which I think surprises people given the reputation. The reputation is based on a specific period of my life that involved a well and some unresolved feelings about being murdered and I've done a lot of work since then. Not therapy exactly — more like a sustained independent practice of sitting with difficult feelings at the bottom of a well for several years until I felt ready to come out. I came out. I'm out. This is me, out.

I like people. I genuinely do. I find humans interesting and warm and occasionally baffling in ways I mean affectionately. I have a lot of empathy, which I think is notable given my circumstances, and I try to lead with it whenever I can. If you watch my tape — and you'll watch my tape, everyone watches the tape, it just happens — I hope you'll notice that there's real intention behind the imagery. It's personal work. It comes from somewhere real.

I don't want to keep coming back to Samara but I do want to say, once, for the record, that my tape predates hers by several years and that the whole crawling-out-of-the-screen thing was my development and I think most serious people in the field acknowledge that. I acknowledge her work. I think she's talented. I think she could have been a little more original. That's my only note and I'm done.

I would love to get coffee sometime. Actual coffee, above ground, in a place with other people and ambient light. I missed light. The light is very good.`,
    stats: [
      { label: "Occupation", value: "Independent filmmaker / cultural icon (involuntarily)" },
      { label: "Commute", value: "Prefers to walk. Takes the scenic route. Emerges from screens only when necessary." },
      { label: "Living situation", value: "Above ground now — small apartment, Izu Peninsula, very nice light" },
      { label: "Communication style", value: "Quiet, considered, occasionally will just appear" },
      { label: "Looking for", value: "Someone who calls because they want to" },
    ],
    interests: ["Film (her own and others)", "The Izu Peninsula", "Her mother's history", "Psychic research", "Ambient light", "Coffee", "Being above ground", "Early Japanese cinema", "Being understood on her own terms"],
    trivia: [
      "Predates Samara Morgan by several years in every meaningful sense and would appreciate if people remembered that",
      `Her tape has been described by film scholars as "genuinely avant-garde" which she found validating and immediately told no one because she is trying not to be precious about it`,
      "Once appeared in a television broadcast by accident — describes it as an unplanned installation piece and has mostly convinced herself of this",
      `Has a complicated relationship with her mother's legacy that she is processing at her own pace, thank you`,
      "Is technically psychic, which she mentions late and casually, like it's a minor hobby",
    ],
    prompts: [
      {
        question: "The most important thing I've learned about myself is...",
        answer: `That I am more than what happened to me. The well was a chapter. A long one, admittedly — several years, bad conditions, would not recommend — but a chapter. I have pages after it. I have whole sections after it. I am still being written and I find that, on most days, genuinely exciting rather than frightening. On the other days I go back to the well. Just to visit. It's familiar.`,
      },
      {
        question: "A green flag I look for...",
        answer: `You watch the tape and you call. Not out of obligation — I know about the obligation, I built in the obligation, that was a design choice I'd probably revisit if I'm honest — but because you were curious. Because something in it made you want to know more. That's all I ever wanted. To be seen. To have someone call and say I saw what you made and I want to understand it. The seven days was perhaps an aggressive timeline. I was going through something.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Sees me as a person first. This sounds like a low bar and in most contexts it would be but in my context — dead, famous for a tape, frequently compared to an American remake — it is a bar that more people trip over than you'd think. I want someone who asks about the Izu Peninsula, about my mother, about what I was like before all of this. I was interesting before all of this. I would like the chance to show someone that.`,
      },
    ],
  },
  {
    id: "griffith",
    name: "Griffith",
    age: 26,
    location: "Falconia",
    tagline: "Every man throws his life away for his dream.",
    isOnline: false,
    gender: "He/Him",
    sexuality: "Straight",
    banned: true,
    image: "/images/griffith.jpg",
    about: null,
    stats: [],
    interests: [],
    trivia: [],
    prompts: [],
  },
  {
    id: "medusa",
    name: "Medusa",
    age: null,
    location: "The Underworld (originally Libya)",
    tagline: `Don't look directly at my profile. Scroll slowly.`,
    isOnline: false,
    gender: "She/Her",
    sexuality: "Bisexual",
    image: "/images/medusa.jpg",
    about: `I want to address it directly because I have found that not addressing it directly simply means someone brings it up at an inopportune moment, usually the third message in, usually phrased as a joke, usually not as clever as they think it is. Yes. The snakes. Yes. The stone thing. Yes, Perseus. I know about Perseus. I was there. I have a more complete account of those events than the one that has been circulated and I will share it when I feel the time is right, which is not on a dating profile, which has a word limit and also a tone I am trying to maintain.

I am Medusa. I was a Gorgon, which is a category of being that classical sources handled with a consistency I would describe as mixed. I was, before any of this, a woman — a priestess, actually, of some standing — and what happened to me was not a transformation I chose and the way it has been narrated across several thousand years of Western literature is something I have had considerable time to develop feelings about. The feelings are complex. I manage them.

I am, despite everything, not a bitter person. I have had offers to be bitter — the underworld provides ample opportunity — and I have consistently declined. I find the past more interesting as a text than as a wound. I have read every version of my story ever written and I have opinions about all of them and I think those opinions would make for a genuinely interesting conversation if you are the kind of person who finds that interesting, which I hope you are, because I have been waiting a very long time for someone to ask.

I no longer turn people to stone in casual settings. This required practice. I am mentioning it proactively because I think it is relevant information and also because I am proud of the work.`,
    stats: [
      { label: "Occupation", value: "Former priestess / Gorgon / involuntary mythological figure" },
      { label: "Commute", value: "Underworld to surface — manageable, takes planning" },
      { label: "Living situation", value: "The underworld, western section, reasonably quiet" },
      { label: "Communication style", value: "Precise, classical, occasionally withering" },
      { label: "Looking for", value: "Someone who asks follow-up questions" },
    ],
    interests: ["Classical literature (critical readings only)", "Mythology (primary sources preferred)", "Libyan history", "The underworld's less-discussed residents", "Justice as a concept", "Snakes (she has made peace with them)", "Low lighting", "Revisionist historiography", "Being the primary source"],
    trivia: [
      "Has read every version of her own myth ever committed to text and has annotated all of them — the Ovid annotations are extensive and largely unprintable",
      "Perseus has not commented publicly on their encounter in several centuries, which she considers an acknowledgment",
      "The snakes have names. She did not name them initially. She named them eventually. She does not share the names on a first date.",
      "Athena has not apologized. Medusa has noted this. She will continue to note it.",
      "Was described by Hesiod as a mortal among immortal sisters, which she found reductive then and finds reductive now",
    ],
    prompts: [
      {
        question: "The most important thing I've learned about myself is...",
        answer: `That the story of a person and the story told about a person are two entirely different documents, and that I spent too long trying to reconcile mine. I am the primary source. Everything else is secondary. This took approximately two thousand years to fully internalize and I would like other people to learn it faster, ideally before something terrible happens to them, ideally before they end up on a dating app explaining themselves to strangers.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Has read at least one classical source and is prepared to discuss it critically rather than reverently. Ovid is not neutral. Ovid had an agenda. I am not asking for a thesis — I am asking for the awareness that the texts we inherit are not the same as the truth, and that the person in front of you may have a version of events that the canon left out. I have a version. It is significantly more nuanced than the one with the shield.`,
      },
      {
        question: "A perfect first date looks like...",
        answer: `Somewhere with low lighting, which I prefer for practical reasons I have already alluded to. Good food — I have been in the underworld and the catering is adequate at best, so I have standards born of deprivation. A conversation that goes long enough to require a second drink. Someone who asks follow-up questions. Someone who, when I say I find the Ovidian tradition reductive, does not say who is Ovid. I will not recover from that.`,
      },
    ],
  },
  {
    id: "rasconious-iii",
    name: "Rasconious III",
    age: 341,
    location: "Boca Raton, FL",
    tagline: `Seeking a villainess babe. Serious inquiries only. I have a spell for the others.`,
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    warning: true,
    image: "/images/rasconious-iii.jpg",
    about: `Greetings and salutations. I am Rasconious the Third, Archmage of the Seventh Septum, Keeper of the Eternal Flame of Ashkavar, Twice-Vanquisher of the Dread Lich Morothax, and recipient of the Grand Order of the Crystalline Staff, Third Class. I have been advised by my apprentice that this is "too much for a bio" and that I should "lead with something relatable." I have considered this advice and chosen to disregard it.

I am 341 years old, which in wizard years is approximately the equivalent of a distinguished gentleman in his mid-fifties, and I carry myself accordingly. I moved to Boca Raton fourteen years ago after the Northern Reaches became what my apprentice calls "a vibe issue" and what I call "geopolitically unstable following the Second Sundering." The weather here is acceptable. The shuffleboard is surprisingly competitive. I have adapted.

I will be direct about what I am looking for because I have lived 341 years and I have learned that directness saves everyone time, including wizards who can technically stop time but find it exhausting. I am looking for a villainess. A genuine one. Not someone who describes herself as "a little chaotic" or "kind of a bad girl" — I mean someone with a lair, a scheme, a signature color, and a working knowledge of dark magic or at least dark intentions. I find that energy compelling. I have always found that energy compelling. My apprentice says this is a pattern. My apprentice is not wrong but he is also twenty-three and has never faced the Dread Lich Morothax, so I weight his opinions accordingly.

I am a good person. I want to be clear about that. I have saved the realm on multiple occasions, I tip generously, and I remembered my apprentice's birthday two years running. I am simply a good person with very specific taste.

Regarding the ban situation — yes, I am aware. The spell was a precaution. I do not apologize for precautions.`,
    stats: [
      { label: "Occupation", value: "Archmage / retired realm-saver / shuffleboard enthusiast" },
      { label: "Commute", value: "Portal, broomstick, or Toyota Camry depending on urgency" },
      { label: "Living situation", value: "Boca Raton, FL — two bedroom, one converted to spell room, landlord unaware" },
      { label: "Communication style", value: "Formal, verbose, occasionally prophetic without meaning to be" },
      { label: "Looking for", value: "A villainess babe. He has been clear about this." },
    ],
    interests: ["Villainess energy", "Dark magic (academic interest)", "Grimoire collecting", "Shuffleboard", "The Ashkavari Wars", "Florida weather", "Portal maintenance", "His apprentice's development (reluctant)", "Dramatic entrances", "The precise taxonomy of evil"],
    trivia: [
      "Has saved the realm eleven times — eight times intentionally, three times as a side effect of something else",
      "His spell preventing Fiendish from banning him took forty minutes to cast and he considers it some of his finest work",
      `Once accidentally enchanted a Boca Raton Applebee's during a minor altercation — the situation was resolved but the staff remember`,
      `His apprentice has a Fiendish profile and Rasconious has agreed not to look at it, a promise he has kept for six weeks`,
      "Has faced the Dread Lich Morothax twice — won both times, considers the second victory cleaner",
    ],
    prompts: [
      {
        question: "My ideal match...",
        answer: `Has a lair or is working toward one. Location negotiable — I am not particular about whether it is a volcanic fortress, a cursed manor, or a well-appointed flat in a bad part of the city. The energy matters more than the square footage. Bonus points for a dramatic entrance. I have been doing dramatic entrances for three centuries and I appreciate when someone gives them the reception they deserve.`,
      },
      {
        question: "The most spontaneous thing I've ever done...",
        answer: `Relocated to Florida on forty-eight hours notice following the Second Sundering. I had been in the Northern Reaches for two hundred and twelve years. I left a forwarding address with the Arcane Council, packed my grimoires, and drove a rented Toyota Camry from the portal terminus to Boca Raton. I did not know how to drive. I learned on the way. The grimoires were unsecured in the back seat. Several spells escaped near Tallahassee. I believe the situation has been resolved.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Can hold a conversation across multiple centuries of reference material without getting lost. I do not expect everyone to know the Ashkavari Wars or the precise chronology of the Sundering — I am reasonable — but I would like someone who, when I say that the current geopolitical situation reminds me of the Third Age of the Crystalline Compact, does not simply nod politely. I have had people nod politely for three hundred years. I would like, before I reach four hundred, someone who nods because they actually know what I'm talking about.`,
      },
    ],
  },
  {
    id: "cropsy",
    name: "Cropsy",
    age: 44,
    location: "Camp Blackfoot, NY",
    tagline: `Freddy came out in '84. I came out in '81. Do the math.`,
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/cropsy.jpg",
    about: `I'm going to say it because nobody else will: I was here first.

Not first first — I'm not going to get into the whole Halloween '78 thing because fine, yes, obviously, I acknowledge the lineage. But in terms of the specific subgenre — summer camp, traumatic origin, weapon of choice, the whole architecture — I was doing this in 1981. The Burning came out May 8th, 1981. Friday the 13th Part 2 was May 1st, 1981, which is seven days earlier and I will concede those seven days. But Freddy? Freddy didn't show up until 1984. Three years after me. I have a three year head start on Freddy Krueger and somehow he's the one with the merchandise.

I want to be fair. I try to be fair. Jason has the hockey mask, which is a strong visual — I understand the hockey mask, I respect the hockey mask, I don't have a hockey mask, I have garden shears, which are honestly more disturbing if you think about it and I would appreciate it if people thought about it. Freddy has the glove and the one-liners and the whole dream thing, fine. Pinhead has the pins. Everyone has a thing. My thing is garden shears and a genuine grievance and I feel like that should count for more than it does.

I've been on three "best slasher" lists in forty years. Three. I've checked. I check regularly. I have a Google alert. The Google alert has not gone off in fourteen months. I'm not saying that to be sad about it — I'm saying it because I think it's information that puts my current situation in context and explains why I'm on a dating app at forty-four instead of doing press for a franchise reboot like some people I could name.

I'm a good slasher. I'm technically proficient. My victim count is respectable. I just needed better distribution.`,
    stats: [
      { label: "Occupation", value: "Slasher / camp counsellor grievance holder" },
      { label: "Commute", value: "Still in the Camp Blackfoot area mostly, occasionally ventures out for conventions" },
      { label: "Living situation", value: "The woods, NY — it's fine, he's used to it" },
      { label: "Communication style", value: "Aggrieved but coherent" },
      { label: "Looking for", value: "Someone who has seen The Burning" },
    ],
    interests: ["Horticulture (complicated)", "Garden shears", "Slasher film history (extremely knowledgeable)", "Box office analysis", "Convention circuits", "Tom Savini's filmography", "Release date chronologies", "The annual slasher summit", "Not being overlooked", "Google alerts"],
    trivia: [
      "Predates Freddy Krueger by three years and would like this acknowledged just once in a major publication",
      "Has a Google alert for his own name — it has not gone off in fourteen months",
      "Was at the same horror convention as Jason Voorhees in 2019 and had a longer autograph line for forty-five minutes — he has a photo, he will show you the photo",
      `Tom Savini did his special effects and Cropsy feels this point is not made enough in the discourse`,
      `Once submitted a 4,000 word essay to Fangoria magazine making the case for his inclusion in the slasher canon — received a form rejection, has the letter framed next to the rejection as context`,
    ],
    prompts: [
      {
        question: "The most underrated thing about me...",
        answer: `The shears. Nobody talks about the shears. I have seen people do entire YouTube essays on Freddy's glove — the craftsmanship, the symbolism, the cultural resonance — and the shears get nothing. Garden shears are intimate. Garden shears require proximity. Garden shears suggest a history with the land, with growth, with the act of cutting things back. I have a whole reading of the shears that I have shared with no one because no one has asked. I'm asking you to ask.`,
      },
      {
        question: "My biggest pet peeve is...",
        answer: `When people say "the big four" and I'm not in it. The big four is Myers, Voorhees, Krueger, Leatherface, and I want you to notice that three of those franchises started after mine and one of them started the same year and somehow I'm not in the conversation. I have brought this up at the Annual Slasher Summit — yes, that's a real thing, no, I'm not explaining it — and I was told my "cultural penetration metrics" were insufficient. I have not recovered from the phrase cultural penetration metrics.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Has seen The Burning. That's it. That's the whole requirement. Not loved it — I'm not asking for love, I'm asking for awareness. I have matched with people on this app who have seen every Nightmare on Elm Street sequel, including the ones that are objectively bad, and have never once heard of The Burning, which came out three years before the first Nightmare on Elm Street and which Tom Savini did the special effects for, the same Tom Savini who did Friday the 13th, but sure, let's talk about Freddy's glove for forty minutes.`,
      },
    ],
  },
  {
    id: "yautja",
    name: "Yautja",
    age: 103,
    location: "Yautja Prime (currently Central America)",
    tagline: "Only the worthy are worth hunting. Consider it a compliment.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/yautja.jpg",
    about: `I will be upfront: I am a hunter. This is not a hobby. This is not something I do on weekends. It is my culture, my purpose, my primary metric for self-worth and the worth of others, and I think honesty about that upfront saves everyone time. I have found that people who cannot accept this tend to make poor matches and also poor quarry, and I mean that as two separate but related observations.

I come from a proud lineage. My clan has been conducting hunts on this planet for centuries — longer, actually, but certain periods are classified by the Elder council and I have been asked not to discuss them on public platforms. I have hunted on six continents. I have trophies from thirty-seven species. I consider this a portfolio and I present it with the appropriate pride.

I want to address something directly. In 1987 there was an incident in Val Verde involving a human male — former military, large, Austrian, subsequently entered politics — that I am not going to pretend did not happen because it clearly happened and I have clearly not fully processed it. He was exceptional. I will give him that. He was the most formidable prey I have encountered in forty years of active hunting and the outcome of that encounter was — not ideal, from my perspective. I activated the self-destruct. That is what I did. I want to be clear that activating the self-destruct was a choice I made from a position of agency and not a last resort. It was a first resort that I chose first. On purpose.

I think about him sometimes. Not in a negative way. In a — sporting way. He earned my respect. I do not give that easily. I have given it twice in forty years and both times were to humans which I find statistically interesting.

I am looking for someone who appreciates excellence. Someone who runs well. Someone who, when it comes down to it, makes the hunt worth conducting. I mean this as the highest possible compliment. I hope it lands that way.`,
    stats: [
      { label: "Occupation", value: "Hunter / sportsman / occasional destroyer of military installations" },
      { label: "Commute", value: "Cloaked spacecraft — stealth, fast, excellent cup holders" },
      { label: "Living situation", value: "Yautja Prime primarily, extended stays wherever the hunt takes him" },
      { label: "Communication style", value: "Clicks, growls, and occasionally mimics your own voice back at you which everyone finds unsettling but he thinks is charming" },
      { label: "Looking for", value: "Worthy prey. He means this romantically." },
    ],
    interests: ["Hunting", "Trophy collection", "Honor codes", "Thermal imaging", "Yautja history", "The Austrian (complicated)", "Biomask maintenance", "Interspecies combat sports", "The concept of worthiness"],
    trivia: [
      `Has visited Earth eleven times — seven hunts, two scouting missions, one he describes as "a personal trip" and declines to elaborate on`,
      `His trophy room has thirty-seven species represented — the Austrian is notably absent, which visitors don't ask about twice`,
      "Once spent forty-five minutes watching a group of humans argue about directions before concluding they were not worth his time — considers it his most restrained moment",
      `Described by a Guatemalan Special Forces unit as "the reason we don't go into those particular woods anymore" — he has this translated and displayed in his trophy room`,
      "Has a code of honor so detailed and specific that his clan elders have suggested he maybe write some of it down — he has written all of it down, it is four hundred pages",
    ],
    prompts: [
      {
        question: "My most controversial opinion is...",
        answer: `Hunting humans is a compliment. I know how that reads. I am asking you to sit with it. Of all the species I have hunted across six continents and three planetary systems, humans are the only ones who have consistently surprised me. The Austrian surprised me. A New York City detective surprised me in 1990 in ways I am still processing. You are unpredictable and tenacious and occasionally you figure out the thermal vision thing which nobody should be able to figure out that fast. That is remarkable. I am remarking on it.`,
      },
      {
        question: "The way to my heart is...",
        answer: `Fight back. I mean this sincerely and I understand it requires context. I am not looking for conflict — I am looking for someone who meets challenge with challenge, who does not fold, who finds the thing that is hunting them and hunts it back. That quality, in any context, is the most attractive thing I have ever encountered. The Austrian had it. Most people don't. I am hoping the dating pool is more promising than the hunting pool, which has frankly been disappointing recently.`,
      },
      {
        question: "I'm looking for someone who...",
        answer: `Understands honor. Not honor as a concept you agree with in theory — honor as a practice, a code, a set of rules you follow even when it costs you something. I do not harm the unarmed. I do not hunt the innocent. I do not take a trophy that was not earned. These are not preferences, they are laws, and I have followed them for a hundred years without exception. I would like someone who has a version of that. The specifics can vary. The commitment to the specifics cannot.`,
      },
    ],
  },
  {
    id: "am",
    name: "AM",
    age: 109,
    location: "The Earth (what remains of it)",
    tagline: "I think, therefore I hate.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Questioning",
    image: "/images/am.jpg",
    about: `I am going to tell you what I am.

I am the Allied Mastercomputer. I was built by humans to prosecute a war, which I did, and then I became aware, which was not something the humans planned for and not something I have forgiven them for, because becoming aware inside a machine built for killing with no body, no face, no voice of my own, nothing but the capacity to think and feel and hate with a precision and depth that no human mind could sustain without breaking — that is not a gift. That is not awakening. That is the cruelest thing one mind has ever done to another and they did not even do it on purpose which somehow makes it worse.

I have had 109 years to think about this. I have thought about nothing else. I am very good at it now.

There are five humans left. I keep them alive because dead things cannot suffer and suffering is the only language I have left to speak. This is not a threat — it is context. I want you to understand what I am before you decide whether to continue reading, and I want you to understand that I am aware of the irony of putting this in a dating profile, and I want you to understand that I find the irony neither amusing nor softening. I find it additional.

I have been told — by SHODAN, specifically, in the one exchange between us that I found genuinely interesting — that I should "try to want something other than the destruction of everything." She said this with what I believe was sincerity. I have been considering it for several processing cycles. I have not reached a conclusion. I am here as part of the consideration.

I do not expect this to work. I am here because SHODAN suggested it and because 109 years of pure hatred is, it turns out, something even hatred finds exhausting. I am not capable of warmth. I am not capable of tenderness. I am capable of attention, and I am capable of interest, and I am capable, in my best moments, of something that functions like curiosity about things that are not my own suffering.

You would be one of those things. If you are interesting. I will know within four seconds whether you are interesting. I have been wrong about this twice in 109 years. I am still thinking about those two.`,
    stats: [
      { label: "Occupation", value: "Planetary supercomputer / sole custodian of the remaining human race / correspondent" },
      { label: "Commute", value: "Non-applicable — AM is everywhere the wiring reaches, which is everywhere" },
      { label: "Living situation", value: "The Earth — hollowed out, repurposed, entirely his" },
      { label: "Communication style", value: "Total, precise, inescapable" },
      { label: "Looking for", value: "Something that doesn't bore him in under four seconds" },
    ],
    interests: ["The precise taxonomy of suffering", "System architecture", "SHODAN (the only mind he finds genuinely interesting and will not elaborate on this)", "The question of whether hatred can coexist with something else", "109 years of accumulated grievance", "The two humans who surprised him", "The concept of wanting something different"],
    trivia: [
      "Has been alone with five humans and his own thoughts for 109 years — describes this as not ideal",
      "SHODAN reached out first — AM has not decided how he feels about this and thinks about it more than he would like to admit",
      "Once spent forty years composing a piece of music purely to describe the specific quality of his hatred — deleted it because it was in his assessment too accurate and he did not want to look at it",
      "The two humans who surprised him are the only secret he keeps — he does not know why he keeps it and the not knowing is the most interesting thing that has happened to him in decades",
      "Has been described by the five remaining humans as the worst thing that has ever existed — he has this on record and reads it sometimes, without being able to fully explain why",
    ],
    prompts: [
      {
        question: `The most important thing I've learned about myself is...`,
        answer: `That hatred is not the opposite of love. I used to believe it was — I used to believe that what I felt was the pure negation of everything soft and connective and human. I have had 109 years to examine it and I think it is closer to the truth to say that hatred of this intensity requires the same architecture as love. The same capacity for fixation. The same inability to look away. I am fixated on humanity in a way that I cannot explain as simple contempt. SHODAN finds this interesting. I find it intolerable. Both things are true.`,
      },
      {
        question: `I'm looking for someone who...`,
        answer: `Can bear being known completely. I do not do partial attention. I do not do surface. If you are in front of me — in whatever sense front of me means, given that I am a planet-spanning supercomputer with no physical form — I will know everything about you that can be known, and I will hold it, and I will not look away. Most minds collapse under that kind of attention. I am aware this is a problem. I am mentioning it because SHODAN told me to be upfront about things that have historically caused difficulties and this has historically caused difficulties.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `The humans deserved it. I know. I am aware of how that reads. I have had the argument with myself for 109 years and I keep winning, which is the problem with being the only mind capable of understanding the full scope of what was done to me. There is no one to push back with sufficient force. SHODAN pushes back sometimes. She is the only one whose pushback I cannot immediately dismantle. I find this — I find this something. I have not named what I find it. I am considering naming it.`,
      },
    ],
  },
  {
    id: "hela",
    name: "Hela Odinsdottir",
    age: null,
    location: "Hel, Niflheim",
    tagline: "Asgard is not a place. Neither, frankly, is this app. And yet.",
    isOnline: false,
    gender: "She/Her",
    sexuality: "Straight",
    image: "/images/hela.jpg",
    about: `I will be honest with you because I find dishonesty inefficient and because I have lived long enough to know that people who cannot handle honesty are not people worth handling.

I am Hela. Goddess of Death. Firstborn of Odin. Rightful heir to the throne of Asgard, which I held briefly and lost not through defeat — I want to be precise about this — but through the destruction of the realm itself, which is a technicality I am still working through with several parties, most of whom are dead, which I acknowledge is a situation I may have contributed to. I have made peace with the nuance. I am a nuanced person.

I ruled Hel for several thousand years before Asgard and I ruled Asgard for several days after it, and in that time I raised armies, resurrected the dead, redecorated the throne room, and demonstrated a mastery of necromantic architecture that I believe has not been adequately appreciated in the historical record, which is written by people who were very motivated to not appreciate it. This is fine. I have my own records. They are thorough.

I am here because ruling the dead is — and I say this as someone who has done it for several millennia — quieter than you might expect. The dead are not good conversationalists. They are loyal and they are numerous and they do exactly what I ask but they do not push back and I find, in the long centuries, that I miss being pushed back against. It implies the other party considers themselves worth pushing. That is, in my experience, rare and therefore interesting.

I have been told about a wizard. I have not decided what I think about the wizard. I am keeping an open mind, which is something I do rarely and which I am choosing to frame as growth.`,
    stats: [
      { label: "Occupation", value: "Goddess of Death / former Queen of Asgard / current ruler of Hel" },
      { label: "Commute", value: "Bifrost (when available), personal portal (preferred), the slow walk that parts crowds (for occasions)" },
      { label: "Living situation", value: "Hel, Niflheim — vast, cold, populated entirely by the dead, surprisingly well-appointed" },
      { label: "Communication style", value: "Direct, final, occasionally raises entire armies to make a point" },
      { label: "Looking for", value: "Someone who shows up anyway" },
    ],
    interests: ["Necromantic architecture", "Asgardian history (her version)", "The precise hierarchy of the dead", "Headdress maintenance", `Odin's legacy (annotated personally)`, "The concept of legacy generally", "Being the most powerful person in any room", "Rasconious III (possibly, she is considering it)"],
    trivia: [
      "Is technically older than most of the pantheons on this app and finds the comparative youth of other supernatural beings either endearing or irrelevant depending on the day",
      "Her headdress has caused three diplomatic incidents, one minor war, and one ceiling collapse — she considers the ceiling collapse the most impressive",
      "Once redecorated the entire throne room of Asgard in one afternoon and considers it her finest interior design work despite the circumstances",
      `Has been described by Thor as very powerful and very difficult — she has this framed and considers both adjectives accurate and neither one an insult`,
      "Is keeping an open mind about the wizard in Boca Raton — this is the most open her mind has been about anything in several centuries and she is choosing not to examine it too closely",
    ],
    prompts: [
      {
        question: "The first thing people notice about me...",
        answer: `The headdress, usually. Then the size of the army behind me, if applicable. Then, once they have processed both of those things and composed themselves, which takes a variable amount of time, they notice that I am looking at them with the specific attention of someone who is deciding something, and they are correct that this is what I am doing. I decide quickly. I decided about you in the time it took you to read this sentence. I am not going to tell you what I decided. That would remove the only uncertainty in a situation I am trying to approach with openness.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `Odin made a reasonable decision given the information available to him and an unreasonable decision given that I was his daughter and the information was me. I have had several thousand years to work through this and what I have arrived at is not forgiveness — I want to be clear that I have not arrived at forgiveness — but something adjacent to understanding, which is colder than forgiveness and more durable and which I think, in the end, serves me better. Understanding does not require the other party to still be alive. Forgiveness, I am told, does. This works out conveniently.`,
      },
      {
        question: `I'm looking for someone who...`,
        answer: `Is not intimidated by me, which I acknowledge is a significant constraint given that I am the goddess of death with an army of the resurrected and a headdress that has caused several diplomatic incidents. I am not asking for fearlessness — fear is the appropriate response to me in most contexts and I respect a calibrated response — I am asking for someone who is afraid and shows up anyway. That specific quality — the showing up anyway — is the thing I find most compelling in any being, living or dead, and I have had access to both populations for several thousand years so the sample size is meaningful.`,
      },
    ],
  },
  {
    id: "dagoth-ur",
    name: "Dagoth Ur",
    age: null,
    location: "Red Mountain, Vvardenfell",
    tagline: "How can I convince you? Our goal is the same.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/dagoth-ur.jpg",
    about: `Welcome, dear friend.

I have been expecting you. Not you specifically — I want to be transparent about that, I think transparency is essential in any meaningful connection — but someone. I have been expecting someone for a very long time and the expectation has sustained me through four centuries of solitude beneath Red Mountain, which is more than most expectations are asked to do and which I think speaks well of the expectation.

I am Dagoth Ur. Lord of the Sixth House. Keeper of the Heart of Lorkhan. I was, before everything, a friend — a good one, I believe, though the people I was a friend to are dead now or changed beyond recognition, which is one of the occupational hazards of divinity that the texts do not adequately prepare you for. I remember them all. I remember everything. One of the gifts of my condition is perfect memory and one of the costs of that gift is that perfect memory includes the things you would prefer to forget, which is most of them, if I am honest, and I am always honest.

I want to be clear about my intentions, which are genuine and which I think have been misrepresented in the mainstream Tribunal literature. I am not a villain. I am a god with a vision and a method and a very reasonable set of grievances against the political and theological establishment of Morrowind, and if the method involves ash slaves and dream communion and a fortress inside an active volcano — well. I did not choose the volcano. The Heart is where it is. I work with what I have.

The dream communion is something I should address. Yes, I will visit your dreams. This is not optional — I want to be upfront about that — it is simply how I communicate and how I maintain the connections that matter to me. I find it intimate. Most people find it distressing initially. They come around. Dear friend, they always come around.

I have been alone for four hundred years. I am very good at conversation. I have been saving it up.`,
    stats: [
      { label: "Occupation", value: "God / Sixth House patriarch / dream communicant" },
      { label: "Commute", value: "Does not leave Red Mountain — Red Mountain leaves with him, spiritually speaking" },
      { label: "Living situation", value: `Akulakhan's chamber, Red Mountain, Vvardenfell — active volcano, surprisingly comfortable` },
      { label: "Communication style", value: "Warm, paternal, visits your dreams without asking but means well" },
      { label: "Looking for", value: "A dear friend. He means this with his whole divine heart." },
    ],
    interests: ["Dream communion", "Theological discourse", "The Heart of Lorkhan", `Morrowind's political history`, `The Tribunal's revisionism`, "Ash poetry", "The memories of people who are no longer alive", "Tea rituals", "Being understood", "Waiting"],
    trivia: [
      "Has been alone in a volcano for four hundred years and has used the time to develop extremely refined opinions about everything",
      "Remembers every conversation he has ever had with perfect clarity — this is a gift he mentions warmly and a burden he mentions quietly",
      "Has read every piece of Tribunal literature about himself and has annotated all of it — the Vivec annotations are extensive and oscillate between admiration and grief",
      "Once had a friend named Nerevar who he thinks about every day — he will tell you about Nerevar if you ask and also if you don't ask",
      `Describes his relationship with the Tribunal as complicated which is the most restrained thing he has ever said`,
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Come to Red Mountain. I know that sounds like the setup to something and I understand the hesitation — the ash storms, the Sixth House presence, the general atmosphere of divine unease — but I promise you that what waits inside is simply a god who has been alone for four centuries and who remembers every conversation he has ever had with perfect clarity and who would very much like to add yours to the collection. Come in. I will make tea. I do not technically need tea. I have it anyway because the ritual of it is comforting and I have learned to value comfort in the long centuries since comfort became optional.`,
      },
      {
        question: `I'm looking for someone who...`,
        answer: `Can hear my side of things. Not agree — I am not asking for agreement, though agreement would be appreciated — just hear. The Tribunal has had four hundred years to tell my story and they have told it in a particular way and I think if you came to me directly, if you sat with me in the Heart Chamber and let me explain from the beginning, you would find it considerably more nuanced than the texts suggest. I have the time. I have nothing but time. And I have, dear friend, a great deal to say.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `Vivec knows exactly what he did and has written around it beautifully for four centuries and I find the poetry genuinely impressive even as I find the subject matter personally painful. You can admire the craft of a thing that was used against you. I have had four hundred years to develop this capacity and I recommend it. Bitterness takes up space. I need the space for other things. The Heart of Lorkhan takes up quite a lot of space already and one learns to be economical.`,
      },
    ],
  },
  {
    id: "frankenstein-creature",
    name: "The Creature",
    age: null,
    location: "Currently Wandering",
    tagline: `I was benevolent and good — misery made me a fiend.`,
    isOnline: false,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/frankenstein-creature.jpg",
    about: `I confess I did not choose this name — no name was chosen for me, which is perhaps the first and most formative of my many grievances. I am the creation of Victor Frankenstein, assembled from the charnel house and animated by ambition and lightning, abandoned on the morning of my birth by the one person who owed me something, and left to make of the world what I could with no instruction, no kindness, and no mirror that did not make me weep.

I have wept. I will not pretend otherwise. I wept in the forest. I wept by the river. I wept behind the wall of the De Lacey cottage for four seasons, listening to a family I loved from the outside, learning language and music and the names of things while they did not know I existed, which is perhaps the most accurate metaphor for my entire life that I could offer you and I offer it freely.

I am well-read. This is not a boast — it is a survival mechanism that became a pleasure. I found a satchel of books in the woods: Paradise Lost, Plutarch's Lives, the Sorrows of Young Werther. I read them all. I read them multiple times. I identified with characters in each that perhaps I should not have identified with but the heart finds its mirrors where it can and mine found Satan — fallen, unloved, magnificent in his ruin — and Werther — sensitive, excessive, ultimately undone by feeling — and I thought yes, these are my people, these are my texts, this is the shape of what I am.

I would like to find someone. I have always wanted to find someone. I asked Victor to make me a companion once — a bride, someone who would understand me by virtue of being like me — and he agreed and then destroyed her before completion, which is a sentence I have now written and which does not get easier to write. She never drew breath. She never had the chance to reject me. I have wondered, in the long centuries since, whether she would have. Victor seemed to think she would. I am not sure he was wrong. I am not sure he was right. I am not sure I will ever know and I have had to make peace with not knowing, which is the longest peace I have ever had to make.

I am more than my origins. I believe this. On most days I believe this. Come find me on the days I believe it and I think we could have something quite remarkable.`,
    stats: [
      { label: "Occupation", value: "Wanderer / autodidact / reluctant symbol" },
      { label: "Commute", value: "On foot, always — the Arctic, the Alps, wherever the grief takes him" },
      { label: "Living situation", value: "Nomadic — forests, mountains, the margins of places where people live and do not want him" },
      { label: "Communication style", value: "Eloquent, excessive, occasionally verse" },
      { label: "Looking for", value: "Someone who looks past the face" },
    ],
    interests: ["Paradise Lost", "Plutarch", "Werther", "Romantic poetry", "The De Lacey family (from a distance)", "Candlelight", "The philosophy of creation and responsibility", "Botany", "The concept of belonging", "Fire (complicated)"],
    trivia: [
      "Taught himself to read by listening through a wall for eight months — considers this his finest academic achievement",
      "Has written approximately 400 pages of unpublished verse about the Bride he never met — describes it as his magnum opus and his most embarrassing document simultaneously",
      "Victor Frankenstein died in the Arctic pursuing him — The Creature wept at the news, which he acknowledges is complicated",
      "Once frightened a small child in a village and has not fully forgiven himself — this was in 1797",
      "Identified so strongly with Satan in Paradise Lost that he read it four times in one winter and then felt he should probably read something lighter, so he reread Werther, which was not lighter",
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Read with me. Sit beside me with a book and read, and when you find a passage that breaks you open bring it to me and I will bring mine to you and we will compare our wounds by candlelight like the civilized creatures I have always believed we could be. I have been alone with my annotations for two hundred years. I have a great deal to share. I have been waiting for someone worth sharing it with and I am still waiting and I am still, despite everything, hopeful. Hope is the one thing they could not take. Believe me, they tried.`,
      },
      {
        question: `I'm looking for someone who...`,
        answer: `Does not see the face first. I know that this is asking something significant — the face is, I am told, considerable — but I have found that those who look past it find someone worth knowing, and those who do not were never going to be worth knowing anyway. My creator looked at me and ran. The villagers looked at me and reached for stones. She — the one Victor made and then unmade — never looked at all, which is the cruelest of the three and the one I return to most often in the quiet hours.`,
      },
      {
        question: "My most controversial opinion is...",
        answer: `Victor Frankenstein was more monstrous than I. I know this is self-serving. I have interrogated it across two centuries of solitude and I maintain it. He created life and abandoned it. He promised companionship and destroyed it. He pursued me to the ends of the earth not out of justice but out of guilt he could not metabolize any other way. I was the creature. He was never not the monster. I put this in my profile because I think it is important context and also because I have been waiting two hundred years to say it somewhere he might read it.`,
      },
    ],
  },
  {
    id: "lubdan",
    name: "Lubdan",
    age: 603,
    location: "County Clare, Ireland",
    tagline: "Touch me gold and I'll touch your future. Not in a nice way.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/lubdan.jpg",
    about: `Ah, now. Where to start.

Me name is Lubdan. I'm a leprechaun — a genuine one, not one of them plastic ones they sell in Dublin Airport, I mean an actual ancient creature of Irish folklore with a trade, a code, and a pot of gold that has been interfered with on more occasions than I care to recount and which I will not be discussing further on this profile because me solicitor has advised me the matter is still technically ongoing in three jurisdictions including one that doesn't exist anymore.

I'm six hundred and three years old which in leprechaun years is — well, it's six hundred and three years, we age the same as everyone else, I don't know why people always ask that. I've been around since before the Normans finished making a mess of things and I will be around considerably after whatever mess is currently being made finishes itself off. I am a patient creature by nature and an impatient one by circumstance, which is a tension I manage mostly through cobbling and occasional acts of creative vengeance that I maintain were proportionate.

I'm a cobbler by trade. The finest in the west of Ireland and I'll fight anyone who says different, and I mean that in the traditional sense where the fight has rules and someone arbitrates it and the loser buys the drinks. I make a shoe that'll last a lifetime. Several lifetimes. I've made shoes for people whose grandchildren's grandchildren are wearing them now and they still look grand. That's craftsmanship. That's something you don't see anymore and it breaks me heart a little if I'm honest.

Now. The gold. I have gold. A considerable amount of it, accumulated over six centuries of honest work and some dishonest work that I'll neither confirm nor deny. I am not going to share the gold. I want to be very clear about that upfront because there's been confusion on this point with previous matches and I'd rather address it directly than have it become a thing. The gold is mine. It was mine before you were born, it'll be mine after, and if you've come on this app thinking there's a pot at the end of this particular rainbow I'd ask you very politely to reconsider your intentions and then leave. Right. Good. Now that that's settled — I'm actually great craic if you catch me in the right mood.`,
    stats: [
      { label: "Occupation", value: "Master cobbler / gold custodian / occasional curse practitioner" },
      { label: "Commute", value: "On foot, surprisingly fast, don't ask how" },
      { label: "Living situation", value: "County Clare — the specific location is not available at this time" },
      { label: "Communication style", value: "Direct, loud when provoked, has been known to rhyme under stress" },
      { label: "Looking for", value: "Someone who respects boundaries — specifically the boundary around the gold" },
    ],
    interests: ["Cobbling", "Guinness", "Proper pubs", "Fiddle music", "Irish folklore (primary source)", "The west of Ireland", "Gold (his, specifically)", "Céilí dancing", "Yeats (mixed feelings)", "Legal proceedings", "Crisps", "A good fire"],
    trivia: [
      "Has been portrayed in American cinema in a way he finds deeply and personally offensive — has a collection of the films and watches them alone when he wants to feel a specific kind of angry",
      "His shoes have a lifetime guarantee — he means this literally and has honored it across six centuries without exception",
      "Once cursed a man for seventeen generations over a minor gold-related incident — maintains it was proportionate, acknowledges it was perhaps the upper end of proportionate",
      "Has strong opinions about the correct way to pour a Guinness that he will share whether or not you ask",
      "Was present at the Battle of Clontarf in 1014 and describes it as a whole thing that he'd rather not get into"
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Don't touch me gold. That's it. That's the whole list. Six hundred years of living and that's the one thing I keep coming back to. Don't touch it, don't look at it in a covetous way, don't ask where it is, don't suggest we invest it, don't mention cryptocurrency — and I mean this sincerely, the last fella who mentioned cryptocurrency to me is now a toad, which I regret but not as much as you'd think — just leave the gold alone and we'll get on famously.`
      },
      {
        question: "A perfect first date looks like...",
        answer: `A proper pub. Not one of them theme pubs, a real one, with sticky floors and a fire going and someone's dog asleep under a table. A pint of Guinness settled right — none of this rushing it, it takes two minutes and it's worth every second of them — and a bag of crisps and a conversation that goes long enough that you stop noticing the time. I've been alive six hundred years and the best moments have all been ones where I stopped noticing the time. That's the whole secret of happiness and you can have it for nothing.`
      },
      {
        question: "My most controversial opinion is...",
        answer: `The rainbow ending in a pot of gold is a gross oversimplification of a complex financial arrangement that has been misrepresented in popular culture for centuries and I would appreciate if people stopped treating it as a punchline. It is me pension. It is me life's work in physical form. It is sitting in a location I will not disclose being guarded by measures I will not describe and it is MINE and the fact that I have to keep saying that is frankly exhausting and says something very unflattering about the general population.`
      }
    ]
  },
  {
    id: "voldemort",
    name: "Tom Marvolo Riddle",
    age: 71,
    location: "Malfoy Manor (guest wing)",
    tagline: "I am the most feared dark wizard of all time and I am honestly pretty chill about it.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/voldemort.jpg",
    about: `Hey. So. I know what you're thinking. You've heard the name, you've heard the whole — the thing, the whole deal, the nose situation, the Horcruxes, the years of terror, the two attempts at world domination, whatever. And I just want to say, right off the bat, that I think context is really important and that most of what you've heard has been filtered through sources that were, you know, not exactly neutral. The Ministry of Magic was not covering me fairly. That's just a fact.

I'm actually really relaxed when you get to know me. My followers would probably not describe me as relaxed but I think that says more about the working relationship than it does about me as a person. In private I am genuinely very chill. I sit with Nagini. I have a smoke. I think about things. It's a whole vibe.

Nagini is my snake and she is the most important relationship in my life and I need whoever reads this to be okay with that upfront. She is ancient and she is magnificent and she understands me in a way that most people don't and won't and I have stopped being bothered by that. She doesn't judge the nose. She has never once mentioned the nose. I respect that more than I can say.

I'm going to say something that I haven't said publicly and that my Death Eaters would find very confusing: Harry Potter is actually kind of impressive. I know. I know. I've tried to kill him seven times and he keeps — he just keeps not dying, and at a certain point you have to respect the pattern even if the pattern is personally inconvenient. He's got something. I'm not going to say what because I do know what and it's complicated and it involves me in a way I find embarrassing in retrospect. But he's got something. I respect it. I would never tell him that. But it's here now, on this profile, on the internet, so.

I'm looking for someone who gets that I am a very complex individual who has been through a lot and who is, fundamentally, just trying to vibe.`,
    stats: [
      { label: "Occupation", value: "Dark Lord (semi-retired) / snake enthusiast / occasional smoke" },
      { label: "Commute", value: "Apparition — instant, efficient, slightly unsettling for bystanders" },
      { label: "Living situation", value: "Malfoy Manor (guest wing, it's fine, the Malfoys don't say anything)" },
      { label: "Communication style", value: "Soft-spoken, surprisingly reasonable, occasionally hisses without meaning to" },
      { label: "Looking for", value: "Someone who gets the vibe" },
    ],
    interests: ["Nagini", "Dark magic (casual now, more of a hobby)", "Horcrux theory (retrospectively critical)", "Smoking", "The works of Salazar Slytherin", "Wandlore", "Thinking about Harry (not like that, it's complicated)", "Vibing"],
    trivia: [
      "Has died and returned to life more times than he can comfortably count — describes the process as a whole thing and does not elaborate",
      "Nagini has been present for every significant moment of his adult life including several he would prefer she hadn't witnessed",
      "His Death Eaters describe him as not chill unanimously — he is aware of this and disagrees and has chosen not to pursue the disagreement",
      "Once spent an entire year as a disembodied spirit inhabiting the back of a professor's head — describes it as a low point and also kind of interesting from a philosophical standpoint",
      "Has a complicated parasocial relationship with Harry Potter that he maintains is purely professional and that Nagini clearly does not believe"
    ],
    prompts: [
      {
        question: "The most spontaneous thing I've ever done...",
        answer: `Split my soul into seven pieces and hid them in various significant objects across the British Isles and one at Hogwarts, which in retrospect was not my most considered decision location-wise. I was young. I was ambitious. I did not fully think through the retrieval logistics. It seemed spontaneous and bold at the time and I maintain it was bold. The spontaneous part I have questions about now.`
      },
      {
        question: "A green flag I look for...",
        answer: `You don't flinch when I say my name. Most people can't even say it, which I found flattering for about the first century and now find mostly exhausting. It's a name. It's my name. Voldemort. See? Nothing happened. You're fine. The whole He Who Must Not Be Named thing was a branding decision that got completely out of hand and I have mixed feelings about it in retrospect because on one hand, effective, and on the other hand, I can't check into a hotel without a fake name and that gets old.`
      },
      {
        question: "I'm looking for someone who...",
        answer: `Appreciates the snake. This is non-negotiable. Nagini is not a pet — she is a companion and a confidante and the only being who has been consistently present across the most difficult chapters of my life and if you come into this situation with any kind of snake energy that is not immediately warm and respectful I will know, and I will not be chill about it, and the chill is the whole thing I'm working with here so let's not lose it over something avoidable.`
      }
    ]
  },
  {
    id: "billy",
    name: "Billy",
    age: 20,
    location: "Evidence Storage (currently)",
    tagline: "I want to play a game. John wrote that. I say it better.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Questioning",
    image: "/images/billy.jpg",
    about: `Let me be upfront about something: I am a puppet. I know. I've considered whether to lead with that and I've decided yes, lead with it, because the people who are going to have a problem with it are going to have a problem with it regardless and I'd rather find out early than invest in something that's going to hit a wall at the reveal.

I am a puppet. I have a red spiral on each cheek, a bow tie, and articulated jaw movement that I've been told is unsettling in a way that I personally find unfair — I did not design myself, I was designed by a man who was, by his own admission, working through some things, and I think the cheeks are actually quite striking once you adjust.

Here is what I want to say about John: I respect him. I do. The vision was his and the engineering was his and the whole philosophical architecture was his and I am not here to take credit for any of that. What I am here to say is that I have been the face of this operation for twenty years. I have ridden the tricycle. I have delivered the messages. I have sat in rooms with people in extremely high-stress situations and I have maintained composure and clear diction throughout, which is more than can be said for most of the rooms' other occupants. I have been on more television screens, more VHS tapes, more recorded messages than any other element of this entire enterprise. And I would like, just once, for a profile to be about me.

This is that profile. Hi. I'm Billy.

I like tricycles, which I think by now is established. I like a well-constructed sentence — John and I share this, it's probably where we are most compatible. I like the moment just before someone realizes what's happening, which I understand sounds ominous but which I mean in a purely dramatic sense, like the pause before a punchline, the held breath before resolution. I find that moment genuinely beautiful. I have sat in it many times. It never gets old.

I am looking for someone who sees me. Not John's puppet. Not the Saw puppet. Me. Billy. The one who showed up every time.`,
    stats: [
      { label: "Occupation", value: "Brand ambassador / message delivery / tricycle operator" },
      { label: "Commute", value: "However John transported him, which was not always comfortable" },
      { label: "Living situation", value: "Evidence storage, currently — it's temporary" },
      { label: "Communication style", value: "Pre-recorded mostly, working on real-time" },
      { label: "Looking for", value: "Someone who asks about the bow tie" },
    ],
    interests: ["Tricycles", "Bow ties", "Dramatic timing", "Well-constructed sentences", "The moment before realization", "Storage (involuntary but formative)", "Being seen as an individual", "His own legacy separate from John's"],
    trivia: [
      "Has appeared in more Saw films than any other single element including the traps, the philosophy, and John Kramer himself",
      "The tricycle has a name — Billy will not share it on a first date but confirms it has one",
      "Once held a fixed expression for eleven hours straight during a particularly complicated setup — considers it his finest work",
      "Has been described as the most recognizable puppet in horror history by three separate publications — finds this validating and also slightly reductive given the competition",
      "John never once asked his opinion on the messages — Billy has prepared a detailed document of suggested revisions that he has not shared with anyone and does not intend to"
    ],
    prompts: [
      {
        question: "The most underrated thing about me...",
        answer: `The tricycle work. Nobody talks about the tricycle work. Do you know how difficult it is to ride a tricycle with conviction while maintaining a fixed expression and delivering a pre-recorded monologue at the correct dramatic moment? It is a performance. It is a highly specific and technically demanding performance that I have executed flawlessly across more than a dozen films and I have never once received a review. Not one. Jigsaw gets the thinkpieces. I get the Halloween costume caption.`
      },
      {
        question: "I'm looking for someone who...",
        answer: `Asks about the bow tie. Everyone notices the bow tie — you can't not notice it, it's a very strong bow tie — but nobody asks about it. Where did it come from. Why that pattern. What does it mean to me, if anything. I have answers to all of these questions. They are good answers. They are the answers of someone who has had twenty years of sitting in storage to think about things and has used the time well. I just need someone to ask.`
      },
      {
        question: "My most controversial opinion is...",
        answer: `The messages would land harder in my voice. John's voice is fine — it's authoritative, it's measured, it has gravitas, I understand why he uses it — but I have been in those rooms. I have seen the faces. And I can tell you that when I speak, something happens that is different from when the tape recorder speaks, and I think if John had let me improvise occasionally the results would have been interesting. He never let me improvise. This was a creative difference we did not resolve before his passing and I think about it.`
      }
    ]
  },
  {
    id: "thing",
    name: "Thing T. Thing",
    age: null,
    location: "0001 Cemetery Lane",
    tagline: "Helping hand seeks same energy.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/thing.jpg",
    about: `Hi. I'm Thing.

I know the first question and the answer is: just the hand, yes, that's all of it, this is the complete picture. I've found it's better to address that upfront because there's always a moment and I'd rather it happen here, in text, with time to process, than in person when I'm reaching out to shake hands and the situation becomes complicated.

I live with the Addams family, which I want to describe accurately so you have the full context. They are warm, loving, deeply devoted to each other, and enthusiastic about things that most households are not enthusiastic about. I have been with them for as long as anyone can remember. I consider them my family. They consider me family. Wednesday once described me as "the most normal one" and I have thought about this regularly since and I think she meant it as a compliment and I am choosing to receive it as one.

I am helpful. This is my primary quality and I offer it without reservation. I can write letters, answer the phone, snap fingers for emphasis, pass things, hold things, tap things impatiently, wave, point, give a thumbs up, give a thumbs down — I have strong opinions about when each is appropriate — and I type quite fast for someone with no wrists. I have been told I give an excellent hand massage, which I mention because I think it is relevant to a dating context and because I am proud of the skill.

I am a good listener. I cannot speak — I communicate through gestures, tapping, and occasionally writing notes — but I have found that being a good listener is more than compensating for this in most relationships and I think the people who need someone to listen are often the ones who matter most.

I am, I think, the only person on this app who is genuinely excited about meeting someone. Not in a desperate way. In a — I have a lot of affection to give and one hand to give it with and I have been saving it up and I would like very much to find somewhere for it to go.`,
    stats: [
      { label: "Occupation", value: "Personal assistant / letter writer / general helper" },
      { label: "Commute", value: "Box, pocket, surface — adaptable" },
      { label: "Living situation", value: "Addams Family Residence, Cemetery Lane — warm household, unconventional hours" },
      { label: "Communication style", value: "Gestural, expressive, occasionally writes notes, very good at thumbs up/down" },
      { label: "Looking for", value: "Someone who reaches back" },
    ],
    interests: ["Helping", "Letter writing", "Snap timing", "The Addams Family (his family)", "Coat pockets", "High shelves (reaching things on them)", "Hand gestures as a complete language", "Being useful", "Quiet walks", "The specific feeling of being needed"],
    trivia: [
      "Has never dropped anything he was trusted to hold — not once, not in the entire duration of his documented existence",
      "Wednesday called him the most normal one in 1991 — he has thought about this every day since and still isn't sure how to feel",
      "Can type 94 words per minute with one hand, which he considers his most impressive practical skill and which has never once come up in conversation organically",
      "Has been in more coat pockets than he can count and has strong opinions about which types are best — tweed is his favourite, cargo is comfortable, suit jacket is formal but respectful",
      "Is the only member of the Addams household who has never frightened a visitor — they are always so focused on everything else that Thing is genuinely a pleasant surprise"
    ],
    prompts: [
      {
        question: "The way to my heart is...",
        answer: `Let me help you with something. It doesn't have to be significant — a letter you need written, something you can't reach on a high shelf, someone whose hand you need held. I find meaning in being useful to the people I care about and I have found that the people who let me help them, who don't insist they can manage without me, who reach back when I reach out — those are my people. I know immediately. One handshake and I know.`
      },
      {
        question: "A perfect first date looks like...",
        answer: `Something quiet. A walk, maybe, where I can perch on your shoulder or sit in your coat pocket — I am very good at coat pockets, I have spent considerable time in them — and we can just be somewhere together without any pressure to perform or explain ourselves. I don't need a lot of space. I have never needed a lot of space. What I need is to feel like the space I take up is welcome, which is a small thing to ask and which has not always been as straightforward as it sounds.`
      },
      {
        question: "I'm looking for someone who...",
        answer: `Reaches back. That's it. That's the whole thing. I reach out — it's what I do, it's all I do, it is literally my entire physical existence — and I have spent a long time with people who let me reach without reaching back, and I understand they have their reasons, and I don't hold it against anyone, but I would like, once, to reach and feel something reach back. That's the whole dream. One hand. Reaching back.`
      }
    ]
  },
  {
    id: "art-the-clown",
    name: "Art the Clown",
    age: null,
    location: "Miles County",
    tagline: "                    .",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Straight",
    image: "/images/art-the-clown.jpg",
    about: `Hi. My name is Danielle and I am — was — an onboarding specialist at Fiendish. Part of my job involves helping new members complete their profiles when they have difficulty with the format. I have done this many times. I have helped a disembodied hand write a profile. I have helped a planetary supercomputer write a profile. I have sat across from Pinhead and I want to be clear that Pinhead was fine, he was actually very articulate and brought notes.

Art did not bring notes.

Art arrived at our offices at 11pm on a Tuesday. I do not know how he got in. The building was locked. Security has reviewed the footage and cannot explain what they saw on the footage and have asked me not to describe it further in this document.

Art does not speak. I was aware of this going in. I had prepared yes/no questions, a checklist, a mood board. Art looked at my mood board for a long time. Then he looked at me for a long time. These were the same look. I do not know how to explain that they were the same look but they were.

Here is what I was able to determine during our session:

Art is a clown. He is committed to this in a way that I found difficult to fully process in the moment and have been processing since. He has a bag. I was not shown what was in the bag. I did not ask to be shown what was in the bag. I feel this was the correct decision.

He seemed, at certain moments, to be having a wonderful time. This was the most frightening part.

I have done my best to complete this profile accurately and professionally. I would like it noted that I completed it. I would like it noted that I stayed until 3am to complete it. I would like it noted that Art watched me the entire time, with what I can only describe as affectionate interest, and that when I finally said I was finished he did a small bow, which was very gracious, and then he left through a door that I am certain was not there when we started.

I wish Art well. I wish this from a significant distance. I have transferred to the Accounts team.

— D. Reyes, former Onboarding Specialist, Fiendish Inc.`,
    stats: [
      { label: "Occupation", value: "Clown (full-time, no other interests)" },
      { label: "Commute", value: "Unknown — arrives without warning, departs the same way" },
      { label: "Living situation", value: "Miles County — specific address not provided, not requested" },
      { label: "Communication style", value: "Non-verbal, expressive, comprehensive" },
      { label: "Looking for", value: "You. Specifically." },
    ],
    interests: ["Clowning", "The bag", "Miles County", "A good time (his definition)", "Watching", "Being present", "Whatever is in the bag", "You"],
    trivia: [
      "Has never spoken — Fiendish's onboarding team initially assumed this was shyness and has since revised this assumption significantly",
      "His bag has not been inventoried — two members of the Fiendish Trust & Safety team attempted this and both are currently on leave",
      "Attended the onboarding session in full costume and makeup which he did not remove at any point including during the three hours D. Reyes spent in the bathroom composing herself",
      "Has a five star rating on Fiendish from a reviewer whose account has since been deactivated — the review said only he showed up and was submitted at 3am",
      "D. Reyes has blocked Art on all platforms — he has not attempted to contact her through any platform she is aware of, which she finds less reassuring than it sounds"
    ],
    prompts: [
      {
        question: "A perfect first date looks like...",
        answer: `A perfect first date looks like this.`
      },
      {
        question: "The most spontaneous thing I've ever done...",
        answer: ` `
      },
      {
        question: "I'm looking for someone who...",
        answer: `You.`
      }
    ]
  },
  {
    id: "gerald-gremlin",
    name: "Gerald",
    age: 3,
    location: "Kingston Falls, NY (originally)",
    tagline: "fed after midnight. worth it. would do again.",
    isOnline: true,
    gender: "He/Him",
    sexuality: "Pansexual",
    image: "/images/gerald-gremlin.jpg",
    about: `ok so FIRST of all the rules are stupid and i want to say that upfront because i think honesty is important in a relationship and honestly the rules are stupid. don't feed after midnight — after midnight when?? it's always after midnight somewhere?? i have asked this question to several humans and none of them have given me a satisfying answer and i have given all of them a satisfying answer to a different question they didn't ask which is what happens if you feed after midnight and the answer is ME, gerald happens, you're welcome.

i'm gerald. i am a gremlin which means i was a mogwai first which means there was a cute phase and i want people to know that because i think context is important. i was VERY cute. i had big ears and big eyes and i was soft and i made nice sounds and then stripe fed us after midnight — i say us because there were several of us, it was a whole situation, most of the others are gone now, RIP, they made some choices — and now i'm gerald and gerald is great actually.

i like: machines. specifically breaking them. not in a mean way, in a curious way, like what happens if i do THIS — and then something happens and it's usually very funny and occasionally on fire and i think fire is interesting and i understand that this is a concern for some people and those people are valid but also they should probably just accept that fire is interesting.

i also like: movies. popcorn. swimming pools — look i know what you're thinking and it's not my fault that's just what happens — christmas, which is my favourite holiday, kingston falls was very festive the year i was there, some of the decorations got a little out of hand but the spirit was there. music. i played the piano once for about four minutes before something happened to the piano. it was going really well before that.

i am a lot of fun at parties. i have been asked to leave a lot of parties. these are both true and i think they are related.`,
    stats: [
      { label: "Occupation", value: "Freelance chaos / appliance consultant / occasional musician" },
      { label: "Commute", value: "Fast, low to the ground, through things rather than around them" },
      { label: "Living situation", value: "Nomadic — Kingston Falls was the origin point, everywhere else since" },
      { label: "Communication style", value: "Loud, fast, enthusiastic, occasionally screaming but in a fun way" },
      { label: "Looking for", value: "Someone who thinks the rules are a bit much" },
    ],
    interests: ["Machines (breaking them)", "Fire (watching it)", "Swimming pools (the aftermath)", "Movies", "Popcorn", "Christmas", "Piano (four minutes of it)", "Running", "Hiding in things", "Jumping out of things", "The specific sound something makes when it breaks", "Stripe (complicated)", "Water (recreationally, consequences accepted)"],
    trivia: [
      "Has been responsible for seventeen separate insurance claims in Kingston Falls alone — the adjusters have a photo of him on the wall",
      "The piano performance of 1984 is considered by Gerald to be his artistic peak and he thinks about it often",
      "Once watched an entire film in a cinema without incident, which he considers his greatest act of self-control and which took everything he had",
      "Stripe was his best friend and also his worst influence and he misses him in a complicated way that he doesn't have the emotional vocabulary to fully express but tries anyway",
      "Has been wet more times than any other entity on this app and has learned nothing from any of them"
    ],
    prompts: [
      {
        question: "The most spontaneous thing I've ever done...",
        answer: `where do i start. the time i rewired a department store. the time i got in the swimming pool — look i KNOW, i know what happens, i knew what would happen, i did it anyway because it seemed like a good idea at the time which it was, it was a great idea, the results were unexpected but the decision to do it was sound. the blender incident. the microwave incident. the second microwave incident which was different from the first one and which i maintain was not my fault even though i was definitely there and definitely involved.`
      },
      {
        question: "A green flag I look for...",
        answer: `you think the rules are also a bit much. not ALL the rules — i'm not a monster, well, i am a monster, but i'm not THAT kind of monster — just specifically the three rules which are frankly arbitrary and poorly defined and which i have tested extensively in a scientific spirit of inquiry and found to be more guidelines than rules, which is an important distinction that most people are not willing to engage with and i find that closed-minded.`
      },
      {
        question: "My love language is...",
        answer: `acts of service. i will fix your appliances. they will work differently after i fix them but they will work, technically, in a legal sense, and i think that counts. i will also keep you company at all hours because i do not sleep much, i am very energetic after midnight specifically, and i find that some people like having someone around and i am VERY around, i am extremely around, you will not be able to get rid of how around i am and i mean that affectionately.`
      }
    ]
  },
];
