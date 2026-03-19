import type { Chapter, Question } from './questionTypes'

export const chapters: Chapter[] = [
  {
    id: 'intro',
    name: { en: 'Introduction to Bitcoin', zh: '比特币简介' },
    icon: '🪙',
  },
  {
    id: 'how-it-works',
    name: { en: 'How Bitcoin Works', zh: '比特币的运作原理' },
    icon: '⚙️',
  },
  {
    id: 'keys-addresses',
    name: { en: 'Keys & Addresses', zh: '密钥与地址' },
    icon: '🔑',
  },
  {
    id: 'wallets',
    name: { en: 'Wallets', zh: '钱包' },
    icon: '👛',
  },
  {
    id: 'transactions',
    name: { en: 'Transactions', zh: '交易' },
    icon: '📝',
  },
  {
    id: 'network',
    name: { en: 'The Bitcoin Network', zh: '比特币网络' },
    icon: '🌐',
  },
  {
    id: 'blockchain',
    name: { en: 'The Blockchain', zh: '区块链' },
    icon: '🔗',
  },
  {
    id: 'mining',
    name: { en: 'Mining & Consensus', zh: '挖矿与共识' },
    icon: '⛏️',
  },
  {
    id: 'security',
    name: { en: 'Security', zh: '安全' },
    icon: '🛡️',
  },
  {
    id: 'applications',
    name: { en: 'Applications & Future', zh: '应用与未来' },
    icon: '🚀',
  },
]

export const questions: Question[] = [
  // ─── Chapter 1: Introduction to Bitcoin ────────────────────────

  {
    id: 'intro-1',
    chapter: 'intro',
    prompt: {
      en: 'Who is the creator of Bitcoin?',
      zh: '比特币的创造者是谁？',
    },
    options: {
      A: { en: 'Vitalik Buterin', zh: 'Vitalik Buterin' },
      B: { en: 'Satoshi Nakamoto', zh: '中本聪' },
      C: { en: 'Nick Szabo', zh: 'Nick Szabo' },
      D: { en: 'Hal Finney', zh: 'Hal Finney' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin was invented by Satoshi Nakamoto, who published the Bitcoin whitepaper in 2008 and released the first Bitcoin software in 2009. Satoshi\'s true identity remains unknown.',
      zh: '比特币由中本聪发明，他于2008年发表了比特币白皮书，并于2009年发布了第一版比特币软件。中本聪的真实身份至今仍是未知的。',
    },
  },
  {
    id: 'intro-2',
    chapter: 'intro',
    prompt: {
      en: 'In what year was the Bitcoin whitepaper published?',
      zh: '比特币白皮书是哪一年发表的？',
    },
    options: {
      A: { en: '2006', zh: '2006年' },
      B: { en: '2007', zh: '2007年' },
      C: { en: '2008', zh: '2008年' },
      D: { en: '2010', zh: '2010年' },
    },
    answer: 'C',
    explanation: {
      en: 'The Bitcoin whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System" was published by Satoshi Nakamoto on October 31, 2008.',
      zh: '比特币白皮书《比特币：一种点对点的电子现金系统》由中本聪于2008年10月31日发表。',
    },
  },
  {
    id: 'intro-3',
    chapter: 'intro',
    prompt: {
      en: 'What is the smallest unit of Bitcoin called?',
      zh: '比特币的最小单位叫什么？',
    },
    options: {
      A: { en: 'Wei', zh: 'Wei' },
      B: { en: 'Gwei', zh: 'Gwei' },
      C: { en: 'Satoshi', zh: '聪（Satoshi）' },
      D: { en: 'Bit', zh: 'Bit' },
    },
    answer: 'C',
    explanation: {
      en: 'A satoshi is the smallest unit of Bitcoin, equal to 0.00000001 BTC (one hundred millionth of a bitcoin). It is named after Bitcoin\'s creator, Satoshi Nakamoto.',
      zh: '聪（satoshi）是比特币的最小单位，等于0.00000001 BTC（一亿分之一个比特币）。以比特币创造者中本聪的名字命名。',
    },
  },
  {
    id: 'intro-4',
    chapter: 'intro',
    prompt: {
      en: 'What is the maximum supply of Bitcoin?',
      zh: '比特币的最大供应量是多少？',
    },
    options: {
      A: { en: '10 million', zh: '1000万' },
      B: { en: '21 million', zh: '2100万' },
      C: { en: '100 million', zh: '1亿' },
      D: { en: 'Unlimited', zh: '无限' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin has a fixed supply cap of 21 million coins. This scarcity is enforced by the protocol and is one of Bitcoin\'s key properties as a deflationary asset.',
      zh: '比特币的供应上限固定为2100万枚。这种稀缺性由协议强制执行，是比特币作为通缩资产的关键属性之一。',
    },
  },
  {
    id: 'intro-5',
    chapter: 'intro',
    prompt: {
      en: 'What type of system is Bitcoin?',
      zh: '比特币是什么类型的系统？',
    },
    options: {
      A: { en: 'Centralized banking system', zh: '中心化银行系统' },
      B: { en: 'Decentralized peer-to-peer system', zh: '去中心化点对点系统' },
      C: { en: 'Government-controlled currency', zh: '政府控制的货币' },
      D: { en: 'Corporate payment network', zh: '企业支付网络' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin is a decentralized peer-to-peer electronic cash system. There is no central authority; instead, the network is maintained by distributed nodes following consensus rules.',
      zh: '比特币是一种去中心化的点对点电子现金系统。没有中央权威机构，网络由遵循共识规则的分布式节点维护。',
    },
  },

  // ─── Chapter 2: How Bitcoin Works ──────────────────────────────

  {
    id: 'how-1',
    chapter: 'how-it-works',
    prompt: {
      en: 'What is a Bitcoin transaction essentially?',
      zh: '比特币交易本质上是什么？',
    },
    options: {
      A: { en: 'A transfer of physical coins', zh: '物理货币的转移' },
      B: { en: 'A data structure encoding a transfer of value', zh: '编码价值转移的数据结构' },
      C: { en: 'A bank wire transfer', zh: '银行电汇' },
      D: { en: 'An email with payment information', zh: '带支付信息的电子邮件' },
    },
    answer: 'B',
    explanation: {
      en: 'A Bitcoin transaction is a data structure that encodes a transfer of value between participants in the Bitcoin system. Each transaction is a public entry in the blockchain.',
      zh: '比特币交易是一种数据结构，用于编码比特币系统参与者之间的价值转移。每笔交易都是区块链上的公开记录。',
    },
  },
  {
    id: 'how-2',
    chapter: 'how-it-works',
    prompt: {
      en: 'What does UTXO stand for in Bitcoin?',
      zh: 'UTXO在比特币中代表什么？',
    },
    options: {
      A: { en: 'Universal Transaction eXchange Operation', zh: '通用交易交换操作' },
      B: { en: 'Unspent Transaction Output', zh: '未花费交易输出' },
      C: { en: 'Unified Token eXchange Order', zh: '统一代币交换订单' },
      D: { en: 'User Transaction eXecution Object', zh: '用户交易执行对象' },
    },
    answer: 'B',
    explanation: {
      en: 'UTXO stands for Unspent Transaction Output. It represents the amount of bitcoin that remains after a transaction and can be used as an input in a future transaction.',
      zh: 'UTXO代表未花费交易输出（Unspent Transaction Output）。它表示交易完成后剩余的比特币数量，可用作未来交易的输入。',
    },
  },
  {
    id: 'how-3',
    chapter: 'how-it-works',
    prompt: {
      en: 'What role do Bitcoin miners play?',
      zh: '比特币矿工扮演什么角色？',
    },
    options: {
      A: { en: 'They print new paper money', zh: '他们印刷新的纸币' },
      B: { en: 'They validate transactions and create new blocks', zh: '他们验证交易并创建新区块' },
      C: { en: 'They manage user accounts', zh: '他们管理用户账户' },
      D: { en: 'They store user passwords', zh: '他们存储用户密码' },
    },
    answer: 'B',
    explanation: {
      en: 'Miners validate pending transactions, group them into blocks, and compete to solve a proof-of-work puzzle. The winner adds the block to the blockchain and receives a reward.',
      zh: '矿工验证待处理的交易，将它们打包成区块，并竞争解决工作量证明谜题。获胜者将区块添加到区块链并获得奖励。',
    },
  },
  {
    id: 'how-4',
    chapter: 'how-it-works',
    prompt: {
      en: 'How are transaction fees determined in Bitcoin?',
      zh: '比特币中的交易费用是如何确定的？',
    },
    options: {
      A: { en: 'Fixed by the government', zh: '由政府固定' },
      B: { en: 'Based on the difference between inputs and outputs', zh: '基于输入和输出之间的差额' },
      C: { en: 'Always exactly 1 BTC', zh: '始终正好为1 BTC' },
      D: { en: 'Determined by banks', zh: '由银行决定' },
    },
    answer: 'B',
    explanation: {
      en: 'Transaction fees in Bitcoin are the difference between the total input value and the total output value of a transaction. Higher fees incentivize miners to prioritize the transaction.',
      zh: '比特币中的交易费用是交易总输入值与总输出值之间的差额。更高的费用可以激励矿工优先处理该交易。',
    },
  },
  {
    id: 'how-5',
    chapter: 'how-it-works',
    prompt: {
      en: 'What is the "mempool" in Bitcoin?',
      zh: '比特币中的"内存池"（mempool）是什么？',
    },
    options: {
      A: { en: 'A hardware mining device', zh: '一种硬件挖矿设备' },
      B: { en: 'A collection of unconfirmed transactions waiting to be included in a block', zh: '等待被包含在区块中的未确认交易集合' },
      C: { en: 'A type of cryptocurrency wallet', zh: '一种加密货币钱包' },
      D: { en: 'The total memory used by the Bitcoin software', zh: '比特币软件使用的总内存' },
    },
    answer: 'B',
    explanation: {
      en: 'The mempool (memory pool) is where valid but unconfirmed transactions wait before being picked up by miners and included in a block.',
      zh: '内存池（mempool）是有效但未确认的交易在被矿工选中并包含在区块中之前等待的地方。',
    },
  },

  // ─── Chapter 3: Keys & Addresses ───────────────────────────────

  {
    id: 'keys-1',
    chapter: 'keys-addresses',
    prompt: {
      en: 'What cryptographic algorithm does Bitcoin use for key generation?',
      zh: '比特币使用什么加密算法来生成密钥？',
    },
    options: {
      A: { en: 'RSA', zh: 'RSA' },
      B: { en: 'AES-256', zh: 'AES-256' },
      C: { en: 'Elliptic Curve (secp256k1)', zh: '椭圆曲线（secp256k1）' },
      D: { en: 'SHA-512', zh: 'SHA-512' },
    },
    answer: 'C',
    explanation: {
      en: 'Bitcoin uses the Elliptic Curve Digital Signature Algorithm (ECDSA) with the secp256k1 curve for generating key pairs and signing transactions.',
      zh: '比特币使用基于secp256k1曲线的椭圆曲线数字签名算法（ECDSA）来生成密钥对和签名交易。',
    },
  },
  {
    id: 'keys-2',
    chapter: 'keys-addresses',
    prompt: {
      en: 'How is a Bitcoin address derived?',
      zh: '比特币地址是如何生成的？',
    },
    options: {
      A: { en: 'Randomly generated by the network', zh: '由网络随机生成' },
      B: { en: 'From the public key through hashing', zh: '通过对公钥进行哈希运算' },
      C: { en: 'Assigned by a central authority', zh: '由中央机构分配' },
      D: { en: 'Copied from another user', zh: '从其他用户复制' },
    },
    answer: 'B',
    explanation: {
      en: 'A Bitcoin address is derived from a public key by applying SHA-256 followed by RIPEMD-160 hashing, then encoding the result with Base58Check (or Bech32 for SegWit addresses).',
      zh: '比特币地址通过对公钥先进行SHA-256哈希，然后进行RIPEMD-160哈希，最后用Base58Check编码（或用Bech32编码SegWit地址）生成。',
    },
  },
  {
    id: 'keys-3',
    chapter: 'keys-addresses',
    prompt: {
      en: 'What is the relationship between a private key and a public key?',
      zh: '私钥和公钥之间的关系是什么？',
    },
    options: {
      A: { en: 'They are the same key', zh: '它们是同一个密钥' },
      B: { en: 'The public key can derive the private key', zh: '公钥可以推导出私钥' },
      C: { en: 'The private key generates the public key via one-way function', zh: '私钥通过单向函数生成公钥' },
      D: { en: 'They are assigned independently', zh: '它们是独立分配的' },
    },
    answer: 'C',
    explanation: {
      en: 'A public key is derived from the private key using elliptic curve multiplication, which is a one-way function. You cannot reverse-engineer the private key from the public key.',
      zh: '公钥通过椭圆曲线乘法从私钥推导而来，这是一个单向函数。无法从公钥反向推导出私钥。',
    },
  },
  {
    id: 'keys-4',
    chapter: 'keys-addresses',
    prompt: {
      en: 'What encoding format do legacy Bitcoin addresses use?',
      zh: '传统比特币地址使用什么编码格式？',
    },
    options: {
      A: { en: 'Base64', zh: 'Base64' },
      B: { en: 'Hexadecimal', zh: '十六进制' },
      C: { en: 'Base58Check', zh: 'Base58Check' },
      D: { en: 'Binary', zh: '二进制' },
    },
    answer: 'C',
    explanation: {
      en: 'Legacy Bitcoin addresses use Base58Check encoding, which is Base58 with a version prefix and a checksum suffix to prevent transcription errors.',
      zh: 'Legacy比特币地址使用Base58Check编码，即在Base58的基础上加上版本前缀和校验和后缀，以防止抄写错误。',
    },
  },
  {
    id: 'keys-5',
    chapter: 'keys-addresses',
    prompt: {
      en: 'What prefix does a mainnet Bitcoin address typically start with?',
      zh: '比特币主网地址通常以什么前缀开头？',
    },
    options: {
      A: { en: '"0x"', zh: '"0x"' },
      B: { en: '"1" or "3" or "bc1"', zh: '"1"或"3"或"bc1"' },
      C: { en: '"BTC"', zh: '"BTC"' },
      D: { en: '"m" or "n"', zh: '"m"或"n"' },
    },
    answer: 'B',
    explanation: {
      en: 'Mainnet Bitcoin addresses start with "1" (P2PKH), "3" (P2SH), or "bc1" (Bech32/SegWit). Testnet addresses start with "m", "n", or "tb1".',
      zh: '主网比特币地址以"1"（P2PKH）、"3"（P2SH）或"bc1"（Bech32/SegWit）开头。测试网地址以"m"、"n"或"tb1"开头。',
    },
  },

  // ─── Chapter 4: Wallets ────────────────────────────────────────

  {
    id: 'wallets-1',
    chapter: 'wallets',
    prompt: {
      en: 'What is an HD wallet?',
      zh: '什么是HD钱包？',
    },
    options: {
      A: { en: 'A high-definition display wallet', zh: '高清显示钱包' },
      B: { en: 'A Hierarchical Deterministic wallet', zh: '分层确定性钱包' },
      C: { en: 'A hardware device wallet', zh: '硬件设备钱包' },
      D: { en: 'A high-density storage wallet', zh: '高密度存储钱包' },
    },
    answer: 'B',
    explanation: {
      en: 'HD (Hierarchical Deterministic) wallets generate a tree of keys from a single seed, as defined in BIP-32. This allows backup of all keys with a single seed phrase.',
      zh: 'HD（分层确定性）钱包从单个种子生成密钥树，如BIP-32所定义。这允许用单个种子短语备份所有密钥。',
    },
  },
  {
    id: 'wallets-2',
    chapter: 'wallets',
    prompt: {
      en: 'What is a mnemonic seed phrase typically composed of?',
      zh: '助记种子短语通常由什么组成？',
    },
    options: {
      A: { en: 'A random string of numbers', zh: '一串随机数字' },
      B: { en: '12 or 24 words from a predefined word list', zh: '来自预定义词表的12或24个单词' },
      C: { en: 'A username and password', zh: '用户名和密码' },
      D: { en: 'A QR code', zh: '二维码' },
    },
    answer: 'B',
    explanation: {
      en: 'As defined in BIP-39, a mnemonic phrase consists of 12 or 24 words selected from a list of 2048 words. This phrase encodes the seed used to generate all keys in an HD wallet.',
      zh: '根据BIP-39，助记词由从2048个单词列表中选取的12或24个单词组成。该短语编码了用于生成HD钱包中所有密钥的种子。',
    },
  },
  {
    id: 'wallets-3',
    chapter: 'wallets',
    prompt: {
      en: 'What is the purpose of a "watch-only" wallet?',
      zh: '"观察钱包"（watch-only wallet）的目的是什么？',
    },
    options: {
      A: { en: 'To mine Bitcoin faster', zh: '更快地挖掘比特币' },
      B: { en: 'To monitor balances and transactions without being able to spend', zh: '监控余额和交易但无法花费' },
      C: { en: 'To watch Bitcoin price charts', zh: '观看比特币价格图表' },
      D: { en: 'To stream videos about Bitcoin', zh: '播放关于比特币的视频' },
    },
    answer: 'B',
    explanation: {
      en: 'A watch-only wallet contains public keys but no private keys. It can view balances and incoming transactions but cannot sign or spend funds, making it useful for monitoring.',
      zh: '观察钱包只包含公钥而不包含私钥。它可以查看余额和收入交易，但无法签名或花费资金，适用于监控用途。',
    },
  },
  {
    id: 'wallets-4',
    chapter: 'wallets',
    prompt: {
      en: 'Which BIP defines the standard for mnemonic code words?',
      zh: '哪个BIP定义了助记词的标准？',
    },
    options: {
      A: { en: 'BIP-32', zh: 'BIP-32' },
      B: { en: 'BIP-39', zh: 'BIP-39' },
      C: { en: 'BIP-44', zh: 'BIP-44' },
      D: { en: 'BIP-141', zh: 'BIP-141' },
    },
    answer: 'B',
    explanation: {
      en: 'BIP-39 defines the standard for generating mnemonic code words from entropy and converting them into a binary seed for HD wallets. BIP-32 defines HD wallets, and BIP-44 defines multi-account hierarchy.',
      zh: 'BIP-39定义了从熵生成助记词并将其转换为HD钱包二进制种子的标准。BIP-32定义了HD钱包，BIP-44定义了多账户层次结构。',
    },
  },
  {
    id: 'wallets-5',
    chapter: 'wallets',
    prompt: {
      en: 'What is the advantage of generating a new address for each transaction?',
      zh: '为每笔交易生成新地址有什么好处？',
    },
    options: {
      A: { en: 'Faster transactions', zh: '更快的交易' },
      B: { en: 'Lower fees', zh: '更低的费用' },
      C: { en: 'Better privacy', zh: '更好的隐私性' },
      D: { en: 'Higher Bitcoin value', zh: '更高的比特币价值' },
    },
    answer: 'C',
    explanation: {
      en: 'Using a new address for each transaction improves privacy by making it harder to link multiple transactions to the same person. HD wallets make this easy to manage.',
      zh: '为每笔交易使用新地址可以提高隐私性，使得将多笔交易关联到同一个人变得更加困难。HD钱包使这一点易于管理。',
    },
  },

  // ─── Chapter 5: Transactions ───────────────────────────────────

  {
    id: 'tx-1',
    chapter: 'transactions',
    prompt: {
      en: 'What are the main components of a Bitcoin transaction?',
      zh: '比特币交易的主要组成部分是什么？',
    },
    options: {
      A: { en: 'Sender name, receiver name, amount', zh: '发送方姓名、接收方姓名、金额' },
      B: { en: 'Inputs, outputs, and metadata', zh: '输入、输出和元数据' },
      C: { en: 'Email, password, and amount', zh: '电子邮件、密码和金额' },
      D: { en: 'Bank account, routing number, amount', zh: '银行账户、路由号码、金额' },
    },
    answer: 'B',
    explanation: {
      en: 'A Bitcoin transaction consists of inputs (referencing previous UTXOs), outputs (defining new UTXOs with locking scripts), and metadata (version, locktime, etc.).',
      zh: '比特币交易由输入（引用之前的UTXO）、输出（定义带有锁定脚本的新UTXO）和元数据（版本、锁定时间等）组成。',
    },
  },
  {
    id: 'tx-2',
    chapter: 'transactions',
    prompt: {
      en: 'What is a "coinbase transaction"?',
      zh: '什么是"coinbase交易"？',
    },
    options: {
      A: { en: 'A transaction on the Coinbase exchange', zh: '在Coinbase交易所的交易' },
      B: { en: 'The first transaction in each block that rewards the miner', zh: '每个区块中奖励矿工的第一笔交易' },
      C: { en: 'A transaction that converts altcoins to Bitcoin', zh: '将山寨币转换为比特币的交易' },
      D: { en: 'A high-fee priority transaction', zh: '高手续费优先交易' },
    },
    answer: 'B',
    explanation: {
      en: 'The coinbase transaction is the first transaction in every block. It has no inputs and creates new bitcoin as the block reward plus collected transaction fees for the miner.',
      zh: 'Coinbase交易是每个区块中的第一笔交易。它没有输入，创建新的比特币作为区块奖励加上矿工收集的交易费用。',
    },
  },
  {
    id: 'tx-3',
    chapter: 'transactions',
    prompt: {
      en: 'What scripting language does Bitcoin use for transactions?',
      zh: '比特币交易使用什么脚本语言？',
    },
    options: {
      A: { en: 'JavaScript', zh: 'JavaScript' },
      B: { en: 'Solidity', zh: 'Solidity' },
      C: { en: 'Script (a stack-based language)', zh: 'Script（基于栈的语言）' },
      D: { en: 'Python', zh: 'Python' },
    },
    answer: 'C',
    explanation: {
      en: 'Bitcoin uses Script, a simple stack-based scripting language that is intentionally not Turing-complete. It is used to define the conditions under which a UTXO can be spent.',
      zh: '比特币使用Script，一种简单的基于栈的脚本语言，刻意设计为非图灵完备。它用于定义UTXO可以被花费的条件。',
    },
  },
  {
    id: 'tx-4',
    chapter: 'transactions',
    prompt: {
      en: 'What is a multisignature (multisig) transaction?',
      zh: '什么是多重签名（multisig）交易？',
    },
    options: {
      A: { en: 'A transaction signed by one person multiple times', zh: '一个人多次签名的交易' },
      B: { en: 'A transaction requiring signatures from multiple private keys (M-of-N)', zh: '需要多个私钥签名的交易（M-of-N）' },
      C: { en: 'A transaction with multiple recipients', zh: '有多个接收方的交易' },
      D: { en: 'A transaction sent to multiple blockchains', zh: '发送到多个区块链的交易' },
    },
    answer: 'B',
    explanation: {
      en: 'A multisig transaction requires M signatures out of N possible signers (e.g., 2-of-3). This provides shared control over funds and is commonly used for security and escrow.',
      zh: '多重签名交易需要N个可能签名者中的M个签名（例如，3中取2）。这提供了对资金的共享控制，通常用于安全和托管。',
    },
  },
  {
    id: 'tx-5',
    chapter: 'transactions',
    prompt: {
      en: 'What is SegWit (Segregated Witness)?',
      zh: '什么是隔离见证（SegWit）？',
    },
    options: {
      A: { en: 'A new cryptocurrency', zh: '一种新的加密货币' },
      B: { en: 'An upgrade that separates signature data from transaction data', zh: '将签名数据与交易数据分离的升级' },
      C: { en: 'A mining hardware brand', zh: '一种挖矿硬件品牌' },
      D: { en: 'A Bitcoin exchange platform', zh: '一个比特币交易平台' },
    },
    answer: 'B',
    explanation: {
      en: 'SegWit (BIP-141) is a protocol upgrade that separates (segregates) the digital signature (witness) data from the transaction, fixing transaction malleability and increasing block capacity.',
      zh: '隔离见证（BIP-141）是一种协议升级，将数字签名（见证）数据从交易中分离（隔离），修复了交易可延展性问题并增加了区块容量。',
    },
  },

  // ─── Chapter 6: The Bitcoin Network ────────────────────────────

  {
    id: 'net-1',
    chapter: 'network',
    prompt: {
      en: 'What type of network architecture does Bitcoin use?',
      zh: '比特币使用什么类型的网络架构？',
    },
    options: {
      A: { en: 'Client-server', zh: '客户端-服务器' },
      B: { en: 'Peer-to-peer (P2P)', zh: '点对点（P2P）' },
      C: { en: 'Master-slave', zh: '主从架构' },
      D: { en: 'Hub-and-spoke', zh: '中心辐射架构' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin uses a flat, peer-to-peer network where all nodes are equal. There is no central server; nodes communicate directly with each other.',
      zh: '比特币使用扁平的点对点网络，所有节点都是平等的。没有中央服务器，节点之间直接通信。',
    },
  },
  {
    id: 'net-2',
    chapter: 'network',
    prompt: {
      en: 'What is a "full node" in the Bitcoin network?',
      zh: '比特币网络中的"全节点"是什么？',
    },
    options: {
      A: { en: 'A node that only stores block headers', zh: '只存储区块头的节点' },
      B: { en: 'A node that maintains a complete copy of the blockchain and validates all rules', zh: '维护区块链完整副本并验证所有规则的节点' },
      C: { en: 'A node that mines Bitcoin', zh: '挖掘比特币的节点' },
      D: { en: 'A node run by the government', zh: '由政府运行的节点' },
    },
    answer: 'B',
    explanation: {
      en: 'A full node downloads and validates every block and transaction against the full set of consensus rules. It maintains the complete blockchain and does not trust other nodes.',
      zh: '全节点下载并验证每个区块和交易是否符合完整的共识规则。它维护完整的区块链，不信任其他节点。',
    },
  },
  {
    id: 'net-3',
    chapter: 'network',
    prompt: {
      en: 'What is SPV (Simplified Payment Verification)?',
      zh: '什么是SPV（简化支付验证）？',
    },
    options: {
      A: { en: 'A method for miners to verify blocks faster', zh: '矿工更快验证区块的方法' },
      B: { en: 'A method for lightweight clients to verify transactions without downloading the full blockchain', zh: '轻量客户端无需下载完整区块链即可验证交易的方法' },
      C: { en: 'A type of Bitcoin wallet encryption', zh: '一种比特币钱包加密类型' },
      D: { en: 'A consensus algorithm', zh: '一种共识算法' },
    },
    answer: 'B',
    explanation: {
      en: 'SPV allows lightweight clients to verify that a transaction is included in a block by checking block headers and Merkle proofs, without downloading the entire blockchain.',
      zh: 'SPV允许轻量客户端通过检查区块头和默克尔证明来验证交易是否被包含在区块中，无需下载整个区块链。',
    },
  },
  {
    id: 'net-4',
    chapter: 'network',
    prompt: {
      en: 'How do Bitcoin nodes discover other nodes to connect to?',
      zh: '比特币节点如何发现其他可连接的节点？',
    },
    options: {
      A: { en: 'Through a central directory server', zh: '通过中央目录服务器' },
      B: { en: 'Through DNS seeds and peer exchange', zh: '通过DNS种子和对等节点交换' },
      C: { en: 'Through email invitations', zh: '通过电子邮件邀请' },
      D: { en: 'They cannot discover new nodes', zh: '它们无法发现新节点' },
    },
    answer: 'B',
    explanation: {
      en: 'New Bitcoin nodes use DNS seeds (hardcoded DNS hostnames) for initial discovery, then learn about additional peers through address messages exchanged with connected nodes.',
      zh: '新的比特币节点使用DNS种子（硬编码的DNS主机名）进行初始发现，然后通过与已连接节点交换地址消息来了解更多对等节点。',
    },
  },
  {
    id: 'net-5',
    chapter: 'network',
    prompt: {
      en: 'What protocol do Bitcoin nodes use to communicate?',
      zh: '比特币节点使用什么协议进行通信？',
    },
    options: {
      A: { en: 'HTTP/HTTPS', zh: 'HTTP/HTTPS' },
      B: { en: 'Bitcoin P2P protocol over TCP', zh: '基于TCP的比特币P2P协议' },
      C: { en: 'SMTP', zh: 'SMTP' },
      D: { en: 'FTP', zh: 'FTP' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin nodes communicate using the Bitcoin P2P protocol, a binary protocol that runs over TCP (typically on port 8333 for mainnet).',
      zh: '比特币节点使用比特币P2P协议进行通信，这是一种运行在TCP之上的二进制协议（主网通常使用8333端口）。',
    },
  },

  // ─── Chapter 7: The Blockchain ─────────────────────────────────

  {
    id: 'bc-1',
    chapter: 'blockchain',
    prompt: {
      en: 'What data structure links blocks together in the blockchain?',
      zh: '什么数据结构将区块链中的区块连接在一起？',
    },
    options: {
      A: { en: 'Linked list with pointers', zh: '带指针的链表' },
      B: { en: 'Hash of the previous block header', zh: '前一个区块头的哈希' },
      C: { en: 'Database indexes', zh: '数据库索引' },
      D: { en: 'Sequential numbering only', zh: '仅顺序编号' },
    },
    answer: 'B',
    explanation: {
      en: 'Each block header contains the hash of the previous block header, creating a chain. Changing any block would invalidate all subsequent block hashes.',
      zh: '每个区块头包含前一个区块头的哈希，形成链式结构。更改任何区块都会使所有后续区块的哈希失效。',
    },
  },
  {
    id: 'bc-2',
    chapter: 'blockchain',
    prompt: {
      en: 'What is a Merkle tree used for in Bitcoin?',
      zh: '默克尔树在比特币中用于什么？',
    },
    options: {
      A: { en: 'Storing user passwords', zh: '存储用户密码' },
      B: { en: 'Efficiently summarizing and verifying transaction integrity', zh: '高效总结和验证交易完整性' },
      C: { en: 'Encrypting private keys', zh: '加密私钥' },
      D: { en: 'Generating new Bitcoin addresses', zh: '生成新的比特币地址' },
    },
    answer: 'B',
    explanation: {
      en: 'A Merkle tree is a binary hash tree that provides an efficient summary of all transactions in a block. The Merkle root in the block header allows SPV clients to verify transaction inclusion.',
      zh: '默克尔树是一种二叉哈希树，提供区块中所有交易的高效摘要。区块头中的默克尔根允许SPV客户端验证交易是否被包含。',
    },
  },
  {
    id: 'bc-3',
    chapter: 'blockchain',
    prompt: {
      en: 'What is the Genesis Block?',
      zh: '什么是创世区块？',
    },
    options: {
      A: { en: 'The most recently mined block', zh: '最近挖出的区块' },
      B: { en: 'The first block in the Bitcoin blockchain (block 0)', zh: '比特币区块链中的第一个区块（区块0）' },
      C: { en: 'A block with no transactions', zh: '没有交易的区块' },
      D: { en: 'A block that resets the blockchain', zh: '重置区块链的区块' },
    },
    answer: 'B',
    explanation: {
      en: 'The Genesis Block is block 0, the first block of the Bitcoin blockchain, mined by Satoshi Nakamoto on January 3, 2009. It contains the text "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."',
      zh: '创世区块是区块0，比特币区块链的第一个区块，由中本聪于2009年1月3日挖出。它包含文本"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"。',
    },
  },
  {
    id: 'bc-4',
    chapter: 'blockchain',
    prompt: {
      en: 'How many confirmations are generally recommended before considering a Bitcoin transaction final?',
      zh: '通常建议多少个确认后才认为比特币交易是最终的？',
    },
    options: {
      A: { en: '1 confirmation', zh: '1个确认' },
      B: { en: '3 confirmations', zh: '3个确认' },
      C: { en: '6 confirmations', zh: '6个确认' },
      D: { en: '100 confirmations', zh: '100个确认' },
    },
    answer: 'C',
    explanation: {
      en: 'Six confirmations (approximately one hour) is the conventional standard for considering a transaction irreversible. Each confirmation exponentially reduces the probability of a double-spend attack.',
      zh: '六个确认（大约一小时）是认为交易不可逆转的传统标准。每次确认都会指数级降低双重支付攻击的概率。',
    },
  },
  {
    id: 'bc-5',
    chapter: 'blockchain',
    prompt: {
      en: 'What information is stored in a block header?',
      zh: '区块头中存储了什么信息？',
    },
    options: {
      A: { en: 'All transaction details in full', zh: '所有交易的完整详细信息' },
      B: { en: 'Version, previous block hash, Merkle root, timestamp, difficulty target, nonce', zh: '版本、前一区块哈希、默克尔根、时间戳、难度目标、随机数' },
      C: { en: 'User names and account balances', zh: '用户名和账户余额' },
      D: { en: 'Only the block number', zh: '仅区块编号' },
    },
    answer: 'B',
    explanation: {
      en: 'A block header is 80 bytes and contains six fields: version, previous block hash, Merkle root, timestamp, difficulty target (bits), and nonce.',
      zh: '区块头为80字节，包含六个字段：版本、前一区块哈希、默克尔根、时间戳、难度目标（bits）和随机数（nonce）。',
    },
  },

  // ─── Chapter 8: Mining & Consensus ─────────────────────────────

  {
    id: 'mining-1',
    chapter: 'mining',
    prompt: {
      en: 'What consensus mechanism does Bitcoin use?',
      zh: '比特币使用什么共识机制？',
    },
    options: {
      A: { en: 'Proof of Stake (PoS)', zh: '权益证明（PoS）' },
      B: { en: 'Proof of Work (PoW)', zh: '工作量证明（PoW）' },
      C: { en: 'Delegated Proof of Stake (DPoS)', zh: '委托权益证明（DPoS）' },
      D: { en: 'Proof of Authority (PoA)', zh: '权威证明（PoA）' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin uses Proof of Work (PoW), where miners compete to find a nonce that produces a block hash below the current difficulty target. This requires significant computational effort.',
      zh: '比特币使用工作量证明（PoW），矿工竞争寻找一个随机数（nonce），使得区块哈希低于当前难度目标。这需要大量的计算工作。',
    },
  },
  {
    id: 'mining-2',
    chapter: 'mining',
    prompt: {
      en: 'How often does the Bitcoin mining difficulty adjust?',
      zh: '比特币挖矿难度多久调整一次？',
    },
    options: {
      A: { en: 'Every block', zh: '每个区块' },
      B: { en: 'Every 2,016 blocks (approximately 2 weeks)', zh: '每2016个区块（大约2周）' },
      C: { en: 'Every month', zh: '每月' },
      D: { en: 'It never changes', zh: '永远不变' },
    },
    answer: 'B',
    explanation: {
      en: 'The difficulty is recalculated every 2,016 blocks (roughly every two weeks) to maintain an average block time of 10 minutes, regardless of total network hash power.',
      zh: '难度每2016个区块（大约每两周）重新计算一次，以保持平均10分钟的出块时间，无论总网络算力如何变化。',
    },
  },
  {
    id: 'mining-3',
    chapter: 'mining',
    prompt: {
      en: 'What is the "halving" in Bitcoin?',
      zh: '比特币中的"减半"是什么？',
    },
    options: {
      A: { en: 'When the Bitcoin price drops by half', zh: '比特币价格下跌一半' },
      B: { en: 'When the block reward is cut in half approximately every 4 years', zh: '大约每4年区块奖励减半' },
      C: { en: 'When half the nodes go offline', zh: '一半节点离线' },
      D: { en: 'When transaction fees are halved', zh: '交易费用减半' },
    },
    answer: 'B',
    explanation: {
      en: 'The halving occurs every 210,000 blocks (approximately every 4 years), cutting the block reward in half. It started at 50 BTC and has halved to 25, 12.5, 6.25, and 3.125 BTC.',
      zh: '减半每210,000个区块（大约每4年）发生一次，将区块奖励减半。从50 BTC开始，已依次减半为25、12.5、6.25和3.125 BTC。',
    },
  },
  {
    id: 'mining-4',
    chapter: 'mining',
    prompt: {
      en: 'What hashing algorithm does Bitcoin mining use?',
      zh: '比特币挖矿使用什么哈希算法？',
    },
    options: {
      A: { en: 'MD5', zh: 'MD5' },
      B: { en: 'SHA-256', zh: 'SHA-256' },
      C: { en: 'Scrypt', zh: 'Scrypt' },
      D: { en: 'Ethash', zh: 'Ethash' },
    },
    answer: 'B',
    explanation: {
      en: 'Bitcoin mining uses double SHA-256 (SHA-256 applied twice) to hash the block header. Miners search for a nonce that produces a hash below the current target.',
      zh: '比特币挖矿使用双重SHA-256（两次应用SHA-256）来计算区块头的哈希。矿工寻找一个使哈希值低于当前目标的随机数。',
    },
  },
  {
    id: 'mining-5',
    chapter: 'mining',
    prompt: {
      en: 'What is the target block generation time in Bitcoin?',
      zh: '比特币的目标出块时间是多少？',
    },
    options: {
      A: { en: '1 minute', zh: '1分钟' },
      B: { en: '5 minutes', zh: '5分钟' },
      C: { en: '10 minutes', zh: '10分钟' },
      D: { en: '30 minutes', zh: '30分钟' },
    },
    answer: 'C',
    explanation: {
      en: 'Bitcoin targets an average block generation time of 10 minutes. The difficulty adjustment mechanism ensures this target is maintained over time.',
      zh: '比特币的平均目标出块时间为10分钟。难度调整机制确保这一目标随时间保持稳定。',
    },
  },

  // ─── Chapter 9: Security ───────────────────────────────────────

  {
    id: 'sec-1',
    chapter: 'security',
    prompt: {
      en: 'What is a "51% attack"?',
      zh: '什么是"51%攻击"？',
    },
    options: {
      A: { en: 'Hacking 51% of Bitcoin wallets', zh: '黑掉51%的比特币钱包' },
      B: { en: 'When an attacker controls more than 50% of the network hash rate to manipulate the blockchain', zh: '当攻击者控制超过50%的网络算力来操纵区块链' },
      C: { en: 'Stealing 51% of all Bitcoin', zh: '盗取51%的比特币' },
      D: { en: 'When 51% of nodes go offline', zh: '51%的节点离线' },
    },
    answer: 'B',
    explanation: {
      en: 'A 51% attack occurs when an entity controls the majority of hash power, enabling them to potentially double-spend coins, prevent transactions, or reverse recent blocks.',
      zh: '51%攻击是指某个实体控制了大部分算力，可能导致双重支付、阻止交易确认或逆转最近的区块。',
    },
  },
  {
    id: 'sec-2',
    chapter: 'security',
    prompt: {
      en: 'What is "cold storage" in Bitcoin?',
      zh: '比特币中的"冷存储"是什么？',
    },
    options: {
      A: { en: 'Storing Bitcoin in a refrigerator', zh: '将比特币放在冰箱里' },
      B: { en: 'Keeping private keys offline, disconnected from the internet', zh: '将私钥保持离线，断开互联网连接' },
      C: { en: 'Freezing Bitcoin transactions', zh: '冻结比特币交易' },
      D: { en: 'A slow Bitcoin network', zh: '缓慢的比特币网络' },
    },
    answer: 'B',
    explanation: {
      en: 'Cold storage refers to keeping Bitcoin private keys on a device or medium that is not connected to the internet, such as a hardware wallet, paper wallet, or air-gapped computer.',
      zh: '冷存储指将比特币私钥保存在未连接互联网的设备或介质上，如硬件钱包、纸钱包或离线计算机。',
    },
  },
  {
    id: 'sec-3',
    chapter: 'security',
    prompt: {
      en: 'What is a "double-spend" attack?',
      zh: '什么是"双重支付"攻击？',
    },
    options: {
      A: { en: 'Paying twice the normal transaction fee', zh: '支付正常交易费用的两倍' },
      B: { en: 'Spending the same bitcoin in two different transactions', zh: '在两笔不同的交易中花费同一笔比特币' },
      C: { en: 'Buying Bitcoin at double the market price', zh: '以市场价格的两倍购买比特币' },
      D: { en: 'Sending Bitcoin to two wallets simultaneously', zh: '同时将比特币发送到两个钱包' },
    },
    answer: 'B',
    explanation: {
      en: 'A double-spend attack attempts to use the same UTXO in two conflicting transactions. Bitcoin\'s consensus mechanism prevents this by confirming only one version in the blockchain.',
      zh: '双重支付攻击试图在两笔冲突的交易中使用同一个UTXO。比特币的共识机制通过仅在区块链中确认一个版本来防止这种攻击。',
    },
  },
  {
    id: 'sec-4',
    chapter: 'security',
    prompt: {
      en: 'Why should you never share your private key?',
      zh: '为什么永远不应该分享你的私钥？',
    },
    options: {
      A: { en: 'It would slow down the network', zh: '这会减慢网络速度' },
      B: { en: 'Anyone with your private key can spend your Bitcoin', zh: '任何拥有你私钥的人都可以花费你的比特币' },
      C: { en: 'It would create duplicate addresses', zh: '这会创建重复的地址' },
      D: { en: 'It is illegal to share', zh: '分享私钥是违法的' },
    },
    answer: 'B',
    explanation: {
      en: 'The private key is the only proof of ownership in Bitcoin. Anyone who knows your private key can sign transactions and transfer your bitcoin to any address they control.',
      zh: '私钥是比特币中所有权的唯一证明。任何知道你私钥的人都可以签署交易并将你的比特币转移到他们控制的任何地址。',
    },
  },
  {
    id: 'sec-5',
    chapter: 'security',
    prompt: {
      en: 'What is a hardware wallet?',
      zh: '什么是硬件钱包？',
    },
    options: {
      A: { en: 'A physical coin with Bitcoin stored inside', zh: '内部存储比特币的实体硬币' },
      B: { en: 'A dedicated physical device that securely stores private keys offline', zh: '安全离线存储私钥的专用物理设备' },
      C: { en: 'A computer used only for mining', zh: '仅用于挖矿的计算机' },
      D: { en: 'A USB drive with the blockchain', zh: '存有区块链的U盘' },
    },
    answer: 'B',
    explanation: {
      en: 'A hardware wallet is a specialized device (like Ledger or Trezor) that stores private keys in secure hardware, signs transactions internally, and never exposes the keys to a connected computer.',
      zh: '硬件钱包是一种专用设备（如Ledger或Trezor），在安全硬件中存储私钥，在内部签署交易，永远不会将密钥暴露给连接的计算机。',
    },
  },

  // ─── Chapter 10: Applications & Future ─────────────────────────

  {
    id: 'app-1',
    chapter: 'applications',
    prompt: {
      en: 'What is the Lightning Network?',
      zh: '什么是闪电网络？',
    },
    options: {
      A: { en: 'A new blockchain replacing Bitcoin', zh: '取代比特币的新区块链' },
      B: { en: 'A layer-2 payment channel network for fast, low-cost Bitcoin transactions', zh: '用于快速低成本比特币交易的第二层支付通道网络' },
      C: { en: 'An electricity provider for miners', zh: '矿工的电力供应商' },
      D: { en: 'A Bitcoin mining pool', zh: '一个比特币矿池' },
    },
    answer: 'B',
    explanation: {
      en: 'The Lightning Network is a layer-2 solution built on top of Bitcoin that enables fast, scalable micropayments through a network of bidirectional payment channels.',
      zh: '闪电网络是构建在比特币之上的第二层解决方案，通过双向支付通道网络实现快速、可扩展的小额支付。',
    },
  },
  {
    id: 'app-2',
    chapter: 'applications',
    prompt: {
      en: 'What is a "smart contract" in the context of Bitcoin?',
      zh: '在比特币的背景下，"智能合约"是什么？',
    },
    options: {
      A: { en: 'A legal document stored on the blockchain', zh: '存储在区块链上的法律文件' },
      B: { en: 'A self-executing script that enforces the terms of an agreement', zh: '自动执行并强制执行协议条款的脚本' },
      C: { en: 'A contract between miners', zh: '矿工之间的合同' },
      D: { en: 'An AI-powered trading bot', zh: 'AI驱动的交易机器人' },
    },
    answer: 'B',
    explanation: {
      en: 'In Bitcoin, smart contracts are transaction scripts that automatically enforce conditions. Examples include timelocked transactions, multisig escrow, and payment channels.',
      zh: '在比特币中，智能合约是自动执行条件的交易脚本。例如时间锁定交易、多重签名托管和支付通道。',
    },
  },
  {
    id: 'app-3',
    chapter: 'applications',
    prompt: {
      en: 'What is a "timelock" in Bitcoin transactions?',
      zh: '比特币交易中的"时间锁"是什么？',
    },
    options: {
      A: { en: 'A limit on how long a wallet can be open', zh: '钱包可以打开多长时间的限制' },
      B: { en: 'A restriction that prevents spending before a certain time or block height', zh: '防止在特定时间或区块高度之前花费的限制' },
      C: { en: 'The time it takes to mine a block', zh: '挖掘一个区块所需的时间' },
      D: { en: 'A timeout for network connections', zh: '网络连接的超时' },
    },
    answer: 'B',
    explanation: {
      en: 'Timelocks (nLockTime, CheckLockTimeVerify, CheckSequenceVerify) restrict when a transaction output can be spent, enabling features like payment channels and atomic swaps.',
      zh: '时间锁（nLockTime、CheckLockTimeVerify、CheckSequenceVerify）限制交易输出何时可以被花费，支持支付通道和原子交换等功能。',
    },
  },
  {
    id: 'app-4',
    chapter: 'applications',
    prompt: {
      en: 'What is Taproot upgrade in Bitcoin?',
      zh: '比特币的Taproot升级是什么？',
    },
    options: {
      A: { en: 'A new mining algorithm', zh: '一种新的挖矿算法' },
      B: { en: 'An upgrade improving privacy, efficiency, and smart contract capability using Schnorr signatures', zh: '使用Schnorr签名提高隐私性、效率和智能合约能力的升级' },
      C: { en: 'A new Bitcoin exchange', zh: '一个新的比特币交易所' },
      D: { en: 'A fork creating a new cryptocurrency', zh: '创建新加密货币的分叉' },
    },
    answer: 'B',
    explanation: {
      en: 'Taproot (activated in November 2021) introduced Schnorr signatures and MAST (Merkelized Abstract Syntax Trees), improving transaction privacy, reducing fees, and enabling more complex smart contracts.',
      zh: 'Taproot（2021年11月激活）引入了Schnorr签名和MAST（默克尔化抽象语法树），提高了交易隐私性，降低了费用，并支持更复杂的智能合约。',
    },
  },
  {
    id: 'app-5',
    chapter: 'applications',
    prompt: {
      en: 'What are "colored coins" in the context of Bitcoin?',
      zh: '在比特币的背景下，"彩色币"是什么？',
    },
    options: {
      A: { en: 'Physical coins painted different colors', zh: '涂上不同颜色的实体硬币' },
      B: { en: 'Bitcoin outputs marked to represent real-world assets', zh: '标记为代表现实世界资产的比特币输出' },
      C: { en: 'A type of altcoin', zh: '一种山寨币' },
      D: { en: 'Bitcoin with higher value', zh: '价值更高的比特币' },
    },
    answer: 'B',
    explanation: {
      en: 'Colored coins use small Bitcoin transaction outputs "colored" with metadata to represent and transfer ownership of real-world assets like stocks, bonds, or property on the Bitcoin blockchain.',
      zh: '彩色币使用带有元数据"着色"的小额比特币交易输出，在比特币区块链上表示和转移股票、债券或房产等现实世界资产的所有权。',
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
