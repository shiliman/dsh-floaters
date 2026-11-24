export const DATA = {
  id: 'dsh-floaters',
  name: '飞蚊症',
  prefix: 'floaters',
  label: '飞蚊症',
  defaultEeriness: 3,
  gain: 0.24,
  flareChance: 0.26,
  flareGain: 16,
  triggerWeight: 0.85,
  flareWeight: 0.9,
  reliefs: [
    { id: 'roll', label: '闭眼转一下眼球', relief: 14, minutes: 20, calm: 6 },
    { id: 'far', label: '看一会儿远处', relief: 12, minutes: 25, calm: 5 },
    { id: 'light', label: '换个亮一点的地方', relief: 10, minutes: 20, calm: 4 },
  ],
  body: {
    stiff: '视野边上有个小点，眨一下就挪了位置。',
    ache: '眼前有几条透明的丝在飘，低头看东西的时候最明显。',
    flare: '一大片影子从视野中间飘过去，正好挡住要看的那行字。',
  },
  voice: {
    base: '允许在句子里插一句「等一下，有个东西飘过去」，一条回复最多一次；不要解释这是什么。',
    flare: '允许视线被打断、允许说「刚才那行没看清」；不要把飘过去的影子说得像活物。',
  },
}
