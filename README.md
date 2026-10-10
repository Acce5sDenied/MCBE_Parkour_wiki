# MCBE Parkour Wiki

![MCBEPK_wiki_banner](/Images/MCBEPK_wiki_banner.png)

A wiki for documenting Minecraft Bedrock Edition movement mechanics & technical knowledges. As of game version `26.5x`.\
This wiki is assuming you have a decent beforehand knowledges of the game and additionally went through MCPK wiki before as this relies on some context.

---

## Highlights

### Resources

Visit [**MCPK wiki**](https://www.mcpk.wiki/wiki/Main_Page) for the original Java Edition parkour wiki & documentation.

Visit [**ZPK 2**](https://github.com/mihiro13/ZPK_2) repository for a parkouring addon. Or [**dmf-mpk**](https://github.com/mihiro13/dmf-mpk) for an actual parkouring utilities mod. Similar to MPK or Cyv mod for Java.

Visit [**BPKMod**](https://github.com/xiaozi233/BPKMod) repository for a Java edition mod replicating Bedrock edition's movement physics.

Join [**DPK Central Discord**](https://discord.gg/AENkWECXh8) or [**Starany**](https://discord.gg/EdfWtFwa2s) for central hubs to discuss about Bedrock Edition Parkour.

### Movement Differences

Differences of Bedrock Edition and Java Edition 1.8 (standard for parkour).
+ **Strafing** does not grant the 2% boost in acceleration, unlike Java Edition. Same goes for strafe crouching not giving the massive 41% boost.
+ No presence of **inertia** AKA momentum threshold.
+ Position and many more values is stored as **single precision** floats (32-bit). This is the cause of many goofy glitches on Bedrock.
+ Trigonometry directly uses $\sin()$ and $\cos()$, so there is no such "significant angles" and "half angles" in Bedrock.
+ No presence of bursting or shift glitch.
+ **Shifting** would only goes to a minimum of `0.025` blocks away from an edge.
+ No 1 tick of air sprint delay. (matches Java 1.19.4 and above)
+ Sprint would cancel after colliding a wall (Conditions differ from Java 1.8, see [Sprint Cancellation](/Pages/sprint_cancellation.md))
+ Exists an all-direction **joystick** control mode.
+ A player have `16 b/t` absolute **speed cap**.
+ Many block mechanics/properties is different.

---

### Player Controls
+ [Player Movement](/Pages/player_movement.md)
+ [Camera Movement](/Pages/camera_movement.md)
+ [Status Effects & Enchants](/Pages/status_effects_enchants.md)

### Blocks
+ [Blocks Collision](/Pages/blocks_collision.md)
+ [Block Offsets](/Pages/block_offsets.md)
+ [Slipperiness](/Pages/slipperiness.md)
+ [Slime & Bouncy Blocks](/Pages/slime_bouncy_blocks.md)
+ [Honey Block](/Pages/honey_block.md)
+ [Cobweb & Slowing Blocks](/Pages/cobweb_slowing_blocks.md)
+ [Climb Blocks](/Pages/climb_blocks.md)
+ [Fluids](/Pages/fluids.md)

### Movement Mechanics
+ [General Movement](/Pages/general_movement.md)
+ [Collisions](/Pages/collisions.md)
+ [Sprint Cancellation](/Pages/sprint_cancellation.md)
+ [Stepping](/Pages/stepping.md)
+ [Sneaking & Crawling](/Pages/sneaking_crawling.md)
+ [Speed Limit](/Pages/speed_limit.md)

### Glitches
+ [Triple Component Strafe](/Pages/triple_component_strafe.md)
+ [Hitbox Manipulation & Precision Glitches](/Pages/precision_glitches.md)
+ [Spyglass Glitch](/Pages/spyglass_glitch.md)
+ [11 Strafe & Glitches regarding old joystick](/Pages/11_strafe.md)
+ [More Patched Glitches](/Pages/patched_glitches.md)

### Strategies & Technicals
+ [Tapping](/Pages/tapping.md)
+ [Strategies](/Pages/strategies.md)
+ [Movement Formulas](/Pages/movement_formulas.md)
+ [Constants](/Pages/constants.md)

### Community
+ [Communities](/Pages/communities.md)
+ [Servers](/Pages/servers.md)

---

#### Credits & Special thanks by Discord username
+ `accessdenied0` - Author & maintainer
+ `elchut` - Community & 11 Strafe details
+ `xiaozi0475` - [**11 Strafe inner workings**](https://b23.tv/yGraXUX) & maintainer
+ `zetaser2` - Help on glitches
+ `ring_marry` - Made ZPK 2

This wiki is a hobby project to showcase the technical parkour infos of Minecraft Bedrock Edition.\
This is an extension of MCPK wiki. But not affiliated (for now).\
Not affiliated or associated with Mojang or Microsoft.