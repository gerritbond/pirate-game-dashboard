# Character Creation Plan for Stars Without Number

## Overall Goals
1. Faithfully implement SWN character creation rules
2. Create an intuitive and user-friendly interface
3. Ensure flexibility for future expansions or rule changes
4. Implement all core character options and mechanics
5. Include engaging elements to enhance user experience

## Page Structure and Key Functionality

1. Character Basics

   a. Name
      - Input field for manual entry
      - Randomization button
      - Fun feature: All randomized names rhyme with "Jerry"
      - Validation: Prevent special characters, set reasonable length limits
      - Optional: Tooltip showing name meaning or origin

   b. Pronouns
      - Dropdown selection
      - Options: He/Him, She/Her, They/Them, Any/Any, Prefer not to say, Other
      - Default: not selected
      - If "Other" is selected, a text field appears for custom entry

   b. Character Portrait
      - Image upload functionality
      - Supported formats: JPEG, PNG
      - Size limit: 5MB
      - Default placeholder image
      - Future considerations: AI-generated portrait based on character traits, basic image editing (crop, rotate, adjust brightness/contrast)

   c. Background
      - Dropdown selection
      - Display description and skill impact in dropdown
      - Key functionality: Auto-update free skills
      - SWN rule: 18 predefined backgrounds
      - Each background includes:
        * Short description
        * List of free skills per SWN
        * Any special abilities or modifiers per SWN

   d. Class
      - Card selection
      - Options: Warrior, Expert, Psychic, Adventurer
      - Display class description and prime attributes on card
      - Thematic card color for each class
      - Key functionality: Update skill points and available options
      - Special handling for Adventurer:
        * Two partial class selections
        * Dynamic adjustment of abilities and skill points
      - SWN rule: Class determines hit dice, skill points, and special abilities

   e. Homeworld
      - Dropdown or radio button selection
      - Options: Primitive/Lost Colony, Settled Space, Advanced Society
      - Optional: Generate basic homeworld details (name, tech level, etc.)

f. Personality and Flavor

      i. Quirks
         - Dropdown or random generation button
         - SWN-inspired options:
           * Always carries a lucky charm
           * Speaks in rhyme when nervous
           * Collects alien artifacts
         - Fun additions:
           * Allergic to artificial gravity
           * Can only sleep while standing up
           * Believes they're secretly a robot
         - Allow custom entry
         - Optional: Multiple quirks (up to 3)

      ii. Goals
         - Short-term and long-term goal fields
         - Suggested options based on background and class
         - SWN-inspired examples:
           * Find lost family starship
           * Establish a trade empire
           * Unlock ancient alien technology
         - Fun additions:
           * Open the best space taco stand in the sector
           * Collect a pet from every known planet
           * Become the galaxy's greatest disco dancer

      iii. Fears
         - Dropdown or text entry
         - SWN-themed options:
           * Alien mind control
           * Void madness
           * Hostile AI takeover
         - Fun additions:
           * Space chickens
           * Malfunctioning gravity boots
           * Accidentally time-traveling to before coffee was invented

      iv. Catchphrase
         - Text entry field
         - Random generation button with options like:
           * "By the void!"
           * "Stars and atoms!"
           * "Well, slap me with a space squid!"

      v. Favorite Space Food
         - Text entry or dropdown
         - Fun options:
           * Dehydrated ice cream
           * Quantum-entangled spaghetti
           * Photosynthesis pills
           * Asteroid-aged cheese

   f. Key Interactions
      - Background selection affects free skills and starting credits
      - Class selection impacts skill points, hit points, available foci, and psionic abilities

   g. UI Considerations
      - Collapsible sections for each part (name, portrait, background, class, homeworld)
      - Tooltips or info modals for detailed descriptions
      - Visual indicators for selected options
      - Real-time updates to character summary based on selections
      - Collapsible "Personality and Flavor" section
      - Option to randomly generate all personality traits
      - Visual representation of quirks (icons or small illustrations)

2. Attributes
   a. Rolling
      - 3d6 and 4d6 drop lowest options
      - Re-roll button
      - Fun feature: Teasing messages for multiple re-rolls
   b. Assignment
      - Drag-and-drop interface
      - Display score and modifier for each attribute
      - Key functionality: Auto-calculate modifiers
   c. Modifiers
      - Real-time calculation and display
      - SWN rule: Modifier = (Attribute - 10) / 2, rounded down

4. Foci

   a. Foci List
      - Display all available foci with descriptions
      - Each focus includes:
        * Name and short description
        * Level 1 benefit
        * Level 2 benefit (for future character advancement)
        * Any skill or attribute requirements
      - Categorize foci (e.g., Combat, Technical, Social) for easier navigation

   b. Foci Selection
      - Allow selection based on class (2 for Warriors, 1 for others)
      - Interface for choosing foci:
        * Card-based layout with expandable details
        * Search/filter functionality
        * "Random" option for quick selection
      - Highlight foci that match character's high attributes or skills

   c. Foci Effects
      - Update character sheet in real-time based on selected foci
      - Apply skill bonuses or new abilities immediately
      - Display chosen foci prominently in character summary

   d. Key Interactions
      - Class determines number of available foci
      - Some foci may require minimum attribute scores or skill levels
      - Foci can grant additional skill levels, potentially exceeding normal limits
      - Certain foci may unlock special abilities or equipment options

   e. UI Considerations
      - Collapsible foci categories
      - Tooltip explanations for each focus
      - Visual indicator for selected foci
      - Confirmation prompt when selecting foci with prerequisites not met
      - Option to "favorite" foci for future level-ups

   f. Fun Features
      - Visual representation of focus benefits (e.g., small icons for skills or abilities gained)

   g. SWN-Specific Rules to Implement
      - Warriors start with 2 foci, all other classes start with 1
      - Some foci may be restricted to certain classes or backgrounds
      - Foci benefits stack with other character abilities
      - Implement any special rules for specific foci (e.g., "Psychic Training" for non-Psychic classes)

   h. Future Considerations
      - System for adding new foci from expansions or homebrew content


4. Skills

   a. Skill List
      - Display all available skills with descriptions
      - SWN core skills:
        * Administer, Connect, Exert, Fix, Heal, Know, Lead, Notice, Perform,
          Pilot, Program, Punch, Shoot, Sneak, Survive, Talk, Trade, Work
      - Each skill includes:
        * Short description
        * Related attribute(s)
        * Common use cases
      - Categorize skills (e.g., Combat, Technical, Social) for easier navigation
      - Highlight free skills from background

   b. Skill Points
      - Calculate total based on class and Intelligence modifier
      - Display formula: Base points (by class) + Int modifier
      - Show remaining points to allocate
      - SWN rule: Minimum of 1 skill point regardless of Int modifier

   c. Skill Allocation
      - Interface for adding/removing skill points
      - +/- buttons for each skill
      - Quick-set buttons for level-0 and level-1
      - Visual indicator for free skills from background (auto-set to level-0)
      - Key functionality: 
        * Prevent exceeding level-1 at character creation
        * Enforce minimum of level-0 for free background skills
      - Real-time update of remaining skill points

   d. Skill Bonuses
      - Display total bonus for each skill
      - Show breakdown: Skill level + related attribute modifier
      - Update in real-time as attributes or skill levels change

   e. Psychic Skills (for Psychic and partial Psychic characters)
      - Separate section for psychic skills
      - Include all psychic disciplines: Biopsionics, Metapsionics, Precognition,
        Telekinesis, Telepathy, Teleportation
      - SWN rule: First two psychic skills are free for full Psychics

   f. Key Interactions
      - Background selection auto-sets free skills
      - Class selection determines base skill points
      - Intelligence modifier affects total skill points
      - Foci selections may grant additional skill levels or bonuses

   g. UI Considerations
      - Collapsible skill categories
      - Search/filter function for skills
      - Tooltip explanations for each skill
      - Color-coding for different skill levels (0, 1)
      - Visual distinction for free background skills
      - Real-time character summary update as skills are allocated

   h. Fun Features
      - "Skill Roulette" button to randomly allocate remaining skill points

   i. SWN-Specific Rules to Implement
      - Maximum skill level of 1 at character creation
      - Partial class (Adventurer) skill point calculation
      - Psychic skills for Psychic and partial Psychic characters

5. Hit Points and Saving Throws

 a. Hit Points
      - Calculate base HP based on class:
        * Warrior: 1d6+2
        * Expert: 1d6
        * Psychic: 1d6-1 (minimum 1)
        * Adventurer: Higher of the two partial class hit dice
      - Add Constitution modifier to base HP
      - Display total HP and calculation breakdown
      - Key functionality: Auto-recalculate when Constitution or class changes

   b. Saving Throws
      - Calculate four types of saves:
        * Physical: 15 - (level / 2) - better of STR or CON mod
        * Evasion: 15 - (level / 2) - better of DEX or INT mod
        * Mental: 15 - (level / 2) - better of WIS or CHA mod
        * Luck: 15 - (level / 2) - no attribute modifier
      - Add +1 to all saves at 1st level
      - Display each save value with calculation breakdown
      - Key functionality: Auto-update when relevant attributes change

   c. UI Considerations
      - Visual representation of hit points (e.g., health bar or dice icons)
      - Color-coding for different types of saving throws
      - Tooltips explaining each saving throw and common usage
      - Collapsible detailed view showing full calculations

   d. Key Interactions
      - Class selection affects base hit points
      - Constitution modifier impacts hit points
      - Multiple attributes can affect each saving throw
      - Certain foci or background elements might modify HP or saves

   e. Fun Features
      - "Toughness Tester" - a fun animation/minigame when rolling for initial HP
      - "Save Simulator" - allow users to test their saves against sample challenges
      - Quirky descriptions for critical successes/failures on saving throws
   
   f. SWN-Specific Rules to Implement
      - Minimum of 1 hit point at first level, regardless of Constitution modifier
      - Saving throw target numbers decrease as character level increases
      - +1 bonus to all saves at 1st level
      - Implement any class-specific bonuses to saves (e.g., Warrior's physical save bonus)

   g. Future Considerations
      - System for tracking temporary HP or save bonuses
      - Integration with a combat simulator for testing character durability
      - Options for alternative HP systems (e.g., Heroic Characters rules)

6. Psionics (for Psychic and partial Psychic characters)

   a. Psionic Disciplines
      - Display all six psionic disciplines:
        * Biopsionics, Metapsionics, Precognition, Telekinesis, Telepathy, Teleportation
      - Each discipline includes:
        * Short description
        * List of available techniques (core and auxiliary)
      - Allow selection of disciplines based on class:
        * Full Psychics: Start with any two disciplines at level-0
        * Partial Psychics (Adventurers): Start with one discipline at level-0

   b. Psionic Techniques
      - Display techniques for chosen disciplines
      - Categorize into core and auxiliary techniques
      - Each technique includes:
        * Name and short description
        * Activation cost (Psi Points)
        * Effect summary
      - At character creation, no techniques are selected (they're gained at level-2)

   c. Psionic Effort Score
      - Calculate based on class level and Wisdom modifier
      - Formula: (Level + 1) / 2, rounded up, plus Wisdom modifier (minimum 1)
      - Display total Effort score and calculation breakdown
      - Key functionality: Auto-recalculate when Wisdom changes

   d. Psi Points
      - Equal to Effort score at 1st level
      - Display current and maximum Psi Points

   e. UI Considerations
      - Collapsible sections for each psionic discipline
      - Visual distinction between core and auxiliary techniques
      - Tooltip explanations for psionic terms and concepts
      - Psi Point tracker with visual representation (e.g., energy bar)

   f. Key Interactions
      - Class selection determines availability of psionic abilities
      - Wisdom score affects Effort and Psi Points
      - Psionic disciplines may influence skill choices or bonuses

   g. SWN-Specific Rules to Implement
      - Psychics start with 2 disciplines at level-0, Partial Psychics with 1
      - No techniques are available at 1st level (gained at level-2)
      - Effort score calculation and its impact on Psi Points
      - Restrictions on combining certain psionic techniques

   h. Future Considerations
      - System for learning new techniques as character advances
      - Interface for managing Psi Points during gameplay
      - Integration with a "psionic combat" simulator
      - Options for expanded psionic rules from supplementary content
      - Animated visual effects for each psionic discipline (e.g., swirling energy for Telekinesis)
      - "Psychic Forecast" - random daily psionic effect or premonition

7. Equipment

   a. Starting Credits
      - Calculate based on rolling 2d6 x 100 credits
      - Display total starting credits

   b. Class Package
      - Offer pre-selected equipment package based on character class
      - Each package includes:
        * Weapons appropriate for the class
        * Armor (if applicable)
        * Basic gear (compad, lazarus patch, etc.)
      - Allow user to accept package or customize

   c. Individual Equipment Selection
      - Categorized equipment lists:
        * Weapons (melee, ranged, heavy)
        * Armor
        * Communication devices
        * Medical equipment
        * Tools and miscellaneous gear
        * Vehicles (if applicable)
      - Each item includes:
        * Name and short description
        * Cost in credits
        * Encumbrance (if applicable)
      - Filter options by category and affordability

   d. Encumbrance System
      - Track Readied items (max = Strength/2, rounded up)
      - Track Stowed items (max = Strength score)
      - Display current and maximum encumbrance
      - Highlight when approaching or exceeding limits

   e. Credit Balance
      - Real-time update of remaining credits as items are selected
      - Prevent selection of items exceeding credit balance

   f. UI Considerations
      - Drag-and-drop interface for equipment selection
      - Collapsible categories for easy navigation
      - Search function for quick item lookup
      - Tooltips for detailed item information
      - Visual indicators for equipped items vs inventory

   g. Key Interactions
      - Class influences suggested equipment package
      - Strength score determines encumbrance limit
      - Certain foci may grant additional starting equipment

   h. SWN-Specific Rules to Implement
      - Implement Readied/Stowed item distinction
      - Include any class-specific equipment bonuses or restrictions
      - Ensure adherence to SWN's equipment list and pricing

   i. Future Considerations
      - System for upgrading or modifying equipment
      - Integration with a "shop" interface for future purchases
      - Options for alternative encumbrance systems (e.g., slot-based)
      - Support for custom/homebrew equipment

## UI Implementation Strategy

1. Single-Page Layout
   - Implement all sections on one page
   - Use collapsible sections or tabs for organization

2. Progressive Disclosure
   - Start with Character Basics visible
   - Reveal subsequent sections as user progresses

3. Smart Defaults and Auto-Calculations
   - Pre-fill fields based on earlier choices
   - Real-time calculation of derived statistics

4. Contextual Help
   - Implement tooltips for quick information
   - Add collapsible sidebar for detailed explanations

5. Visual Hierarchy
   - Use color, size, and positioning to guide users
   - Highlight important information and actions

6. Responsive Design
   - Ensure compatibility with desktop and mobile devices
   - Use flexible grid system for content reorganization

7. Real-Time Feedback
   - Implement live character summary
   - Provide immediate validation on user inputs

8. Efficient Input Methods
   - Use appropriate input types for different data
   - Implement quick adjust options (e.g., +/- buttons)

9. Streamlined Workflows
   - Group related inputs
   - Allow quick adjustments without disrupting flow

10. Optional Complexity
    - Hide advanced options behind toggles
    - Provide "Quick Create" option for faster experience

## Key Interactions to Implement
1. Background selection affects free skills
2. Class selection impacts:
   - Available skills and skill points
   - Hit points calculation
   - Number of available foci
   - Psionic abilities (for Psychic and partial Psychic)
3. Attribute scores affect:
   - Skill point calculation (Intelligence)
   - Hit points (Constitution)
   - Saving throws
   - Psionic Effort (Wisdom for Psychics)
4. Foci selection may grant additional skills or abilities
5. Psychic disciplines determine available techniques

## Data Management
1. Use React state for managing character data during creation
2. Implement save/load functionality (local storage or backend integration)
3. Validate all character choices against SWN rules
4. Provide warning for suboptimal choices without preventing them

## Future Considerations
1. Integration with a backend for data persistence
2. Expansion to include additional sourcebook content
3. Character sheet generation and export functionality
4. Support for house rules or custom content
5. Integration with virtual tabletop systems