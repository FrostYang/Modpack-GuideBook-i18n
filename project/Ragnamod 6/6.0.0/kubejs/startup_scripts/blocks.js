events.listen('block.registry', function (e) {
  e.create('platinum_block').material('iron').hardness(0.5).displayName('铂块')
  e.create('quarkonium_block').material('iron').hardness(0.5).displayName('夸克块')
  e.create('obsidian_ingot_block').material('iron').hardness(0.5).displayName('黑曜石块')
  e.create('alfsteel_crux').material('rock').hardness(0.5).displayName('精灵钢核心')
  e.create('aquamarine_block').material('iron').hardness(0.5).displayName('海蓝宝石块')
  e.create('machinarium_block').material('iron').hardness(0.5).displayName('机械块')
  e.create('ender_pearl_block').material('coral').hardness(0.5).displayName('末影珍珠块')
  e.create('ultimate_comb_block').material('coral').hardness(0.5).displayName('终极蜜脾块')
})