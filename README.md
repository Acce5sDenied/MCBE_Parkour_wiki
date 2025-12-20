# MCBE_Parkour_wiki

![MCBEPK_wiki_banner](https://github.com/Acce5sDenied/MCBE_Parkour_wiki/blob/main/Images/MCBEPK_wiki_banner.png)

A wiki for documenting Minecraft Bedrock Edition movement mechanics. As of game version `1.21.13x`

uhmm

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
//todo Fact: Pitch is locked in range [`-89.9°` to `89.9°`]

## Block Collisions
List of collision box for all blocks. For effect box for blocks like cobweb, please see the block mechanics section.

#### Clarification
+ **Model** is a how a block looks. It is purely visual.
+ **Hitbox** is an interaction volume of a block.
+ **Selection box** shows up when you hover over a block. This can describe the collision box of some blocks. (it is in selection box accurate column)
+ Finally, **Collision box** is a solid volume of space that is not meant to pass through.

### Simple collision boxes
Ordered by widths then height.
|Blocks                                 |Widths              |Height     |Comments                                                          |Selection box accurate?|
|---------------------------------------|--------------------|-----------|------------------------------------------------------------------|-----------------------|
|Walls(4-sided)                         |1×1                 |1.5        |                                                                  |No
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
|Big Dripleaf(unstable)                 |1×1                 |0.25       |Top:.9375 Bottom:.6875 Switch to partial tilt when stood on.      |No
|Trapdoors                              |1×1                 |0.1825     |Orientable on all sides. Inversible.                              |Yes
|Redstone Repeater & Comparator         |1×1                 |0.125      |                                                                  |Yes
|Big Dripleaf(partial tilt)             |1×1                 |0.125      |Top:.8125 Bottom:.6875 Transition state between unstable and full tilt state which is intangible.|No
|Carpets                                |1×1                 |0.0625     |                                                                  |Yes
|Snow Layers                            |1×1                 |0.125(n-1) |1 layer: no collision 2:.125 3:.25 4:.375 5:.5 6:.625 7:.75 8:.875|No
|Shelves                                |1×0.3125            |1          |Orientable. (4 varients)                                          |Yes
|Ladder                                 |1×0.1875            |1          |Orientable. (4 varients)                                          |Yes
|Doors                                  |1×0.1825            |1          |Orientable. (4 varients) Flippable.                               |Yes
|Chests(long)                           |0.95×0.975          |0.95       |-0.25 on sides that is not connected to another chest.            |Yes
|Chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.              |Yes
|Decorated Pot & Cactus & Honey Block   |0.875×0.875         |1          |Like egg on Java, centered.                                       |Yes
|Cake                                   |0.875×0.875         |0.5        |Centered. Adding candle on top does not change anything.          |Yes
|Eaten Cake                             |0.875×0.875         |0.5        |-0.125 on -X direction per 1 eat. Can be eaten 7 times.           |Yes
|Lilypad                                |0.875×0.875         |0.09375    |Centered.                                                         |Yes
|Walls(3-sided)                         |0.75×1              |1.5        |Orientable.(4 varients)                                           |No
|Anvil                                  |0.75×1              |1          |Orientable on horizontal.(2 varients)                             |Yes
|Sniffer Egg                            |0.75×0.875          |1          |Longer side always extend on X axis.                              |Yes
|Walls(2-adjacent)                      |0.75×0.75           |1.5        |Orientable.(4 varients)                                           |No
|Grindstone                             |0.75×0.75           |1          |Centered. Orientable on all sides.                                |Yes
|Pointed Dripstone(base)                |0.75×0.75           |1          |Collision box have random offset from center.                     |Yes
|Chorus Stem                            |0.75×0.75           |0.875      |Centered.                                                         |Yes
|Pointed Dripstone(medium)              |0.625×0.625         |1          |Collision box have random offset from center.                     |Yes
|Copper Golem Statues                   |0.625×0.625         |0.875      |Centered.                                                         |Yes
|Dried Ghast                            |0.625×0.625         |0.625      |Centered.                                                         |Yes
|Amethyst Cluster                       |0.625×0.625         |0.4375     |Centered. Can be placed on all sides.                             |Yes
|Large Amethyst Bud                     |0.625×0.625         |0.3125     |Centered. Can be placed on all sides.                             |Yes
|Medium Amethyst Bud                    |0.625×0.625         |0.25       |Centered. Can be placed on all sides.                             |Yes
|Turtle Eggs                            |0.6×0.6             |0.45       |Centered. Adding more eggs won't change the collision.            |Yes
|Walls(2-opposite)                      |0.5×1               |1.5        |Orientable.(4 varients) Needs another wall on top.                |No
|Bell(standing)                         |0.5×1               |0.8125     |Orientable on horizontal.(2 varients)                             |Yes
|Bell(opposite connection or "multiple")|0.5×1               |0.75       |Orientable on horizontal.(2 varients) Top:1.0 Bottom:.25          |Yes
|Bell(1-sided or "side")                |0.5×0.8125          |0.6875     |Orientable.(4 varients) Top:.9375 Bottom:.25                      |Yes
|Walls(1-sided)                         |0.5×0.75            |1.5        |Orientable.(4 varients)                                           |No
|Walls                                  |0.5×0.5             |1.5        |Centered.                                                         |No
|Pointed Dripstone(frustum)             |0.5×0.5             |1          |Collision box have random offset from center.                     |Yes
|Bell(hanging)                          |0.5×0.5             |0.75       |Centered. Top:1.0 Bottom:.0.25                                    |Yes
|Cocoa(big)                             |0.5×0.5             |0.5625     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.1875  |Yes
|Conduit & Heavy Core & Heads(ground)   |0.5×0.5             |0.5        |Centered.                                                         |Yes
|Heads(wall)                            |0.5×0.5             |0.5        |Centered. Orientable.(4 varients)                                 |Yes
|Small Amethyst Bud                     |0.5×0.5             |0.1875     |Centered. Can be placed on all sides.                             |Yes
|Pane(1-sided)                          |0.5×0.125           |1          |Orientable.(4 varients)                                           |No
|Thin wall(2-opposite)                  |0.375×1             |1.5        |Orientable on horizontal.(2 varients)                             |No
|Pointed Dripstone(merge)               |0.375×0.375         |1          |Collision box have random offset from center.                     |Yes
|Pointed Dripstone(tip)                 |0.375×0.375         |0.6875     |Collision box have random offset from center. Inversible.         |Yes
|Lanterns(ground)                       |0.375×0.375         |0.5        |Centered.                                                         |Yes
|Lanterns(hanging)                      |0.375×0.375         |0.5        |Top:.625 Bottom:.125                                              |Yes
|Cocoa(medium)                          |0.375×0.375         |0.4375     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.3125  |Yes
|Flower Pot                             |0.375×0.375         |0.375      |Centered.                                                         |Yes
|4 Candles                              |0.3125×0.375        |0.375      |+Z side match fence, the rest match a flower pot.                 |Yes
|3 Candles                              |0.3125×0.3125       |0.375      |+Z and -X side match a flower pot, -Z and -X match a fence.       |Yes
|Fence Gates                            |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |No
|Fences(2-opposite)                     |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |No
|Hanging Signs(hanging=false)           |0.25×1              |0.125      |Only the handle(?) part has collision. Orientable.(2 varients)    |No
|Fences(1-sided)                        |0.25×0.625          |1.5        |Orientable.(4 varients)                                           |No
|Fences                                 |0.25×0.25           |1.5        |Centered.                                                         |No
|End Rod & Lightning Rods               |0.25×0.25           |1          |Centered. Can be placed on all sides.                             |Yes
|Cocoa(small)                           |0.25×0.25           |0.3125     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.4375  |Yes
|2 Candles                              |0.1875×0.375        |0.375      |+Z side match a fence, -Z side match a pane, +X and -X match a flower pot.|Yes
|Chains                                 |0.1875×0.1875       |1          |Centered. Can be placed on all sides.                             |Yes
|Panes & Bars                           |0.125×0.125         |1          |Centered.                                                         |Yes
|Bamboo                                 |0.125×0.125         |1          |NOT centered. Collision box have random offset from center.       |Yes
|Singular Candle                        |0.125×0.125         |0.375      |Centered.                                                         |Yes

|to-add        |
|--------------|
|ALL THE FENCES WALLS PANES VARIENTS😭|
|hopper        |
|piston arm    |
|chorus stem varients|


### Composite collision boxes
Alphabetical order.
|Blocks                    |Widths                    |Heights                    |Comment                                        |
|--------------------------|--------------------------|---------------------------|-----------------------------------------------|
|Brewing Stand             |Base:1×1 Rod:0.125×0.125  |Base:.125 Rod:.875         |Centered.                                      |
|Caudron                   |Base:1×1 Walls:0.125 thick|Base:.3125 Walls:1         |                                               |
|Composter                 |Base:1×1 Walls:0.125 thick|Base:.125 Walls:1          |                                               |
|Stair(normal)             |Base:1×1 Top:1×0.5        |Base:.5 Top:1              |Orientable, inversible.(8 varients)            |
|Stair(outer)              |Base:1×1 Top:0.5×0.5      |Base:.5 Top:1              |Orientable, inversible.(8 varients)            |
|Stair(inner)              |Base:1×1 Top:1×0.5        |Base:.5 Top:1              |This have exactly the same collision as a normal stair. When an adjacent stair is placed(to convert into this varient), only the model changes. Leaving a 0.5×0.5×0.5 intangible zone.|

### Other collision boxes
Stuff that have a collision box that does not quite belong in the 2 above catagories.
|Thing                  |Widths                    |Heights                             |Comment                                    |
|-----------------------|--------------------------|------------------------------------|-------------------------------------------|
|Boat                   |1.4×1.4                   |0.455                               |FunFact: you can make a perfect squeeze with boat + block.|
|Border Block           |1×1                       |1.5 *or* infinitely high up or below|Bedrock exclusive block. [**Minecraft wiki article**](https://minecraft.wiki/w/Border)|
|Shulker Box            |1×1                       |1 *or* 1.5                          |1.5 high when opened, Orientable, inversible.(6 varients)|
|Shulker Mob            |0.9998×0.9998             |0.98                                |Not orientable. Centered. Base touch the ground. When opened, that side extends out `~0.2060919`|

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
I did not look at the code, I got these by testing.
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
Flying ignores block mechanics, reaching top speed of 0.544b/t while walk flying, 1.088b/t while sprinting.
+ horizontal drag while accelerating: `0.91`
+ horizontal drag while not accelerating: somewhere around `0.34125` When movement key is released, drag continues to be 0.91 for 1 more tick.
+ shifted accerelation: `[incompatible]`
+ walk acceleration: `0.049`
+ sprint acceleration: `0.098`
#### Blocking
This includes eating or drinking, charging weapons, using goat horn or spyglass.
`81+(2/3)` less acceleration or `~0.0122449x` acceleration.
+ shifted accerelation: `0.0036`
+ walk acceleration: `0.012`
+ sprint acceleration: `0.0156`
#### Shield Blocking
Different behavior to normal blocking, No effect on movement

## Block Mechanics
#### Soulsand
Effect box: 1×1×1 lifted up by 0.1. (0.1 up from block's surface and 0.1 up from bottom if you're somehow inside)
Entity will receive effect when their coordinates is in this region.
Effect on movement: todo(not the same as java)
#### Honey block
there are like 5 different effect boxes//todo
Jumping gives `0.252` vertical acceleration, reaching `0.514` in height, with 8 ticks of airtime on flat ground.
#### Slime block
#### Ices
Effect box: 1×1×1 lifted up by 0.1. (0.1 up from block's surface and 0.1 up from bottom if you're somehow inside)
Entity will receive effect when their coordinates is in this region.
+ Blue ice slipperiness factor `0.989`
+ Packed ice slipperiness factor `0.98`
+ Ice slipperiness factor `0.98`
+ Frosted ice slipperiness factor `0.98`
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
`+20%` acceleration per level of speed.
#### Slowness
`-15%` acceleration per level of slowness.
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




