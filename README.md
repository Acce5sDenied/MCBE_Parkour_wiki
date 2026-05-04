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
+ [X] historic collision boxes
+ [ ] movement
+ [X] camera
+ [X] sensitivity
+ [X] joystick
+ [ ] sneaking
+ [ ] crawling
+ [ ] lots of glitches
+ [ ] honey
+ [ ] slime
+ [ ] powdered snow
+ [ ] climb blocks
+ [ ] scaffolding
+ [ ] water/lava
+ [ ] movement formulas (for handling cases that many effects stack together)
+ [X] understanding what caused 11 strafe
+ [ ] migrate some to wiki page once im done

</details>

---

## Resources

Visit [**MCPK wiki**](https://www.mcpk.wiki/wiki/Main_Page) for Java parkour documentation.

Visit [**ZPK 2**](https://github.com/mihiro13/ZPK_2) repo for parkour addon. Like MPK, Cyv.

Join [**DPK Central Discord**](https://discord.gg/AENkWECXh8) for central hub about Bedrock Edition Parkour.

---

## Bedrock Differences
Comparing movement related stuff of Bedrock Edition to Java Edition 1.8 (standard for parkour).
+ Strafing don't give the 2% boost in acceleration, unlike Java Edition. Same goes for strafe shifting.
+ No presence of inertia AKA momentum threshold.
+ Position and many more values is stored in floats (32-bit). This explains many goofy glitches on bedrock.
+ Trigonometry directly uses $\sin()$ and $\cos()$, so there is no such "significant angles" and "half angles" in Bedrock.
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

### Camera movement
//todo\
Cool fact: Pitch is locked in range [`-89.9°` to `89.9°`]

#### Sensitivity formulas
Bedrock uses sensitivity in range `0 - 100` unlike Java's `0 - 200`\
Let $\displaystyle v_{value} = 0.051149105 \times \text{Sensitivity} ^ {0.6125}$ and the formulas go as follow:

**Mouse**\
$$\displaystyle \Delta \text{Yaw} = \text{PixelsTurned} \times \left(0.25 + v_{value} \right) ^ 3 \times \frac{1920}{\text{WindowWidth}}$$\
`/!\ NEEDS VERIFICATION /!\`

**Touch**\
$$\displaystyle \Delta \text{Yaw} = \text{PixelsTurned} \times \frac{32}{93275} \times \left(1.6 + 6.4 \times v_{value}\right) ^ {3.6}$$\
`/!\ WIP, for my device type (2340 * 1080) /!\`

**Joystick** //todo

#### Spyglass
Spyglass damping is a setting in range `0 - 100`. This affects camera movement speed while using a spyglass. 0 being no effect, 100 being full effect.\
<img src="/Images/controls_spyglass.svg" alt="spyglass effect formula" height="48px">\
Values in range `0 - 5` have no effect. Camera panning is 20x slower at value 100.

---

## Block Collisions
List of unique collision boxes of all blocks. For effect box for blocks like cobweb, please see the [Block Mechanics](#block-mechanics) section.\
`/!\ OUTDATED, SOMETHING MAY HAVE CHANGED /!\`

<ins>**Clarification**</ins>

**Model** is a how a block looks. It is purely visual.\
**Hitbox** is an interaction volume of a block.\
**Selection box** shows up when you hover over a block. This can accurately describe the collision box of some blocks.\
Finally, **Collision box** is a solid volume of space that is not meant to pass through.

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
|Composter                 |Base:1×1 Walls:0.125 thick      |Base:.125 Walls:1          |Compost heights: `0.0625 + 0.125 * n`          |
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
|Trial spawner            |0.9998×0.9998                   |0.9998                   |Early 1.21 versions     |-0.0001 on each side. Used to effectively chain blips long ago.|
|Lilypad                  |1×1                             |0.015625                 |Pre 1.21.70             |1/4 of a pixel tall, like Java 1.8.             |

</details>

---

## Movement mechanics

#### Collision
Y -> X -> Z collision check order.\
**Player's collision box**\
Normally is `0.6×0.6` horizontally and `1.8` vertically.\
While crouched is `0.6×0.6` horizontally and `1.49` vertically.\
While crawling, swimming or flying with elytra is `0.6×0.6` horizontally and `0.6` vertically.

#### Stepping
Stepping stuff, blips, grinds, jump cancel. Same as Java 1.8.\
`/!\ NEEDS VERIFICATION /!\`

#### Sneaking
There exists a `0.025` margin around any edge that a player can't sneak to. Past this point, movement from sneaking is cancelled entirely.//todo

#### Crawling
//todo

#### 16b/t speed limit
A player have 16 b/t absolute speed cap (pythagoras of 3 axes). If over 16, your velocity on 3 axes will be scaled down with equal proportion so that absolute velocity = 16.

---

## Glitches
Movement related glitches.

**Triple component strafe**\
Is a glitch that allows to strafe with 3 input component. Normal strafe is made by 2 components (e.g. W + D). But with this glitch, you can do for example, W + W + D. The angle is `~26°` off the 4 main directions by this calculation,\
$$\displaystyle \text{atan2}(\underset{\text{1st component}}{\underbrace{2}},\overset{\text{2nd component}}{\overbrace{1}}) = \text{arctan}\left(\frac{1}{2}\right) \approx 26.565^{\circ}$$\
This glitch does not give a speed/acceleration boost, but can be used for easier jump strategies (e.g. easier jump angle, noturn, chained triple neos,...). Can be activated by using D-pad touch control, pressing in the region connecting W/S button and strafe button. Or use multiple input devices to combine inputs.

**Hitbox manipulation**\
Is a precision related glitch. Since bedrock uses 32-bit arithmetic, this is millions of times more effective than Java's. By crossing a coordinates of multiple of 2, hitbox of that axis shrinks/grows by an insignificant amount. But they stack up over time.(Can be reset by relog, switching dimensions, crouching,...) Can be abused to do various things.

**Block clipping & Inaccurate collision & Jittering at large coordinates**\
Is another precision related glitches. Again, Bedrock stores position in 32-bit. And as a nature of floating point arithmetic, they represents real numbers but with limited precision. This precision worsens at every power of 2. At sufficiently large values you can notice discrete jump between values. Explaining the jitteriness at large coordinates.\
Intuitively you can think of a grid and your position can only snap to the grid. Not only your position though, block collsion box also snaps to this grid aswell. Explaining the inaccuracy in collision. (You can see your coordinates not quite lining up with actual block collision box)\
And at extreme conditions where everything line up in your favor, you can clip through a solid block.

### Patched Glitches

**11 Strafe or 10 Strafe & Glitches regarding old joystick**\
Was introduced in `1.19.3` and patched in `1.21.20`. Caused by touchscreen joystick. [controller joystick too?] Here is all the known
infomations about it :)

<details>
  <summary><ins>Implimentation</ins></summary>

+ *Step 1 :*\
  Game takes joystick center position and touch position. Calculate signed difference between them. ($dx$ and $dy$)
+ *Step 2 :*\
  $dx$ and $dy$ is later normalized to be in range [`-1, 1`]. With 1 being joystick's radius. Creating $x$, $y$ and untransformed vector $\mathbf{v}$.\
  $x = dx \times ScalingFactor$ same process goes for $y$.\
  - Note: $\left|\left|\mathbf{v}\right|\right|$ is $\sqrt{x^2+y^2}$.
  > Case $$0.3 \leq \left|\left|\mathbf{v}\right|\right| \leq 1$$ then $$\mathbf{v} = (x,y)$$\
  > Case $$\left|\left|\mathbf{v}\right|\right| > 1$$ then $$\displaystyle \mathbf{v} = \left(\frac{x}{\left|\left|\mathbf{v}\right|\right|},\frac{y}{\left|\left|\mathbf{v}\right|\right|}\right)$$\
  > Case $$\left|\left|\mathbf{v}\right|\right| < 0.3$$ then player's stopping condition is applied.
+ *Step 3 :*\
  A transformation is applied to $\mathbf{v}$. (inherit $x$ and $y$ from $\mathbf{v}$ of previous calculation.)

  $$\mathbf{v'} = 0.98 \times \left(x+\frac{0.3x\cdot(1-|x|)}{\sqrt{x^2+y^2}} , y+\frac{0.3y\cdot(1-|y|)}{\sqrt{x^2+y^2}}\right)$$

  If player is holding sprint, Y component of $\mathbf{v}$ is overridden to be $\text{sign}(y')$.\
  And if $\left|\left|\mathbf{v'}\right|\right| > 1$ then $$\displaystyle \mathbf{v'}_{\text{final}} = \frac{\mathbf{v'}}{\left|\left|\mathbf{v'}\right|\right|}$$. (Cap it at magnitude 1.)

  Key details of this transformation:
  - Non-linear and angles are not preserved.
  - For no-sprint, it bulges out around multiples of 45°.
  - For sprint, it makes 2 cones and maximum sideways angle is 45°. It also makes a flat area at top and bottom. All because Y component (forwards & backwards) is forced to be either `1 or -1`. //What happens at 0? It is technically possible.

  [Replication on Desmos.](https://www.desmos.com/calculator/a9rhnjx5iw)\
  Transformation visualizations. No sprint (left) & Sprint (right) :
  
  <img src="/Images/11strafe_nosprint_transform.gif" alt="nospint transformation gif" height="240px"> <img src="/Images/11strafe_sprint_transform.gif" alt="sprint transformation gif" height="240px">

  Variable initial ring size. (Full transformation) No sprint (left) & Sprint (right) :

  <img src="/Images/11strafe_nosprint_magnitudering.gif" alt="nosprint magnitude gif" height="240px"> <img src="/Images/11strafe_sprint_magnitudering.gif" alt="sprint magnitude gif" height="240px">

</details>

<details>
  <summary><ins>Glitches</ins></summary>

+ *Glitch 1: Unintended angle inaccuracy*\
  No sprint (left) & Sprint (right).\
  X axis is intended input angle. (Angle of your touch point relative to joystick center.)\
  Y axis is inaccuracy. (Signed difference between input angle and outputted angle.)\
  Lightest line is magnitude 0.3 and most vibrant is magnitude 1. (With 0.05 step between them.)
  
  <img src="/Images/11strafe_nosprint_angleinacc.png" alt="nosprint angle difference plot" height="240px"> <img src="/Images/11strafe_sprint_angleinacc.png" alt="sprint angle difference plot" height="240px">

  **Particular values:** For no sprint, at input angle `20.273°` hit the peak inaccuracy of `-3.175°`. And for sprint, at input angle `15.206°` hit the extremum inaccuracy of `-2.556°` before peaking inaccuracy at the most sideways angle `90°` of `45°`. All said is at magnitude 1, but at magnitude 0.3 with sprint on, angling your thumb at the most sideways angle, you hit the most inaccuracy of `60.409°` from intended angle.
  
+ *Glitch 2: Speed boost*
  
  <img src="/Images/11strafe_nosprint.png" alt="nosprint magnitude" height="240px"> <img src="/Images/11strafe_sprint.png" alt="sprint magnitude" height="240px">

  For no sprint, angle `0, 90, 180, 270` have magnitude of `0.98` (normal). And magnitude = 1 at angle 90n &pm; `15.83°` (`13.06°` input angle).\
  And for sprint, angle `0, 180` have magnitude of `0.98` (normal). And magnitude = 1 at angle 180n &pm; `11.48°` (`9.36°` input angle).\
  At these angles or any angles between them have a $1/0.98 \approx 2.04$% acceleration boost, similar to Java's 45 strafe. You also can gain advantage through them the same way as Java's 45 strafe, push joystick at angle with the boost and move camera in the opposite direction to counteract the sideways movement from joystick.\
  When performing 45 strafe while sprint jumping, you cannot let camera stay at 45° on jump tick. Because the boost from jumping will throw you off sideways, losing speed. So you have to turn to 0° and stop holding strafe button on these specific ticks.\
  But on Bedrock when performing 11 strafe, you do not need to turn to 0°. Since the 11° angle is close to 0°, you can let the joystick stay at 11.48° and don't lose as much speed. And adjust your camera to `4.52°` in the opposite direction to counteract the sideways movement. This is `0.3117%` better than just turning to 0° and joystick 0°.

  > To effectively perform 11 strafe on flat ground, let your thumb stay at 9.36° on the joystick. On air, turn your camera to -11.48°. And on jump tick, turn your camera to -4.52°.

- Note: I'm using the convention that 0 degrees start from top-middle and goes on clockwise.

</details>

<details>
  <summary><ins>History & Discovery</ins></summary>
//todo
</details>

**Backwards sprinting**\
//todo

**Ground sprint delay**\
//todo

**Subtle wall clipping**\
i think when movement speed is so small. collision check is ignored. //todo

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
`81 + 2/3` times less acceleration or `~0.0122449x` acceleration.
+ shifted accerelation: `0.0036`
+ walk acceleration: `0.012`
+ sprint acceleration: `0.0156`

#### Shield Blocking
No effect on movement, unlike in Java where it does.

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
+ bouncy yippee

#### Ices
+ Blue ice slipperiness factor `0.989`
+ Packed ice slipperiness factor `0.98`
+ Ice slipperiness factor `0.98`
+ Frosted ice slipperiness factor `0.98`

#### Catch/Climb type blocks
These group of blocks include ladders, vines, cave vines and twisted vines.\
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

**Speed**\
`+20%` acceleration per level of speed. Does not apply when airborne. In the case where speed is on with slowness, speed always get applied first.

**Slowness**\
`-15%` acceleration per level of slowness. Does not apply when airborne.

**Jump boost**\
`+0.1` jump acceleration per level of jump boost.

**Slow falling**\
`0.01` Gravity acceleration for all levels of slow falling. Reaching terminal velocity of `0.49`.\
(i think it only applies 1 tick after exiting ground)

**Levitation**\
$$\displaystyle VelY_t = VelY_{t-1} \times 0.784 + 0.0098 \times Level$$\
Basically floats up with acceleration of `0.0098` multiplied by levitation level. And with drag of `0.784`.

**Blindness**\
Activating sprint is not possible while effect is active. You can still keep sprint even when effect is received.

**Soul speed**\
$\displaystyle 1.3 + Level \times 0.105$ times acceleration. Only works on soul sand and soul soil as ground.

**Depth strider**\
For walking, `+133.33%` acceleration per level of depth strider.\
For sprinting, `+183.33%` acceleration per level of depth strider.\
`/!\ NEEDS VERIFICATION /!\`

**Swift sneak**\
`+50%` acceleration per level of swift sneak. Only works while crouching or crawling.

---

## Movement formulas
//todo `/!\ DRAFT, DO NOT TRUST ANY OF THESE /!\`\
$\displaystyle \cdots_{t}$ means of current tick and $\displaystyle \cdots_{t-1}$ means of previous tick, etc...

#### Variables
$\displaystyle Yaw_t$ is player's yaw (left-right facing).\
$\displaystyle Pitch_t$ is player's pitch (up-down facing).\
$\displaystyle Dir_t$ is player's direction (input and rotation).

### Vertical

**Jump Acceleration:**\
$$\displaystyle A_t = \left(0.42 + 0.1 \times JumpBoostLevel_t\right) \times \begin{Bmatrix}0.6 & \text{if Honey} \\ 1 & \text{otherwise}\end{Bmatrix}$$

**Gravity:**\
$$\displaystyle G_t = \begin{cases}0.01 & \text{if SlowFalling}_t \\ 0.08 & \text{otherwise}\end{cases}$$

**Velocity Formula:**\
$$\displaystyle VelY_t = \underset{\text{Momentum}}{\underbrace{\left(VelY_{t-1} - G_{t-1}\right) \times 0.98 \times \begin{Bmatrix}0 & \text{if collided on Y}_t \\ 1 & \text{otherwise}\end{Bmatrix}}} + \underset{\text{Acceleration}}{\underbrace{\begin{Bmatrix} A_t & \text{if Jumping}_t \\ 0 & \text{otherwise} \end{Bmatrix}}}$$

**Levitation Velocity Formula:**\
$$\displaystyle VelY_t = \underset{\text{Momentum}}{\underbrace{VelY_{t-1} \times 0.8 \times 0.98 \times \begin{Bmatrix}0 & \text{if collided on Y}_t \\ 1 & \text{otherwise}\end{Bmatrix}}} + \underset{\text{Acceleration}}{\underbrace{0.0098 \times LevitationLevel_t}}$$

### Horizontal

**Acceleration:**\
$$\displaystyle A_t = \begin{Bmatrix}1.274 & \text{if Sprinting}_t \\ 0.98 & \text{if Walking}_t \\ 0.294 & \text{if Sneaking}_t \\ 0.0 & \text{if Stopping}_t\end{Bmatrix} \times \begin{Bmatrix}0.02 & \text{if Airborne}_t \\ 3/245 & \text{if Blocking}_t \\ 3/12250 & \text{if Airborne}_t & \text{and Blocking}_t \\ 0.1 & \text{otherwise}\end{Bmatrix}$$

**Effects & Enchants:**\
$$\displaystyle E_t = (1 + 0.2 \times SpeedLevel_t) \times (1 - 0.15 \times SlownessLevel_t)$$

**Block Mechanics:**\
$$\displaystyle B_t = $$

**Slipperiness:**\
$$\displaystyle S_t = \begin{cases}0.8 & \text{if Slime}_t \\ 0.98 & \text{if Ice}_t \; \text{and Packed Ice}_t \; \text{and Frosted Ice}_t \\ 0.989 & \text{if Blue Ice}_t \\ 0.6 & \text{otherwise}\end{cases}$$

**Ground Velocity Formula:**\
$$\displaystyle VelX_t = $$\
$$\displaystyle VelZ_t = $$

**Airborne Velocity Formula:**\
$$\displaystyle VelX_t = $$\
$$\displaystyle VelZ_t = $$

### Other
**Absolute Velocity Formula:**\
$$\displaystyle AbsVel_t = \sqrt{VelX_t^2+VelY_t^2+VelZ_t^2}$$

**Positions Formula:**\
$$\displaystyle PosX_t = \begin{cases}PosX_{t-1} + VelX_t & \text{if AbsVel}_t \leq 16 \\ PosX_{t-1} + VelX_t \times \displaystyle \frac{16}{AbsVel_t} & \text{if AbsVel}_t > 16\end{cases}$$\
$\displaystyle PosY_t$ and $\displaystyle PosZ_t$ is also obtained the same way as above.

**Fluids Velocity Formula:**\
🗿

---

## Strategies

### Tap setups
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

## Miscellanious
Uncatagorized stuff.
+ **Coordinates system** is inverted on X axis, going left being positive and right being negative. Similar to Java edition.
+ **Block push acceleration**. When you're inside a block, it'll attempt to push you out with acceleration of `0.1`.

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
+ Status: Down by 29th April 2026.
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
+ Status: Down by early 2026.

**MuttiServer**\
dont know this one too
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
+ Tornadoo

---

This wiki is a hobby project to showcase the technical parkour infos of Minecraft Bedrock Edition.\
This is an extension of MCPK wiki.\
Not affiliated or associated with Mojang or Microsoft.



