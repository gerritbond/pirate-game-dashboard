export const sampleCharacter = {
  id: 1,
  name: "Lux Czerka",
  biography: {
    age: 23,
    goals: {
      primary:
        "Become successful to spite family for cutting her off from the business failure that may or may not be her fault.",
      current: "",
    },
    background: {
      type: "Dilettante",
      description:
        "Scion of a weawlthy family who was recently cut off after the embarassing public failure of her first business venture.",
    },
    homeworld: "",
    employer: {
      name: "Czerka Corporation",
      status: "Fired",
      payRate: 0,
    },
    species: "Human",
    achievements: [
      {
        year: 3458,
        description: "Joined a pirate collective with crew",
      },
    ],
    aliases: [],
    contacts: [],
    allies: [],
    languages: ["Common"],
  },
  possessions: {
    equipment: {
      backpack: [
        {
          id: 1,
          name: "Lazarus Patch",
          type: "Device",
          description:
            "A vital tool for adventurers, the lazarus patch is a heavy compress laced with antibiotics, coagulants, system stabilizers, plasma, and a one-shot diagnostic suite. If the patch is applied to a character that has fallen to 0 hit points, the user can make an Int/Heal or Dex/Heal skill check against difficulty 6 to stabilize the subject. The more time between injury and application, the less chance the patch has to work. Each round after the first, an additional -1 penalty is applied to the skill check. The patch is no use after six rounds. If the medic fails the first skill check, they can keep trying the check once per round until the victim is revived or time runs out. Lazarus patches are no use on victims that have died of disease, poison, or have been mangled beyond surgical repair by Heavy weapons or similar trauma. Only one patch can be applied to a victim. Revived victims are critically wounded until sufficient medical help has been tendered; see the Systems chapter for details.",
        },
        {
          id: 2,
          name: "Secure Clothing",
          description: "",
          type: "Armour",
          armourClass: 13,
        },
        {
          id: 3,
          name: "Monoblade Sword",
          description: "",
          type: "Weapon",
          range: {
            type: "Melee",
            distance: 5,
          },
          roll: [
            {
              type: "d8",
              count: 1,
              modifier: 1,
            },
          ],
        },
        {
          id: 3,
          name: "RGB Sword",
          description: "",
          type: "Weapon",
          range: {
            type: "Melee",
            distance: 5,
          },
          roll: [
            {
              type: "d10",
              count: 1,
              modifier: 1,
            },
          ],
        },
      ],
      nonEncumbering: [],
      storage: [
        {
          id: 1,
          name: "Doritos",
          type: "Misc",
          description: "Nacho Cheese",
          on: {
            type: "Ship",
            registry: "XNT-831",
          },
        },
      ],
      equipped: [
        {
          id: 1,
          name: "Armoured Undersuit",
          description: "",
          type: "Armour",
          armourClass: 15,
        },
        {
          id: 2,
          name: "Thermal Knife",
          description: "",
          type: "Weapon",
          range: {
            type: "Melee",
            distance: 5,
          },
          roll: [
            {
              type: "d6",
              count: 1,
              modifier: 0,
            },
          ],
        },
        {
          id: 3,
          name: "Compad",
          type: "Device",
        },
      ],
    },
    assets: [],
    currency: {
      inSystems: [
        {
          id: 1,
          systemId: 1,
          name: "Asteroid Vault",
          amount: 150000000,
        },
      ],
      onVessel: [
        {
          id: 1,
          vesselRegistry: "XNT-831",
          amount: 100,
        },
      ],
      onHand: 50,
      debts: [],
    },
  },
  stats: {
    class: {
      name: "Psychic / Warrior",
      description: "Fancy Psychic Academy",
    },
    level: 5,
    attributes: {
      strength: 14,
      dexterity: 8,
      constitution: 9,
      intelligence: 9,
      wisdom: 14,
      charisma: 11,
    },
    hitpoints: {
      current: 16,
      maximum: 27,
    },
    foci: [
      {
        id: 1,
        name: "Savage Fray",
        level: 2,
        description:
          "When you attempt a frenzied attack, you can opt to use the Savage Fray maneuver. To do this, you must make a successful attack roll. If the attack hits, you deal your normal damage, but you can then choose to reduce your damage by 1d6 to gain an extra attack against the same opponent.",
      },
      {
        id: 2,
        name: "Shocking Assault",
        level: 1,
        description:
          "When you launch a Shocking Assault, you can make a single attack roll with a +2 bonus to hit. If the attack is successful, you deal damage normally, and the target must make a Will save (Difficulty 12) or be stunned for 1d6 rounds.",
      },
      {
        id: 3,
        name: "Psychic Training",
        level: 1,
        description:
          "Characters with this background have undergone specialized training that allows them to tap into and control psychic powers. This training grants them the ability to select one psychic discipline, and they can use the associated psychic powers as described in the game’s psychic rules.",
      },
    ],
    psionics: {
      effort: {
        current: 4,
        max: 5,
      },
      abilities: [
        {
          id: 1,
          name: "Personal Apportation",
          description: "",
        },
        {
          id: 2,
          name: "Proficient Apportation",
          description: "Teleport as move",
        },
        {
          id: 3,
          name: "Burdened Apportation",
          description: "Carry up to 6 companions",
        },
        {
          id: 4,
          name: "Stutterjump",
          description:
            "Commit Effort for 20AC Armour + Can negate hit after damage",
        },
        {
          id: 5,
          name: "Telepathic Contact",
          description:
            "Observe emotional states in a target + understand motive",
        },
        {
          id: 6,
          name: "Transmit Thought",
          description: "Send thoughts and images over a Telepathic Contact",
        },
      ],
    },
    skillPoints: 0,
    skills: [
      {
        id: 1,
        name: "Connect",
        level: 0,
      },
      {
        id: 2,
        name: "Know",
        level: 1,
      },
      {
        id: 3,
        name: "Punch",
        level: 0,
      },
      {
        id: 4,
        name: "Stab",
        level: 1,
      },
      {
        id: 5,
        name: "Talk",
        level: 0,
      },
      {
        id: 6,
        name: "Telepathy",
        level: 1,
      },
      {
        id: 7,
        name: "Teleportation",
        level: 3,
      },
    ],
  },
};
