# Slime & Honey Block

Both blocks have important unique properties which are used in parkouring.

### Slime Block
**1. Slipperiness Property:**\
See [Slipperiness](/Pages/slipperiness.md). Slime has a slipperiness factor of `0.8`.

**2. Bouncy-ness Property:**\
See [Bouncy-ness](/Pages/bouncy-ness.md). Slime has a bouncy-ness factor of `1`

**3. Slowdown Property:**\
At the beginning of every tick, a player standing on a block has their vertical motion reset to $V_y = 0$. Gravity then gives them a downward speed of $V_y=0.98 \cdot (V_y+g)$, with `g` defaulting to `-0.08`.

Slime applies its slowdown on top of that:

If the player is standing on slime's surface or any surface upto `+0.2` height, **is not sneaking**, and $|V_y|<0.1$, their horizontal motion is multiplied by $f = 0.4 + 0.2|V_y|$.

By default, $f = 0.4 + 0.2 \times |0.98\times (-0.08)| = 0.41568$.

As a direct consequence of not applying when sneaking, you can slide on the surface of slime and not sticking.

### Honey Block
**1. Slipperiness Property:**\
See [Slipperiness](/Pages/slipperiness.md). Honey has a slipperiness factor of `0.8`.

**2. Reduced Jump Height:**\
If the player's position is on `1×1` surface of honey (**not** to be confused with honey's top surface) then:\
The player's jump acceleration (which defaults to `0.42`) is multiplied by `0.6`.\
**Jumping gives `0.252` vertical acceleration**, reaching `0.514` in height, with `8` ticks of airtime on flat ground.

**3. Side Sliding:**<sup>[Todo]</sup>\
Sliding down the side have a Y speed cap of `-0.12`.\
And multiplies the player's horizontal motion by `0.4`, and it's stackable from multiple blocks.

**4. Slowdown Property:**\
Slowdown players walking on them, exactly same as slime.