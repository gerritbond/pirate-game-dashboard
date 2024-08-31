export const jerryRhymes = [
  'Berry', 'Cary', 'Derry', 'Ferry', 'Gary', 'Harry', 'Kerry', 'Larry', 
  'Mary', 'Perry', 'Sherry', 'Terry', 'Very', 'Werry'
];

export const teasingMessages = [
  "Hmm, trying your luck again?",
  "Oh, a perfectionist, are we?",
  "Third time's the charm... right?",
  "You know the dice gods are watching, right?",
  "Ahem... 'randomly' generated, you say?",
  "Are you sure you're not looking for loaded dice?",
  "If you roll any more, we might have to call the RNG police!",
  "You dirty, dirty cheater!",
  "Okay, now you're just being ridiculous!",
  "STOP! STOP! The dice are already dead!"
];

export const backgrounds = [
  { value: 'barbarian', label: 'Barbarian', description: 'You come from a world with a tech level of 0 or 1, or from the untamed hinterlands of a more advanced world.', skills: ['Survive', 'Notice', 'Any Combat'] },
  { value: 'clergy', label: 'Clergy', description: 'You were a priest, nun, monk, or other religious functionary.', skills: ['Talk', 'Perform', 'Know'] },
  { value: 'courtesan', label: 'Courtesan', description: 'You were a companion of the wealthy and influential.', skills: ['Perform', 'Notice', 'Connect'] },
  { value: 'criminal', label: 'Criminal', description: 'You were a thief, smuggler, fence, or other underworld figure.', skills: ['Sneak', 'Connect', 'Administer'] },
  { value: 'dilettante', label: 'Dilettante', description: 'You were born to wealth and privilege and raised to move in high society.', skills: ['Connect', 'Know', 'Perform'] },
  { value: 'entertainer', label: 'Entertainer', description: 'You were a popular musician, actor, or other kind of public entertainer.', skills: ['Perform', 'Talk', 'Connect'] },
  { value: 'merchant', label: 'Merchant', description: 'You were a trader in goods, whether a humble peddler or a wealthy importer.', skills: ['Trade', 'Talk', 'Connect'] },
  { value: 'noble', label: 'Noble', description: 'You were born into the ruling class of your society.', skills: ['Lead', 'Connect', 'Administer'] },
  { value: 'official', label: 'Official', description: 'You were a bureaucrat or functionary in some government.', skills: ['Administer', 'Connect', 'Know'] },
  { value: 'peasant', label: 'Peasant', description: 'You were a farmer, herder, or other common laborer.', skills: ['Exert', 'Survive', 'Connect'] },
  { value: 'physician', label: 'Physician', description: 'You were a doctor, nurse, or other medical specialist.', skills: ['Heal', 'Know', 'Notice'] },
  { value: 'pilot', label: 'Pilot', description: 'You were a starship pilot or vehicle operator.', skills: ['Pilot', 'Fix', 'Trade'] },
  { value: 'politician', label: 'Politician', description: 'You were an elected or appointed political figure.', skills: ['Talk', 'Lead', 'Connect'] },
  { value: 'scholar', label: 'Scholar', description: 'You were an educated researcher or teacher.', skills: ['Know', 'Perform', 'Talk'] },
  { value: 'soldier', label: 'Soldier', description: 'You were a military soldier or mercenary warrior.', skills: ['Any Combat', 'Exert', 'Survive'] },
  { value: 'spacer', label: 'Spacer', description: 'You were a crew member aboard an interstellar starship.', skills: ['Fix', 'Trade', 'Talk'] },
  { value: 'technician', label: 'Technician', description: 'You were a skilled technical specialist or mechanical engineer.', skills: ['Fix', 'Know', 'Notice'] },
  { value: 'thug', label: 'Thug', description: 'You were a violent criminal or strong-arm enforcer.', skills: ['Any Combat', 'Talk', 'Connect'] },
  { value: 'vagabond', label: 'Vagabond', description: 'You were a wanderer, living by your wits and your skills.', skills: ['Survive', 'Notice', 'Sneak'] },
  { value: 'worker', label: 'Worker', description: 'You were a skilled tradesman or industrial laborer.', skills: ['Work', 'Exert', 'Connect'] }
];

export const classes = [
  { value: 'warrior', label: 'Warrior', description: 'Warriors are masters of combat and physical conflict.', primeAttribute: 'Strength or Dexterity' },
  { value: 'expert', label: 'Expert', description: 'Experts are skilled professionals and capable generalists.', primeAttribute: 'Intelligence or Charisma' },
  { value: 'psychic', label: 'Psychic', description: 'Psychics are humans gifted with metadimensional powers.', primeAttribute: 'Wisdom' },
  { value: 'adventurer', label: 'Adventurer', description: 'Adventurers blend the abilities of other classes.', primeAttribute: 'Any two' },
];

export const skillTypes = {
  GENERAL: 'general',
  COMBAT: 'combat',
  PSYCHIC: 'psychic'
};

export const skillList = [
  { name: 'Administer', description: 'Manage organizations and bureaucracies', type: skillTypes.GENERAL },
  { name: 'Connect', description: 'Find people and build networks', type: skillTypes.GENERAL },
  { name: 'Exert', description: 'Perform feats of physical prowess', type: skillTypes.GENERAL },
  { name: 'Fix', description: 'Repair and modify technology', type: skillTypes.GENERAL },
  { name: 'Heal', description: 'Treat injuries and cure diseases', type: skillTypes.GENERAL },
  { name: 'Know', description: 'Education and general knowledge', type: skillTypes.GENERAL },
  { name: 'Lead', description: 'Guide and command others', type: skillTypes.GENERAL },
  { name: 'Notice', description: 'Spot hidden things and people', type: skillTypes.GENERAL },
  { name: 'Perform', description: 'Entertain and impress others', type: skillTypes.GENERAL },
  { name: 'Pilot', description: 'Fly spacecraft and drive vehicles', type: skillTypes.GENERAL },
  { name: 'Program', description: 'Create and alter computer software', type: skillTypes.GENERAL },
  { name: 'Punch', description: 'Unarmed combat skill', type: skillTypes.COMBAT },
  { name: 'Shoot', description: 'Ranged combat skill', type: skillTypes.COMBAT },
  { name: 'Sneak', description: 'Move quietly and remain hidden', type: skillTypes.GENERAL },
  { name: 'Stab', description: 'Melee combat skill', type: skillTypes.COMBAT },
  { name: 'Survive', description: 'Endure harsh environments', type: skillTypes.GENERAL },
  { name: 'Talk', description: 'Persuade and deceive others', type: skillTypes.GENERAL },
  { name: 'Trade', description: 'Buy and sell goods profitably', type: skillTypes.GENERAL },
  { name: 'Work', description: 'General labor and craftsmanship', type: skillTypes.GENERAL },
  { name: 'Biopsionics', description: 'Healing and bodily augmentation', type: skillTypes.PSYCHIC },
  { name: 'Metapsionics', description: 'Boosting and manipulating psionic powers', type: skillTypes.PSYCHIC },
  { name: 'Precognition', description: 'Seeing the future and reading probability', type: skillTypes.PSYCHIC },
  { name: 'Telekinesis', description: 'Moving objects at a distance', type: skillTypes.PSYCHIC },
  { name: 'Telepathy', description: 'Reading and influencing minds', type: skillTypes.PSYCHIC },
  { name: 'Teleportation', description: 'Transporting instantly across distances', type: skillTypes.PSYCHIC }
];

export const combatSkills = skillList.filter(skill => skill.type === skillTypes.COMBAT).map(skill => skill.name);
export const psychicSkills = skillList.filter(skill => skill.type === skillTypes.PSYCHIC).map(skill => skill.name);
export const allSkills = skillList.map(skill => skill.name);

export const specialSkillCategories = {
  ANY_COMBAT: 'Any Combat',
  ANY_PSYCHIC: 'Any Psychic',
  ANY_SKILL: 'Any Skill'
};

export const fociList = [
  {
    name: 'Alert',
    description: 'You\'re keenly aware of your surroundings and hard to surprise.',
    level1Benefit: 'Gain Notice as a bonus skill',
    level2Benefit: 'You always act in the first round of combat',
    skillImpact: { notice: 1 }
  },
  {
    name: 'Armsman',
    description: 'You\'re trained in the use of advanced military weapons.',
    level1Benefit: 'Gain any combat skill as a bonus',
    level2Benefit: 'You can use military-grade weapons without penalty',
    skillImpact: { anyCombat: 1 }
  },
  {
    name: 'Assassin',
    description: 'You\'re skilled at sudden, lethal attacks on unsuspecting victims.',
    level1Benefit: 'Gain Sneak as a bonus skill',
    level2Benefit: 'Your sneak attacks do maximum damage',
    skillImpact: { sneak: 1 }
  },
  {
    name: 'Authority',
    description: 'You\'re accustomed to being obeyed and respected.',
    level1Benefit: 'Gain Lead as a bonus skill',
    level2Benefit: 'Your followers are more loyal and effective',
    skillImpact: { lead: 1 }
  },
  {
    name: 'Connected',
    description: 'You have a wide range of useful contacts.',
    level1Benefit: 'Gain Connect as a bonus skill',
    level2Benefit: 'You can find helpful contacts in most places',
    skillImpact: { connect: 1 }
  },
  {
    name: 'Cyberninja',
    description: 'You\'re a master of stealth and electronic intrusion.',
    level1Benefit: 'Gain Program or Sneak as a bonus skill',
    level2Benefit: 'You can move silently at full speed',
    skillImpact: { program: 1, sneak: 1 }
  },
  {
    name: 'Diplomat',
    description: 'You\'re skilled at negotiation and smoothing over conflicts.',
    level1Benefit: 'Gain Talk as a bonus skill',
    level2Benefit: 'You can reroll 1s on reaction rolls',
    skillImpact: { talk: 1 }
  },
  {
    name: 'Gunslinger',
    description: 'You\'re exceptionally skilled with ranged weapons.',
    level1Benefit: 'Gain Shoot as a bonus skill',
    level2Benefit: 'You can shoot twice as an action',
    skillImpact: { shoot: 1 }
  },
  {
    name: 'Hacker',
    description: 'You\'re an expert at breaking computer security.',
    level1Benefit: 'Gain Program as a bonus skill',
    level2Benefit: 'You get an extra action in cybercombat',
    skillImpact: { program: 1 }
  },
  {
    name: 'Healer',
    description: 'You\'re exceptionally skilled at treating injuries and illness.',
    level1Benefit: 'Gain Heal as a bonus skill',
    level2Benefit: 'Your medical care restores additional hit points',
    skillImpact: { heal: 1 }
  },
  {
    name: 'Ironhide',
    description: 'You\'re exceptionally tough and resistant to damage.',
    level1Benefit: 'Gain Exert as a bonus skill',
    level2Benefit: 'You have natural armor',
    skillImpact: { exert: 1 }
  },
  {
    name: 'Polymath',
    description: 'You\'re a quick study in a wide range of skills.',
    level1Benefit: 'Gain any skill as a bonus',
    level2Benefit: 'You can use any skill as if you had level-0 training',
    skillImpact: { anySkill: 1 }
  },
  {
    name: 'Psychic Training',
    description: 'You have some degree of psychic ability.',
    level1Benefit: 'Gain any psychic skill as a bonus',
    level2Benefit: 'You can use psychic abilities more efficiently',
    skillImpact: { anyPsychic: 1 }
  },
  {
    name: 'Savage Fray',
    description: 'You\'re a whirlwind of destruction in melee combat.',
    level1Benefit: 'Gain Stab as a bonus skill',
    level2Benefit: 'You can attack all adjacent enemies as an action',
    skillImpact: { stab: 1 }
  },
  {
    name: 'Shocking Assault',
    description: 'Your attacks are terrifyingly swift and unexpected.',
    level1Benefit: 'Gain any combat skill as a bonus',
    level2Benefit: 'You get a free attack when you close to melee range',
    skillImpact: { anyCombat: 1 }
  },
  {
    name: 'Sniper',
    description: 'You\'re an expert at long-range marksmanship.',
    level1Benefit: 'Gain Shoot as a bonus skill',
    level2Benefit: 'Your ranged attacks ignore cover',
    skillImpact: { shoot: 1 }
  },
  {
    name: 'Star Captain',
    description: 'You\'re a gifted starship pilot and commander.',
    level1Benefit: 'Gain Lead or Pilot as a bonus skill',
    level2Benefit: 'You get a free round of ship actions at the start of combat',
    skillImpact: { lead: 1, pilot: 1 }
  },
  {
    name: 'Starfarer',
    description: 'You\'re experienced with many different alien cultures.',
    level1Benefit: 'Gain Connect or Talk as a bonus skill',
    level2Benefit: 'You can reroll reaction checks with aliens',
    skillImpact: { connect: 1, talk: 1 }
  },
  {
    name: 'Tinker',
    description: 'You\'re skilled at improvising and juryrigging equipment.',
    level1Benefit: 'Gain Fix as a bonus skill',
    level2Benefit: 'You can craft simple items very quickly',
    skillImpact: { fix: 1 }
  },
  {
    name: 'Unarmed Combatant',
    description: 'You\'re a master of hand-to-hand combat.',
    level1Benefit: 'Gain Punch as a bonus skill',
    level2Benefit: 'Your unarmed attacks do lethal damage',
    skillImpact: { punch: 1 }
  },
  {
    name: 'Wanderer',
    description: 'You\'re experienced at survival in hostile environments.',
    level1Benefit: 'Gain Survive as a bonus skill',
    level2Benefit: 'You can reroll survival checks',
    skillImpact: { survive: 1 }
  },
  {
    name: 'Wild Psychic Talent',
    description: 'You have a small but innate psychic ability.',
    level1Benefit: 'Gain any psychic skill as a bonus',
    level2Benefit: 'You can use a minor psychic ability at will',
    skillImpact: { anyPsychic: 1 }
  }
];

// You can add other character-related data here as needed