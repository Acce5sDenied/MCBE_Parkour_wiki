# Block Collisions

List of unique collision boxes for all collid-able blocks.

<ins>**Clarification**</ins>

**Model** is a how a block looks. It is purely visual.\
**Hitbox** is an interaction volume of a block.\
**Selection box** shows up when you hover over a block. This can accurately describe the collision box of some blocks.\
And the matter, **Collision box** is a solid volume of space that is not meant to be passed through.

> Some of these are outdated and not regulary checked, something may have changed through updates unnoticed.

### Simple collision boxes
Ordered by widths then height.
|Blocks                                 |Widths              |Heights    |Comments                                                          |Selection box accurate?|
|---------------------------------------|--------------------|-----------|------------------------------------------------------------------|-----------------------|
|Walls(4-sided)                         |1×1                 |1.5        |                                                                  |Yes\*
|Full Blocks                            |1×1                 |1          |                                                                  |Yes
|Farmland & Dirt Path                   |1×1                 |0.9375     |                                                                  |Yes
|Lectern                                |1×1                 |0.9        |                                                                  |Yes
|Soulsand & Mud                         |1×1                 |0.875      |                                                                  |No
|End Portal Frame                       |1×1                 |0.8125     |Adding eye does not change collision box.                         |Yes
|Enchanting Table                       |1×1                 |0.75       |                                                                  |Yes
|Stonecutter & Beds(half)               |1×1                 |0.5625     |                                                                  |Yes
|Slabs                                  |1×1                 |0.5        |Inversible.                                                       |Yes
|Campfires                              |1×1                 |0.4375     |                                                                  |Yes
|Daylight Detector                      |1×1                 |0.375      |                                                                  |Yes
|Straw bed(half)                        |1×1                 |0.25       |                                                                  |Yes
|`unstable` Big Dripleaf                |1×1                 |0.25       |Top:.9375 Bottom:.6875 Switches to `partial_tilt` when stood on.  |No
|Trapdoors                              |1×1                 |0.1825     |Orientable on all sides. Inversible.                              |Yes
|Redstone Repeater & Comparator         |1×1                 |0.125      |                                                                  |Yes
|`partial_tilt` Big Dripleaf            |1×1                 |0.125      |Top:.8125 Bottom:.6875 Transition state between `unstable` and `full_tilt` state which is intangible.|No
|Carpets                                |1×1                 |0.0625     |                                                                  |Yes
|Snow Layers                            |1×1                 |0.125(n-1) |1 layer: intangible 2:.125 3:.25 4:.375 5:.5 6:.625 7:.75 8:.875  |No
|Shelves                                |1×0.3125            |1          |Orientable. (4 varients)                                          |Yes
|Ladder                                 |1×0.1875            |1          |Orientable. (4 varients)                                          |Yes
|Doors(half)                            |1×0.1825            |1          |Orientable. (4 varients) Flippable.                               |Yes
|Chests(1-side connected)               |0.95×0.975          |0.95       |-0.25 on sides that is not connected to an another chest.         |Yes
|Chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.              |Yes
|Decorated Pot & Cactus & Honey Block   |0.875×0.875         |1          |Like egg on Java, centered.                                       |Yes
|Cake                                   |0.875×0.875         |0.5        |Centered. Adding candle on top does not change anything.          |Yes
|Eaten Cake                             |0.875×0.875         |0.5        |-0.125 on -X direction per consumption. Can be eaten 7 times.     |Yes
|Lilypad                                |0.875×0.875         |0.09375    |Centered. Half a pixel taller than carpet.                        |Yes
|Shelf Mushroom(big)                    |0.875×0.625         |0.4375     |Top:.6875 Bottom:.25 Orientable.(4 varients)                      |Yes\*
|Walls(3-sided)                         |0.75×1              |1.5        |Orientable.(4 varients)                                           |Yes\*
|Anvil                                  |0.75×1              |1          |Orientable on horizontal.(2 varients)                             |Yes
|Sniffer Egg                            |0.75×0.875          |1          |Longer side always extend on X axis ways.                         |Yes
|Walls(2-adjacent)                      |0.75×0.75           |1.5        |Orientable.(4 varients)                                           |Yes\*
|Grindstone                             |0.75×0.75           |1          |Centered. Can be placed on all sides.                             |Yes
|`base` Pointed Dripstone & Sulfur Spike|0.75×0.75           |1          |Collision box have [random offset](#/Pages/block_offsets.md) from center.    |Yes
|Chorus Stem                            |0.75×0.75           |0.875      |Centered.                                                         |Yes
|`medium` Pointed Dripstone & Sulfur Spike|0.625×0.625       |1          |Collision box have [random offset](#/Pages/block_offsets.md) from center.    |Yes
|Copper Golem Statues                   |0.625×0.625         |0.875      |Centered. Changing poses doesnt change collision.                 |Yes
|Dried Ghast                            |0.625×0.625         |0.625      |Centered.                                                         |Yes
|Amethyst Cluster                       |0.625×0.625         |0.4375     |Centered. Can be placed on all sides.                             |Yes
|Pitcher Pod(big)                       |0.625×0.625         |0.375      |Top:.3125 Bottom:-.0625 Centered. Have 1px downwards collision extending from the block it is occupying.|No
|Large Amethyst Bud                     |0.625×0.625         |0.3125     |Centered. Can be placed on all sides.                             |Yes
|Medium Amethyst Bud                    |0.625×0.625         |0.25       |Centered. Can be placed on all sides.                             |Yes
|Shelf Mushroom(small)                  |0.625×0.4375        |0.4375     |Top:.6875 Bottom:.25 Orientable.(4 varients)                      |Yes\*
|Turtle Eggs                            |0.6×0.6             |0.45       |Centered. Adding more eggs won't change the collision.            |Yes
|Walls(2-opposite)                      |0.5×1               |1.5        |Orientable.(4 varients) Needs another wall on top.                |Yes\*
|`standing` Bell                        |0.5×1               |0.8125     |Orientable on horizontal.(2 varients)                             |Yes
|`multiple` Bell(2 opposite connections)|0.5×1               |0.75       |Orientable on horizontal.(2 varients) Top:1.0 Bottom:.25          |Yes
|`side` Bell                            |0.5×0.8125          |0.6875     |Orientable.(4 varients) Top:.9375 Bottom:.25                      |Yes
|Walls(1-sided)                         |0.5×0.75            |1.5        |Orientable.(4 varients)                                           |Yes\*
|Walls                                  |0.5×0.5             |1.5        |Centered.                                                         |Yes\*
|`frustum` Pointed Dripstone & Sulfur Spike|0.5×0.5          |1          |Collision box have [random offset](#/Pages/block_offsets.md) from center.    |Yes
|`hanging` Bell                         |0.5×0.5             |0.75       |Centered. Top:1.0 Bottom:.0.25                                    |Yes
|Cocoa(big)                             |0.5×0.5             |0.5625     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.1875  |Yes
|Conduit & Heavy Core & Heads (ground)  |0.5×0.5             |0.5        |Centered.                                                         |Yes
|Heads(wall)                            |0.5×0.5             |0.5        |Centered. Orientable.(4 varients)                                 |Yes
|Small Amethyst Bud                     |0.5×0.5             |0.1875     |Centered. Can be placed on all sides.                             |Yes
|Panes & Bars (1-sided)                 |0.5×0.125           |1          |Orientable.(4 varients)                                           |No
|Thin wall(2-opposite)                  |0.375×1             |1.5        |Orientable on horizontal.(2 varients)                             |Yes\*
|`merge` Pointed Dripstone & Sulfur Spike|0.375×0.375        |1          |Collision box have [random offset](#/Pages/block_offsets.md) from center.    |Yes
|`tip` Pointed Dripstone & Sulfur Spike |0.375×0.375         |0.6875     |Collision box have [random offset](#/Pages/block_offsets.md) from center. Inversible.|Yes
|Lanterns(ground)                       |0.375×0.375         |0.5        |Centered.                                                         |Yes
|Lanterns(hanging)                      |0.375×0.375         |0.5        |Top:.625 Bottom:.125 Centered.                                    |Yes
|Cocoa(medium)                          |0.375×0.375         |0.4375     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.3125  |Yes
|Flower Pot                             |0.375×0.375         |0.375      |Centered.                                                         |Yes
|Pitcher Pod(small)                     |0.375×0.375         |0.25       |Top:.1875 Bottom:-.0625 Centered. Have 1px downwards collision extending from the block it is occupying.|Yes
|4 Candles                              |0.3125×0.375        |0.375      |+Z side matches fence, the rest match a flower pot.               |Yes
|3 Candles                              |0.3125×0.3125       |0.375      |+Z and -X side match a flower pot, -Z and -X match a fence.       |Yes
|Fence Gates                            |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |Yes\*
|Fences(2-opposite)                     |0.25×1              |1.5        |Orientable on horizontal.(2 varients)                             |Yes\*
|`"hanging"=false` Hanging Signs        |0.25×1              |0.125      |Only the handle(?) part has collision. Orientable.(2 varients) `"Hanging"=true` varient is intangible.|No
|Fences(1-sided)                        |0.25×0.625          |1.5        |Orientable.(4 varients)                                           |Yes\*
|Fences                                 |0.25×0.25           |1.5        |Centered.                                                         |Yes\*
|End Rod & Lightning Rods               |0.25×0.25           |1          |Centered. Can be placed on all sides.                             |Yes
|Cocoa(small)                           |0.25×0.25           |0.3125     |Orientable.(4 varients) 1px away from wall. Top:.75 Bottom:.4375  |Yes
|2 Candles                              |0.1875×0.375        |0.375      |+Z side matches fence, -Z side matches a pane, +X and -X match a flower pot.|Yes
|Chains                                 |0.1875×0.1875       |1          |Centered. Can be placed on all sides.                             |Yes
|`thick` Bamboo                         |0.1875×0.1875       |1          |Collision box have [random offset](#/Pages/block_offsets.md) from center.    |Yes
|Panes & Bars (2-opposite)              |0.125×1             |1          |Centered. Orientable.(2 varients)                                 |Yes
|Panes & Bars                           |0.125×0.125         |1          |Centered.                                                         |Yes
|`thin` Bamboo                          |0.125×0.125         |1          |Collision box have [random offset](#/Pages/block_offsets.md) from center.    |Yes
|Singular Candle                        |0.125×0.125         |0.375      |Centered.                                                         |Yes

**Note**: Yes\* in last column denotes the block has an accurate selection box to it's collision box except height. Mostly walls and fences have this property.

### Composite collision boxes
Alphabetical order.
|Blocks                    |Widths                          |Heights                    |Comment                                        |
|--------------------------|--------------------------------|---------------------------|-----------------------------------------------|
|Brewing Stand             |Base:1×1 Rod:0.125×0.125        |Base:.125 Rod:.875         |Centered.                                      |
|Caudron                   |Base:1×1 Walls:0.125 thick      |Base:.3125 Walls:1         |                                               |
|Composter                 |Base:1×1 Walls:0.125 thick      |Base:.125 Walls:1          |Compost heights: `0.0625 + 0.125 * n`          |
|Fences(4-sided)           |Post:0.25×0.25 Sides:0.25×0.375 |1.5                        |                                               |
|Fences(3-sided)           |Post:0.25×0.25 Sides:0.25×0.375 |1.5                        |Orientable.(4 varients)                        |
|Fences(2-adjacent)        |Post:0.25×0.25 Sides:0.25×0.375 |1.5                        |Orientable.(4 varients)                        |
|Hopper<sup>[Todo]</sup>   |                                |                           |                                               |
|Panes & Bars(4-sided)     |Sides:0.125×0.5                 |1                          |                                               |
|Panes & Bars(3-sided)     |Sides:0.125×0.5                 |1                          |Orientable.(4 varients)                        |
|Panes & Bars(2-adjacent)  |Sides:0.125×0.5                 |1                          |Orientable.(4 varients) Missing 1px on the outer corner like Java 1.8.|
|Piston Head               |Head:1×1 Arm:0.375×0.375        |Head:.25 Arm:1             |Orientable, inversible.(6 varients)            |
|Stairs(normal)            |Base:1×1 Top:1×0.5              |Base:.5 Top:1              |Orientable, inversible.(8 varients)            |
|Stairs(outer)             |Base:1×1 Top:0.5×0.5            |Base:.5 Top:1              |Orientable, inversible.(8 varients)            |
|Stairs(inner)             |Base:1×1 Top:1×0.5              |Base:.5 Top:1              |This have exactly the same collision as a normal stair. When an adjacent stair is placed (to convert into this varient), only the visual model changes. Leaving a 0.5×0.5×0.5 intangible zone.|

### Other collision boxes
Stuff that have a collision box that does not quite belong in the 2 above catagories.
|Thing                  |Widths                    |Heights                              |Comment                                    |
|-----------------------|--------------------------|-------------------------------------|-------------------------------------------|
|Boats                  |1.4×1.4                   |0.455                                |Fun fact: you can make a perfect squeeze with boat + block.
|Border Block           |1×1                       |1.5 *or* infinitely high up and below|Bedrock exclusive mapmaking block. [**Minecraft wiki article**](https://minecraft.wiki/w/Border)
|Happy Ghasts           |4×4                       |?<sup>[Todo]</sup>                   |Solidifies when a player is close to it. Collision is not aligned to pixel grid.
|Shulker Box            |1×1                       |1 *or* 1.5                           |1.5 high when opened, Orientable, inversible.(6 varients)
|Shulker Mob            |0.9998×0.9998             |0.98                                 |Not orientable. Centered. Base touch the ground. When opened, that side extends out `~0.2060919`

### Historic collision boxes
Collision boxes that have been changed throughout many update cycles.<sup>[Todo]</sup>
|Blocks                   |Widths                          |Heights                  |Versions                |Comments                                        |
|-------------------------|--------------------------------|-------------------------|------------------------|------------------------------------------------|
|Trial spawner            |0.9998×0.9998                   |0.9998                   |Early 1.21 versions     |-0.0001 on each side. Used to effectively chain blips long ago.|
|Lilypad                  |1×1                             |0.015625                 |Pre 1.21.70             |1/4 of a pixel tall, like Java 1.8.             |
