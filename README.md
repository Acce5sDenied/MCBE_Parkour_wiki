# MCBE_Parkour_wiki

![MCBEPK_wiki_banner](https://github.com/Acce5sDenied/MCBE_Parkour_wiki/blob/main/Images/MCBEPK_wiki_banner.png)

A wiki for documenting Minecraft Bedrock Edition movement mechanics. As of game version `1.21.12x`

Pre-pre-alpha stage, I don't want the language to be TOO formal.

uhmm

#### TODO
+ block hitboxes
+ numbers
+ player control
+ bedrock mechanics
+ more

## Resources
+ Visit [**MCPK wiki**](https://www.mcpk.wiki/wiki/Main_Page) for java parkour documentation.
+ Visit [**ZPK 2**](https://github.com/mihiro13/ZPK_2) repo for parkour addon. Like MPK.

## Player control
There are 2 major ways the player can move.
#### Button controls
WASD button controls. Double tap sprint//todo, Hold space//todo
#### Joystick controls
All direction movement controls.//todo, 11 strafe documentation(patched in 1.21.20)//todo

-----
### Mouse movement
//todo

## Collision Boxes
List of collision box for all blocks. For effect box for blocks like cobweb, please see the block mechanics section. //havent added anything there

Not to be confused with **hitboxes**. This is **collision boxes**. While hitbox is accurately described by the ingame block selection system, it can also accurately describe the block's collision box. But not for all the blocks. For example: caudron.
### Simple collision boxes
|Blocks                                 |Widths              |Heights    |Comments                                                          |
|---------------------------------------|--------------------|-----------|------------------------------------------------------------------|
|Full Blocks                            |1×1                 |1          |                                                                  |
|Farmland & Dirt Path                   |1×1                 |0.9375     |                                                                  |
|Lectern                                |1×1                 |0.9        |                                                                  |
|Soulsand & Mud                         |1×1                 |0.875      |                                                                  |
|End Portal Frame                       |1×1                 |0.8125     |Adding eye does not change anything.                              |
|Enchanting Table                       |1×1                 |0.75       |                                                                  |
|Stonecutter & Beds                     |1×1                 |0.5625     |                                                                  |
|Slabs                                  |1×1                 |0.5        |Inversible.                                                       |
|Campfires                              |1×1                 |0.4375     |                                                                  |
|Daylight Detector                      |1×1                 |0.375      |                                                                  |
|Trapdoors                              |1×1                 |0.1825     |Orientable on all sides. Inversible.                              |
|Redstone Repeater & Comparator         |1×1                 |0.125      |                                                                  |
|Carpets                                |1×1                 |0.0625     |                                                                  |
|Shelves                                |1×0.3125            |1          |Orientable. (4 varients)                                          |
|Ladder                                 |1×0.1875            |1          |Orientable. (4 varients)                                          |
|Doors                                  |1×0.1825            |1          |Orientable. (4 varients) Flippable.                               |
|Chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.              |
|Decorated Pot & Cactus & Honey Block   |0.875×0.875         |1          |Like egg on Java, centered.                                       |
|Cake                                   |0.875×0.875         |0.5        |Centered.                                                         |
|Lilypad                                |0.875×0.875         |0.09375    |Centered.                                                         |
|Anvil                                  |0.75×1              |1          |Orientable on horizontal.(2 varients)                             |
|Sniffer Egg                            |0.75×0.875          |1          |Longer side always extend on X axis.                              |
|Grindstone                             |0.75×0.75           |1          |Centered. Orientable on all sides.                                |
|Chorus Stem                            |0.75×0.75           |0.875      |Centered.                                                         |
|Copper Golem Statues                   |0.625×0.625         |0.875      |Centered.                                                         |
|Dried Ghast                            |0.625×0.625         |0.625      |Centered.                                                         |
|Amethyst Cluster                       |0.625×0.625         |0.4375     |Centered. Can be placed on all sides.                             |
|Large Amethyst Bud                     |0.625×0.625         |0.3125     |Centered. Can be placed on all sides.                             |
|Medium Amethyst Bud                    |0.625×0.625         |0.25       |Centered. Can be placed on all sides.                             |
|Bell(ground)                           |0.5×1               |0.8125     |Orientable on horizontal.(2 varients)                             |
|Walls                                  |0.5×0.5             |1.5        |Centered.                                                         |
|Big Cocoa Bean                         |0.5×0.5             |0.5625     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.1875  |
|Conduit & Heavy Core & Heads(ground)   |0.5×0.5             |0.5        |Centered.                                                         |
|Heads(wall)                            |0.5×0.5             |0.5        |Centered. Orientable.(4 varients)                                 |
|Small Amethyst Bud                     |0.5×0.5             |0.1875     |Centered. Can be placed on all sides.                             |
|Pane(1-sided)                          |0.5×0.125           |1          |Orientable.(4 varients)                                           |
|Thin wall(2-sided)                     |0.375×1             |1.5        |Orientable on horizontal.(2 varients)                             |
|Lanterns(ground)                       |0.375×0.375         |0.5        |Centered.                                                         |
|Lanterns(hanging)                      |0.375×0.375         |0.5        |Top:.625 Bottom:.125                                              |
|Flower Pot & 4 Candles                 |0.375×0.375         |0.375      |Centered.                                                         |
|Fence Gate                             |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |
|Hanging Signs                          |0.25×1              |0.125      |Only the handle(?) part has collision. Orientable.(2 varients)    |
|Fences                                 |0.25×0.25           |1.5        |Centered.                                                         |
|End Rod & Lightning Rods               |0.25×0.25           |1          |Centered. Can be placed on all sides.                             |
|Chains                                 |0.1875×0.1875       |1          |Centered. Can be placed on all sides.                             |
|Panes & Bars                           |0.125×0.125         |1          |Centered.                                                         |
|Bamboo                                 |0.125×0.125         |1          |NOT centered. Collision box have random offset from center.       |
|Singular Candle                        |0.125×0.125         |0.375      |Centered.                                                         |

|to-add        |
|--------------|
|dripstones    |
|23candles     |
|ALL THE FENCES WALLS PANES VARIENTS😭|
|stairs        |
|brewing stand |
|candled cake  |
|cake slices   |
|snow layers   |
|caudron composter|
|hopper        |
|turtle eggs   |
|cocoas        |
|dripleaf      |
|piston arm    |


### Composite collision boxes
//todo

### Other collision boxes
boat, shulker as mob and block//todo

## Movement mechanics
//todo
+ Y -> X -> Z collision order
+ Stepping stuff, same as Java?
+ 16 b/t absolute speed cap(pythagoras of 3 axes) if over 16, your velocity on 3 axes will be scaled down with equal proportion so that absolute velocity = 16.
#### player's collision block
Note that some inaccuracy can happen due to floating point imprecision.
+ Normally is 0.6×0.6 horizontally and 1.8 vertically.
+ While crouched is 0.6×0.6 horizontally and 1.49 vertically.
+ While crawling or swimming or flying with elytra is 0.6×0.6 horizontally and 0.6 vertically.

## Glitches
+ Hitbox manipulation [**Link**](https://youtu.be/WKW3vyy5yH8) (very effective because bedrock use floats)
### Non-Advantagious Glitches
+ Player never stopping in place, coords flickering.(i'll add vid soon dw)
+ More flickering stuff.
+ Mega rubberbanding.

## Bedrock differences
+ Strafing don't give the 2% boost in acceleration. (ofc) same goes for strafe shifting.
+ No presence of inertia AKA momentum threshold.
+ Position is stored in floats. This explains many goofy glitches on bedrock.
+ No presence of bursting or shift glitch.
+ Shifting would only goes to 0.025 off edge. This means rankupping in bedrock sucks!!
+ No air sprint delay. (= java 1.19.4 and +)
+ Sprint would cancel after touching a wall BUT only if `inward velocity > a certain number` This number is yet to be defined through my testing.
+ Sprint deactivation is partially determined server-side.
+ Have all-direction joystick controls.
+ You have 16 b/t absolute speed cap.(Yes, I did use a tnt cannon to test)

## Numbers
I did not look at the code, I got these by testing.//todo
### Base values
the formulas should be the same as java's
+ shifted acceleration: `0.294`
+ walk acceleration: `0.98`
+ sprint acceleration: `1.274`
+ sprint jump acceleration towards facing: `0.2`?
+ ground slipperiness: `0.6`
+ airborne slipperiness: `0.0`
+ motion conserved to next tick: `0.91`
+ jump vertical acceleration: `0.42`
+ vertical drag: `0.98`
+ gravity acceleration: `0.08`
### Pre-calculated values
#### Grounded
`0.1x` acceleration.
+ horizontal drag: `0.546`
+ shifted acceleration: `0.0294`
+ walk acceleration: `0.098`
+ sprint acceleration: `0.1274`
#### Airborne
`0.02x` acceleration.
+ horizontal drag: `0.91`
+ shifted accerelation: `0.00588`
+ walk acceleration: `0.0196`
+ sprint acceleration: `0.02548`
#### Flying
`0.05x` acceleration.//todo
+ horizontal drag while accelerating: `0.91`
+ horizontal drag while not accelerating: ?
+ shifted accerelation: `[incompatible]`
+ walk acceleration: `0.049`
+ sprint acceleration: ?
#### Blocking
This includes eating or drinking, charging weapons, using goat horn or spyglass.
`81+(2/3)` less acceleration or `~0.0122449x` acceleration.
+ shifted accerelation: `0.0036`
+ walk acceleration: `0.012`
+ sprint acceleration: `0.0156`
#### Shield Blocking
Different behavior to normal blocking, No effect on movement

## Block Mechanics
//todo
#### Soulsand
#### Honey block
#### Slime block
#### Ices
#### Catch/Climb type blocks
#### Water
#### Lava
#### Cobweb
#### Powdered Snow
#### Sweet Berry Bush
#### Scaffolding
different behavior to normal climb blocks

## Status effects
Status effects that directly effect movement.//todo
#### Speed
#### Slowness
#### Jump boost
#### Slow falling
#### Levitation
### Swift Sneak Enchant

## Taps setups
Did not test ingame. I mothballed these, so don't take them as 100%.
|tap names                 |distance given        |
|--------------------------|----------------------|
|walk                      |0.21585904            |
|shifted                   |0.06475772            |
|sprint                    |0.28061674            |
|walk + blocking           |0.04317181            |
|shifted + blocking        |0.01295154            |
|sprint + blocking         |0.05612335            |

+ Note: blocking is NOT blocking with shield. See numbers section.
-----
Air taps are not included as well as jam taps and I highly discourage the use of it. As Bedrock have no inertia. This means tapping in a different air tick or different airtime would not give the same result.

But don't be fooled. I've invented new a bedrock-friendly way of air tapping — A7 taps. It is tapping on air but on the last tick before hitting ground. This way it would now give the same distance regardless of airtime. Downside is.. it is hard to do and requires a bit of muscle memory to tap on the correct tick.

Again, I mothballed these, so don't take them as 100%
|tap names                 |distance given        |
|--------------------------|----------------------|
|A7 walk                   |0.05888635            |
|A7 shifted                |0.01766591            |
|A7 sprint                 |0.07655225            |
|A7 walk + blocking        |0.01177727            |
|A7 shifted + blocking     |0.00353318            |
|A7 sprint + blocking      |0.01531045            |




