# MCBE_Parkour_wiki
A wiki for documenting minecraft bedrock movement mechanics. As of game version 1.21.100

pre-pre-alpha stage

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
### Mouse movement
ok

## Hitboxes
List of collision and effect box for all blocks.
### Simple collision boxes
|block                                  |widths              |heights    |comment                                                  |
|---------------------------------------|--------------------|-----------|---------------------------------------------------------|
|full block                             |1×1                 |1          |                                                         |
|slab                                   |1×1                 |0.5        |inversible.                                              |
|cobweb & powdered snow                 |0.998×0.998         |0.998      |-0.001 on each side.                                     |
|chests                                 |0.95×0.95           |0.95       |-0.25 on each side, centered, base touch the ground.     |
|decorated pot & cactus & honey block   |0.875×0.875         |1          |like egg on java, centered.                              |
|cake                                   |0.875×0.875         |0.5        |centered.                                                |
|anvil                                  |0.75×1              |1          |orientable on horizontal.(2 varients)                    |
|sniffer egg                            |0.75×0.875          |1          |longer side always extend on X axis.                     |
|grindstone                             |0.75×0.75           |1          |centered.                                                |
|chorus stem                            |0.75×0.75           |0.875      |centered.                                                |
|dried ghast                            |0.625×0.625         |0.625      |centered.                                                |
|amethyst cluster                       |0.625×0.625         |0.4375     |centered. Can be placed on all sides.                    |
|large amethyst bud                     |0.625×0.625         |0.3125     |centered. Can be placed on all sides.                    |
|medium amethyst bud                    |0.625×0.625         |0.25       |centered. Can be placed on all sides.                    |
|bell(on ground)                        |0.5×1               |1          |orientable on horizontal.(2 varients)                    |
|wall                                   |0.5×0.5             |1.5        |centered.                                                |
|conduit & heavy core & heads(on ground)|0.5×0.5             |0.5        |centered.                                                |
|heads(on wall)                         |0.5×0.5             |0.5        |centered. Orientable.

### Composite collision boxes

## Movement mechanics
+ xz collision order
+ no inertia i think
+ no bursting, shift glitch
+ use floats not double(i believe)

## Bedrock exclusive mechanics
Features exclusive to Bedrock edition of Minecraft that does not appear in Java.

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
