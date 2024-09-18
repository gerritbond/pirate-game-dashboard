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

export const skillTypes = {
  GENERAL: 'general',
  COMBAT: 'combat',
  PSYCHIC: 'psychic'
};

export const backgrounds = [
  { value: 'barbarian', label: 'Barbarian', description: 'You come from a world with a tech level of 0 or 1, or from the untamed hinterlands of a more advanced world.', skills: 'Survive' },
  { value: 'clergy', label: 'Clergy', description: 'You were a priest, nun, monk, or other religious functionary.', skills: 'Talk' },
  { value: 'courtesan', label: 'Courtesan', description: 'You were a companion of the wealthy and influential.', skills: 'Perform'},
  { value: 'criminal', label: 'Criminal', description: 'You were a thief, smuggler, fence, or other underworld figure.', skills: 'Sneak'},
  { value: 'dilettante', label: 'Dilettante', description: 'You were born to wealth and privilege and raised to move in high society.', skills: 'Connect' },
  { value: 'entertainer', label: 'Entertainer', description: 'You were a popular musician, actor, or other kind of public entertainer.', skills: 'Perform' },
  { value: 'merchant', label: 'Merchant', description: 'You were a trader in goods, whether a humble peddler or a wealthy importer.', skills: 'Trade' },
  { value: 'noble', label: 'Noble', description: 'You were born into the ruling class of your society.', skills: 'Lead' },
  { value: 'official', label: 'Official', description: 'You were a bureaucrat or functionary in some government.', skills: 'Administer' },
  { value: 'peasant', label: 'Peasant', description: 'You were a farmer, herder, or other common laborer.', skills: 'Exert' },
  { value: 'physician', label: 'Physician', description: 'You were a doctor, nurse, or other medical specialist.', skills: 'Heal' },
  { value: 'pilot', label: 'Pilot', description: 'You were a starship pilot or vehicle operator.', skills: 'Pilot' },
  { value: 'politician', label: 'Politician', description: 'You were an elected or appointed political figure.', skills: 'Talk' },
  { value: 'scholar', label: 'Scholar', description: 'You were an educated researcher or teacher.', skills: 'Know' },
  { value: 'soldier', label: 'Soldier', description: 'You were a military soldier or mercenary warrior.', skills: { type: skillTypes.COMBAT, options: ['Punch', 'Shoot', 'Stab'] } },
  { value: 'spacer', label: 'Spacer', description: 'You were a crew member aboard an interstellar starship.', skills: 'Fix' },
  { value: 'technician', label: 'Technician', description: 'You were a skilled technical specialist or mechanical engineer.', skills: 'Fix' },
  { value: 'thug', label: 'Thug', description: 'You were a violent criminal or strong-arm enforcer.', skills: { type: skillTypes.COMBAT, options: ['Punch', 'Shoot', 'Stab'] } },
  { value: 'vagabond', label: 'Vagabond', description: 'You were a wanderer, living by your wits and your skills.', skills: 'Survive' },
  { value: 'worker', label: 'Worker', description: 'You were a skilled tradesman or industrial laborer.', skills: 'Work' }
];

export const classes = [
  {
    value: 'warrior',
    label: 'Warrior',
    description: 'Warriors are masters of combat and physical conflict. They excel in all forms of warfare, able to use any weapon or armor. Their skills make them ideal for mercenaries, soldiers, and anyone who expects to face danger.',
    primeAttribute: ['Strength ', 'Dexterity'],
    uniqueMechanics: [
      'Base Attack Bonus: +1',
      'Hit Points: 1d6+2 per level',
      'Bonus Skill: Any combat skill at level-0',
      'Warrior\'s Luck: Once per scene, reroll a failed attack roll or saving throw'
    ],
    partialClassBenefits: [
      'Base Attack Bonus: +1',
      'Hit Points: +2 per level',
      'Bonus Skill: Any combat skill at level-0'
    ],
    hitPoints: {
      dice: '1d6',
      bonus: 2,
      description: '1d6+2 + Constitution modifier (minimum 1)'
    },
    attackBonus: {
      value: 'full',
      description: 'Equal to character level'
    },
    skillPoints: 2
  },
  {
    value: 'expert',
    label: 'Expert',
    description: 'Experts are skilled professionals and capable generalists. They have a wide range of skills and can become proficient in almost any non-combat and non-psychic ability. They make excellent technicians, pilots, and faces for a group.',
    primeAttribute: ['Intelligence ', 'Charisma'],
    uniqueMechanics: [
      'Skill Points: 4 per level',
      'Hit Points: 1d6 per level',
      'Quick Learner: Learn new non-combat, non-psychic skills faster',
      'Bonus Focus: Gain an additional non-combat, non-psychic focus'
    ],
    partialClassBenefits: [
      'Skill Points: +2 per level',
      'Quick Learner: Learn new non-combat, non-psychic skills faster'
    ],
    hitPoints: {
      dice: '1d6',
      bonus: 0,
      description: '1d6 + Constitution modifier (minimum 1)'
    },
    attackBonus: {
      value: 'half',
      description: 'Half character level, rounded down'
    },
    skillPoints: 4
  },
  {
    value: 'psychic',
    label: 'Psychic',
    description: 'Psychics are humans gifted with metadimensional powers. They can manipulate the world around them with their minds, performing feats that seem like magic to others. Their powers come at a cost, and overuse can be dangerous.',
    primeAttribute: ['Wisdom'],
    uniqueMechanics: [
      'Psychic Skills: Choose two psychic skills',
      'Hit Points: 1d6 per level',
      'Effort: Maximum Effort score equal to 1 + highest psychic skill + better of Wisdom or Constitution modifier',
      'Psychic Techniques: Access to powerful psychic abilities'
    ],
    partialClassBenefits: [
      'Psychic Skills: Choose one psychic skill',
      'Effort: Maximum Effort score equal to 1 + highest psychic skill + better of Wisdom or Constitution modifier'
    ],
    hitPoints: {
      dice: '1d6',
      bonus: 0,
      description: '1d6 + Constitution modifier (minimum 1)'
    },
    attackBonus: {
      value: 'half',
      description: 'Half character level, rounded down'
    },
    skillPoints: 2
  },
  {
    value: 'adventurer',
    label: 'Adventurer',
    description: 'Adventurers blend the abilities of other classes. They can choose two partial class abilities from Warrior, Expert, or Psychic, allowing for versatile character builds that can fill multiple roles in a group.',
    primeAttribute: ['Subclass dependent '],
    uniqueMechanics: [
      'Partial Classes: Choose two partial class benefits from Warrior, Expert, or Psychic',
      'Hit Points: 1d6 per level (1d6+2 if Partial Warrior is chosen)',
      'Skill Points: 3 per level (+1 if Partial Expert is chosen)',
      'Flexible: Can combine benefits from different classes'
    ],
    partialClassBenefits: 'Not applicable (Adventurer is a combination of partial classes)',
    hitPoints: {
      dice: '1d6',
      bonus: 0,
      description: '1d6 + Constitution modifier (minimum 1), +2 if Partial Warrior'
    },
    attackBonus: {
      value: 'half',
      description: 'Half character level, +1 at 1st and 5th level if Partial Warrior'
    },
    skillPoints: 3
  }
];


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

export const groupedSkills = {
  [skillTypes.GENERAL]: skillList.filter(skill => skill.type === skillTypes.GENERAL),
  [skillTypes.COMBAT]: skillList.filter(skill => skill.type === skillTypes.COMBAT),
  [skillTypes.PSYCHIC]: skillList.filter(skill => skill.type === skillTypes.PSYCHIC)
};

export const combatSkills = groupedSkills[skillTypes.COMBAT].map(skill => skill.name);
export const psychicSkills = groupedSkills[skillTypes.PSYCHIC].map(skill => skill.name);
export const nonPsychicSkills = [...groupedSkills[skillTypes.GENERAL], ...groupedSkills[skillTypes.COMBAT]].map(skill => skill.name);
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
    skills: { name: 'Notice', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Notice as a bonus skill']
      },
      {
        benefits: ['You always act in the first round of combat']
      }
    ]
  },
  {
    name: 'Armsman',
    description: 'You\'re trained in the use of advanced military weapons.',
    skills: { type: specialSkillCategories.ANY_COMBAT, levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain any combat skill as a bonus']
      },
      {
        benefits: ['You can use military-grade weapons without penalty']
      }
    ]
  },
  {
    name: 'Assassin',
    description: 'You\'re skilled at sudden, lethal attacks on unsuspecting victims.',
    skills: { name: 'Sneak', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Sneak as a bonus skill']
      },
      {
        benefits: ['Your sneak attacks do maximum damage']
      }
    ]
  },
  {
    name: 'Authority',
    description: 'You\'re accustomed to being obeyed and respected.',
    skills: { name: 'Lead', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Lead as a bonus skill']
      },
      {
        benefits: ['Your followers are more loyal and effective']
      }
    ]
  },
  {
    name: 'Connected',
    description: 'You have a wide range of useful contacts.',
    skills: { name: 'Connect', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Connect as a bonus skill']
      },
      {
        benefits: ['You can find helpful contacts in most places']
      }
    ]
  },
  {
    name: 'Cyberninja',
    description: 'You\'re a master of stealth and electronic intrusion.',
    skills: { options: ['Program', 'Sneak'], levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Program or Sneak as a bonus skill']
      },
      {
        benefits: ['You can move silently at full speed']
      }
    ]
  },
  {
    name: 'Diplomat',
    description: 'You\'re skilled at negotiation and smoothing over conflicts.',
    skills: { name: 'Talk', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Talk as a bonus skill']
      },
      {
        benefits: ['You can reroll 1s on reaction rolls']
      }
    ]
  },
  {
    name: 'Gunslinger',
    description: 'You\'re exceptionally skilled with ranged weapons.',
    skills: { name: 'Shoot', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Shoot as a bonus skill']
      },
      {
        benefits: ['You can shoot twice as an action']
      }
    ]
  },
  {
    name: 'Hacker',
    description: 'You\'re an expert at breaking computer security.',
    skills: { name: 'Program', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Program as a bonus skill']
      },
      {
        benefits: ['You get an extra action in cybercombat']
      }
    ]
  },
  {
    name: 'Healer',
    description: 'You\'re exceptionally skilled at treating injuries and illness.',
    skills: { name: 'Heal', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Heal as a bonus skill']
      },
      {
        benefits: ['Your medical care restores additional hit points']
      }
    ]
  },
  {
    name: 'Ironhide',
    description: 'You\'re exceptionally tough and resistant to damage.',
    skills: { name: 'Exert', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Exert as a bonus skill']
      },
      {
        benefits: ['You have natural armor']
      }
    ]
  },
  {
    name: 'Polymath',
    description: 'You\'re a quick study in a wide range of skills.',
    skills: { type: specialSkillCategories.ANY_SKILL, levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain any skill as a bonus']
      },
      {
        benefits: ['You can use any skill as if you had level-0 training']
      }
    ]
  },
  {
    name: 'Psychic Training',
    description: 'You have some degree of psychic ability.',
    skills: { type: specialSkillCategories.ANY_PSYCHIC, levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain any psychic skill as a bonus']
      },
      {
        benefits: ['You can use psychic abilities more efficiently']
      }
    ]
  },
  {
    name: 'Savage Fray',
    description: 'You\'re a whirlwind of destruction in melee combat.',
    skills: { name: 'Stab', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Stab as a bonus skill']
      },
      {
        benefits: ['You can attack all adjacent enemies as an action']
      }
    ]
  },
  {
    name: 'Shocking Assault',
    description: 'Your attacks are terrifyingly swift and unexpected.',
    skills: { type: specialSkillCategories.ANY_COMBAT, levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain any combat skill as a bonus']
      },
      {
        benefits: ['You get a free attack when you close to melee range']
      }
    ]
  },
  {
    name: 'Sniper',
    description: 'You\'re an expert at long-range marksmanship.',
    skills: { name: 'Shoot', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Shoot as a bonus skill']
      },
      {
        benefits: ['Your ranged attacks ignore cover']
      }
    ]
  },
  {
    name: 'Star Captain',
    description: 'You\'re a gifted starship pilot and commander.',
    skills: { options: ['Lead', 'Pilot'], levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Lead or Pilot as a bonus skill']
      },
      {
        benefits: ['You get a free round of ship actions at the start of combat']
      }
    ]
  },
  {
    name: 'Starfarer',
    description: 'You\'re experienced with many different alien cultures.',
    skills: { options: ['Connect', 'Talk'], levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Connect or Talk as a bonus skill']
      },
      {
        benefits: ['You can reroll reaction checks with aliens']
      }
    ]
  },
  {
    name: 'Tinker',
    description: 'You\'re skilled at improvising and juryrigging equipment.',
    skills: { name: 'Fix', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Fix as a bonus skill']
      },
      {
        benefits: ['You can craft simple items very quickly']
      }
    ]
  },
  {
    name: 'Unarmed Combatant',
    description: 'You\'re a master of hand-to-hand combat.',
    skills: { name: 'Punch', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Punch as a bonus skill']
      },
      {
        benefits: ['Your unarmed attacks do lethal damage']
      }
    ]
  },
  {
    name: 'Wanderer',
    description: 'You\'re experienced at survival in hostile environments.',
    skills: { name: 'Survive', levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain Survive as a bonus skill']
      },
      {
        benefits: ['You can reroll survival checks']
      }
    ]
  },
  {
    name: 'Wild Psychic Talent',
    description: 'You have a small but innate psychic ability.',
    skills: { type: specialSkillCategories.ANY_PSYCHIC, levelsAdded: 1 },
    levels: [
      {
        benefits: ['Gain any psychic skill as a bonus']
      },
      {
        benefits: ['You can use a minor psychic ability at will']
      }
    ]
  }
];

// You can add other character-related data here as needed