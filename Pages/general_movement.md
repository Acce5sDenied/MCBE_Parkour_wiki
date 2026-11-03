# General Movement

In general, the player movement physics of Minecraft Bedrock Edition is in a sense similar to Java Edition 1.8 with some caveats.

**1. Arithmetic/Precision type**\
Bedrock edition uses the [**Single-precision floating-point format**](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) (32-bit, Java uses 64-bit) to represent numbers, including player's position. This usually supplies about `~7` digits of precision.\
Because of this, Bedrock has a clear disadvantage to Java at parkour requiring precision. It also raises multiple [Precision Glitches](/Pages/precision_glitches.md).

**2. Inertia**\
"Inertia" or negligible speed threshold condition in Java Edition, does not exist in Bedrock Edition.\
However, since Bedrock uses 32-bit floats, the negligible speed cutoff/rounding happens completely natually on its own, typically around the 7th decimal place counting from the first number.\
The rounding is more precisely the gap between two adjacent representable numbers in float.

**3. Strafing**\
Strafing does not inherit the same jank as in Java. There isn't [**45° Strafe**](https://www.mcpk.wiki/wiki/45_Strafe) or 45° Sneak in Bedrock.\
There exists a glitch, [Triple Component Strafe](/Pages/triple_component_strafe.md) but it does not grant extra acceleration like a 45° Strafe would.

**4. Trigonometry**\
As far as current evidence goes, Bedrock directly uses trigonometric function for movement. Angle calculation in Bedrock is straight-forward unlike the complexity of Java's [**Angles**](https://www.mcpk.wiki/wiki/Angles).