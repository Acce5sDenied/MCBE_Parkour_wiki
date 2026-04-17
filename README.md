# MCBE_Parkour_wiki

![MCBEPK_wiki_banner](/Images/MCBEPK_wiki_banner.png)

A wiki for documenting Minecraft Bedrock Edition movement mechanics & technical knowledges. As of game version `26.1x`.\
This wiki is assuming you have decent knowledge of the game and have read MCPK wiki before.

uhmm

<details>
  <summary>Todo List</summary>
    <br>
  
+ [ ] hopper collision
+ [ ] Chorus plant collision
+ [ ] historic collision boxes
+ [ ] movement
+ [ ] camera
+ [ ] sensitivity
+ [ ] joystick
+ [ ] honey
+ [ ] slime
+ [ ] powdered snow
+ [ ] climb blocks
+ [ ] scaffolding
+ [ ] water/lava (never)
+ [ ] movement formulas (for handling cases that many effects stack together)
+ [ ] understanding what caused 11 strafe
+ [ ] migrate some to wiki page once im done

</details>

---

## Resources
+ Visit [**MCPK wiki**](https://www.mcpk.wiki/wiki/Main_Page) for Java parkour documentation.
+ Visit [**ZPK 2**](https://github.com/mihiro13/ZPK_2) repo for parkour addon. Like MPK, Cyv.
+ Join [**DPK Central Discord**](https://discord.gg/AENkWECXh8) for central hub about Bedrock Edition Parkour.

---

## Bedrock Differences
Comparing movement related stuff of Bedrock Edition to Java Edition 1.8 (standard for parkour).
+ Strafing don't give the 2% boost in acceleration, unlike Java Edition. Same goes for strafe shifting.
+ No presence of inertia AKA momentum threshold.
+ Position and many more values is stored in floats (32-bit). This explains many goofy glitches on bedrock.
+ Trigonometry directly uses $sin()$ and $cos()$, so there is no such "significant angles" and "half angles" in Bedrock.
+ No presence of bursting or shift glitch.
+ Shifting would only goes to minimum of 0.025 away from edge.
+ No 1 tick of air sprint delay. (matches Java 1.19.4 and above)
+ Sprint would cancel after touching a wall BUT only if your motion vector and speed vector differ more than a certain value. (probably matches modern Java)
+ Have all-direction joystick controls.
+ You have 16 b/t absolute speed cap.
+ Many block mechanics/properties is different.

---

## Player control
There are 2 major ways the player can move.

#### Button controls
WASD button controls.\
//todo

#### Joystick controls
All direction movement controls.\
//todo

### Mouse movement
//todo\
Cool fact: Pitch is locked in range [`-89.9°` to `89.9°`]

#### Sensitivity formula
Recent update changed something but im haven't looked into it yet.\
Bedrock uses sensitivity in range `0 - 100` unlike Java's `0 - 200`\
Let $\displaystyle v_{value} = 0.051149105 \times \text{Sensitivity} ^ {0.6125}$ and the formulas go as follow:
+ Mouse:\
$$\displaystyle \Delta \text{yaw} = \text{PixelsTurned} \times \left(0.25 + v_{value} \right) ^ 3 \times \frac{1920}{\text{WindowWidth}}$$\
`/!\ NEEDS VERIFICATION /!\`
+ Touch:\
$$\displaystyle \Delta \text{yaw} = \text{PixelsTurned} \times \frac{32}{93275} \times \left(1.6 + 6.4 \times v_{value}\right) ^ {3.6}$$\
`/!\ WIP, for my device type (2340 * 1080) /!\`
+ Joystick: //todo
+ Button press: //todo

---

## Block Collisions
List of unique collision boxes of all blocks. For effect box for blocks like cobweb, please see the [Block Mechanics](#block-mechanics) section.\
`/!\ OUTDATED, SOMETHING MAY HAVE CHANGED /!\`

#### Clarification
+ **Model** is a how a block looks. It is purely visual.
+ **Hitbox** is an interaction volume of a block.
+ **Selection box** shows up when you hover over a block. This can describe the collision box of some blocks. (it is in selection box accurate column)
+ Finally, **Collision box** is a solid volume of space that is not meant to pass through.

### Simple collision boxes
<details>
  <summary><ins>Click here to view table.</ins></summary>

\
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
|Big Dripleaf(`unstable`)               |1×1                 |0.25       |Top:.9375 Bottom:.6875 Switches to `partial_tilt` when stood on.  |No
|Trapdoors                              |1×1                 |0.1825     |Orientable on all sides. Inversible.                              |Yes
|Redstone Repeater & Comparator         |1×1                 |0.125      |                                                                  |Yes
|Big Dripleaf(`partial_tilt`)           |1×1                 |0.125      |Top:.8125 Bottom:.6875 Transition state between `unstable` and `full_tilt` state which is intangible.|No
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
|Pointed Dripstone(`base`)              |0.75×0.75           |1          |Collision box have random offset from center.                     |Yes
|Chorus Stem                            |0.75×0.75           |0.875      |Centered.                                                         |Yes
|Pointed Dripstone(`medium`)            |0.625×0.625         |1          |Collision box have random offset from center.                     |Yes
|Copper Golem Statues                   |0.625×0.625         |0.875      |Centered.                                                         |Yes
|Dried Ghast                            |0.625×0.625         |0.625      |Centered.                                                         |Yes
|Amethyst Cluster                       |0.625×0.625         |0.4375     |Centered. Can be placed on all sides.                             |Yes
|Pitcher Pod(big)                       |0.625×0.625         |0.375      |Top:.3125 Bottom:-.0625 Centered. Have 1px downwards collision extension of the block it is occupying.|No
|Large Amethyst Bud                     |0.625×0.625         |0.3125     |Centered. Can be placed on all sides.                             |Yes
|Medium Amethyst Bud                    |0.625×0.625         |0.25       |Centered. Can be placed on all sides.                             |Yes
|Turtle Eggs                            |0.6×0.6             |0.45       |Centered. Adding more eggs won't change the collision.            |Yes
|Walls(2-opposite)                      |0.5×1               |1.5        |Orientable.(4 varients) Needs another wall on top.                |No
|Bell(`standing`)                       |0.5×1               |0.8125     |Orientable on horizontal.(2 varients)                             |Yes
|Bell(opposite connection or `multiple`)|0.5×1               |0.75       |Orientable on horizontal.(2 varients) Top:1.0 Bottom:.25          |Yes
|Bell(1-sided or `side`)                |0.5×0.8125          |0.6875     |Orientable.(4 varients) Top:.9375 Bottom:.25                      |Yes
|Walls(1-sided)                         |0.5×0.75            |1.5        |Orientable.(4 varients)                                           |No
|Walls                                  |0.5×0.5             |1.5        |Centered.                                                         |No
|Pointed Dripstone(`frustum`)           |0.5×0.5             |1          |Collision box have random offset from center.                     |Yes
|Bell(`hanging`)                        |0.5×0.5             |0.75       |Centered. Top:1.0 Bottom:.0.25                                    |Yes
|Cocoa(big)                             |0.5×0.5             |0.5625     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.1875  |Yes
|Conduit & Heavy Core & Heads (ground)  |0.5×0.5             |0.5        |Centered.                                                         |Yes
|Heads(wall)                            |0.5×0.5             |0.5        |Centered. Orientable.(4 varients)                                 |Yes
|Small Amethyst Bud                     |0.5×0.5             |0.1875     |Centered. Can be placed on all sides.                             |Yes
|Panes & Bars (1-sided)                 |0.5×0.125           |1          |Orientable.(4 varients)                                           |No
|Thin wall(2-opposite)                  |0.375×1             |1.5        |Orientable on horizontal.(2 varients)                             |No
|Pointed Dripstone(`merge`)             |0.375×0.375         |1          |Collision box have random offset from center.                     |Yes
|Pointed Dripstone(`tip`)               |0.375×0.375         |0.6875     |Collision box have random offset from center. Inversible.         |Yes
|Lanterns(ground)                       |0.375×0.375         |0.5        |Centered.                                                         |Yes
|Lanterns(hanging)                      |0.375×0.375         |0.5        |Top:.625 Bottom:.125                                              |Yes
|Cocoa(medium)                          |0.375×0.375         |0.4375     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.3125  |Yes
|Flower Pot                             |0.375×0.375         |0.375      |Centered.                                                         |Yes
|Pitcher Pod(small)                     |0.375×0.375         |0.25       |Top:.1875 Bottom:-.0625 Centered. Have 1px downwards collision extension of the block it is occupying.|Yes
|4 Candles                              |0.3125×0.375        |0.375      |+Z side match fence, the rest match a flower pot.                 |Yes
|3 Candles                              |0.3125×0.3125       |0.375      |+Z and -X side match a flower pot, -Z and -X match a fence.       |Yes
|Fence Gates                            |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |No
|Fences(2-opposite)                     |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |No
|Hanging Signs(`"hanging"=false`)       |0.25×1              |0.125      |Only the handle(?) part has collision. Orientable.(2 varients)    |No
|Fences(1-sided)                        |0.25×0.625          |1.5        |Orientable.(4 varients)                                           |No
|Fences                                 |0.25×0.25           |1.5        |Centered.                                                         |No
|End Rod & Lightning Rods               |0.25×0.25           |1          |Centered. Can be placed on all sides.                             |Yes
|Cocoa(small)                           |0.25×0.25           |0.3125     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.4375  |Yes
|2 Candles                              |0.1875×0.375        |0.375      |+Z side match a fence, -Z side match a pane, +X and -X match a flower pot.|Yes
|Chains                                 |0.1875×0.1875       |1          |Centered. Can be placed on all sides.                             |Yes
|Bamboo(`thick`)                        |0.1875×0.1875       |1          |Collision box have random offset from center.                     |Yes
|Panes & Bars (2-opposite)              |0.125×1             |1          |Centered. Orientable.(2 varients)                                 |Yes
|Panes & Bars                           |0.125×0.125         |1          |Centered.                                                         |Yes
|Bamboo(`thin`)                         |0.125×0.125         |1          |Collision box have random offset from center.                     |Yes
|Singular Candle                        |0.125×0.125         |0.375      |Centered.                                                         |Yes

</details>

### Composite collision boxes
<details>
  <summary><ins>Click here to view table.</ins></summary>

\
Alphabetical order.
|Blocks                    |Widths                          |Heights                    |Comment                                        |
|--------------------------|--------------------------------|---------------------------|-----------------------------------------------|
|Brewing Stand             |Base:1×1 Rod:0.125×0.125        |Base:.125 Rod:.875         |Centered.                                      |
|Caudron                   |Base:1×1 Walls:0.125 thick      |Base:.3125 Walls:1         |                                               |
|Composter                 |Base:1×1 Walls:0.125 thick      |Base:.125 Walls:1          |                                               |
|Fences(4-sided)           |Post:0.25×0.25 Sides:0.25×0.375 |1.5                        |                                               |
|Fences(3-sided)           |Post:0.25×0.25 Sides:0.25×0.375 |1.5                        |Orientable.(4 varients)                        |
|Fences(2-adjacent)        |Post:0.25×0.25 Sides:0.25×0.375 |1.5                        |Orientable.(4 varients)                        |
|Hopper//todo              |                                |                           |                                               |
|Panes & Bars(4-sided)     |Sides:0.125×0.5                 |1                          |                                               |
|Panes & Bars(3-sided)     |Sides:0.125×0.5                 |1                          |Orientable.(4 varients)                        |
|Panes & Bars(2-adjacent)  |Sides:0.125×0.5                 |1                          |Orientable.(4 varients) Missing 1px in the outer corner.|
|Piston Head               |Head:1×1 Arm:0.375×0.375        |Head:.25 Arm:1             |Orientable, inversible.(6 varients)            |
|Stairs(normal)            |Base:1×1 Top:1×0.5              |Base:.5 Top:1              |Orientable, inversible.(8 varients)            |
|Stairs(outer)             |Base:1×1 Top:0.5×0.5            |Base:.5 Top:1              |Orientable, inversible.(8 varients)            |
|Stairs(inner)             |Base:1×1 Top:1×0.5              |Base:.5 Top:1              |This have exactly the same collision as a normal stair. When an adjacent stair is placed(to convert into this varient), only the model changes. Leaving a 0.5×0.5×0.5 intangible zone.|

</details>

### Other collision boxes
<details>
  <summary><ins>Click here to view table.</ins></summary>

\
Stuff that have a collision box that does not quite belong in the 2 above catagories.
|Thing                  |Widths                    |Heights                              |Comment                                    |
|-----------------------|--------------------------|-------------------------------------|-------------------------------------------|
|Boat                   |1.4×1.4                   |0.455                                |Fun fact: you can make a perfect squeeze with boat + block.|
|Border Block           |1×1                       |1.5 *or* infinitely high up and below|Bedrock exclusive block. [**Minecraft wiki article**](https://minecraft.wiki/w/Border)|
|Happy Ghasts           |4×4                       |?                                    |Solidifies when a player is close to it. Collision is not aligned to grid.|
|Shulker Box            |1×1                       |1 *or* 1.5                           |1.5 high when opened, Orientable, inversible.(6 varients)|
|Shulker Mob            |0.9998×0.9998             |0.98                                 |Not orientable. Centered. Base touch the ground. When opened, that side extends out `~0.2060919`|

</details>

### Historic collision boxes
<details>
  <summary><ins>Click here to view table.</ins></summary>

\
Collision boxes that have been changed throughout many updates.//todo
|Blocks                   |Widths                          |Heights                  |Versions                |Comments                                        |
|-------------------------|--------------------------------|-------------------------|------------------------|------------------------------------------------|
|Trial spawner
|Lilypad

</details>

---

## Movement mechanic
+ Y -> X -> Z collision order
+ Stepping stuff, blips, grinds, jump cancel. Same as Java 1.8.\
`/!\ NEEDS VERIFICATION /!\`
+ Shifting makes player go only the minimum of `0.025` away from edge.
+ 16 b/t absolute speed cap (pythagoras of 3 axes). If over 16, your velocity on 3 axes will be scaled down with equal proportion so that absolute velocity = 16.

#### player's collision box
Note that it can be a bit off because floating point error.
+ Normally is `0.6×0.6` horizontally and `1.8` vertically.
+ While crouched is `0.6×0.6` horizontally and `1.49` vertically.
+ While crawling, swimming or flying with elytra is `0.6×0.6` horizontally and `0.6` vertically.

---

## Glitches
Movement related glitches.
+ Hitbox manipulation is a precision related glitch. Since bedrock uses 32-bit arithmetic, this is millions of times more effective than Java's.
+ Block clipping is another precision related glitch. Happens at coodinates of high number. And powers of 2.

### Patched Glitches
+ 11 strafe or 10 strafe. Patched in `1.21.20`. Caused by joystick, optimal angle is `11.48°` and `33.52°`. Boost in acceleration is `1/0.98` (rumors says it is a very tiny bit more than this). Surprisingly, this works on jump tick `4.51°` is optimal (Variable when ground is ice, etc...). Given this, 11 strafe is generally better than Java's 45 strafe.
+ Backwards sprinting.//todo

### Non-Advantagious Glitches
+ Player actually never stopping in place, coords flickering while standing still.
+ Catastrophic rubberbanding.
+ Many desync issues.

---

## Constants

### Base values
the formulas should be the same as Java's
+ shifted acceleration: `0.294`
+ walk acceleration: `0.98`
+ sprint acceleration: `1.274`
+ sprint jump acceleration towards facing: `0.2`
+ normal ground slipperiness: `0.6`
+ velocity conserved to next tick: `0.91`
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
Flying ignores most block mechanics, reaching top speed of `0.544b/t` while walk flying, `1.088b/t` while sprinting.
+ horizontal drag while accelerating: `0.91`
+ horizontal drag while not accelerating: `~0.34125`.
+ shifted accerelation: `[incompatible]`
+ walk acceleration: `0.049`
+ sprint acceleration: `0.098`

#### Blocking
This includes eating or drinking, charging weapons, using goat horn or spyglass.
`81 + 2/3` less acceleration or `~0.0122449x` acceleration.
+ shifted accerelation: `0.0036`
+ walk acceleration: `0.012`
+ sprint acceleration: `0.0156`

#### Shield Blocking
Different behavior to normal blocking, No effect on movement

---

## Block Mechanics
Blocks that have special properties effecting movement.

### Slipperiness Properties
All blocks have slipperiness factor (noted as $S$) of it's own. Every block have $S$ of `0.6` unless other value is stated\
The game checks `0.1` blocks below entity's position for slipperiness. When airborne, slipperiness properties is ignored.\
Effects on movement include:
+ Amount of drag on ground is $0.91 \times S$.
+ Acceleration on ground is multiplied by $\displaystyle \left(\frac{0.6}{S}\right) ^ 3$

#### Soulsand
Effect box: `1×1×1` lifted up by `0.1`. (0.1 up from block's surface and 0.1 up from bottom if you're somehow inside)\
Entity will receive effect when their coordinates is in this region.\
Properties: Unlike Java, that soulsand would drag an entity down, Bedrock does not do that.
+ Grants `54.4%` acceleration.

#### Honey block
Slipperiness factor is `0.8`\
Properties: //todo key details: 
+ Jumping gives `0.252` vertical acceleration, reaching `0.514` in height, with 8 ticks of airtime on flat ground.
+ Sliding down the side have a speed cap of `-0.12`

#### Slime block
Slipperiness factor is `0.8`\
Properties: //todo key details:
+ bounce

#### Ices
+ Blue ice slipperiness factor `0.989`
+ Packed ice slipperiness factor `0.98`
+ Ice slipperiness factor `0.98`
+ Frosted ice slipperiness factor `0.98`

#### Catch/Climb type blocks
Effect box: `1×1×1`\
Entity will receive effect when their coordinates is in this region.\
Properties: //todo key details: 
+ max climb up/down speed is `0.2`

#### Scaffolding
different behavior to normal climb blocks.\
Effect box: `1×1×1`\
Entity will receive effect when their base (`0.3` margin around player's position) intersects this region.\
Properties: //todo key details: 
+ max climb up/down speed is `0.15`

#### Water
//todo

#### Lava
//todo

#### Cobweb
Effect box: `0.998×0.998×0.998` (`1×1×1` retracted `0.001` inwards on each side.)\
Entity will receive effect when their collision box intersects this region.\
Properties: 
+ Horizontal acceleration is divided by `4`.
+ Vertical acceleration is divided by `20`.
+ All velocity is reset on every tick.

#### Powdered Snow
Effect box: `0.998×0.998×0.998` (`1×1×1` retracted `0.001` inwards on each side.)\
Entity will receive effect when their collision box intersects this region.\
Properties://todo key details: 
+ All velocity is reset on every tick.
+ The longer inside the slower you are.

#### Sweet Berry Bush
Effect box: `0.998×0.998×0.998` (`1×1×1` retracted `0.001` inwards on each side.)\
Entity will receive effect when their collision box intersects this region.\
Properties: 
+ Horizontal acceleration is divided by `1.25`.
+ Vertical acceleration is **multiplied** by `0.735`.
+ All velocity is reset on every tick.

---

## Status effects & Enchants
Status effects and enchants that can directly effect movement.\
Enchants that have a level beyond normally achievable may have mistakes.

#### Speed
`+20%` acceleration per level of speed. Does not apply when airborne. In the case where speed is on with slowness, speed always get applied first.

#### Slowness
`-15%` acceleration per level of slowness. Does not apply when airborne.

#### Jump boost
`+0.1` jump acceleration per level of jump boost.

#### Slow falling
`0.01` Gravity acceleration for all levels of slow falling. Reaching terminal velocity of `0.49`.\
(i think it only applies 1 tick after exiting ground)

#### Levitation
$$\displaystyle VelY_t = VelY_{t-1} \times 0.784 + 0.0098 \times Level$$\
Basically floats up with acceleration of `0.0098` multiplied by levitation level. And with drag of `0.784`.

#### Blindness
Activating sprint is not possible while effect is active. You can still keep sprint even when effect is received.

#### Soul speed
$\displaystyle 1.3 + Level \times 0.105$ times acceleration. Only works on soul sand and soul soil as ground.

#### Depth strider
For walking, `+133.33%` acceleration per level of depth strider.\
For sprinting, `+183.33%` acceleration per level of depth strider.\
`/!\ NEEDS VERIFICATION /!\`

#### Swift sneak
`+50%` acceleration per level of swift sneak. Only works while crouching or crawling.

---

## Movement formulas
//todo `/!\ DRAFT, DO NOT TRUST ANY OF THESE /!\`\
$\displaystyle \cdots_{t}$ means of current tick and $\displaystyle \cdots_{t-1}$ means of previous tick, etc...

### Vertical

**Jump Acceleration:**\
$$\displaystyle A_t = \left(0.42 + 0.1 \times JumpBoostLevel_t\right) \times \begin{Bmatrix}0.6 & \text{if Honey} \\ 1 & \text{otherwise}\end{Bmatrix}$$

**Gravity:**\
$$\displaystyle G_t = \begin{Bmatrix}0.01 & \text{if SlowFalling}_t \\ 0.08 & \text{otherwise}\end{Bmatrix}$$

**Velocity Formula:**\
$$\displaystyle VelY_t = \underset{\text{Momentum}}{\underbrace{\left(VelY_{t-1} - G_{t-1}\right) \times 0.98 \times \begin{Bmatrix}0 & \text{if collided on Y}_t \\ 1 & \text{otherwise}\end{Bmatrix}}} + \underset{\text{Acceleration}}{\underbrace{\begin{Bmatrix} A_t, & \text{if Jumping}_t \\ 0, & \text{otherwise} \end{Bmatrix}}}$$

### Horizontal

**Acceleration:**\
$$\displaystyle A_t = \begin{Bmatrix}1.274 & \text{if Sprinting}_t \\ 0.98 & \text{if Walking}_t \\ 0.294 & \text{if Sneaking}_t \\ 0.0 & \text{if Stopping}_t\end{Bmatrix} \times \begin{Bmatrix}0.02 & \text{if Airborne}_t \\ \displaystyle\frac{3}{245} & \text{if Blocking}_t \\ \displaystyle\frac{3}{12250} & \text{if Airborne}_t & \text{and Blocking}_t \\ 0.1 & \text{otherwise}\end{Bmatrix}$$

**Effects & Enchants:**\
$$\displaystyle E_t = (1 + 0.2 \times SpeedLevel_t) \times (1 - 0.15 \times SlownessLevel_t)$$

**Block Mechanics:**\
$$\displaystyle B_t = $$

**Slipperiness:**\
$$\displaystyle S_t = \begin{Bmatrix}0.8 & \text{if Slime}_t \\ 0.98 & \text{if Ice}_t & \text{and Packed Ice}_t & \text{and Frosted Ice}_t \\ 0.989 & \text{if Blue Ice}_t \\ 0.6 & \text{otherwise}\end{Bmatrix}$$

**Ground Velocity Formula:**\
$$\displaystyle VelX_t = $$\
$$\displaystyle VelZ_t = $$

**Airborne Velocity Formula:**\
$$\displaystyle VelX_t = $$\
$$\displaystyle VelZ_t = $$

### Other

**Fluids Velocity Formula:**\
🗿

---

## Taps setups
`/!\ NEEDS VERIFICATION /!\`
|Tap names                 |Distance given        |
|--------------------------|----------------------|
|walk                      |0.21585904            |
|shifted                   |0.06475772            |
|sprint                    |0.28061674            |
|walk + blocking           |0.04317181            |
|shifted + blocking        |0.01295154            |
|sprint + blocking         |0.05612335            |
|A7 walk                   |0.05888635            |
|A7 shifted                |0.01766591            |
|A7 sprint                 |0.07655225            |
|A7 walk + blocking        |0.01177727            |
|A7 shifted + blocking     |0.00353318            |
|A7 sprint + blocking      |0.01531045            |

+ Note: blocking is NOT blocking with shield. See [Blocking](#blocking) section.

Air taps aren't included because of no inertia, giving different result some of the times. So use A7 taps instead.

---

## Community
more coming soon!

### Parkour Servers
A list of publicly known Bedrock Edition parkour servers.

**Galaxite**\
Gamemode "Parkour Builders" on featured server Galaxite. Hosts player-made maps.
+ Status: Active
+ To access: it is there on servers tab.

**DPK Network**\
HPK-like realm. Host onejumps, segmented and rankup parkour.
+ Status: Active
+ To access: https://realms.gg/E9QjVQgLu4Y or enter below into realm code.
```
E9QjVQgLu4Y
```

**Rathian Realm**\
Hosts many rankup and segmented parkour maps and some onejump maps. With the main rankup ranks called "LooNey" and segmented ranks called "Shizuku".
+ Status: Active
+ To access: https://realms.gg/haw-NSqdtRc or enter below into realm code.
```
haw-NSqdtRc
```

**LetUS Server**\
Mainly hosts many timed parkours, often called "athletic". As well as segmented and rankup.
+ Status: Active
+ To access: https://realms.gg/rt_rzojusX3bUv8 or enter below into realm code.
```
rt_rzojusX3bUv8
```

**WagL Network**\
idk about this one
+ Status: probably Active

**Li9 Realm / Lithium Parkour**\
A parkour realm consisting of progressively harder 250 levels. More well known to Bedrock PvPers.
+ Status: Down

**MuttiServer**\
+ Status: Down

**Mineplex**\
Mineplex Housing. The first ever housing parkour server on Bedrock, before it shutdown and most of the builders moved on to Galaxite instead.
+ Status: Down

**Others**
+ Manacube parkour (have Bedrock support)
+ Tanaris Athletic
+ Asure
+ Lemonsour Athletic
+ Grow

---

