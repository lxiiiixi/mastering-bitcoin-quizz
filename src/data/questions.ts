import type { Chapter, Question } from './questionTypes'

export const chapters: Chapter[] = [
  {
    id: 'nature',
    name: { en: 'Nature & Animals', zh: '自然与动物' },
    icon: '🌿',
  },
  {
    id: 'science',
    name: { en: 'Science & Technology', zh: '科学与技术' },
    icon: '🔬',
  },
  {
    id: 'geography',
    name: { en: 'Geography & Culture', zh: '地理与文化' },
    icon: '🌍',
  },
  {
    id: 'food',
    name: { en: 'Food & Lifestyle', zh: '美食与生活' },
    icon: '🍰',
  },
  {
    id: 'history',
    name: { en: 'History & Art', zh: '历史与艺术' },
    icon: '🏛️',
  },
  {
    id: 'literature',
    name: { en: 'Literature & Language', zh: '文学与语言' },
    icon: '📚',
  },
]

export const questions: Question[] = [
  // ─── Chapter: Nature & Animals ─────────────────────────────────

  {
    id: 'nature-1',
    chapter: 'nature',
    prompt: {
      en: 'Which animal is known for sleeping up to 22 hours a day?',
      zh: '哪种动物以每天睡眠长达22小时而闻名？',
    },
    options: {
      A: { en: 'Panda', zh: '大熊猫' },
      B: { en: 'Koala', zh: '考拉' },
      C: { en: 'Sloth', zh: '树懒' },
      D: { en: 'Cat', zh: '猫' },
    },
    answer: 'B',
    explanation: {
      en: 'Koalas sleep 18–22 hours a day because their eucalyptus diet is low in nutrients and requires a lot of energy to digest.',
      zh: '考拉每天睡18-22小时，因为它们的桉树叶食物营养低，消化需要大量能量。',
    },
  },
  {
    id: 'nature-2',
    chapter: 'nature',
    prompt: {
      en: 'What is the fastest land animal in the world?',
      zh: '世界上跑得最快的陆地动物是什么？',
    },
    options: {
      A: { en: 'Lion', zh: '狮子' },
      B: { en: 'Cheetah', zh: '猎豹' },
      C: { en: 'Horse', zh: '马' },
      D: { en: 'Greyhound', zh: '灵缇犬' },
    },
    answer: 'B',
    explanation: {
      en: 'The cheetah can reach speeds of up to 112 km/h (70 mph) in short bursts, making it the fastest land animal.',
      zh: '猎豹短距离冲刺时速度可达112公里/小时（70英里/小时），是世界上速度最快的陆地动物。',
    },
  },
  {
    id: 'nature-3',
    chapter: 'nature',
    prompt: {
      en: 'Which part of a plant is responsible for photosynthesis?',
      zh: '植物的哪个部分负责光合作用？',
    },
    options: {
      A: { en: 'Root', zh: '根' },
      B: { en: 'Stem', zh: '茎' },
      C: { en: 'Leaf', zh: '叶' },
      D: { en: 'Flower', zh: '花' },
    },
    answer: 'C',
    explanation: {
      en: 'Leaves contain chloroplasts with chlorophyll, which captures sunlight to convert carbon dioxide and water into glucose and oxygen.',
      zh: '叶子含有叶绿体和叶绿素，能捕获阳光将二氧化碳和水转化为葡萄糖和氧气。',
    },
  },
  {
    id: 'nature-4',
    chapter: 'nature',
    prompt: {
      en: 'How do octopuses have hearts?',
      zh: '章鱼有几个心脏？',
    },
    options: {
      A: { en: 'One', zh: '一个' },
      B: { en: 'Two', zh: '两个' },
      C: { en: 'Three', zh: '三个' },
      D: { en: 'Four', zh: '四个' },
    },
    answer: 'C',
    explanation: {
      en: 'Octopuses have three hearts: two branchial hearts pump blood through the gills, while a systemic heart pumps it through the rest of the body.',
      zh: '章鱼有三个心脏：两个鳃心将血液泵入鳃部，一个体心将血液泵向全身。',
    },
  },
  {
    id: 'nature-5',
    chapter: 'nature',
    prompt: {
      en: 'Which butterfly is famous for its long-distance migration across North America?',
      zh: '哪种蝴蝶以其在北美洲的长距离迁徙而闻名？',
    },
    options: {
      A: { en: 'Painted Lady', zh: '小红蛱蝶' },
      B: { en: 'Monarch', zh: '帝王蝶' },
      C: { en: 'Swallowtail', zh: '凤蝶' },
      D: { en: 'Blue Morpho', zh: '蓝闪蝶' },
    },
    answer: 'B',
    explanation: {
      en: 'Monarch butterflies migrate up to 4,800 km from Canada and the US to central Mexico each autumn, one of the longest insect migrations known.',
      zh: '帝王蝶每年秋季从加拿大和美国迁徙至墨西哥中部，行程可达4800公里，是已知最长的昆虫迁徙之一。',
    },
  },

  // ─── Chapter: Science & Technology ─────────────────────────────

  {
    id: 'science-1',
    chapter: 'science',
    prompt: {
      en: 'What is the chemical symbol for water?',
      zh: '水的化学符号是什么？',
    },
    options: {
      A: { en: 'O2', zh: 'O2' },
      B: { en: 'H2O', zh: 'H2O' },
      C: { en: 'CO2', zh: 'CO2' },
      D: { en: 'NaCl', zh: 'NaCl' },
    },
    answer: 'B',
    explanation: {
      en: 'Water is composed of two hydrogen atoms and one oxygen atom, giving it the chemical formula H₂O.',
      zh: '水由两个氢原子和一个氧原子组成，化学式为H₂O。',
    },
  },
  {
    id: 'science-2',
    chapter: 'science',
    prompt: {
      en: 'Which planet in our solar system is known as the "Red Planet"?',
      zh: '太阳系中哪颗行星被称为"红色星球"？',
    },
    options: {
      A: { en: 'Venus', zh: '金星' },
      B: { en: 'Jupiter', zh: '木星' },
      C: { en: 'Mars', zh: '火星' },
      D: { en: 'Saturn', zh: '土星' },
    },
    answer: 'C',
    explanation: {
      en: 'Mars appears reddish because of iron oxide (rust) on its surface. It has been a target for exploration due to its relatively Earth-like conditions.',
      zh: '火星因表面的氧化铁（铁锈）而呈现红色。由于其与地球相对相似的条件，它一直是太空探索的目标。',
    },
  },
  {
    id: 'science-3',
    chapter: 'science',
    prompt: {
      en: 'What does DNA stand for?',
      zh: 'DNA的全称是什么？',
    },
    options: {
      A: { en: 'Deoxyribonucleic Acid', zh: '脱氧核糖核酸' },
      B: { en: 'Dinitrogen Acid', zh: '二氮酸' },
      C: { en: 'Dynamic Nuclear Arrangement', zh: '动态核排列' },
      D: { en: 'Double Nucleotide Assembly', zh: '双核苷酸组装' },
    },
    answer: 'A',
    explanation: {
      en: 'DNA (Deoxyribonucleic Acid) carries the genetic instructions for the development, functioning, and reproduction of all known living organisms.',
      zh: 'DNA（脱氧核糖核酸）携带着所有已知生物体发育、功能和繁殖的遗传指令。',
    },
  },
  {
    id: 'science-4',
    chapter: 'science',
    prompt: {
      en: 'What is the speed of light in a vacuum (approximately)?',
      zh: '光在真空中的速度大约是多少？',
    },
    options: {
      A: { en: '300,000 km/s', zh: '30万公里/秒' },
      B: { en: '150,000 km/s', zh: '15万公里/秒' },
      C: { en: '1,000,000 km/s', zh: '100万公里/秒' },
      D: { en: '30,000 km/s', zh: '3万公里/秒' },
    },
    answer: 'A',
    explanation: {
      en: 'The speed of light in a vacuum is approximately 299,792 km/s (about 300,000 km/s), a fundamental constant in physics denoted as "c".',
      zh: '光在真空中的速度约为299,792公里/秒（约30万公里/秒），是物理学中的基本常数，用"c"表示。',
    },
  },
  {
    id: 'science-5',
    chapter: 'science',
    prompt: {
      en: 'Who proposed the theory of general relativity?',
      zh: '谁提出了广义相对论？',
    },
    options: {
      A: { en: 'Isaac Newton', zh: '艾萨克·牛顿' },
      B: { en: 'Albert Einstein', zh: '阿尔伯特·爱因斯坦' },
      C: { en: 'Niels Bohr', zh: '尼尔斯·玻尔' },
      D: { en: 'Stephen Hawking', zh: '斯蒂芬·霍金' },
    },
    answer: 'B',
    explanation: {
      en: 'Albert Einstein published his theory of general relativity in 1915, fundamentally changing our understanding of gravity as the curvature of spacetime.',
      zh: '阿尔伯特·爱因斯坦于1915年发表了广义相对论，从根本上改变了我们对引力作为时空弯曲的理解。',
    },
  },

  // ─── Chapter: Geography & Culture ──────────────────────────────

  {
    id: 'geography-1',
    chapter: 'geography',
    prompt: {
      en: 'Which is the longest river in the world?',
      zh: '世界上最长的河流是哪条？',
    },
    options: {
      A: { en: 'Amazon River', zh: '亚马逊河' },
      B: { en: 'Nile River', zh: '尼罗河' },
      C: { en: 'Yangtze River', zh: '长江' },
      D: { en: 'Mississippi River', zh: '密西西比河' },
    },
    answer: 'B',
    explanation: {
      en: 'The Nile River, flowing through northeastern Africa for about 6,650 km, is generally considered the longest river in the world.',
      zh: '尼罗河流经非洲东北部，全长约6650公里，通常被认为是世界上最长的河流。',
    },
  },
  {
    id: 'geography-2',
    chapter: 'geography',
    prompt: {
      en: 'Which country has the largest population in the world (as of 2024)?',
      zh: '截至2024年，世界上人口最多的国家是哪个？',
    },
    options: {
      A: { en: 'China', zh: '中国' },
      B: { en: 'United States', zh: '美国' },
      C: { en: 'India', zh: '印度' },
      D: { en: 'Indonesia', zh: '印度尼西亚' },
    },
    answer: 'C',
    explanation: {
      en: 'India surpassed China as the most populous country in 2023, with over 1.4 billion people.',
      zh: '印度在2023年超过中国成为世界上人口最多的国家，拥有超过14亿人口。',
    },
  },
  {
    id: 'geography-3',
    chapter: 'geography',
    prompt: {
      en: 'What is the tallest mountain in the world?',
      zh: '世界上最高的山是哪座？',
    },
    options: {
      A: { en: 'K2', zh: 'K2（乔戈里峰）' },
      B: { en: 'Kangchenjunga', zh: '干城章嘉峰' },
      C: { en: 'Mount Everest', zh: '珠穆朗玛峰' },
      D: { en: 'Lhotse', zh: '洛子峰' },
    },
    answer: 'C',
    explanation: {
      en: 'Mount Everest stands at 8,849 meters (29,032 feet) above sea level, making it the tallest mountain on Earth.',
      zh: '珠穆朗玛峰海拔8849米（29032英尺），是地球上最高的山峰。',
    },
  },
  {
    id: 'geography-4',
    chapter: 'geography',
    prompt: {
      en: 'Which desert is the largest hot desert in the world?',
      zh: '世界上最大的热带沙漠是哪个？',
    },
    options: {
      A: { en: 'Gobi Desert', zh: '戈壁沙漠' },
      B: { en: 'Kalahari Desert', zh: '卡拉哈里沙漠' },
      C: { en: 'Sahara Desert', zh: '撒哈拉沙漠' },
      D: { en: 'Arabian Desert', zh: '阿拉伯沙漠' },
    },
    answer: 'C',
    explanation: {
      en: 'The Sahara Desert covers approximately 9.2 million square kilometers across North Africa, making it the largest hot desert in the world.',
      zh: '撒哈拉沙漠横跨北非，面积约920万平方公里，是世界上最大的热带沙漠。',
    },
  },
  {
    id: 'geography-5',
    chapter: 'geography',
    prompt: {
      en: 'Which ocean is the deepest?',
      zh: '哪个海洋最深？',
    },
    options: {
      A: { en: 'Atlantic Ocean', zh: '大西洋' },
      B: { en: 'Indian Ocean', zh: '印度洋' },
      C: { en: 'Arctic Ocean', zh: '北冰洋' },
      D: { en: 'Pacific Ocean', zh: '太平洋' },
    },
    answer: 'D',
    explanation: {
      en: 'The Pacific Ocean contains the Mariana Trench, the deepest point on Earth at about 10,994 meters (36,070 feet) below sea level.',
      zh: '太平洋包含马里亚纳海沟，这是地球上最深的地方，深度约10994米（36070英尺）。',
    },
  },

  // ─── Chapter: Food & Lifestyle ─────────────────────────────────

  {
    id: 'food-1',
    chapter: 'food',
    prompt: {
      en: 'Which country is the origin of sushi?',
      zh: '寿司起源于哪个国家？',
    },
    options: {
      A: { en: 'China', zh: '中国' },
      B: { en: 'Korea', zh: '韩国' },
      C: { en: 'Japan', zh: '日本' },
      D: { en: 'Thailand', zh: '泰国' },
    },
    answer: 'C',
    explanation: {
      en: 'While the concept of preserving fish with rice originated in Southeast Asia, modern sushi as we know it was developed in Japan, particularly in Edo (Tokyo) during the 19th century.',
      zh: '虽然用米饭保存鱼类的概念起源于东南亚，但我们所熟知的现代寿司是在日本发展起来的，特别是19世纪的江户（东京）。',
    },
  },
  {
    id: 'food-2',
    chapter: 'food',
    prompt: {
      en: 'What gives chili peppers their spicy flavor?',
      zh: '是什么让辣椒有辣味？',
    },
    options: {
      A: { en: 'Citric acid', zh: '柠檬酸' },
      B: { en: 'Capsaicin', zh: '辣椒素' },
      C: { en: 'Piperine', zh: '胡椒碱' },
      D: { en: 'Allicin', zh: '大蒜素' },
    },
    answer: 'B',
    explanation: {
      en: 'Capsaicin is the active compound in chili peppers that binds to pain receptors in the mouth, creating the sensation of heat.',
      zh: '辣椒素是辣椒中的活性化合物，它与口腔中的痛觉受体结合，产生灼热感。',
    },
  },
  {
    id: 'food-3',
    chapter: 'food',
    prompt: {
      en: 'Which vitamin is primarily obtained from sunlight exposure?',
      zh: '哪种维生素主要通过阳光照射获得？',
    },
    options: {
      A: { en: 'Vitamin A', zh: '维生素A' },
      B: { en: 'Vitamin B12', zh: '维生素B12' },
      C: { en: 'Vitamin C', zh: '维生素C' },
      D: { en: 'Vitamin D', zh: '维生素D' },
    },
    answer: 'D',
    explanation: {
      en: 'The skin produces Vitamin D when exposed to UVB radiation from sunlight. It is essential for calcium absorption and bone health.',
      zh: '皮肤在阳光中的UVB辐射照射下会产生维生素D。它对钙的吸收和骨骼健康至关重要。',
    },
  },
  {
    id: 'food-4',
    chapter: 'food',
    prompt: {
      en: 'What is the main ingredient in traditional Italian pesto sauce?',
      zh: '传统意大利青酱的主要原料是什么？',
    },
    options: {
      A: { en: 'Parsley', zh: '欧芹' },
      B: { en: 'Basil', zh: '罗勒' },
      C: { en: 'Cilantro', zh: '香菜' },
      D: { en: 'Mint', zh: '薄荷' },
    },
    answer: 'B',
    explanation: {
      en: 'Traditional Genovese pesto is made with fresh basil leaves, pine nuts, garlic, Parmesan cheese, and olive oil.',
      zh: '传统热那亚青酱由新鲜罗勒叶、松子、大蒜、帕尔马干酪和橄榄油制成。',
    },
  },
  {
    id: 'food-5',
    chapter: 'food',
    prompt: {
      en: 'Which tea is known as "red tea" in Chinese?',
      zh: '在中文里被称为"红茶"的茶在英文中叫什么？',
    },
    options: {
      A: { en: 'Green tea', zh: '绿茶' },
      B: { en: 'White tea', zh: '白茶' },
      C: { en: 'Black tea', zh: '红茶' },
      D: { en: 'Oolong tea', zh: '乌龙茶' },
    },
    answer: 'C',
    explanation: {
      en: 'What is called "black tea" in English is known as "red tea" (红茶) in Chinese, named after the reddish color of the brewed liquid rather than the dark leaf color.',
      zh: '英语中的"black tea"在中文里叫"红茶"，因为泡出来的茶汤呈红色，而英文命名则基于茶叶的深色外观。',
    },
  },

  // ─── Chapter: History & Art ────────────────────────────────────

  {
    id: 'history-1',
    chapter: 'history',
    prompt: {
      en: 'Who painted the Mona Lisa?',
      zh: '谁画了《蒙娜丽莎》？',
    },
    options: {
      A: { en: 'Michelangelo', zh: '米开朗基罗' },
      B: { en: 'Leonardo da Vinci', zh: '列奥纳多·达·芬奇' },
      C: { en: 'Raphael', zh: '拉斐尔' },
      D: { en: 'Caravaggio', zh: '卡拉瓦乔' },
    },
    answer: 'B',
    explanation: {
      en: 'Leonardo da Vinci painted the Mona Lisa between 1503 and 1519. It is now displayed at the Louvre Museum in Paris.',
      zh: '列奥纳多·达·芬奇在1503年至1519年间绘制了《蒙娜丽莎》。这幅画现在陈列在巴黎卢浮宫博物馆。',
    },
  },
  {
    id: 'history-2',
    chapter: 'history',
    prompt: {
      en: 'In which year did the first human land on the Moon?',
      zh: '人类第一次登上月球是哪一年？',
    },
    options: {
      A: { en: '1965', zh: '1965年' },
      B: { en: '1969', zh: '1969年' },
      C: { en: '1972', zh: '1972年' },
      D: { en: '1959', zh: '1959年' },
    },
    answer: 'B',
    explanation: {
      en: 'On July 20, 1969, Neil Armstrong and Buzz Aldrin of Apollo 11 became the first humans to walk on the Moon.',
      zh: '1969年7月20日，阿波罗11号的尼尔·阿姆斯特朗和巴兹·奥尔德林成为第一批在月球上行走的人类。',
    },
  },
  {
    id: 'history-3',
    chapter: 'history',
    prompt: {
      en: 'Which ancient civilization built the Great Wall?',
      zh: '哪个古代文明建造了长城？',
    },
    options: {
      A: { en: 'Roman Empire', zh: '罗马帝国' },
      B: { en: 'Ancient Egypt', zh: '古埃及' },
      C: { en: 'Ancient China', zh: '古代中国' },
      D: { en: 'Persian Empire', zh: '波斯帝国' },
    },
    answer: 'C',
    explanation: {
      en: 'The Great Wall of China was built over many centuries, starting from the 7th century BC. The most well-known sections were built during the Ming Dynasty (1368–1644).',
      zh: '中国长城从公元前7世纪开始历经数个世纪建造。最著名的部分建于明朝（1368-1644年）。',
    },
  },
  {
    id: 'history-4',
    chapter: 'history',
    prompt: {
      en: 'Which musical instrument did Beethoven primarily play?',
      zh: '贝多芬主要演奏哪种乐器？',
    },
    options: {
      A: { en: 'Violin', zh: '小提琴' },
      B: { en: 'Piano', zh: '钢琴' },
      C: { en: 'Cello', zh: '大提琴' },
      D: { en: 'Flute', zh: '长笛' },
    },
    answer: 'B',
    explanation: {
      en: 'Ludwig van Beethoven was a virtuoso pianist and composer. He continued to compose masterpieces even after becoming almost completely deaf.',
      zh: '路德维希·范·贝多芬是一位钢琴演奏大师和作曲家。即使在几乎完全失聪后，他仍继续创作杰作。',
    },
  },
  {
    id: 'history-5',
    chapter: 'history',
    prompt: {
      en: 'Which art movement is Salvador Dalí most associated with?',
      zh: '萨尔瓦多·达利最著名的艺术流派是什么？',
    },
    options: {
      A: { en: 'Impressionism', zh: '印象派' },
      B: { en: 'Cubism', zh: '立体主义' },
      C: { en: 'Surrealism', zh: '超现实主义' },
      D: { en: 'Pop Art', zh: '波普艺术' },
    },
    answer: 'C',
    explanation: {
      en: 'Salvador Dalí was a leading figure in Surrealism, known for his striking and bizarre imagery, such as the melting clocks in "The Persistence of Memory".',
      zh: '萨尔瓦多·达利是超现实主义的代表人物，以其惊人而奇异的画面著称，如《记忆的永恒》中融化的时钟。',
    },
  },

  // ─── Chapter: Literature & Language ────────────────────────────

  {
    id: 'literature-1',
    chapter: 'literature',
    prompt: {
      en: 'Who wrote "Romeo and Juliet"?',
      zh: '谁写了《罗密欧与朱丽叶》？',
    },
    options: {
      A: { en: 'Charles Dickens', zh: '查尔斯·狄更斯' },
      B: { en: 'William Shakespeare', zh: '威廉·莎士比亚' },
      C: { en: 'Jane Austen', zh: '简·奥斯汀' },
      D: { en: 'Mark Twain', zh: '马克·吐温' },
    },
    answer: 'B',
    explanation: {
      en: 'William Shakespeare wrote "Romeo and Juliet" around 1594–1596. It remains one of the most performed and adapted plays in the world.',
      zh: '威廉·莎士比亚于1594-1596年间创作了《罗密欧与朱丽叶》。它至今仍是世界上演出和改编最多的戏剧之一。',
    },
  },
  {
    id: 'literature-2',
    chapter: 'literature',
    prompt: {
      en: 'Which novel begins with "It was the best of times, it was the worst of times"?',
      zh: '哪部小说以"这是最好的时代，这是最坏的时代"开头？',
    },
    options: {
      A: { en: 'Great Expectations', zh: '《远大前程》' },
      B: { en: 'A Tale of Two Cities', zh: '《双城记》' },
      C: { en: 'Oliver Twist', zh: '《雾都孤儿》' },
      D: { en: 'Pride and Prejudice', zh: '《傲慢与偏见》' },
    },
    answer: 'B',
    explanation: {
      en: '"A Tale of Two Cities" by Charles Dickens, published in 1859, opens with this famous line and is set during the French Revolution.',
      zh: '查尔斯·狄更斯于1859年出版的《双城记》以这句名言开头，故事背景设定在法国大革命期间。',
    },
  },
  {
    id: 'literature-3',
    chapter: 'literature',
    prompt: {
      en: 'Which Chinese classic novel features the journey of a monk and his disciples to India?',
      zh: '哪部中国古典小说讲述了一位僧人和他的徒弟们去印度取经的旅程？',
    },
    options: {
      A: { en: 'Dream of the Red Chamber', zh: '《红楼梦》' },
      B: { en: 'Journey to the West', zh: '《西游记》' },
      C: { en: 'Romance of the Three Kingdoms', zh: '《三国演义》' },
      D: { en: 'Water Margin', zh: '《水浒传》' },
    },
    answer: 'B',
    explanation: {
      en: '"Journey to the West" by Wu Cheng\'en tells the story of the Buddhist monk Xuanzang and his companions Sun Wukong, Zhu Bajie, and Sha Wujing traveling to India to obtain sacred texts.',
      zh: '吴承恩的《西游记》讲述了唐僧和他的同伴孙悟空、猪八戒、沙悟净前往印度取经的故事。',
    },
  },
  {
    id: 'literature-4',
    chapter: 'literature',
    prompt: {
      en: 'How many letters are in the modern English alphabet?',
      zh: '现代英语字母表有多少个字母？',
    },
    options: {
      A: { en: '24', zh: '24个' },
      B: { en: '26', zh: '26个' },
      C: { en: '28', zh: '28个' },
      D: { en: '30', zh: '30个' },
    },
    answer: 'B',
    explanation: {
      en: 'The modern English alphabet consists of 26 letters, from A to Z. This has been standard since the 16th century.',
      zh: '现代英语字母表由26个字母组成，从A到Z。这一标准从16世纪沿用至今。',
    },
  },
  {
    id: 'literature-5',
    chapter: 'literature',
    prompt: {
      en: 'Who wrote "The Little Prince"?',
      zh: '谁写了《小王子》？',
    },
    options: {
      A: { en: 'Victor Hugo', zh: '维克多·雨果' },
      B: { en: 'Jules Verne', zh: '儒勒·凡尔纳' },
      C: { en: 'Antoine de Saint-Exupéry', zh: '安托万·德·圣埃克苏佩里' },
      D: { en: 'Albert Camus', zh: '阿尔贝·加缪' },
    },
    answer: 'C',
    explanation: {
      en: 'Antoine de Saint-Exupéry, a French aviator and writer, published "The Little Prince" in 1943. It has become one of the most translated and best-selling books ever.',
      zh: '法国飞行员兼作家安托万·德·圣埃克苏佩里于1943年出版了《小王子》。它已成为有史以来翻译最多、最畅销的书籍之一。',
    },
  },
]

export function getQuestionsByChapter(chapterId: string): Question[] {
  return questions.filter((q) => q.chapter === chapterId)
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id)
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id)
}

export function getAllQuestionIds(): string[] {
  return questions.map((q) => q.id)
}
