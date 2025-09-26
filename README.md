# MCBE_Parkour_wiki
A wiki for documenting minecraft bedrock movement mechanics.

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
|cake                                   |0.875×0.875         |0.5        |centered, base touch the ground.                         |
|anvil                                  |0.75×1              |1          |orientable on horizontal.(2 varients)                    |
|sniffer egg                            |0.75×0.875          |1          |longer side always extend on X axis.                     |
|grindstone                             |0.75×0.75           |1          |centered.                                                |
|chorus stem                            |0.75×0.75           |0.875      |centered.                                                |

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
