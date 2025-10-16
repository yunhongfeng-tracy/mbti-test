// MBTI测试题目数据（基于公开的MBTI测试题目）
const questions = [
    { id: 1, text: "在聚会中，你通常：", options: [
        { text: "与很多人交流，包括陌生人", type: "E" },
        { text: "只与几个熟悉的人交谈", type: "I" }
    ]},
    { id: 2, text: "你更倾向于：", options: [
        { text: "现实和具体的事物", type: "S" },
        { text: "想象和可能性", type: "N" }
    ]},
    { id: 3, text: "做决定时，你更注重：", options: [
        { text: "逻辑和客观分析", type: "T" },
        { text: "情感和人际关系", type: "F" }
    ]},
    { id: 4, text: "你的生活方式更偏向：", options: [
        { text: "有计划、有组织", type: "J" },
        { text: "灵活、随性", type: "P" }
    ]},
    { id: 5, text: "学习新东西时，你更喜欢：", options: [
        { text: "尝试和实践", type: "S" },
        { text: "理论和概念", type: "N" }
    ]},
    { id: 6, text: "在团队中，你通常：", options: [
        { text: "主动发言和表达观点", type: "E" },
        { text: "先倾听和思考", type: "I" }
    ]},
    { id: 7, text: "你更欣赏：", options: [
        { text: "原则和一致性", type: "T" },
        { text: "同情和和谐", type: "F" }
    ]},
    { id: 8, text: "处理工作时，你倾向于：", options: [
        { text: "提前完成", type: "J" },
        { text: "在截止日期前完成", type: "P" }
    ]},
    { id: 9, text: "空闲时间你更喜欢：", options: [
        { text: "与他人一起活动", type: "E" },
        { text: "独自阅读或思考", type: "I" }
    ]},
    { id: 10, text: "你更相信：", options: [
        { text: "经验和事实", type: "S" },
        { text: "直觉和灵感", type: "N" }
    ]},
    { id: 11, text: "面对新环境，你通常：", options: [
        { text: "很快适应并结交新朋友", type: "E" },
        { text: "需要时间观察和适应", type: "I" }
    ]},
    { id: 12, text: "你更喜欢的工作方式是：", options: [
        { text: "按部就班，有明确步骤", type: "S" },
        { text: "灵活创新，有多种可能", type: "N" }
    ]},
    { id: 13, text: "评价他人时，你更看重：", options: [
        { text: "能力和成就", type: "T" },
        { text: "人品和动机", type: "F" }
    ]},
    { id: 14, text: "你的书桌通常是：", options: [
        { text: "整洁有序", type: "J" },
        { text: "有些杂乱但你知道东西在哪", type: "P" }
    ]},
    { id: 15, text: "在社交场合，你更愿意：", options: [
        { text: "成为关注的焦点", type: "E" },
        { text: "在角落观察他人", type: "I" }
    ]},
    { id: 16, text: "解决问题时，你更倾向于：", options: [
        { text: "使用已知的有效方法", type: "S" },
        { text: "尝试新的创新方法", type: "N" }
    ]},
    { id: 17, text: "当朋友遇到困难，你更可能：", options: [
        { text: "提供实际的解决方案", type: "T" },
        { text: "给予情感支持", type: "F" }
    ]},
    { id: 18, text: "旅行前，你通常会：", options: [
        { text: "制定详细的行程计划", type: "J" },
        { text: "只确定大致方向，随机应变", type: "P" }
    ]},
    { id: 19, text: "在会议上，你更可能：", options: [
        { text: "主动发言并提出想法", type: "E" },
        { text: "先听完所有人的意见", type: "I" }
    ]},
    { id: 20, text: "你更擅长：", options: [
        { text: "处理具体细节", type: "S" },
        { text: "把握整体概念", type: "N" }
    ]},
    { id: 21, text: "做重要决定时，你主要考虑：", options: [
        { text: "客观事实和数据", type: "T" },
        { text: "个人价值观和感受", type: "F" }
    ]},
    { id: 22, text: "你的时间观念：", options: [
        { text: "很强，总是准时", type: "J" },
        { text: "比较灵活，偶尔迟到", type: "P" }
    ]},
    { id: 23, text: "在人群中，你通常感到：", options: [
        { text: "充满活力", type: "E" },
        { text: "需要独处恢复精力", type: "I" }
    ]},
    { id: 24, text: "你更关注：", options: [
        { text: "当前的实际情况", type: "S" },
        { text: "未来的可能性", type: "N" }
    ]},
    { id: 25, text: "批评他人时，你更注重：", options: [
        { text: "指出错误和不足", type: "T" },
        { text: "维护对方的自尊", type: "F" }
    ]},
    { id: 26, text: "完成项目时，你倾向于：", options: [
        { text: "严格按照计划执行", type: "J" },
        { text: "根据情况调整计划", type: "P" }
    ]},
    { id: 27, text: "结交新朋友时，你通常：", options: [
        { text: "主动介绍自己", type: "E" },
        { text: "等待别人先开口", type: "I" }
    ]},
    { id: 28, text: "你更喜欢的信息类型是：", options: [
        { text: "具体、实际的数据", type: "S" },
        { text: "抽象、理论的概念", type: "N" }
    ]},
    { id: 29, text: "判断对错时，你更依赖：", options: [
        { text: "逻辑推理", type: "T" },
        { text: "个人感受", type: "F" }
    ]},
    { id: 30, text: "你的工作风格是：", options: [
        { text: "有始有终，善始善终", type: "J" },
        { text: "同时进行多个项目", type: "P" }
    ]},
    { id: 31, text: "电话响起时，你通常：", options: [
        { text: "立即接听", type: "E" },
        { text: "先看是谁打来的", type: "I" }
    ]},
    { id: 32, text: "你更擅长记忆：", options: [
        { text: "具体的事实和细节", type: "S" },
        { text: "模式和联系", type: "N" }
    ]},
    { id: 33, text: "在争论中，你更注重：", options: [
        { text: "证明自己观点的正确性", type: "T" },
        { text: "维护关系的和谐", type: "F" }
    ]},
    { id: 34, text: "你的购物习惯是：", options: [
        { text: "列出清单，按计划购买", type: "J" },
        { text: "看到喜欢的就买", type: "P" }
    ]},
    { id: 35, text: "在陌生环境中，你更可能：", options: [
        { text: "主动探索", type: "E" },
        { text: "先观察环境", type: "I" }
    ]},
    { id: 36, text: "你更相信：", options: [
        { text: "亲眼所见", type: "S" },
        { text: "直觉感受", type: "N" }
    ]},
    { id: 37, text: "给予建议时，你更倾向于：", options: [
        { text: "直接指出问题", type: "T" },
        { text: "委婉表达意见", type: "F" }
    ]},
    { id: 38, text: "你的生活节奏：", options: [
        { text: "规律有序", type: "J" },
        { text: "随性自由", type: "P" }
    ]},
    { id: 39, text: "参加活动时，你更喜欢：", options: [
        { text: "积极参与互动", type: "E" },
        { text: "安静观察欣赏", type: "I" }
    ]},
    { id: 40, text: "你更擅长：", options: [
        { text: "按部就班地工作", type: "S" },
        { text: "即兴发挥", type: "N" }
    ]},
    { id: 41, text: "面对他人的错误，你更可能：", options: [
        { text: "直接指出错误", type: "T" },
        { text: "考虑对方的感受", type: "F" }
    ]},
    { id: 42, text: "你的决策速度：", options: [
        { text: "快速果断", type: "J" },
        { text: "需要时间考虑", type: "P" }
    ]},
    { id: 43, text: "在社交网络上，你更可能：", options: [
        { text: "频繁发布动态", type: "E" },
        { text: "偶尔浏览他人动态", type: "I" }
    ]},
    { id: 44, text: "你更喜欢阅读：", options: [
        { text: "纪实类、实用类书籍", type: "S" },
        { text: "小说、科幻类书籍", type: "N" }
    ]},
    { id: 45, text: "面对冲突，你通常：", options: [
        { text: "直面问题，寻求解决", type: "T" },
        { text: "避免冲突，维持和平", type: "F" }
    ]},
    { id: 46, text: "你的文件管理方式：", options: [
        { text: "分类清晰，易于查找", type: "J" },
        { text: "随意存放，但能找到", type: "P" }
    ]},
    { id: 47, text: "在团队项目中，你更愿意：", options: [
        { text: "担任领导角色", type: "E" },
        { text: "作为团队成员配合", type: "I" }
    ]},
    { id: 48, text: "你更注重：", options: [
        { text: "实际效果", type: "S" },
        { text: "潜在意义", type: "N" }
    ]},
    { id: 49, text: "评价工作成果时，你更看重：", options: [
        { text: "效率和准确性", type: "T" },
        { text: "团队合作和满意度", type: "F" }
    ]},
    { id: 50, text: "你的周末安排通常是：", options: [
        { text: "提前规划好活动", type: "J" },
        { text: "看心情决定做什么", type: "P" }
    ]},
    { id: 51, text: "与人交谈时，你更倾向于：", options: [
        { text: "主导谈话方向", type: "E" },
        { text: "跟随对方的话题", type: "I" }
    ]},
    { id: 52, text: "你更容易注意到：", options: [
        { text: "具体的细节变化", type: "S" },
        { text: "整体的氛围变化", type: "N" }
    ]},
    { id: 53, text: "制定规则时，你更注重：", options: [
        { text: "规则的公平性和逻辑性", type: "T" },
        { text: "规则的人性化和灵活性", type: "F" }
    ]},
    { id: 54, text: "你的学习方式更偏向：", options: [
        { text: "系统性地学习", type: "J" },
        { text: "跳跃式地学习", type: "P" }
    ]},
    { id: 55, text: "在公共场合，你通常：", options: [
        { text: "主动与人交流", type: "E" },
        { text: "等待别人主动", type: "I" }
    ]},
    { id: 56, text: "你更相信：", options: [
        { text: "实践出真知", type: "S" },
        { text: "灵感创造奇迹", type: "N" }
    ]},
    { id: 57, text: "帮助他人时，你更可能：", options: [
        { text: "提供实际的帮助", type: "T" },
        { text: "给予情感的支持", type: "F" }
    ]},
    { id: 58, text: "你的生活目标：", options: [
        { text: "明确具体，有规划", type: "J" },
        { text: "随遇而安，灵活调整", type: "P" }
    ]},
    { id: 59, text: "面对挑战，你通常：", options: [
        { text: "立即行动，边做边学", type: "E" },
        { text: "先思考，准备好再行动", type: "I" }
    ]},
    { id: 60, text: "你更重视：", options: [
        { text: "现实的经验积累", type: "S" },
        { text: "未来的发展潜力", type: "N" }
    ]}
];

// MBTI类型描述
const mbtiDescriptions = {
    "ISTJ": {
        title: "检查员型",
        description: "你务实、有条理、可靠，注重细节和事实。你喜欢有组织的工作环境，做事认真负责。"
    },
    "ISFJ": {
        title: "保护者型", 
        description: "你温暖、有同情心、尽责，重视和谐与稳定。你乐于帮助他人，记忆力强。"
    },
    "INFJ": {
        title: "提倡者型",
        description: "你有洞察力、有原则、有远见，关注他人的成长和发展。你追求意义和深度。"
    },
    "INTJ": {
        title: "建筑师型",
        description: "你战略性强、独立、有远见，善于制定长期计划。你追求知识和能力。"
    },
    "ISTP": {
        title: "鉴赏家型",
        description: "你灵活、务实、喜欢动手操作，善于解决实际问题。你享受当下的体验。"
    },
    "ISFP": {
        title: "探险家型",
        description: "你温和、敏感、有艺术气质，重视个人价值观。你享受美好的事物。"
    },
    "INFP": {
        title: "调解员型",
        description: "你理想主义、有同情心、好奇，追求真实和深度。你重视个人成长。"
    },
    "INTP": {
        title: "逻辑学家型",
        description: "你创新、好奇、有逻辑，喜欢理论和抽象思维。你追求知识的理解。"
    },
    "ESTP": {
        title: "企业家型",
        description: "你精力充沛、务实、喜欢冒险，善于应对突发情况。你享受行动和结果。"
    },
    "ESFP": {
        title: "表演者型",
        description: "你热情、友好、享受生活，善于营造欢乐氛围。你关注现实体验。"
    },
    "ENFP": {
        title: "竞选者型",
        description: "你热情、有创造力、乐观，善于激励他人。你充满可能性和想法。"
    },
    "ENTP": {
        title: "辩论家型",
        description: "你聪明、好奇、有创新精神，喜欢智力挑战。你善于看到各种可能性。"
    },
    "ESTJ": {
        title: "总经理型",
        description: "你务实、果断、有组织能力，善于管理和执行。你重视效率和秩序。"
    },
    "ESFJ": {
        title: "执政官型",
        description: "你友好、尽责、合作，关心他人的需求。你善于维护和谐关系。"
    },
    "ENFJ": {
        title: "主人公型",
        description: "你富有魅力、有同情心、有领导力，善于激励他人成长。你关注人际关系。"
    },
    "ENTJ": {
        title: "指挥官型",
        description: "你果断、有战略眼光、有领导力，善于组织和规划。你追求效率和成就。"
    }
};

class MBTITest {
    constructor() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        
        this.initializeEventListeners();
        this.showScreen('intro-screen');
    }

    initializeEventListeners() {
        document.getElementById('start-btn').addEventListener('click', () => this.startTest());
        document.getElementById('next-btn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prev-btn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartTest());
        document.getElementById('share-btn').addEventListener('click', () => this.shareResult());
    }

    startTest() {
        this.currentQuestion = 0;
        this.answers = {};
        this.scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        this.showScreen('test-screen');
        this.displayQuestion();
    }

    displayQuestion() {
        const question = questions[this.currentQuestion];
        const questionNumber = document.getElementById('question-number');
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        
        questionNumber.textContent = `题目 ${this.currentQuestion + 1}/${questions.length}`;
        questionText.textContent = question.text;
        
        // 更新进度条
        const progress = ((this.currentQuestion + 1) / questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        
        // 清空选项
        optionsContainer.innerHTML = '';
        
        // 添加选项
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (this.answers[this.currentQuestion] === index) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option.text;
            optionElement.addEventListener('click', () => this.selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
        
        // 更新导航按钮状态
        document.getElementById('prev-btn').style.display = this.currentQuestion > 0 ? 'block' : 'none';
        document.getElementById('next-btn').style.display = 'none'; // 隐藏下一题按钮，因为现在是自动跳转
        document.getElementById('next-btn').textContent = 
            this.currentQuestion === questions.length - 1 ? '查看结果' : '下一题';
            
        // 如果是最后一题，显示查看结果按钮
        if (this.currentQuestion === questions.length - 1) {
            document.getElementById('next-btn').style.display = 'block';
        }
    }

    selectOption(optionIndex) {
        this.answers[this.currentQuestion] = optionIndex;
        this.displayQuestion();
        
        // 自动跳转到下一题（延迟0.5秒让用户看到选择效果）
        setTimeout(() => {
            if (this.currentQuestion < questions.length - 1) {
                this.currentQuestion++;
                this.displayQuestion();
            } else {
                this.calculateResult();
            }
        }, 500);
    }

    nextQuestion() {
        if (this.answers[this.currentQuestion] === undefined) {
            alert('请选择一个选项');
            return;
        }
        
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.displayQuestion();
        } else {
            this.calculateResult();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.displayQuestion();
        }
    }

    calculateResult() {
        // 计算每个维度的得分
        questions.forEach((question, index) => {
            const answerIndex = this.answers[index];
            if (answerIndex !== undefined) {
                const selectedType = question.options[answerIndex].type;
                this.scores[selectedType]++;
            }
        });
        
        // 确定MBTI类型
        const mbtiType = 
            (this.scores.E > this.scores.I ? 'E' : 'I') +
            (this.scores.S > this.scores.N ? 'S' : 'N') +
            (this.scores.T > this.scores.F ? 'T' : 'F') +
            (this.scores.J > this.scores.P ? 'J' : 'P');
        
        this.showResult(mbtiType);
    }

    showResult(mbtiType) {
        const description = mbtiDescriptions[mbtiType];
        
        document.getElementById('mbti-result').textContent = mbtiType;
        document.getElementById('result-description').innerHTML = `
            <h3>${description.title}</h3>
            <p>${description.description}</p>
        `;
        
        this.showScreen('result-screen');
    }

    showScreen(screenName) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenName).classList.add('active');
    }

    restartTest() {
        this.startTest();
    }

    shareResult() {
        const mbtiType = document.getElementById('mbti-result').textContent;
        const shareText = `我的MBTI性格类型是：${mbtiType} - 快来测试你的性格类型吧！`;
        
        if (navigator.share) {
            navigator.share({
                title: 'MBTI性格测试结果',
                text: shareText,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
                alert('结果已复制到剪贴板！');
            });
        }
    }
}

// 初始化测试
document.addEventListener('DOMContentLoaded', () => {
    new MBTITest();
});