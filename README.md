# MCBE_Parkour_wiki
A wiki for documenting minecraft bedrock movement mechanics. As of game version `1.21.12x`

pre-pre-alpha stage, I don't want the language to be TOO formal.

uhmm

#### TODO
+ block hitboxes
+ numbers
+ player control
+ bedrock mechanics
+ more

## Essentials
tick

## Player control
There are 2 major ways the player can move.
#### Button controls
WASD
#### Joystick controls
360

-----
### Mouse movement
ok

## Hitboxes
List of collision and effect box for all blocks.
### Simple collision boxes
|block                                  |widths              |heights    |comment                                                           |
|---------------------------------------|--------------------|-----------|------------------------------------------------------------------|
|full block                             |1×1                 |1          |                                                                  |
|slab                                   |1×1                 |0.5        |inversible.                                                       |
|cobweb & powdered snow                 |0.998×0.998         |0.998      |-0.001 on each side.                                              |
|chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.              |
|decorated pot & cactus & honey block   |0.875×0.875         |1          |like egg on java, centered.                                       |
|cake                                   |0.875×0.875         |0.5        |centered.                                                         |
|lilypad                                |0.875×0.875         |0.9375     |centered.
|anvil                                  |0.75×1              |1          |orientable on horizontal.(2 varients)                             |
|sniffer egg                            |0.75×0.875          |1          |longer side always extend on X axis.                              |
|grindstone                             |0.75×0.75           |1          |centered.                                                         |
|chorus stem                            |0.75×0.75           |0.875      |centered.                                                         |
|dried ghast                            |0.625×0.625         |0.625      |centered.                                                         |
|amethyst cluster                       |0.625×0.625         |0.4375     |centered. Can be placed on all sides.                             |
|large amethyst bud                     |0.625×0.625         |0.3125     |centered. Can be placed on all sides.                             |
|medium amethyst bud                    |0.625×0.625         |0.25       |centered. Can be placed on all sides.                             |
|bell(ground)                           |0.5×1               |0.8125     |orientable on horizontal.(2 varients)                             |
|walls                                  |0.5×0.5             |1.5        |centered.                                                         |
|conduit & heavy core & heads(ground)   |0.5×0.5             |0.5        |centered.                                                         |
|heads(wall)                            |0.5×0.5             |0.5        |centered. orientable.(4 varients)                                 |
|big cocoa                              |0.5×0.5             |0.5625     |orientable.(4 varients) 1px away from wall. top:.75 bottom:.1875  |
|small amethyst bud                     |0.5×0.5             |0.1875     |centered. Can be placed on all sides.                             |
|thin wall(2 opposite)                  |0.375×1             |1.5        |orientable on horizontal.(2 varients)                             |
|lanterns(ground)                       |0.375×0.375         |0.5        |centered.                                                         |
|lanterns(hanging)                      |0.375×0.375         |0.5        |top:.625 bottom:.125                                              |
|flower pot & 4 candles                 |0.375×0.375         |0.375      |centered.                                                         |
|fence gate                             |0.25×1              |1.5        |orientable on horizontal.(2 varients)                             |
|hanging signs                          |0.25×1              |0.125      |only the handle(?) part has collision. orientable.                |
|fences                                 |0.25×0.25           |1.5        |centered.                                                         |
|end rod & lightning rods               |0.25×0.25           |1          |centered.                                                         |
|chains                                 |0.1875×0.1875       |1          |centered.                                                         |

-----
### Composite collision boxes

## Movement mechanics
+ yxz collision order
#### player collision block
+ normally is 0.6×0.6 horizontally and 1.8 vertically.
+ while shifted is 0.6×0.6 horizontally and 1.49 vertically.

## Bedrock differences
Features exclusive to Bedrock edition of Minecraft that does not appear in Java.
+ strafing don't give the 2% boost (ofc)
+ no inertia i think
+ position is stored in floats
+ no bursting, shift glitch
+ shifting would only goes to 0.025 off edge.

## Numbers
I did not look at the codes, I got these by testing.
#### Airborne
+ horizontal drag: 0.91
+ walk acceleration: 0.0196
+ sprint acceleration:
+ gravity acceleration:
#### Flying
#### Normal block
+ horizontal drag: 0.546
+ shifted acceleration: 0.0294
+ walk acceleration: 0.098
+ sprint acceleration
+ sprint jump acceleration
+ jump vertical acceleration
#### Soulsand
#### Honey block
#### Slime block
#### Ices
#### Catch type blocks
#### Water
#### Lava

## Potion effects

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

+ note: blocking includes shielding, eating or drinking, charging weapon and spyglassing.
-----
Air taps are not included as well as jam taps and I highly discourage the use of it. As Bedrock have no inertia. This means tapping in a different air tick or different airtime would not give the same result.
But don't be fooled. I've invented new a bedrock-friendly way of air tapping—A7 taps. It is tapping on air but on the last tick before hitting ground. This way it would now give the same distance regardless of airtime. Downside is.. it is hard to do and requires a bit of muscle memory to tap on the correct tick.

again, i mothballed these, so don't take them as 100%
|tap names                 |distance given        |
|--------------------------|----------------------|
|A7 walk                   |0.05888635            |
|A7 shifted                |0.01766591            |
|A7 sprint                 |0.07655225            |
|A7 walk + blocking        |0.01177727            |
|A7 shifted + blocking     |0.00353318            |
|A7 sprint + blocking      |0.01531045            |




