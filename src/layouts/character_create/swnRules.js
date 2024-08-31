export const characterCreationSummary = {
  title: "A Summary of Character Creation",
  introduction: `For your convenience, here's a quick summary of the
character creation process. Experienced players can
simply go down the list to generate their next interstellar freebooter, while those new to the game can use it as
a guide reference as they go through the steps detailed
on the following pages. A blank character sheet can be
found at the end of the book.

Note that some steps indicate that you should roll
or pick skills, as described on page 7. The first time you
roll or pick a skill, it starts at level-0. The second time,
it becomes level-1. The third time, you can instead pick
any other non-psychic skill of your choice that's less
than level-1. No novice hero's skills can exceed level-1
during character creation.`,
  steps: [
    {
      number: 1,
      description: `Roll your six attributes or assign them from an
array, using Strength, Dexterity, Constitution,
Intelligence, Wisdom, and Charisma. Attributes
reflect the basic potential of your hero. Roll 3d6
six times and assign them in order, or use an
array of 14, 12, 11, 10, 9, 7 assigned as you wish.
If you randomly roll your scores you may then
pick one attribute to change to a score of 14.`
    },
    {
      number: 2,
      description: `Mark down your attribute modifiers for each
score. When rolling dice that are affected by an
attribute, you don't apply the whole score; instead, you apply the attribute modifier. A score
of 3 is a -2, 4—7 is a -1, 8—13 is no modifier,
14—17 is +1, and 18 is +2.`
    },
    {
      number: 3,
      description: `Pick a background from the list on page 9, one
that most closely reflects your hero's past experiences. You gain the skill listed under the
background name at level-0, which equates to
an ordinary working knowledge of it.`
    },
    {
      number: 4,
      description: `Pick skills, you can choose two
more skills from the Learning table for your
background, with the exception of entries that
say "Any Skill", which you may not pick. You
cannot pick entries from the Growth table. If
you're not sure what to pick, just take the "Quick
Skills" listed for your background at level-0,
which include your background's beginning skill.`
    },
    {
      number: 6,
      description: `Choose your class, representing those talents
you have that are most relevant to an adventurer's lifestyle. If your hero isn't well-described
by Warrior, Expert, or Psychic, you can choose
Adventurer and mix your class abilities.`
    },
    {
      number: 7,
      description: `Choose your foci, representing the side talents
or particular specializations of your hero. You
can pick one level of a focus of your choice.
Characters with the Expert class or the Partial
Expert feature of the Adventurer class get one
level of a non-combat, non-psychic focus for
free in addition to this. They can spend both
levels on the same focus, starting with level 2
in it if they wish. Characters with the Warrior
class or Partial Warrior feature of the Adventurer class can do the same in choosing one level of
a combat focus.`
    },
    {
      number: 8,
      description: `Optionally, if your GM is allowing alien PCs or
VI or True AI PCs, you can make your character
into one such creature by spending your focus
level on the appropriate origin focus. Aliens and
VIs are described in the Xenobestiary chapter,
starting on page 192, while True AIs are part
of the deluxe Stars Without Number core book,
starting on page 280.`
    },
    {
      number: 9,
      description: `Now pick one non-psychic skill of your choice to
reflect your hero's outside interests, natural talents, hobby expertise, or other personal focus.`
    },
    {
      number: 10,
      description: `If you've chosen the Psychic class or chosen to be
an Adventurer with the Partial Psychic ability,
you are a psychic PC, with powers described
in the following section, starting on page 28.
Psychics can pick two psychic skills from those
listed on page 8, while Partial Psychics can pick
one. If a Psychic picks the same skill twice, they
get it at level-1 expertise, and can pick a free
level-1 technique from those listed for that discipline. Both Psychics and Partial Psychics get
the level-0 abilities associated with their skills,
as described under each discipline they possess.
Both also have a maximum Effort score equal to
1 plus their highest psychic skill plus the better of
their Wisdom or Constitution modifiers.`
    },
    {
      number: 11,
      description: `Roll your maximum hit points on 1d6, adding
your Constitution modifier. Even a penalty can't
reduce your hit points below 1. Warrior PCs
and Adventurers with the Partial Warrior class
option add 2 points to this total. Hit points indicate how close your hero is to being defeated.`
    },
    {
      number: 12,
      description: `Note down any base attack bonus you may have.
The higher the attack bonus, the easier it is for
your hero to land a telling blow or shot on a
hostile opponent. For most PCs, this bonus is
+0. If you are a Warrior or an Adventurer with
the Partial Warrior class option, it's +1.`
    },
    {
      number: 13,
      description: `Choose one of the equipment packages on page 25
or roll 2d6 x 100 to find out how many starting
credits you have with which to buy gear.`
    },
    {
      number: 14,
      description: `Mark down your total hit bonus with your weaponry. This is equal to your base attack bonus,
plus either your Punch, Stab, or Shoot skill depending on the kind of weapon it is, plus your
relevant attribute modifier. The weapon tables
starting on page 66 will tell you what attribute
is used for a particular weapon. If two attributes
are listed, use the best one for your hero. If you
haven't even got level-0 skill, take a -2 penalty.`
    },
    {
      number: 15,
      description: `Note down the damage done by your weapons.
This is equal to its base damage dice plus its attribute modifier. If it's a Punch weapon, you can
add your Punch skill as well.`
    },
    {
      number: 16,
      description: `Record your Armor Class, the measure of how
hard it is to hurt your hero in a fight. Different
suits of armor grant different Armor Classes; if
you aren't wearing any armor at all, your base
AC is 10. Add your Dexterity modifier to this. In
order to hurt your PC, an enemy has to roll an
attack roll on a d20, adding their attack bonus
and equaling or exceeding your Armor Class.`
    },
    {
      number: 17,
      description: `Note down your beginning saving throw scores
for your Physical, Evasion, and Mental saving
throws. Physical saves against poison, disease,
or exhaustion are 15 minus the best of your
Strength or Constitution modifiers. Evasion
saves to dodge sudden perils or dive away from
explosives are 15 minus the best of your Intelligence and Dexterity modifiers. Mental saves to
resist psychic influence or mind-bending technology are 15 minus the best of your Wisdom or
Charisma modifiers. To resist these perils, you
need to equal or beat the save on a d20.`
    },
    {
      number: 18,
      description: `Lastly, wrap up your PC with a name and a goal.
Every hero needs to have a goal when they set
out adventuring. This goal might change, but
your PC should always have some reason to go
out and interact with the world before them.
Stay-at-home PCs and those unwilling to dare
greatly for their aims are rarely fun to play.`
    }
  ]
};

// You can add more SWN rules or constants here as needed
