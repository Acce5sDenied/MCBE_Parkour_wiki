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
All direction movement controls.//todo

-----
### Mouse movement
pitch is locked in range [`-89.9°` to `89.9°`] //todo

## Block Collisions
List of collision box for all blocks. For effect box for blocks like cobweb, please see the block mechanics section. //havent added anything there

#### Clarification
+ **Model** is a how a block looks. It is purely visual.
+ **Hitbox** is an interaction volume of a block.
+ **Selection box** shows up when you hover over a block. This can describe the collision box of some blocks. (it is in selection box accurate column)
+ Finally, **Collision box** is a solid volume of space that is not meant to pass through.
### Simple collision boxes
|Blocks                                 |Widths              |Heights    |Comments                                                          |Selection box accurate//todo|
|---------------------------------------|--------------------|-----------|------------------------------------------------------------------|----------------------|
|Full Blocks                            |1×1                 |1          |                                                                  |Yes
|Farmland & Dirt Path                   |1×1                 |0.9375     |                                                                  |Yes
|Lectern                                |1×1                 |0.9        |                                                                  |Yes
|Soulsand & Mud                         |1×1                 |0.875      |                                                                  |No
|End Portal Frame                       |1×1                 |0.8125     |Adding eye does not change anything.                              |Yes
|Enchanting Table                       |1×1                 |0.75       |                                                                  |Yes
|Stonecutter & Beds                     |1×1                 |0.5625     |                                                                  |Yes
|Slabs                                  |1×1                 |0.5        |Inversible.                                                       |Yes
|Campfires                              |1×1                 |0.4375     |                                                                  |Yes
|Daylight Detector                      |1×1                 |0.375      |                                                                  |Yes
|Trapdoors                              |1×1                 |0.1825     |Orientable on all sides. Inversible.                              |Yes
|Redstone Repeater & Comparator         |1×1                 |0.125      |                                                                  |Yes
|Carpets                                |1×1                 |0.0625     |                                                                  |Yes
|Shelves                                |1×0.3125            |1          |Orientable. (4 varients)                                          |Yes
|Ladder                                 |1×0.1875            |1          |Orientable. (4 varients)                                          |Yes
|Doors                                  |1×0.1825            |1          |Orientable. (4 varients) Flippable.                               |Yes
|Chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.              |Yes
|Decorated Pot & Cactus & Honey Block   |0.875×0.875         |1          |Like egg on Java, centered.                                       |Yes
|Cake                                   |0.875×0.875         |0.5        |Centered.                                                         |Yes
|Lilypad                                |0.875×0.875         |0.09375    |Centered.                                                         |Yes
|Anvil                                  |0.75×1              |1          |Orientable on horizontal.(2 varients)                             |Yes
|Sniffer Egg                            |0.75×0.875          |1          |Longer side always extend on X axis.                              |Yes
|Grindstone                             |0.75×0.75           |1          |Centered. Orientable on all sides.                                |Yes
|Chorus Stem                            |0.75×0.75           |0.875      |Centered.                                                         |Yes
|Copper Golem Statues                   |0.625×0.625         |0.875      |Centered.                                                         |Yes
|Dried Ghast                            |0.625×0.625         |0.625      |Centered.                                                         |Yes
|Amethyst Cluster                       |0.625×0.625         |0.4375     |Centered. Can be placed on all sides.                             |Yes
|Large Amethyst Bud                     |0.625×0.625         |0.3125     |Centered. Can be placed on all sides.                             |Yes
|Medium Amethyst Bud                    |0.625×0.625         |0.25       |Centered. Can be placed on all sides.                             |Yes
|Bell(ground)                           |0.5×1               |0.8125     |Orientable on horizontal.(2 varients)                             |Yes
|Walls                                  |0.5×0.5             |1.5        |Centered.                                                         |No
|Big Cocoa Bean                         |0.5×0.5             |0.5625     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.1875  |Yes
|Conduit & Heavy Core & Heads(ground)   |0.5×0.5             |0.5        |Centered.                                                         |Yes
|Heads(wall)                            |0.5×0.5             |0.5        |Centered. Orientable.(4 varients)                                 |Yes
|Small Amethyst Bud                     |0.5×0.5             |0.1875     |Centered. Can be placed on all sides.                             |Yes
|Pane(1-sided)                          |0.5×0.125           |1          |Orientable.(4 varients)                                           |No
|Thin wall(2-sided)                     |0.375×1             |1.5        |Orientable on horizontal.(2 varients)                             |No
|Lanterns(ground)                       |0.375×0.375         |0.5        |Centered.                                                         |Yes
|Lanterns(hanging)                      |0.375×0.375         |0.5        |Top:.625 Bottom:.125                                              |Yes
|Flower Pot & 4 Candles                 |0.375×0.375         |0.375      |Centered.                                                         |idk
|Fence Gate                             |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |Yes
|Hanging Signs                          |0.25×1              |0.125      |Only the handle(?) part has collision. Orientable.(2 varients)    |No
|Fences                                 |0.25×0.25           |1.5        |Centered.                                                         |No
|End Rod & Lightning Rods               |0.25×0.25           |1          |Centered. Can be placed on all sides.                             |Yes
|Chains                                 |0.1875×0.1875       |1          |Centered. Can be placed on all sides.                             |Yes
|Panes & Bars                           |0.125×0.125         |1          |Centered.                                                         |Yes
|Bamboo                                 |0.125×0.125         |1          |NOT centered. Collision box have random offset from center.       |Yes
|Singular Candle                        |0.125×0.125         |0.375      |Centered.                                                         |Yes

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
#### player's collision box
Note that some inaccuracy can happen due to floating point imprecision.
+ Normally is 0.6×0.6 horizontally and 1.8 vertically.
+ While crouched is 0.6×0.6 horizontally and 1.49 vertically.
+ While crawling or swimming or flying with elytra is 0.6×0.6 horizontally and 0.6 vertically.

## Glitches
+ Hitbox manipulation [**Link**](https://youtu.be/WKW3vyy5yH8) (very effective because bedrock use floats, around 500 million times better)
### Patched Glitches
+ 11 strafe or 10 strafe. Patched in v`1.21.20`. Caused by joystick, optimal angle is `11.48°`. Boost in acceleration is `1/0.98` same as java's 45 strafe. Surprisingly, this works on jump tick `4.51°` is optimal. Given this, 11 strafe is generally better than java's 45 strafe.
+ Backwards sprinting.//todo
### Non-Advantagious Glitches
+ Player never stopping in place, coords flickering.(i'll add vid soon dw)
+ More flickering stuff.
+ Mega rubberbanding.
+ Server-Client player collision box desync.

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
Effect box: 0.998×0.998×0.998 (1×1×1 retracted 0.001 inwards on each side.)
Entity will receive effect when their collision box intersects this region.
Effect on movement: Horizontal acceleration is divided by `4` and Vertical acceleration is divided by `20`. All velocity is reset on every tick.
#### Powdered Snow
Effect box: 0.998×0.998×0.998 (1×1×1 retracted 0.001 inwards on each side.)
Entity will receive effect when their collision box intersects this region.
Effect on movement: todo
#### Sweet Berry Bush
Effect box: 0.998×0.998×0.998 (1×1×1 retracted 0.001 inwards on each side.)
Entity will receive effect when their collision box intersects this region.
Effect on movement: Horizontal acceleration is divided by `1.25` and Vertical acceleration is **multiplied** by `0.735`. All velocity is reset on every tick.
#### Scaffolding
different behavior to normal climb blocks

## Status effects
Status effects that directly effect movement.//todo
#### Speed
#### Slowness
#### Jump boost
`+0.1` jump acceleration per level of jump boost.
#### Slow falling
#### Levitation
#### Blindness
Activating sprint is not possible while effect is active. You can still keep sprint even when effect is received.

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




