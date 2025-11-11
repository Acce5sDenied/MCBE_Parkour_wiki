# MCBE_Parkour_wiki
A wiki for documenting Minecraft Bedrock Edition movement mechanics. As of game version `1.21.12x`

pre-pre-alpha stage, I don't want the language to be TOO formal.

uhmm

#### TODO
+ block hitboxes
+ numbers
+ player control
+ bedrock mechanics
+ more

## Resources
+ Visit [MCPK wiki](https://www.mcpk.wiki/wiki/Main_Page) for java parkour documentation.
+ Visit [ZPK 2](https://github.com/mihiro13/ZPK_2) repo for parkour addon. Like MPK.

## Player control
There are 2 major ways the player can move.
#### Button controls
WASD button controls. Double tap sprint//todo, Hold space//todo
#### Joystick controls
All direction movement controls.//todo, 11 strafe documentation(patched in 1.21.20)//todo

-----
### Mouse movement
//todo

## Blocks
List of collision box for all blocks. For effect box for blocks like cobweb, please see the blocks section. //havent added anything there

Not to be confused with **hitboxes**. This is **collision boxes**. While hitbox is accurately described by the ingame block selection system, it can also accurately describe the block's collision box. But not for all the blocks. Example: caudron.
### Simple collision boxes
|block                                  |widths              |heights    |comment                                                           |
|---------------------------------------|--------------------|-----------|------------------------------------------------------------------|
|full blocks                            |1×1                 |1          |                                                                  |
|farmland & dirt path                   |1×1                 |0.9375     |                                                                  |
|lectern                                |1×1                 |0.9        |                                                                  |
|soulsand & mud                         |1×1                 |0.875      |                                                                  |
|end portal frame                       |1×1                 |0.8125     |adding eye does not change anything.                              |
|enchanting table                       |1×1                 |0.75       |                                                                  |
|stonecutter & beds                     |1×1                 |0.5625     |                                                                  |
|slabs                                  |1×1                 |0.5        |inversible.                                                       |
|campfires                              |1×1                 |0.4375     |                                                                  |
|daylight detector                      |1×1                 |0.375      |                                                                  |
|trapdoors                              |1×1                 |0.1825     |orientable on all sides. inversible.                              |
|redstone repeater & comparator         |1×1                 |0.125      |                                                                  |
|carpets                                |1×1                 |0.0625     |                                                                  |
|shelves                                |1×0.3125            |1          |orientable. (4 varients)                                          |
|ladder                                 |1×0.1875            |1          |orientable. (4 varients)                                          |
|doors                                  |1×0.1825            |1          |orientable. (4 varients) flippable.                               |
|chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.              |
|decorated pot & cactus & honey block   |0.875×0.875         |1          |like egg on java, centered.                                       |
|cake                                   |0.875×0.875         |0.5        |centered.                                                         |
|lilypad                                |0.875×0.875         |0.09375    |centered.                                                         |
|anvil                                  |0.75×1              |1          |orientable on horizontal.(2 varients)                             |
|sniffer egg                            |0.75×0.875          |1          |longer side always extend on X axis.                              |
|grindstone                             |0.75×0.75           |1          |centered. Orientable on all sides.                                |
|chorus stem                            |0.75×0.75           |0.875      |centered.                                                         |
|copper golem statues                   |0.625×0.625         |0.875      |centered.                                                         |
|dried ghast                            |0.625×0.625         |0.625      |centered.                                                         |
|amethyst cluster                       |0.625×0.625         |0.4375     |centered. Can be placed on all sides.                             |
|large amethyst bud                     |0.625×0.625         |0.3125     |centered. Can be placed on all sides.                             |
|medium amethyst bud                    |0.625×0.625         |0.25       |centered. Can be placed on all sides.                             |
|bell(ground)                           |0.5×1               |0.8125     |orientable on horizontal.(2 varients)                             |
|walls                                  |0.5×0.5             |1.5        |centered.                                                         |
|big cocoa                              |0.5×0.5             |0.5625     |orientable.(4 varients) 1px away from wall. top:.75 bottom:.1875  |
|conduit & heavy core & heads(ground)   |0.5×0.5             |0.5        |centered.                                                         |
|heads(wall)                            |0.5×0.5             |0.5        |centered. orientable.(4 varients)                                 |
|small amethyst bud                     |0.5×0.5             |0.1875     |centered. Can be placed on all sides.                             |
|pane(1-sided)                          |0.5×0.125           |1          |orientable.(4 varients)                                           |
|thin wall(2 opposite)                  |0.375×1             |1.5        |orientable on horizontal.(2 varients)                             |
|lanterns(ground)                       |0.375×0.375         |0.5        |centered.                                                         |
|lanterns(hanging)                      |0.375×0.375         |0.5        |top:.625 bottom:.125                                              |
|flower pot & 4 candles                 |0.375×0.375         |0.375      |centered.                                                         |
|fence gate                             |0.25×1              |1.5        |orientable on horizontal.(2 varients)                             |
|hanging signs                          |0.25×1              |0.125      |only the handle(?) part has collision. orientable.(2 varients)    |
|fences                                 |0.25×0.25           |1.5        |centered.                                                         |
|end rod & lightning rods               |0.25×0.25           |1          |centered. orientable on all sides. inversible.                    |
|chains                                 |0.1875×0.1875       |1          |centered. orientable on all sides. inversible.                    |
|panes & bars                           |0.125×0.125         |1          |centered.                                                         |
|bamboo                                 |0.125×0.125         |1          |NOT centered. Collision box have random offset from center.       |
|singular candle                        |0.125×0.125         |0.375      |centered.                                                         |

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
+ Y then X then Z collision order
#### player's collision block
note that some inaccuracy can happen due to floating point imprecision.
+ normally is 0.6×0.6 horizontally and 1.8 vertically.
+ while shifted is 0.6×0.6 horizontally and 1.49 vertically.
+ while crouched or swimming or flying with elytra is 0.6×0.6 horizontally and 0.6 vertically.

## Bedrock differences
Features or missing features exclusive to Bedrock edition of Minecraft that does not appear in Java.
+ strafing don't give the 2% boost in acceleration. (ofc) same goes for strafe shifting.
+ no presence of inertia AKA momentum threshold.
+ position is stored in floats.
+ no presence of bursting or shift glitch.
+ shifting would only goes to 0.025 off edge. This means rankupping in bedrock sucks!!
+ no air sprint delay. (= java 1.19.4 and +)
+ sprint would cancel after touching a wall BUT only if `inward velocity > a certain number` this number is yet to be defined through my testing.
+ sprint is partially determined server-side.
+ have all-direction joystick controls.

## Numbers
I did not look at the code, I got these by testing.//todo
### Base values
#### Grounded
+ horizontal drag: 0.546
+ shifted acceleration: 0.0294
+ walk acceleration: 0.098
+ sprint acceleration:
+ jump vertical acceleration:
#### Airborne
+ horizontal drag: 0.91
+ shifted accerelation:
+ walk acceleration: 0.0196
+ sprint acceleration:
+ gravity acceleration:
#### Flying
#### Blocking
This includes eating or drinking, charging weapons, using goat horn or spyglass.
#### Shield Blocking
different behavior to normal blocking
#### Damage Boost

## Block Mechanics
//todo
#### Soulsand
#### Honey block
#### Slime block
#### Ices
#### Catch type blocks
#### Water
#### Lava
#### Cobweb
#### Powdered Snow
#### Sweet Berry Bush

## Status effects
Status effects that directly effect movement.//todo
#### Speed
#### Slowness
#### Jump boost
#### Slow falling
#### Levitation

## Taps setups
did not test ingame. I mothballed these, so don't take them as 100%.
|tap names                 |distance given        |
|--------------------------|----------------------|
|walk                      |0.21585904            |
|shifted                   |0.06475772            |
|sprint                    |0.28061674            |
|walk + blocking           |0.04317181            |
|shifted + blocking        |0.01295154            |
|sprint + blocking         |0.05612335            |

+ note: blocking is NOT blocking with shield. See numbers section.
-----
Air taps are not included as well as jam taps and I highly discourage the use of it. As Bedrock have no inertia. This means tapping in a different air tick or different airtime would not give the same result.

But don't be fooled. I've invented new a bedrock-friendly way of air tapping — A7 taps. It is tapping on air but on the last tick before hitting ground. This way it would now give the same distance regardless of airtime. Downside is.. it is hard to do and requires a bit of muscle memory to tap on the correct tick.

again, i mothballed these, so don't take them as 100%
|tap names                 |distance given        |
|--------------------------|----------------------|
|A7 walk                   |0.05888635            |
|A7 shifted                |0.01766591            |
|A7 sprint                 |0.07655225            |
|A7 walk + blocking        |0.01177727            |
|A7 shifted + blocking     |0.00353318            |
|A7 sprint + blocking      |0.01531045            |




