import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: 1,
    question: "开局前15秒，你通常会怎么做？",
    options: [
      { id: "1a", text: "快速购买并冲出去抢第一枪位", scores: { aimStyle: 90, teamwork: 10, tacticalHabits: 10, emotionControl: 40, leadership: 15, aggression: 95, mapAwareness: 20, mentality: 45 } },
      { id: "1b", text: "观察小地图，分析敌方可能的站位", scores: { aimStyle: 30, teamwork: 60, tacticalHabits: 90, emotionControl: 85, leadership: 70, aggression: 10, mapAwareness: 95, mentality: 75 } },
      { id: "1c", text: "和队友沟通本局战术安排", scores: { aimStyle: 25, teamwork: 95, tacticalHabits: 80, emotionControl: 80, leadership: 95, aggression: 20, mapAwareness: 60, mentality: 70 } },
      { id: "1d", text: "寻找安全的角落先收集信息", scores: { aimStyle: 20, teamwork: 50, tacticalHabits: 85, emotionControl: 90, leadership: 30, aggression: 5, mapAwareness: 90, mentality: 85 } },
    ],
  },
  {
    id: 2,
    question: "当你1v3残局时，你的第一反应是？",
    options: [
      { id: "2a", text: "主动出击，争取逐个击杀对手", scores: { aimStyle: 95, teamwork: 10, tacticalHabits: 40, emotionControl: 45, leadership: 30, aggression: 90, mapAwareness: 50, mentality: 65 } },
      { id: "2b", text: "冷静分析局势，利用时间差制造机会", scores: { aimStyle: 55, teamwork: 30, tacticalHabits: 95, emotionControl: 95, leadership: 55, aggression: 10, mapAwareness: 85, mentality: 95 } },
      { id: "2c", text: "寻找安全位置蹲守，等对手犯错", scores: { aimStyle: 40, teamwork: 20, tacticalHabits: 80, emotionControl: 90, leadership: 20, aggression: 5, mapAwareness: 75, mentality: 90 } },
      { id: "2d", text: "保枪，不给对手经济优势", scores: { aimStyle: 10, teamwork: 70, tacticalHabits: 70, emotionControl: 75, leadership: 25, aggression: 5, mapAwareness: 40, mentality: 75 } },
    ],
  },
  {
    id: 3,
    question: "队友连续输掉对枪，你会怎么做？",
    options: [
      { id: "3a", text: "主动申请换位，亲自去对枪", scores: { aimStyle: 95, teamwork: 25, tacticalHabits: 30, emotionControl: 35, leadership: 40, aggression: 85, mapAwareness: 30, mentality: 50 } },
      { id: "3b", text: "鼓励队友，调整战术给他创造更好的条件", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 80, emotionControl: 90, leadership: 85, aggression: 10, mapAwareness: 55, mentality: 80 } },
      { id: "3c", text: "建议他换个位置或英雄试试", scores: { aimStyle: 30, teamwork: 85, tacticalHabits: 80, emotionControl: 75, leadership: 75, aggression: 15, mapAwareness: 60, mentality: 70 } },
      { id: "3d", text: "不动声色，默默帮他补枪位", scores: { aimStyle: 60, teamwork: 75, tacticalHabits: 70, emotionControl: 80, leadership: 35, aggression: 30, mapAwareness: 65, mentality: 75 } },
    ],
  },
  {
    id: 4,
    question: "你最喜欢的游戏方式是什么？",
    options: [
      { id: "4a", text: "拿决斗者冲进包点大开杀戒", scores: { aimStyle: 100, teamwork: 15, tacticalHabits: 15, emotionControl: 30, leadership: 15, aggression: 100, mapAwareness: 25, mentality: 50 } },
      { id: "4b", text: "用信息位为团队提供精确情报", scores: { aimStyle: 35, teamwork: 90, tacticalHabits: 85, emotionControl: 80, leadership: 60, aggression: 20, mapAwareness: 95, mentality: 75 } },
      { id: "4c", text: "用控制者的烟雾和道具掌控战场", scores: { aimStyle: 30, teamwork: 85, tacticalHabits: 90, emotionControl: 90, leadership: 85, aggression: 15, mapAwareness: 85, mentality: 80 } },
      { id: "4d", text: "绕后偷人，出其不意制胜", scores: { aimStyle: 70, teamwork: 20, tacticalHabits: 90, emotionControl: 65, leadership: 15, aggression: 60, mapAwareness: 90, mentality: 60 } },
    ],
  },
  {
    id: 5,
    question: "当你在比赛中手感不好时，你会？",
    options: [
      { id: "5a", text: "继续刚枪找手感，手感是打出来的", scores: { aimStyle: 90, teamwork: 15, tacticalHabits: 20, emotionControl: 30, leadership: 20, aggression: 85, mapAwareness: 20, mentality: 45 } },
      { id: "5b", text: "转为辅助角色，用道具和站位帮助队友", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 85, emotionControl: 90, leadership: 40, aggression: 10, mapAwareness: 70, mentality: 85 } },
      { id: "5c", text: "放慢节奏，用更安全的角度去对枪", scores: { aimStyle: 55, teamwork: 40, tacticalHabits: 80, emotionControl: 80, leadership: 30, aggression: 20, mapAwareness: 75, mentality: 85 } },
      { id: "5d", text: "深呼吸调整心态，重新分析局势", scores: { aimStyle: 30, teamwork: 55, tacticalHabits: 75, emotionControl: 100, leadership: 60, aggression: 10, mapAwareness: 60, mentality: 95 } },
    ],
  },
  {
    id: 6,
    question: "在选择英雄时，你最看重什么？",
    options: [
      { id: "6a", text: "英雄的击杀能力和输出上限", scores: { aimStyle: 100, teamwork: 15, tacticalHabits: 20, emotionControl: 35, leadership: 20, aggression: 95, mapAwareness: 25, mentality: 45 } },
      { id: "6b", text: "英雄能为团队提供什么帮助", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 70, emotionControl: 85, leadership: 50, aggression: 10, mapAwareness: 60, mentality: 75 } },
      { id: "6c", text: "英雄在战术体系中的灵活性", scores: { aimStyle: 45, teamwork: 70, tacticalHabits: 95, emotionControl: 75, leadership: 65, aggression: 30, mapAwareness: 80, mentality: 70 } },
      { id: "6d", text: "英雄的地图控制和信息能力", scores: { aimStyle: 30, teamwork: 80, tacticalHabits: 90, emotionControl: 80, leadership: 55, aggression: 15, mapAwareness: 95, mentality: 75 } },
    ],
  },
  {
    id: 7,
    question: "队友犯了明显失误导致输掉关键局，你的反应是？",
    options: [
      { id: "7a", text: "直接指出问题，告诉他下次该怎么做", scores: { aimStyle: 45, teamwork: 40, tacticalHabits: 60, emotionControl: 40, leadership: 85, aggression: 55, mapAwareness: 50, mentality: 45 } },
      { id: "7b", text: "安慰他说没关系，一起想办法赢回来", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 65, emotionControl: 95, leadership: 70, aggression: 10, mapAwareness: 45, mentality: 85 } },
      { id: "7c", text: "不说话但默默调整自己的站位来补他的缺口", scores: { aimStyle: 55, teamwork: 65, tacticalHabits: 75, emotionControl: 75, leadership: 35, aggression: 25, mapAwareness: 70, mentality: 70 } },
      { id: "7d", text: "记在心里，以后关键局不会再信任他那个位置", scores: { aimStyle: 40, teamwork: 20, tacticalHabits: 65, emotionControl: 40, leadership: 30, aggression: 30, mapAwareness: 55, mentality: 40 } },
    ],
  },
  {
    id: 8,
    question: "进攻时，你更倾向于？",
    options: [
      { id: "8a", text: "一马当先冲在最前面打开突破口", scores: { aimStyle: 95, teamwork: 25, tacticalHabits: 15, emotionControl: 30, leadership: 30, aggression: 100, mapAwareness: 30, mentality: 50 } },
      { id: "8b", text: "等待信息位确认安全后再推进", scores: { aimStyle: 35, teamwork: 75, tacticalHabits: 85, emotionControl: 85, leadership: 40, aggression: 15, mapAwareness: 85, mentality: 80 } },
      { id: "8c", text: "用技能和道具为队友创造进点条件", scores: { aimStyle: 30, teamwork: 95, tacticalHabits: 80, emotionControl: 80, leadership: 65, aggression: 20, mapAwareness: 75, mentality: 75 } },
      { id: "8d", text: "从侧面绕路寻找意外的进攻角度", scores: { aimStyle: 65, teamwork: 20, tacticalHabits: 95, emotionControl: 65, leadership: 15, aggression: 55, mapAwareness: 95, mentality: 60 } },
    ],
  },
  {
    id: 9,
    question: "防守时，你最看重什么？",
    options: [
      { id: "9a", text: "主动前压，不给对手喘息机会", scores: { aimStyle: 90, teamwork: 20, tacticalHabits: 25, emotionControl: 35, leadership: 25, aggression: 95, mapAwareness: 35, mentality: 50 } },
      { id: "9b", text: "和队友建立交叉火力网", scores: { aimStyle: 45, teamwork: 95, tacticalHabits: 80, emotionControl: 80, leadership: 60, aggression: 20, mapAwareness: 70, mentality: 75 } },
      { id: "9c", text: "用道具和信息锁定敌人的进攻路线", scores: { aimStyle: 35, teamwork: 80, tacticalHabits: 90, emotionControl: 85, leadership: 55, aggression: 15, mapAwareness: 95, mentality: 80 } },
      { id: "9d", text: "守住关键位置，确保至少拖延时间", scores: { aimStyle: 40, teamwork: 60, tacticalHabits: 80, emotionControl: 90, leadership: 40, aggression: 10, mapAwareness: 70, mentality: 85 } },
    ],
  },
  {
    id: 10,
    question: "在eco局（经济局）中，你会？",
    options: [
      { id: "10a", text: "买满手枪和道具也要刚一把", scores: { aimStyle: 80, teamwork: 15, tacticalHabits: 20, emotionControl: 30, leadership: 15, aggression: 90, mapAwareness: 20, mentality: 40 } },
      { id: "10b", text: "全队起手枪rush一个点拼运气", scores: { aimStyle: 60, teamwork: 70, tacticalHabits: 30, emotionControl: 40, leadership: 50, aggression: 80, mapAwareness: 25, mentality: 45 } },
      { id: "10c", text: "存钱的同时尽量用技能辅助队友", scores: { aimStyle: 20, teamwork: 90, tacticalHabits: 75, emotionControl: 85, leadership: 55, aggression: 10, mapAwareness: 60, mentality: 80 } },
      { id: "10d", text: "躲起来等对手失误捡枪翻盘", scores: { aimStyle: 65, teamwork: 15, tacticalHabits: 85, emotionControl: 75, leadership: 10, aggression: 20, mapAwareness: 70, mentality: 70 } },
    ],
  },
  {
    id: 11,
    question: "当队伍沟通混乱时，你会？",
    options: [
      { id: "11a", text: "提高音量让大家听你指挥", scores: { aimStyle: 35, teamwork: 35, tacticalHabits: 50, emotionControl: 25, leadership: 100, aggression: 60, mapAwareness: 40, mentality: 40 } },
      { id: "11b", text: "暂停下来帮大家理清思路再继续", scores: { aimStyle: 20, teamwork: 95, tacticalHabits: 80, emotionControl: 90, leadership: 85, aggression: 10, mapAwareness: 55, mentality: 85 } },
      { id: "11c", text: "专注自己的操作，屏蔽杂音", scores: { aimStyle: 70, teamwork: 15, tacticalHabits: 40, emotionControl: 65, leadership: 10, aggression: 40, mapAwareness: 45, mentality: 65 } },
      { id: "11d", text: "在混乱中找机会，利用对手也可能乱的时机", scores: { aimStyle: 60, teamwork: 20, tacticalHabits: 70, emotionControl: 60, leadership: 20, aggression: 50, mapAwareness: 65, mentality: 55 } },
    ],
  },
  {
    id: 12,
    question: "你认为一场游戏中最重要的阶段是？",
    options: [
      { id: "12a", text: "手枪局——奠定整场经济基调", scores: { aimStyle: 50, teamwork: 60, tacticalHabits: 75, emotionControl: 70, leadership: 65, aggression: 35, mapAwareness: 55, mentality: 75 } },
      { id: "12b", text: "关键局——谁能拿下谁就掌握主动权", scores: { aimStyle: 75, teamwork: 45, tacticalHabits: 60, emotionControl: 60, leadership: 50, aggression: 65, mapAwareness: 50, mentality: 70 } },
      { id: "12c", text: "每一局都重要，但中期调整最关键", scores: { aimStyle: 40, teamwork: 70, tacticalHabits: 90, emotionControl: 85, leadership: 80, aggression: 25, mapAwareness: 80, mentality: 80 } },
      { id: "12d", text: "残局——越到最后越能体现实力", scores: { aimStyle: 65, teamwork: 35, tacticalHabits: 75, emotionControl: 95, leadership: 40, aggression: 20, mapAwareness: 65, mentality: 95 } },
    ],
  },
  {
    id: 13,
    question: "看到敌人时，你的第一反应是？",
    options: [
      { id: "13a", text: "立即开枪，相信自己的瞄准", scores: { aimStyle: 100, teamwork: 10, tacticalHabits: 15, emotionControl: 35, leadership: 15, aggression: 90, mapAwareness: 25, mentality: 50 } },
      { id: "13b", text: "确认敌人数量和位置后呼叫队友", scores: { aimStyle: 30, teamwork: 95, tacticalHabits: 85, emotionControl: 85, leadership: 70, aggression: 10, mapAwareness: 80, mentality: 80 } },
      { id: "13c", text: "先找掩体，确保自己安全再对枪", scores: { aimStyle: 45, teamwork: 50, tacticalHabits: 85, emotionControl: 90, leadership: 30, aggression: 15, mapAwareness: 75, mentality: 85 } },
      { id: "13d", text: "尝试绕到更好的角度再打", scores: { aimStyle: 60, teamwork: 20, tacticalHabits: 90, emotionControl: 65, leadership: 15, aggression: 40, mapAwareness: 90, mentality: 60 } },
    ],
  },
  {
    id: 14,
    question: "你觉得在VALORANT中最重要的是什么？",
    options: [
      { id: "14a", text: "枪法——一切战术最终都要落到对枪上", scores: { aimStyle: 100, teamwork: 20, tacticalHabits: 20, emotionControl: 35, leadership: 15, aggression: 85, mapAwareness: 30, mentality: 45 } },
      { id: "14b", text: "团队配合——五个人齐心协力才是最强", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 70, emotionControl: 80, leadership: 70, aggression: 15, mapAwareness: 55, mentality: 75 } },
      { id: "14c", text: "信息收集——知道敌人在哪就能决定胜负", scores: { aimStyle: 30, teamwork: 80, tacticalHabits: 90, emotionControl: 75, leadership: 55, aggression: 15, mapAwareness: 100, mentality: 70 } },
      { id: "14d", text: "心态——稳得住才能赢到最后", scores: { aimStyle: 35, teamwork: 60, tacticalHabits: 65, emotionControl: 100, leadership: 55, aggression: 10, mapAwareness: 55, mentality: 100 } },
    ],
  },
  {
    id: 15,
    question: "在比赛中你最喜欢的时刻是？",
    options: [
      { id: "15a", text: "拿到ACE（五杀）的瞬间", scores: { aimStyle: 100, teamwork: 10, tacticalHabits: 15, emotionControl: 30, leadership: 15, aggression: 95, mapAwareness: 25, mentality: 45 } },
      { id: "15b", text: "战术完美执行成功拿分的时刻", scores: { aimStyle: 30, teamwork: 95, tacticalHabits: 90, emotionControl: 80, leadership: 85, aggression: 20, mapAwareness: 65, mentality: 75 } },
      { id: "15c", text: "1vn残局翻盘成功的时候", scores: { aimStyle: 75, teamwork: 25, tacticalHabits: 80, emotionControl: 95, leadership: 35, aggression: 30, mapAwareness: 70, mentality: 95 } },
      { id: "15d", text: "成功预判并埋伏到对手的时刻", scores: { aimStyle: 55, teamwork: 25, tacticalHabits: 95, emotionControl: 70, leadership: 20, aggression: 45, mapAwareness: 90, mentality: 65 } },
    ],
  },
  {
    id: 16,
    question: "你的练枪习惯是怎样的？",
    options: [
      { id: "16a", text: "每天必打aimlab或靶场练习", scores: { aimStyle: 100, teamwork: 15, tacticalHabits: 20, emotionControl: 40, leadership: 15, aggression: 80, mapAwareness: 25, mentality: 50 } },
      { id: "16b", text: "更注重实战训练和团队配合", scores: { aimStyle: 45, teamwork: 90, tacticalHabits: 75, emotionControl: 75, leadership: 60, aggression: 25, mapAwareness: 60, mentality: 70 } },
      { id: "16c", text: "研究地图点位和技能组合", scores: { aimStyle: 30, teamwork: 70, tacticalHabits: 95, emotionControl: 75, leadership: 50, aggression: 15, mapAwareness: 95, mentality: 65 } },
      { id: "16d", text: "看职业选手demo学习", scores: { aimStyle: 50, teamwork: 55, tacticalHabits: 85, emotionControl: 70, leadership: 60, aggression: 30, mapAwareness: 75, mentality: 75 } },
    ],
  },
  {
    id: 17,
    question: "当对手开始针对你的时候，你会？",
    options: [
      { id: "17a", text: "正面刚回去，证明他们针对不了你", scores: { aimStyle: 95, teamwork: 15, tacticalHabits: 20, emotionControl: 25, leadership: 20, aggression: 95, mapAwareness: 20, mentality: 35 } },
      { id: "17b", text: "换个位置或者英雄，让他们的针对失效", scores: { aimStyle: 40, teamwork: 65, tacticalHabits: 85, emotionControl: 80, leadership: 55, aggression: 25, mapAwareness: 70, mentality: 75 } },
      { id: "17c", text: "转为辅助打法，让队友来carry", scores: { aimStyle: 25, teamwork: 95, tacticalHabits: 75, emotionControl: 85, leadership: 45, aggression: 10, mapAwareness: 60, mentality: 80 } },
      { id: "17d", text: "利用被针对这点设陷阱反制", scores: { aimStyle: 50, teamwork: 40, tacticalHabits: 95, emotionControl: 75, leadership: 35, aggression: 30, mapAwareness: 85, mentality: 70 } },
    ],
  },
  {
    id: 18,
    question: "在排位中，你更喜欢和什么样的队友组队？",
    options: [
      { id: "18a", text: "枪法好的，能和我一起冲锋陷阵", scores: { aimStyle: 85, teamwork: 40, tacticalHabits: 25, emotionControl: 35, leadership: 25, aggression: 90, mapAwareness: 30, mentality: 50 } },
      { id: "18b", text: "会配合的，愿意为团队牺牲个人数据", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 70, emotionControl: 85, leadership: 60, aggression: 10, mapAwareness: 55, mentality: 80 } },
      { id: "18c", text: "有经验的，能做出正确决策和指挥", scores: { aimStyle: 30, teamwork: 80, tacticalHabits: 90, emotionControl: 85, leadership: 80, aggression: 15, mapAwareness: 75, mentality: 85 } },
      { id: "18d", text: "气氛好的，输了也不喷人的", scores: { aimStyle: 20, teamwork: 85, tacticalHabits: 55, emotionControl: 95, leadership: 35, aggression: 10, mapAwareness: 45, mentality: 95 } },
    ],
  },
  {
    id: 19,
    question: "关于小地图的使用，你的习惯是？",
    options: [
      { id: "19a", text: "只有死了才看小地图", scores: { aimStyle: 85, teamwork: 15, tacticalHabits: 10, emotionControl: 30, leadership: 10, aggression: 80, mapAwareness: 10, mentality: 35 } },
      { id: "19b", text: "经常扫一眼小地图了解队友位置和敌人动向", scores: { aimStyle: 35, teamwork: 85, tacticalHabits: 85, emotionControl: 80, leadership: 65, aggression: 20, mapAwareness: 95, mentality: 80 } },
      { id: "19c", text: "通过队友报点结合小地图判断局势", scores: { aimStyle: 40, teamwork: 90, tacticalHabits: 85, emotionControl: 80, leadership: 70, aggression: 15, mapAwareness: 85, mentality: 75 } },
      { id: "19d", text: "用ping系统积极给队友标记信息", scores: { aimStyle: 25, teamwork: 90, tacticalHabits: 80, emotionControl: 75, leadership: 75, aggression: 15, mapAwareness: 90, mentality: 70 } },
    ],
  },
  {
    id: 20,
    question: "最后一局11-12落后，进攻方，你会？",
    options: [
      { id: "20a", text: "拿着决斗者一波冲，不是你死就是我亡", scores: { aimStyle: 90, teamwork: 20, tacticalHabits: 15, emotionControl: 25, leadership: 20, aggression: 100, mapAwareness: 20, mentality: 45 } },
      { id: "20b", text: "冷静和队友沟通一个出奇制胜的战术", scores: { aimStyle: 30, teamwork: 90, tacticalHabits: 95, emotionControl: 90, leadership: 95, aggression: 15, mapAwareness: 70, mentality: 85 } },
      { id: "20c", text: "用最稳定的默认打法，慢慢推进找机会", scores: { aimStyle: 45, teamwork: 80, tacticalHabits: 80, emotionControl: 85, leadership: 55, aggression: 20, mapAwareness: 75, mentality: 90 } },
      { id: "20d", text: "单走一路尝试摸后创造机会", scores: { aimStyle: 70, teamwork: 15, tacticalHabits: 85, emotionControl: 60, leadership: 15, aggression: 55, mapAwareness: 85, mentality: 60 } },
    ],
  },
  {
    id: 21,
    question: "打完一局后你会做的最多的事是？",
    options: [
      { id: "21a", text: "立即排下一把", scores: { aimStyle: 50, teamwork: 30, tacticalHabits: 20, emotionControl: 30, leadership: 15, aggression: 75, mapAwareness: 20, mentality: 30 } },
      { id: "21b", text: "和队友复盘讨论哪里可以做得更好", scores: { aimStyle: 25, teamwork: 90, tacticalHabits: 85, emotionControl: 75, leadership: 80, aggression: 10, mapAwareness: 55, mentality: 70 } },
      { id: "21c", text: "看回放分析自己的失误", scores: { aimStyle: 40, teamwork: 40, tacticalHabits: 85, emotionControl: 80, leadership: 45, aggression: 15, mapAwareness: 65, mentality: 85 } },
      { id: "21d", text: "去训练场练枪或者练习技能", scores: { aimStyle: 85, teamwork: 15, tacticalHabits: 45, emotionControl: 55, leadership: 10, aggression: 55, mapAwareness: 35, mentality: 60 } },
    ],
  },
  {
    id: 22,
    question: "队友让你换个你不擅长的英雄，你会？",
    options: [
      { id: "22a", text: "坚持用自己擅长的，相信自己的carry能力", scores: { aimStyle: 80, teamwork: 20, tacticalHabits: 25, emotionControl: 35, leadership: 30, aggression: 75, mapAwareness: 25, mentality: 45 } },
      { id: "22b", text: "立刻换，团队需要什么我就拿什么", scores: { aimStyle: 25, teamwork: 100, tacticalHabits: 60, emotionControl: 80, leadership: 40, aggression: 10, mapAwareness: 50, mentality: 75 } },
      { id: "22c", text: "先讨论一下阵容搭配是否真的需要换", scores: { aimStyle: 30, teamwork: 85, tacticalHabits: 90, emotionControl: 80, leadership: 80, aggression: 15, mapAwareness: 70, mentality: 75 } },
      { id: "22d", text: "换了但会用自己理解的方式玩", scores: { aimStyle: 55, teamwork: 40, tacticalHabits: 65, emotionControl: 60, leadership: 25, aggression: 40, mapAwareness: 55, mentality: 55 } },
    ],
  },
  {
    id: 23,
    question: "你认为自己最大的游戏天赋是什么？",
    options: [
      { id: "23a", text: "枪法和反应速度", scores: { aimStyle: 100, teamwork: 15, tacticalHabits: 15, emotionControl: 30, leadership: 15, aggression: 80, mapAwareness: 25, mentality: 40 } },
      { id: "23b", text: "战术理解和团队领导力", scores: { aimStyle: 30, teamwork: 85, tacticalHabits: 90, emotionControl: 80, leadership: 100, aggression: 15, mapAwareness: 75, mentality: 80 } },
      { id: "23c", text: "心态稳定，永不崩溃", scores: { aimStyle: 35, teamwork: 70, tacticalHabits: 65, emotionControl: 100, leadership: 55, aggression: 10, mapAwareness: 55, mentality: 100 } },
      { id: "23d", text: "地图理解和信息处理能力", scores: { aimStyle: 30, teamwork: 75, tacticalHabits: 85, emotionControl: 75, leadership: 50, aggression: 15, mapAwareness: 100, mentality: 70 } },
    ],
  },
  {
    id: 24,
    question: "连续输了好几局，你的心态是？",
    options: [
      { id: "24a", text: "开始急躁，每次开局都想冲出去杀人", scores: { aimStyle: 75, teamwork: 10, tacticalHabits: 15, emotionControl: 10, leadership: 10, aggression: 95, mapAwareness: 15, mentality: 15 } },
      { id: "24b", text: "深呼吸调整，和队友一起分析问题", scores: { aimStyle: 25, teamwork: 95, tacticalHabits: 80, emotionControl: 95, leadership: 85, aggression: 10, mapAwareness: 60, mentality: 90 } },
      { id: "24c", text: "改变自己的打法，尝试不同的策略", scores: { aimStyle: 45, teamwork: 55, tacticalHabits: 90, emotionControl: 75, leadership: 55, aggression: 30, mapAwareness: 75, mentality: 75 } },
      { id: "24d", text: "报点不说话，专注打好自己的", scores: { aimStyle: 60, teamwork: 20, tacticalHabits: 50, emotionControl: 55, leadership: 15, aggression: 35, mapAwareness: 45, mentality: 55 } },
    ],
  },
  {
    id: 25,
    question: "如果用一个词形容你的游戏风格，你会选？",
    options: [
      { id: "25a", text: "激进——永远冲在第一线", scores: { aimStyle: 90, teamwork: 20, tacticalHabits: 15, emotionControl: 25, leadership: 15, aggression: 100, mapAwareness: 20, mentality: 40 } },
      { id: "25b", text: "智慧——用头脑赢下比赛", scores: { aimStyle: 30, teamwork: 80, tacticalHabits: 95, emotionControl: 90, leadership: 85, aggression: 10, mapAwareness: 85, mentality: 85 } },
      { id: "25c", text: "稳健——永远做最正确的选择", scores: { aimStyle: 40, teamwork: 75, tacticalHabits: 85, emotionControl: 95, leadership: 55, aggression: 10, mapAwareness: 75, mentality: 95 } },
      { id: "25d", text: "冷静——不管什么局面都能hold住", scores: { aimStyle: 35, teamwork: 70, tacticalHabits: 75, emotionControl: 100, leadership: 80, aggression: 10, mapAwareness: 65, mentality: 100 } },
    ],
  },
];
