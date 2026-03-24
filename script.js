const B='https://game.deadlock.coach/vpk/panorama/images/items'
const iw=n=>`${B}/weapon/${n}.webp`
const iv=n=>`${B}/vitality/${n}.webp`
const is2=n=>`${B}/spirit/${n}.webp`
const getHImg=n=>`https://deadlock.wiki/Special:FilePath/${encodeURIComponent(n.replace(/ /g, '_'))}.png`

const HEROES=[
  {id:1, name:'Abrams',      role:'Tank',    dmg:'Melee/Bullet',tags:['melee','tank','sustain','bullet']},
  {id:2, name:'Bebop',       role:'Carry',   dmg:'Spirit/Bullet',tags:['spirit','hook','bomb','aoe']},
  {id:3, name:'Dynamo',      role:'Support', dmg:'Spirit',       tags:['spirit','support','healing']},
  {id:4, name:'Grey Talon',  role:'Carry',   dmg:'Bullet/Spirit',tags:['bullet','spirit','poke']},
  {id:5, name:'Haze',        role:'Carry',   dmg:'Bullet',       tags:['bullet','stealth','dot']},
  {id:6, name:'Infernus',    role:'Carry',   dmg:'Spirit',       tags:['spirit','dot','fire','aoe']},
  {id:7, name:'Ivy',         role:'Support', dmg:'Spirit',       tags:['spirit','support','healing']},
  {id:8, name:'Kelvin',      role:'Support', dmg:'Spirit/Bullet',tags:['spirit','support','healing','freeze','aoe']},
  {id:9, name:'Lady Geist',  role:'Carry',   dmg:'Spirit',       tags:['spirit','lifesteal','nuke']},
  {id:10,name:'Lash',        role:'Assassin',dmg:'Bullet/Spirit',tags:['bullet','dive','mobility']},
  {id:11,name:'McGinnis',    role:'Tank',    dmg:'Bullet',       tags:['bullet','tank','aoe']},
  {id:12,name:'Mo & Krill',  role:'Tank',    dmg:'Melee/Spirit', tags:['melee','tank','burrow','spirit']},
  {id:13,name:'Paradox',     role:'Assassin',dmg:'Bullet/Spirit',tags:['bullet','spirit','assassin','mobility']},
  {id:14,name:'Pocket',      role:'Assassin',dmg:'Spirit',       tags:['spirit','assassin','stealth']},
  {id:15,name:'Seven',       role:'Carry',   dmg:'Spirit',       tags:['spirit','lightning','aoe','nuke']},
  {id:16,name:'Shiv',        role:'Assassin',dmg:'Melee/Bullet', tags:['melee','assassin','bleed','dot']},
  {id:17,name:'Vindicta',    role:'Carry',   dmg:'Bullet',       tags:['bullet','sniper','flight']},
  {id:18,name:'Viscous',     role:'Tank',    dmg:'Spirit',       tags:['spirit','tank','shield']},
  {id:19,name:'Warden',      role:'Tank',    dmg:'Bullet/Spirit',tags:['bullet','tank','cc','spirit']},
  {id:20,name:'Wraith',      role:'Carry',   dmg:'Bullet',       tags:['bullet','carry','mobility']},
  {id:21,name:'Yamato',      role:'Assassin',dmg:'Melee/Spirit', tags:['melee','assassin','dash','spirit','mobility']},
  {id:22,name:'Calico',      role:'Assassin',dmg:'Spirit',       tags:['spirit','assassin','stealth','mobility']},
  {id:23,name:'Holliday',    role:'Carry',   dmg:'Bullet',       tags:['bullet','carry','cc']},
  {id:24,name:'Mirage',      role:'Carry',   dmg:'Spirit/Bullet',tags:['spirit','bullet','aoe','nuke']},
  {id:25,name:'Sinclair',    role:'Support', dmg:'Spirit',       tags:['spirit','support','cc']},
  {id:26,name:'Wrecker',     role:'Tank',    dmg:'Melee/Bullet', tags:['melee','tank','charge','mobility']},
]

const ITEMS=[
  // WEAPON T1
  {id:'w_cq', name:'Close Quarters',        cat:'weapon',tier:1,cost:800,  img:iw('close_quarters'),        tags:['melee','close','bullet'],             desc:'Bonus damage at close range.'},
  {id:'w_em', name:'Extended Magazine',      cat:'weapon',tier:1,cost:800,  img:iw('basic_magazine'),         tags:['bullet','ammo'],                      desc:'Larger magazine for more bullets.'},
  {id:'w_hb', name:'Headshot Booster',       cat:'weapon',tier:1,cost:800,  img:iw('headshot_booster'),       tags:['bullet','headshot'],                  desc:'Bonus damage on headshots.'},
  {id:'w_hv', name:'High-Velocity Rounds',   cat:'weapon',tier:1,cost:800,  img:iw('high_velocity_rounds'),   tags:['bullet','penetration','range'],        desc:'Faster bullets with pierce.'},
  {id:'w_mr', name:'Monster Rounds',         cat:'weapon',tier:1,cost:800,  img:iw('monster_rounds'),         tags:['bullet','anti-tank'],                 desc:'Extra damage vs high-HP targets.'},
  {id:'w_rr', name:'Rapid Rounds',           cat:'weapon',tier:1,cost:800,  img:iw('rapid_rounds'),           tags:['bullet','firerate'],                  desc:'Increases fire rate.'},
  {id:'w_rs', name:'Restorative Shot',       cat:'weapon',tier:1,cost:800,  img:iw('restorative_shot'),       tags:['bullet','healing'],                   desc:'Heal on bullet hits.'},
  // WEAPON T2
  {id:'w_ar', name:'Active Reload',          cat:'weapon',tier:2,cost:1600, img:iw('active_reload'),          tags:['bullet','burst'],                     desc:'Manual reload grants damage boost.'},
  {id:'w_fl', name:'Fleetfoot',              cat:'weapon',tier:2,cost:1600, img:iw('fleetfoot'),              tags:['mobility','speed'],                   desc:'Speed burst while shooting.'},
  {id:'w_inm',name:'Intensifying Magazine',  cat:'weapon',tier:2,cost:1600, img:iw('intensifying_magazine'),  tags:['bullet','stack'],                     desc:'Damage builds through the magazine.'},
  {id:'w_kd', name:'Kinetic Dash',           cat:'weapon',tier:2,cost:1600, img:iw('kinetic_dash'),           tags:['mobility','bullet','dash'],            desc:'Shoot while dashing.'},
  {id:'w_lr', name:'Long Range',             cat:'weapon',tier:2,cost:1600, img:iw('long_range'),             tags:['bullet','range','poke'],              desc:'Increased effective range.'},
  {id:'w_mc', name:'Melee Charge',           cat:'weapon',tier:2,cost:1600, img:iw('melee_charge'),           tags:['melee','gap-close'],                  desc:'Charged melee attack.'},
  {id:'w_mys',name:'Mystic Shot',            cat:'weapon',tier:2,cost:1600, img:iw('mystic_shot'),            tags:['bullet','spirit'],                    desc:'Bullets deal bonus spirit damage.'},
  {id:'w_op', name:'Opening Rounds',         cat:'weapon',tier:2,cost:1600, img:iw('opening_rounds'),         tags:['bullet','burst','first-shot'],         desc:'First shots deal extra damage.'},
  {id:'w_rcr',name:'Recharging Rush',        cat:'weapon',tier:2,cost:1600, img:iw('recharging_rounds'),      tags:['bullet','cooldown'],                  desc:'Kills reduce cooldowns.'},
  {id:'w_slb',name:'Slowing Bullets',        cat:'weapon',tier:2,cost:1600, img:iw('slowing_bullets'),        tags:['slow','anti-mobility','bullet'],       desc:'Bullets slow enemies.'},
  {id:'w_ssb',name:'Spirit Shredder Bullets',cat:'weapon',tier:2,cost:1600, img:iw('spirit_shredder_bullets'),tags:['bullet','anti-spirit','shred'],        desc:'Reduce enemy spirit armor.'},
  {id:'w_spl',name:'Split Shot',             cat:'weapon',tier:2,cost:1600, img:iw('split_shot'),             tags:['bullet','aoe'],                       desc:'Bullets split to nearby enemies.'},
  {id:'w_stk',name:'Stalker',                cat:'weapon',tier:2,cost:1600, img:iw('backstabber'),            tags:['bullet','assassin','backstab'],        desc:'Bonus damage attacking from behind.'},
  {id:'w_sw', name:'Swift Striker',          cat:'weapon',tier:2,cost:1600, img:iw('swift_striker'),          tags:['bullet','firerate'],                  desc:'High fire rate bonus.'},
  {id:'w_tm', name:'Titanic Magazine',       cat:'weapon',tier:2,cost:1600, img:iw('titanic_magazine'),       tags:['bullet','ammo','sustain'],             desc:'Huge magazine, regen ammo.'},
  {id:'w_wkh',name:'Weakening Headshot',     cat:'weapon',tier:2,cost:1600, img:iw('weakening_headshot'),     tags:['bullet','debuff','headshot'],          desc:'Headshots weaken enemies.'},
  // WEAPON T3
  {id:'w_af', name:'Alchemical Fire',        cat:'weapon',tier:3,cost:3200, img:iw('alchemical_fire'),        tags:['aoe','dot','fire'],                   desc:'Drop a fire pool for AoE DoT.'},
  {id:'w_be', name:'Ballistic Enchantment',  cat:'weapon',tier:3,cost:3200, img:iw('alchemical_seal'),        tags:['bullet','spirit','imbue'],             desc:'Imbue bullets with spirit energy.'},
  {id:'w_brk',name:'Berserker',              cat:'weapon',tier:3,cost:3200, img:iw('berserker'),              tags:['melee','stack','damage'],              desc:'Melee kills stack big damage bonus.'},
  {id:'w_bt', name:'Blood Tribute',          cat:'weapon',tier:3,cost:3200, img:iw('blood_tribute'),          tags:['lifesteal','active'],                 desc:'Drain life from nearby enemies.'},
  {id:'w_brf',name:'Burst Fire',             cat:'weapon',tier:3,cost:3200, img:iw('burst_fire'),             tags:['bullet','burst'],                     desc:'Burst fire mode.'},
  {id:'w_cus',name:'Cultist Sacrifice',      cat:'weapon',tier:3,cost:3200, img:iw('cultist_sacrifice'),      tags:['active','stack'],                     desc:'Sacrifice HP for damage stacks.'},
  {id:'w_er2',name:'Escalating Resilience',  cat:'weapon',tier:3,cost:3200, img:iw('escalating_resilience'),  tags:['tank','stack','anti-bullet'],          desc:'Stack bullet resist in combat.'},
  {id:'w_exs',name:'Express Shot',           cat:'weapon',tier:3,cost:3200, img:iw('express_shot'),           tags:['bullet','range'],                     desc:'High-velocity express shot.'},
  {id:'w_hh', name:'Headhunter',             cat:'weapon',tier:3,cost:3200, img:iw('headhunter'),             tags:['bullet','execute'],                   desc:'Extra damage to low-HP enemies.'},
  {id:'w_ha', name:'Heroic Aura',            cat:'weapon',tier:3,cost:3200, img:iw('heroic_aura'),            tags:['aura','support'],                     desc:'Aura boosts team weapon damage.'},
  {id:'w_hp2',name:'Hollow Point',           cat:'weapon',tier:3,cost:3200, img:iw('hollow_point'),           tags:['bullet','shred','anti-armor'],         desc:'Reduce enemy bullet armor on hit.'},
  {id:'w_hua',name:"Hunter's Aura",          cat:'weapon',tier:3,cost:3200, img:iw('hunters_aura'),           tags:['aura','anti-bullet','shred'],          desc:"Aura reduces enemy bullet resist."},
  {id:'w_pb', name:'Point Blank',            cat:'weapon',tier:3,cost:3200, img:iw('point_blank'),            tags:['bullet','close','burst'],              desc:'Massive close-range burst.'},
  {id:'w_sha',name:'Sharpshooter',           cat:'weapon',tier:3,cost:3200, img:iw('sharp_shooter'),          tags:['bullet','range','headshot'],           desc:'Zoom and precision bonuses.'},
  {id:'w_srd',name:'Spirit Rend',            cat:'weapon',tier:3,cost:3200, img:iw('spellslinger_headshots'), tags:['bullet','spirit','headshot'],           desc:'Headshots deal spirit damage.'},
  {id:'w_tb', name:'Tesla Bullets',          cat:'weapon',tier:3,cost:3200, img:iw('tesla_bullets'),          tags:['bullet','chain','aoe'],                desc:'Bullets chain lightning to enemies.'},
  {id:'w_txb',name:'Toxic Bullets',          cat:'weapon',tier:3,cost:3200, img:iw('toxic_bullets'),          tags:['bullet','dot','anti-heal','poison'],   desc:'Bullets poison, reducing healing.'},
  {id:'w_wsh',name:'Weighted Shots',         cat:'weapon',tier:3,cost:3200, img:iw('weighted_shots'),         tags:['bullet','slow'],                      desc:'Shots slow and deal more damage.'},
  // WEAPON T4
  {id:'w_apr',name:'Armor Piercing Rounds',  cat:'weapon',tier:4,cost:6400, img:iw('armor_piercing_rounds'),  tags:['bullet','penetration','anti-tank'],    desc:'Bullets pierce and ignore armor.'},
  {id:'w_cap',name:'Capacitor',              cat:'weapon',tier:4,cost:6400, img:iw('capacitor'),              tags:['bullet','active','burst'],             desc:'Electric burst shot on activate.'},
  {id:'w_crh',name:'Crippling Headshot',     cat:'weapon',tier:4,cost:6400, img:iw('crippling_headshot'),     tags:['bullet','slow','debuff','headshot'],   desc:'Headshots slow and debuff enemies.'},
  {id:'w_crf',name:'Crushing Fists',         cat:'weapon',tier:4,cost:6400, img:iw('crushing_fists'),         tags:['melee','anti-tank'],                  desc:'Massive melee, shreds tanks.'},
  {id:'w_frz',name:'Frenzy',                 cat:'weapon',tier:4,cost:6400, img:iw('frenzy'),                 tags:['bullet','stack','lifesteal'],          desc:'Stack fire rate and lifesteal at low HP.'},
  {id:'w_gc', name:'Glass Cannon',           cat:'weapon',tier:4,cost:6400, img:iw('glass_cannon'),           tags:['bullet','damage'],                    desc:'Massive damage, less survivability.'},
  {id:'w_ls', name:'Lucky Shot',             cat:'weapon',tier:4,cost:6400, img:iw('lucky_shot'),             tags:['bullet','crit'],                      desc:'Chance for critical hits.'},
  {id:'w_ric',name:'Ricochet',               cat:'weapon',tier:4,cost:6400, img:iw('ricochet'),               tags:['bullet','bounce','aoe'],               desc:'Bullets bounce to nearby enemies.'},
  {id:'w_shw',name:'Shadow Weave',           cat:'weapon',tier:4,cost:6400, img:iw('shadow_weave'),           tags:['stealth','active','assassin'],         desc:'Go invis then empower next shot.'},
  {id:'w_sil',name:'Silencer',               cat:'weapon',tier:4,cost:6400, img:iw('silencer'),               tags:['silence','anti-spirit','bullet'],      desc:'Shots silence enemies.'},
  {id:'w_slg',name:'Spellslinger',           cat:'weapon',tier:4,cost:6400, img:iw('spell_slinger'),          tags:['bullet','spirit','hybrid'],            desc:'Weapon damage scales with spirit.'},
  {id:'w_sof',name:'Spiritual Overflow',     cat:'weapon',tier:4,cost:6400, img:iw('spiritual_overflow'),     tags:['spirit','bullet'],                    desc:'Converts excess spirit to weapon damage.'},
  // VITALITY T1
  {id:'v_eh', name:'Extra Health',           cat:'vitality',tier:1,cost:800,  img:iv('extra_health'),          tags:['hp'],                                 desc:'Flat HP increase.'},
  {id:'v_er', name:'Extra Regen',            cat:'vitality',tier:1,cost:800,  img:iv('extra_regen'),           tags:['regen','sustain'],                    desc:'Passive HP regen.'},
  {id:'v_es', name:'Extra Stamina',          cat:'vitality',tier:1,cost:800,  img:iv('extra_stamina'),         tags:['mobility','stamina'],                 desc:'More stamina for dashes.'},
  {id:'v_hr', name:'Healing Rite',           cat:'vitality',tier:1,cost:800,  img:iv('healing_rite'),          tags:['healing','active'],                   desc:'Activate to channel a heal.'},
  {id:'v_ml', name:'Melee Lifesteal',        cat:'vitality',tier:1,cost:800,  img:iv('melee_lifesteal'),       tags:['melee','lifesteal'],                  desc:'Heal from melee attacks.'},
  {id:'v_rb2',name:'Rebuttal',               cat:'vitality',tier:1,cost:800,  img:iv('rebuttal'),              tags:['anti-bullet','parry'],                desc:'Parry bullets back at attackers.'},
  {id:'v_spb',name:'Sprint Boots',           cat:'vitality',tier:1,cost:800,  img:iv('sprint_boots'),          tags:['mobility','speed'],                   desc:'Activate for speed burst.'},
  // VITALITY T2
  {id:'v_bv', name:'Battle Vest',            cat:'vitality',tier:2,cost:1600, img:iv('battle_vest'),           tags:['anti-bullet','armor','hp'],            desc:'Bullet resistance and HP.'},
  {id:'v_bls',name:'Bullet Lifesteal',       cat:'vitality',tier:2,cost:1600, img:iv('bullet_lifesteal'),      tags:['bullet','lifesteal'],                 desc:'Heal from bullet damage dealt.'},
  {id:'v_dr', name:'Debuff Reducer',         cat:'vitality',tier:2,cost:1600, img:iv('debuff_reducer'),        tags:['anti-cc','debuff','cleanse'],          desc:'Reduces debuff durations on you.'},
  {id:'v_ee', name:"Enchanter's Emblem",     cat:'vitality',tier:2,cost:1600, img:iv('enchanters_emblem'),     tags:['spirit','support'],                   desc:'Boosts spirit healing effects.'},
  {id:'v_end',name:'Enduring Speed',         cat:'vitality',tier:2,cost:1600, img:iv('enduring_speed'),        tags:['mobility','speed','anti-slow'],        desc:'Speed that persists through hits.'},
  {id:'v_gw', name:'Guardian Ward',          cat:'vitality',tier:2,cost:1600, img:iv('guardian_ward'),         tags:['support','shield'],                   desc:'Ward that shields nearby allies.'},
  {id:'v_hb2',name:'Healbane',               cat:'vitality',tier:2,cost:1600, img:iv('healbane'),              tags:['anti-heal','debuff'],                 desc:'Your hits cut enemy healing.'},
  {id:'v_hbo',name:'Healing Booster',        cat:'vitality',tier:2,cost:1600, img:iv('healing_booster'),       tags:['healing','support'],                  desc:'Increases healing received and given.'},
  {id:'v_rb', name:'Reactive Barrier',       cat:'vitality',tier:2,cost:1600, img:iv('reactive_barrier'),      tags:['shield','anti-burst'],                desc:'Auto-shield on burst damage.'},
  {id:'v_rl', name:'Restorative Locket',     cat:'vitality',tier:2,cost:1600, img:iv('restorative_locket'),    tags:['healing','active','support'],          desc:'Heal yourself and allies.'},
  {id:'v_rf', name:'Return Fire',            cat:'vitality',tier:2,cost:1600, img:iv('return_fire'),           tags:['anti-bullet','reflect'],              desc:'Reflect bullet damage back.'},
  {id:'v_sl', name:'Spirit Lifesteal',       cat:'vitality',tier:2,cost:1600, img:iv('spirit_lifesteal'),      tags:['spirit','lifesteal'],                 desc:'Heal from spirit damage dealt.'},
  {id:'v_ssh',name:'Spirit Shielding',       cat:'vitality',tier:2,cost:1600, img:iv('spirit_shielding'),      tags:['anti-spirit','shield'],               desc:'Shield absorbing spirit damage.'},
  {id:'v_wsd',name:'Weapon Shielding',       cat:'vitality',tier:2,cost:1600, img:iv('weapon_shielding'),      tags:['anti-bullet','shield'],               desc:'Shield absorbing bullet damage.'},
  // VITALITY T3
  {id:'v_ch', name:'Continuing Healing',     cat:'vitality',tier:3,cost:3200, img:iv('continuing_healing'),    tags:['healing','regen','sustain'],           desc:'Strong passive regen over time.'},
  {id:'v_for',name:'Fortitude',              cat:'vitality',tier:3,cost:3200, img:iv('fortitude'),             tags:['hp','tank','stack'],                  desc:'Gain HP stacks from kills.'},
  {id:'v_iba',name:'Improved Bullet Armor',  cat:'vitality',tier:3,cost:3200, img:iv('improved_bullet_armor'), tags:['anti-bullet','armor'],                desc:'Strong bullet damage reduction.'},
  {id:'v_isa',name:'Improved Spirit Armor',  cat:'vitality',tier:3,cost:3200, img:iv('improved_spirit_armor'), tags:['anti-spirit','armor'],                desc:'Strong spirit damage reduction.'},
  {id:'v_lch',name:'Leech',                  cat:'vitality',tier:3,cost:3200, img:iv('leech'),                 tags:['lifesteal','sustain'],                desc:'Heal from all damage dealt.'},
  {id:'v_mj', name:'Majestic Leap',          cat:'vitality',tier:3,cost:3200, img:iv('majestic_leap'),         tags:['mobility','jump','escape'],           desc:'Giant vertical leap.'},
  {id:'v_ms', name:'Metal Skin',             cat:'vitality',tier:3,cost:3200, img:iv('metal_skin'),            tags:['anti-bullet','immune'],               desc:'Temporary bullet immunity.'},
  {id:'v_rcb',name:'Rescue Beam',            cat:'vitality',tier:3,cost:3200, img:iv('rescue_beam'),           tags:['support','pull','save'],              desc:'Pull an ally to safety.'},
  {id:'v_vw', name:'Veil Walker',            cat:'vitality',tier:3,cost:3200, img:iv('veil_walker'),           tags:['stealth','escape'],                   desc:'Short invisibility on activate.'},
  // VITALITY T4
  {id:'v_col',name:'Colossus',               cat:'vitality',tier:4,cost:6400, img:iv('colossus'),              tags:['tank','hp'],                          desc:'Massive HP and size buff.'},
  {id:'v_dec',name:'Decay',                  cat:'vitality',tier:4,cost:6400, img:iv('decay'),                 tags:['anti-heal','dot','aura'],             desc:'Aura reduces healing and deals DoT.'},
  {id:'v_inh',name:'Inhibitor',              cat:'vitality',tier:4,cost:6400, img:iv('inhibitor'),             tags:['anti-heal','debuff'],                 desc:'Severely reduces enemy healing.'},
  {id:'v_phs',name:'Phantom Strike',         cat:'vitality',tier:4,cost:6400, img:iv('phantom_strike'),        tags:['blink','melee','gap-close'],          desc:'Blink to enemy and strike.'},
  {id:'v_uns',name:'Unstoppable',            cat:'vitality',tier:4,cost:6400, img:iv('unstoppable'),           tags:['immune','anti-cc','cleanse'],         desc:'Become CC immune on activate.'},
  // SPIRIT T1
  {id:'s_asc',name:'Ammo Scavenger',         cat:'spirit', tier:1,cost:800,  img:is2('ammo_scavenger'),        tags:['spirit','ammo'],                      desc:'Gain extra ammo from kills.'},
  {id:'s_ec', name:'Extra Charge',           cat:'spirit', tier:1,cost:800,  img:is2('extra_charge'),          tags:['spirit','cooldown'],                  desc:'Extra ability charge.'},
  {id:'s_esp',name:'Extra Spirit',           cat:'spirit', tier:1,cost:800,  img:is2('extra_spirit'),          tags:['spirit','power'],                     desc:'Flat spirit power increase.'},
  {id:'s_inf',name:'Infuser',                cat:'spirit', tier:1,cost:800,  img:is2('infuser'),               tags:['spirit','healing'],                   desc:'Healing abilities stronger.'},
  {id:'s_mb', name:'Mystic Burst',           cat:'spirit', tier:1,cost:800,  img:is2('mystic_burst'),          tags:['spirit','burst'],                     desc:'Spirit damage burst on activate.'},
  {id:'s_qr', name:'Quicksilver Reload',     cat:'spirit', tier:1,cost:800,  img:is2('quicksilver_reload'),    tags:['spirit','cooldown','reload'],          desc:'Kills reset your reload.'},
  // SPIRIT T2
  {id:'s_cf', name:'Cold Front',             cat:'spirit', tier:2,cost:1600, img:is2('cold_front'),            tags:['slow','aoe','freeze','anti-mobility'], desc:'AoE slow around you.'},
  {id:'s_ic', name:'Improved Cooldown',      cat:'spirit', tier:2,cost:1600, img:is2('improved_cooldown'),     tags:['spirit','cooldown'],                  desc:'Reduces ability cooldowns.'},
  {id:'s_mv', name:'Mystic Vulnerability',   cat:'spirit', tier:2,cost:1600, img:is2('mystic_vulnerability'),  tags:['spirit','debuff','amplify'],           desc:'Increase enemy spirit damage taken.'},
  {id:'s_scd',name:'Superior Cooldown',      cat:'spirit', tier:2,cost:1600, img:is2('superior_cooldown'),     tags:['spirit','cooldown'],                  desc:'Strong cooldown reduction.'},
  {id:'s_slh',name:'Slowing Hex',            cat:'spirit', tier:2,cost:1600, img:is2('slowing_hex'),           tags:['slow','cc','anti-mobility'],           desc:'Activate to slow an enemy.'},
  {id:'s_sup',name:'Suppressor',             cat:'spirit', tier:2,cost:1600, img:is2('suppressor'),            tags:['silence','anti-spirit','cc'],          desc:'Hits can silence enemies.'},
  {id:'s_ww', name:'Withering Whip',         cat:'spirit', tier:2,cost:1600, img:is2('withering_whip'),        tags:['slow','melee','cc','anti-mobility'],   desc:'Melee applies powerful slow.'},
  // SPIRIT T3
  {id:'s_as', name:'Arcane Surge',           cat:'spirit', tier:3,cost:3200, img:is2('arcane_surge'),          tags:['spirit','burst'],                     desc:'Activatable spirit damage amp.'},
  {id:'s_bs', name:'Boundless Spirit',       cat:'spirit', tier:3,cost:3200, img:is2('boundless_spirit'),      tags:['spirit','power','stack'],              desc:'Continuously stack spirit power.'},
  {id:'s_dk', name:"Diviner's Kevlar",       cat:'spirit', tier:3,cost:3200, img:is2('diviners_kevlar'),       tags:['anti-spirit','armor'],                desc:'High spirit resistance.'},
  {id:'s_de', name:'Duration Extender',      cat:'spirit', tier:3,cost:3200, img:is2('duration_extender'),     tags:['spirit','duration'],                  desc:'Abilities last longer.'},
  {id:'s_eth',name:'Ethereal Shift',         cat:'spirit', tier:3,cost:3200, img:is2('ethereal_shift'),        tags:['immune','escape'],                    desc:'Phase out of existence briefly.'},
  {id:'s_ir', name:'Improved Reach',         cat:'spirit', tier:3,cost:3200, img:is2('improved_reach'),        tags:['spirit','range','aoe'],                desc:'Increased ability range.'},
  {id:'s_kdn',name:'Knockdown',              cat:'spirit', tier:3,cost:3200, img:is2('knockdown'),             tags:['cc','knockdown','anti-mobility'],      desc:'Knockdown an enemy on activate.'},
  {id:'s_sg', name:'Silence Glyph',          cat:'spirit', tier:3,cost:3200, img:is2('silence_glyph'),         tags:['silence','cc','anti-spirit','aoe'],    desc:'Silence an area on activate.'},
  {id:'s_tp', name:'Torment Pulse',          cat:'spirit', tier:3,cost:3200, img:is2('torment_pulse'),         tags:['spirit','aoe','dot'],                 desc:'Aura dealing spirit DoT.'},
  // SPIRIT T4
  {id:'s_cur',name:'Curse',                  cat:'spirit', tier:4,cost:6400, img:is2('curse'),                 tags:['cc','disable','anti-mobility'],        desc:'Completely disable an enemy.'},
  {id:'s_dlk',name:'Deadlock',               cat:'spirit', tier:4,cost:6400, img:is2('deadlock'),              tags:['cc','root','freeze'],                 desc:'Root and freeze an enemy.'},
  {id:'s_exe',name:'Escalating Exposure',    cat:'spirit', tier:4,cost:6400, img:is2('escalating_exposure'),   tags:['spirit','debuff','amplify','stack'],   desc:'Stack spirit vulnerability on targets.'},
  {id:'s_mr', name:'Mystic Reverb',          cat:'spirit', tier:4,cost:6400, img:is2('mystic_reverb'),         tags:['spirit','echo','aoe'],                desc:'Abilities echo for bonus damage.'},
  {id:'s_ref',name:'Refresher',              cat:'spirit', tier:4,cost:6400, img:is2('refresher'),             tags:['spirit','reset','cooldown'],           desc:'Reset all ability cooldowns.'},
  {id:'s_sht',name:'Shatter',                cat:'spirit', tier:4,cost:6400, img:is2('shatter'),               tags:['anti-spirit','debuff','amplify'],      desc:'Destroys enemy spirit armor.'},
]

const RULES=[
  {id:'antiheal',label:'Anti-Heal',
   cond:e=>e.items.some(i=>['v_rl','v_ch','s_inf','v_lch','v_bls','v_sl'].includes(i.id))||['Ivy','Kelvin','Lady Geist','Infernus'].includes(e.hero?.name),
   w:10,recs:[
     {i:'Healbane',         p:'mid',  r:'Reduces healing received. Essential vs Ivy, Kelvin, or any heal-stacking enemy.'},
     {i:'Decay',            p:'late', r:'Aura cuts healing in teamfights — shuts down healing supports completely.'},
     {i:'Inhibitor',        p:'late', r:'Hard counter to lifesteal and regen. Must-buy vs heavy sustain lineups.'},
     {i:'Toxic Bullets',    p:'mid',  r:'Applies anti-heal on every bullet hit — constant pressure on healing enemies.'},
  ]},
  {id:'antispirit',label:'Anti-Spirit',
   cond:e=>e.hero?.dmg?.includes('Spirit')||e.items.filter(i=>i.cat==='spirit'&&i.tier>=2).length>=2,
   w:9,recs:[
     {i:'Improved Spirit Armor',p:'mid',  r:'Strong spirit damage reduction against ability-heavy heroes.'},
     {i:'Spirit Shielding',     p:'mid',  r:'Shield absorbs spirit burst before it hits your HP.'},
     {i:"Diviner's Kevlar",     p:'late', r:'Best-in-slot spirit resist vs heavy spirit lineups.'},
     {i:'Silence Glyph',        p:'late', r:'Silence spirit casters in an area, preventing key combos.'},
     {i:'Suppressor',            p:'mid',  r:'Chance to silence spirit users on every bullet hit.'},
     {i:'Shatter',               p:'late', r:'Destroy enemy spirit armor, amplifying your whole team\'s damage.'},
  ]},
  {id:'antibullet',label:'Anti-Bullet',
   cond:e=>e.hero?.dmg?.includes('Bullet')||e.items.some(i=>['w_gc','w_frz','w_inm','w_apr'].includes(i.id)),
   w:9,recs:[
     {i:'Battle Vest',           p:'mid',  r:'Bullet resistance + HP vs sustained gun damage.'},
     {i:'Improved Bullet Armor', p:'late', r:'Strong reduction vs multiple bullet carries.'},
     {i:'Weapon Shielding',      p:'mid',  r:'Shield that absorbs bullet bursts from carries.'},
     {i:'Return Fire',           p:'mid',  r:'Reflect damage back at enemies who focus you.'},
     {i:'Metal Skin',            p:'late', r:'Bullet immunity — use to dodge key burst windows.'},
     {i:'Reactive Barrier',      p:'mid',  r:'Auto-shield absorbs the opening burst from gun carries.'},
  ]},
  {id:'antimobility',label:'Anti-Mobility',
   cond:e=>e.hero?.tags?.some(t=>['mobility','stealth','assassin','dive','dash'].includes(t)),
   w:8,recs:[
     {i:'Slowing Hex',    p:'mid',  r:'Slow mobile assassins before they gap-close on you.'},
     {i:'Cold Front',     p:'mid',  r:'AoE slow disrupts dive-heavy enemies.'},
     {i:'Knockdown',      p:'late', r:'Hard interrupt for diving heroes like Lash or Yamato.'},
     {i:'Curse',          p:'late', r:'Completely stop a key mobile enemy for a critical window.'},
     {i:'Slowing Bullets',p:'mid',  r:'Every shot slows — keeps mobile enemies in place.'},
  ]},
  {id:'antitank',label:'Anti-Tank',
   cond:e=>(e.hero?.role==='Tank')||(e.role==='Tank')||e.items.some(i=>['v_col','v_for','v_iba'].includes(i.id))||(e.souls>10000),
   w:8,recs:[
     {i:'Monster Rounds',        p:'early',r:'Bonus damage specifically vs high-HP tanky targets.'},
     {i:'Armor Piercing Rounds', p:'late', r:'Ignore armor — best-in-slot vs stacked tank builds.'},
     {i:'Shatter',               p:'late', r:'Destroy spirit armor on tanks, amplifying team damage.'},
     {i:'Hollow Point',          p:'mid',  r:'Shred bullet armor on every hit — melts tanks over time.'},
     {i:"Hunter's Aura",         p:'mid',  r:'Aura debuffs nearby enemy bullet resist for your team.'},
     {i:'Tesla Bullets',         p:'late', r:'Chain lightning punishes tanks who clump together.'},
  ]},
  {id:'antistealth',label:'Anti-Stealth',
   cond:e=>e.hero?.tags?.includes('stealth')||['Haze','Pocket','Calico'].includes(e.hero?.name),
   w:10,recs:[
     {i:'Suppressor',      p:'mid',  r:'Silence stealth users before they re-enter invisibility.'},
     {i:'Silence Glyph',   p:'late', r:'AoE silence flushes invisible enemies out of a zone.'},
     {i:'Slowing Hex',     p:'mid',  r:'Slow stealth assassins the moment they engage.'},
     {i:'Reactive Barrier',p:'mid',  r:'Auto-shield absorbs burst from stealth openers.'},
  ]},
  {id:'antidot',label:'Anti-DoT',
   cond:e=>e.hero?.tags?.some(t=>['dot','fire','bleed','poison'].includes(t))||e.items.some(i=>['w_txb','w_af','s_tp'].includes(i.id)),
   w:7,recs:[
     {i:'Debuff Reducer',    p:'mid',  r:'Reduces DoT duration — cuts Infernus fire and Shiv bleed short.'},
     {i:'Continuing Healing',p:'mid',  r:'Strong regen to offset sustained damage-over-time.'},
     {i:'Extra Regen',       p:'early',r:'Baseline regen helps recover between DoT procs in lane.'},
  ]},
  {id:'antilifesteal',label:'Anti-Lifesteal',
   cond:e=>e.items.some(i=>['v_lch','v_bls','v_sl','v_ml','s_inf'].includes(i.id))||e.hero?.tags?.includes('lifesteal'),
   w:8,recs:[
     {i:'Healbane',     p:'mid',  r:'Reduces all healing from enemy lifesteal items.'},
     {i:'Decay',        p:'late', r:'Aura cuts enemy lifesteal significantly in teamfights.'},
     {i:'Inhibitor',    p:'late', r:'Hard counter to lifesteal-reliant self-sustaining enemies.'},
     {i:'Toxic Bullets',p:'mid',  r:'Anti-heal on bullets — denies lifesteal from sustained fighters.'},
  ]},
  {id:'anticc',label:'Anti-CC',
   cond:e=>e.items.some(i=>['s_slh','s_cf','s_kdn','s_cur','s_dlk','s_ww'].includes(i.id))||e.hero?.tags?.includes('cc'),
   w:7,recs:[
     {i:'Unstoppable',   p:'late', r:'Activate to become CC immune — negates enemy stuns and roots.'},
     {i:'Debuff Reducer',p:'mid',  r:'Reduces stun/slow duration from enemy crowd control.'},
     {i:'Ethereal Shift',p:'late', r:'Phase through CC and damage at a critical moment.'},
     {i:'Extra Stamina', p:'early',r:'More stamina to dodge CC abilities before they land.'},
  ]},
  {id:'antiburst',label:'Anti-Burst',
   cond:e=>e.items.some(i=>['s_mb','s_as','s_exe','s_mr'].includes(i.id))||e.hero?.tags?.includes('nuke'),
   w:9,recs:[
     {i:'Reactive Barrier',     p:'mid',  r:'Auto-shield blocks the opening burst from spirit nukes.'},
     {i:'Improved Spirit Armor',p:'late', r:'Hard reduces damage from high-power spirit abilities.'},
     {i:'Ethereal Shift',       p:'late', r:'Phase out of incoming spirit nuke combos entirely.'},
     {i:'Spirit Shielding',     p:'mid',  r:'Shield absorbs spirit burst before it reaches your HP.'},
  ]},
  {id:'sustain',label:'Sustain',
   cond:()=>true,w:2,recs:[
     {i:'Extra Health',     p:'early',r:'Baseline HP to survive the laning phase.'},
     {i:'Healing Rite',     p:'early',r:'Active heal to recover HP between fights.'},
     {i:'Leech',            p:'mid',  r:'Lifesteal from all damage dealt.'},
     {i:'Continuing Healing',p:'mid', r:'Passive regen for extended fight survivability.'},
  ]},
]

// STATE
let ST={myHero:null,phase:'mid',enemies:[],pt:null,it:null,ifilter:'all'}

// HERO PICKER
function openHP(t){ST.pt=t;rhg(HEROES);document.getElementById('hs').value='';document.getElementById('hm').style.display='flex';setTimeout(()=>document.getElementById('hs').focus(),50)}
function fh(q){rhg(HEROES.filter(h=>h.name.toLowerCase().includes(q.toLowerCase())))}
function rhg(heroes){
  const used=[ST.myHero?.id,...ST.enemies.map(e=>e.hero?.id)].filter(Boolean)
  document.getElementById('hg').innerHTML=heroes.map(h=>`
    <button class="hbtn${used.includes(h.id)?' used':''}" onclick="selH(${h.id})">
      <img src="${getHImg(h.name)}" class="hero-thumb" alt="${h.name}" onerror="this.style.opacity='.2'"/>
      <div>
        <div class="hn">${h.name}</div>
        <div class="hr">${h.role} · ${h.dmg}</div>
      </div>
    </button>`).join('')
}
function selH(id){
  const h=HEROES.find(x=>x.id===id)
  if(ST.pt==='self'){ST.myHero=h;rmh()}
  else{const i=ST.pt;ST.enemies[i].hero=h;ST.enemies[i].role=h.role;re()}
  cm('hm')
}

// ITEM PICKER
function openIP(i){
  ST.it=i;ST.ifilter='all'
  document.getElementById('imfor').textContent='for '+(ST.enemies[i].hero?.name||`Enemy ${i+1}`)
  document.getElementById('isearch').value=''
  sft('all');aif('','all')
  document.getElementById('im').style.display='flex'
}
function fi(cat){ST.ifilter=cat;sft(cat);aif(document.getElementById('isearch').value,cat)}
function fis(q){aif(q,ST.ifilter)}
function sft(cat){
  const map={all:'fa',weapon:'fw',vitality:'fv',spirit:'fs'}
  Object.entries(map).forEach(([c,id])=>{
    const el=document.getElementById('ft'+c.charAt(0))
    if(!el)return
    el.className='ft'+(c===cat?' f'+c.charAt(0):'')
  })
  ;['all','weapon','vitality','spirit'].forEach(c=>{
    const el=document.getElementById('ft'+c[0])
    if(!el)return
    const cls={all:'fa',weapon:'fw',vitality:'fv',spirit:'fs'}
    el.className='ft'+(c===cat?' '+cls[c]:'')
  })
}
function aif(q,cat){
  let items=ITEMS
  if(cat!=='all')items=items.filter(i=>i.cat===cat)
  if(q)items=items.filter(i=>i.name.toLowerCase().includes(q.toLowerCase()))
  rig(items)
}
function rig(items){
  const sel=(ST.enemies[ST.it]?.items||[]).map(i=>i.id)
  const tc={1:'#6b7280',2:'#22c55e',3:'#f59e0b',4:'#ef4444'}
  document.getElementById('ig').innerHTML=items.map(item=>`
    <button class="ibtn${sel.includes(item.id)?' sel':''}" onclick="togI('${item.id}')" title="${item.desc}">
      <div class="ck">✓</div>
      <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.opacity='.2'"/>
      <div class="in">${item.name}</div>
      <div class="it" style="color:${tc[item.tier]}">T${item.tier} · ${item.cost}⊛</div>
    </button>`).join('')
}
function togI(id){
  const i=ST.it,item=ITEMS.find(x=>x.id===id),en=ST.enemies[i]
  const idx=en.items.findIndex(x=>x.id===id)
  idx>=0?en.items.splice(idx,1):en.items.push(item)
  aif(document.getElementById('isearch').value,ST.ifilter)
  retags(i)
}

// ENEMIES
function addEnemy(){
  if(ST.enemies.length>=6)return
  ST.enemies.push({hero:null,items:[],souls:0,role:''})
  re()
  document.getElementById('addbtn').disabled=ST.enemies.length>=6
}
function remE(i){
  ST.enemies.splice(i,1);re()
  document.getElementById('addbtn').disabled=false
  document.getElementById('res').style.display='none'
}
function retags(i){
  const el=document.getElementById(`et${i}`);if(!el)return
  const cc={weapon:'itag-w',vitality:'itag-v',spirit:'itag-s'}
  const items=ST.enemies[i]?.items||[]
  el.innerHTML=items.map(item=>`<span class="itag ${cc[item.cat]}"><img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.opacity='.2'"/>${item.name}<span class="rm" onclick="remItem(${i},'${item.id}')">×</span></span>`).join('')
    +`<button class="btn" onclick="openIP(${i})" style="font-size:11px;padding:3px 8px;margin-left:2px">+ Items</button>`
}
function remItem(i,id){
  ST.enemies[i].items=ST.enemies[i].items.filter(x=>x.id!==id)
  retags(i)
}
function re(){
  document.getElementById('ec').innerHTML=ST.enemies.map((e,i)=>`
    <div class="eslot">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <div style="flex:1;min-width:150px">
          <span class="label">Hero</span>
          <button class="btn${e.hero?'':' btn-p'}" onclick="openHP(${i})" style="width:100%;text-align:left;padding:6px 12px;display:flex;align-items:center;gap:10px">
            ${e.hero?`
              <img src="${getHImg(e.hero.name)}" class="hero-thumb" style="width:28px;height:28px" alt="${e.hero.name}" onerror="this.style.opacity='.2'"/>
              <div>
                <span style="font-family:'Rajdhani',sans-serif;font-weight:600;color:#e8eaf0">${e.hero.name}</span>
                <span style="color:#4b5563;font-size:11px;margin-left:6px">${e.hero.role}</span>
              </div>
            `:'+ Select hero'}
          </button>
        </div>
        <div style="width:115px">
          <span class="label">Souls Spent</span>
          <input type="number" min="0" max="150000" step="500" value="${e.souls||0}" oninput="ST.enemies[${i}].souls=+this.value" placeholder="0"/>
        </div>
        <div style="width:115px">
          <span class="label">Role Override</span>
          <select onchange="ST.enemies[${i}].role=this.value">
            <option value="${e.hero?.role||''}" selected>${e.hero?.role||'Auto'}</option>
            <option value="Carry">Carry</option>
            <option value="Tank">Tank</option>
            <option value="Support">Support</option>
            <option value="Assassin">Assassin</option>
          </select>
        </div>
        <button class="btn btn-d" onclick="remE(${i})" style="margin-top:16px">Remove</button>
      </div>
      <div>
        <span class="label">Enemy's items (what you've seen them buy)</span>
        <div class="itags-row" id="et${i}"><button class="btn btn-p" onclick="openIP(${i})" style="font-size:11px;padding:3px 10px">+ Add Items</button></div>
      </div>
    </div>`).join('')
  ST.enemies.forEach((_,i)=>retags(i))
}

// PHASE
function setPhase(p){
  ST.phase=p
  const C={early:'#22c55e',mid:'#f59e0b',late:'#ef4444'}
  ;[['early','pe'],['mid','pm'],['late','pl']].forEach(([ph,id])=>{
    const b=document.getElementById(id),c=C[ph],a=ph===p
    b.style.background=a?c+'18':'#1a1f2e'
    b.style.borderColor=a?c+'60':'#2a3245'
    b.style.color=a?c:'#9ca3af'
  })
}

// MY HERO
function rmh(){
  const h=ST.myHero
  document.getElementById('my-hero-display').innerHTML=h
    ?`<button class="btn" onclick="openHP('self')" style="width:100%;text-align:left;padding:8px 12px;background:#f59e0b08;border-color:#f59e0b40;display:flex;align-items:center;gap:10px">
        <img src="${getHImg(h.name)}" class="hero-thumb" alt="${h.name}" onerror="this.style.opacity='.2'"/>
        <div>
          <span style="font-family:'Rajdhani',sans-serif;font-weight:700;font-size:16px;color:#f59e0b">${h.name}</span>
          <span style="color:#6b7280;font-size:12px;margin-left:8px">${h.role} · ${h.dmg}</span>
        </div>
      </button>`
    :`<button class="btn btn-p" onclick="openHP('self')" style="width:100%;text-align:left;padding:10px 14px">+ Select your hero</button>`
}

// ANALYZE
function analyze(){
  const errEl=document.getElementById('err')
  if(ST.enemies.length===0){errEl.style.display='block';errEl.textContent='Add at least one enemy.';return}
  errEl.style.display='none'
  const po={early:0,mid:1,late:2},cp=po[ST.phase]
  const scored=[]
  for(const rule of RULES){
    let score=0,matched=[]
    for(const e of ST.enemies){if(rule.cond(e)){score+=rule.w;if(e.hero)matched.push(e.hero.name)}}
    if(score>0)scored.push({rule,score,matched})
  }
  scored.sort((a,b)=>b.score-a.score)
  const seen=new Set(),recs=[]
  for(const {rule,matched} of scored){
    for(const rec of rule.recs){
      if(seen.has(rec.i))continue
      if(po[rec.p]>cp)continue
      const d=ITEMS.find(x=>x.name===rec.i)
      if(!d)continue
      seen.add(rec.i)
      recs.push({...rec,matched,d,label:rule.label})
      if(recs.length>=10)break
    }
    if(recs.length>=10)break
  }
  if(recs.length<5){
    for(const n of['Extra Health','Healing Rite','Battle Vest','Improved Spirit Armor','Leech']){
      if(!seen.has(n)){const d=ITEMS.find(x=>x.name===n);if(d){seen.add(n);recs.push({i:n,p:'early',r:'General survivability.',matched:[],d,label:'Sustain'})}}
      if(recs.length>=5)break
    }
  }

  // Threats
  const threats=[]
  const sc=ST.enemies.filter(e=>e.hero?.dmg?.includes('Spirit')).length
  const bc=ST.enemies.filter(e=>e.hero?.dmg?.includes('Bullet')).length
  if(sc>=2)threats.push(`${sc} spirit damage heroes — prioritize spirit armor`)
  if(bc>=2)threats.push(`${bc} bullet carries — build bullet resistance`)
  if(ST.enemies.some(e=>['Ivy','Kelvin'].includes(e.hero?.name)||e.items.some(i=>['v_rl','v_ch','v_hbo'].includes(i.id))))threats.push('Healing present — anti-heal is mandatory')
  if(ST.enemies.some(e=>(e.hero?.role||e.role)==='Tank'))threats.push('Tanky frontline — bring armor shred and penetration items')
  if(ST.enemies.some(e=>(e.hero?.role||e.role)==='Assassin'))threats.push('Assassins/flankers — CC and escape tools are valuable')
  if(ST.enemies.some(e=>e.hero?.tags?.includes('stealth')))threats.push('Stealth heroes present — silence and slows counter their engage')
  const fed=ST.enemies.filter(e=>e.souls>8000)
  if(fed.length)threats.push(`${fed.length} fed enem${fed.length>1?'ies':'y'} (${fed.map(e=>e.hero?.name||'Unknown').join(', ')}) — expect powerful items`)

  const cc={weapon:'#f59e0b',vitality:'#22c55e',spirit:'#a78bfa'}
  const resEl=document.getElementById('res')
  resEl.style.display='flex'
  resEl.innerHTML=`
    ${threats.length?`<div class="card" style="border-left:3px solid #ef4444"><span class="label" style="color:#ef4444">Threat Summary</span><ul style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:5px">${threats.map(t=>`<li style="font-size:13px;color:#d1d5db;line-height:1.5">${t}</li>`).join('')}</ul></div>`:''}
    <div class="card">
      <span class="label">Recommended Items — click to see reasoning</span>
      <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px">
        ${recs.map((rec,i)=>{
          const d=rec.d,c=cc[d.cat]
          return `<div class="rec" onclick="this.classList.toggle('open')">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <span style="font-family:'Share Tech Mono',monospace;font-size:11px;color:#4b5563;min-width:22px">${String(i+1).padStart(2,'0')}</span>
              <img class="rec-img" src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.style.opacity='.2'"/>
              <div style="flex:1;min-width:120px">
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
                  <span style="font-family:'Rajdhani',sans-serif;font-weight:700;font-size:16px;color:#e8eaf0">${d.name}</span>
                  <span style="font-size:10px;padding:2px 6px;border-radius:3px;background:${c}18;color:${c};border:1px solid ${c}30;font-family:'Share Tech Mono',monospace">${d.cat}</span>
                  <span class="tphase t${rec.p[0]}">${rec.p} · ${d.cost}⊛</span>
                </div>
                ${rec.matched.length?`<div style="margin-top:3px;display:flex;gap:4px;flex-wrap:wrap">${rec.matched.map(n=>`<span style="font-size:10px;padding:1px 5px;border-radius:3px;background:#ef444418;color:#ef4444;border:1px solid #ef444330">vs ${n}</span>`).join('')}</div>`:''}
              </div>
              <span style="color:#2a3245;font-size:14px">▼</span>
            </div>
            <div class="rec-why">${rec.r}<br><span style="color:#4b5563;font-size:12px;display:block;margin-top:3px">${d.desc}</span></div>
          </div>`}).join('')}
      </div>
    </div>`
  resEl.scrollIntoView({behavior:'smooth'})
}

function cm(id){document.getElementById(id).style.display='none'}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){cm('hm');cm('im')}})
setPhase('mid')
addEnemy()