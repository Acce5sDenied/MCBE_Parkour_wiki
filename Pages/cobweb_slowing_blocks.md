# Cobweb & Slowing Blocks

Cobweb, Sweet berry bush and Powdered snow have their own unique slowdown effect on an entity. They also share the same **Effect box** of `0.998×0.998×0.998`.

Being `1×1×1` retracted `0.001` inwards on each sides.

Entity will receive effect when any part of their collision box intersects this region.

### Cobweb
**Properties:**
- Grants `25%` horizontal acceleration.
- Grants `5%` vertical acceleration.
- All velocity components get reset to `0` upon every tick.

### Sweet Berry Bush
**Properties:**
- Grants `80%` horizontal acceleration.
- Grants `75%` vertical acceleration.
- All velocity components get reset to `0` upon every tick.

### Powdered Snow
**Properties:**<sup>[Todo]</sup>
- Grants `90%` horizontal acceleration.
- Grants `150%` vertical acceleration.
- All velocity components get reset to `0` upon every tick.
- Additionally, freezing progress also slows down the player:
  
  Freezing progress `p` (bounded `[0, 1]`) increases by `1/140` per tick while the player is touching powdered snow, and decreases by `2/140` per tick when they are outside.
  
  The player's horizontal acceleration is then multiplied by `1 - 0.5*p`.

### Soulsand
Soulsand however, doesn't share the same effect region as the three previous blocks.

**Effect conditions:**\
When grounded and the player's position is within the bounding `1×1×1` volume lifted up by `0.1` then this property is applied.

Essentially the same as how the [Slipperiness](/Pages/slipperiness.md) effect is taken.

**Property:**\
Grants `54.4%` horizontal acceleration.

This is not at all like Java 1.8.9 where it drags the player instead, effect is also not accumulative with many soulsand blocks.