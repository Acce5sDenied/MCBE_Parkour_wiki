# Status effects & Enchants

Status effects and enchants that can directly effect movement.

(Only valid for achievable level of enchant. Levels beyond that is not guaranteed to be correct here.)

---

**Speed**\
`+20%` base acceleration per level of speed. Does not apply when airborne. In the case where speed is on with slowness, speed always get applied first.

**Slowness**\
`-15%` base acceleration per level of slowness. Does not apply when airborne. Movement is stopped past level 6.

**Jump boost**\
`+0.1` base jump acceleration per level of jump boost.

**Slow falling**\
When the player's Y velocity is below zero, a `0.01` gravity acceleration is applied across all levels of slow falling. Reaching terminal velocity of `0.49`.

**Levitation**\
$$\displaystyle VelY_t = VelY_{t-1} \times 0.784 + 0.0098 \times Level$$\
Basically floats up with acceleration of `0.0098` multiplied by levitation level. And with drag of `0.784`. Gravity is ignored.

**Blindness**\
Activating sprint is not possible while effect is active. You can still keep sprint through when effect is recieved.

**Soul speed**\
$\displaystyle 1.3 + Level \times 0.105$ times base acceleration. Applies on soul sand and soul soil ground.

**Depth strider**\
For walking, `+133.33%` base acceleration per level of depth strider.\
For sprinting, `+183.33%` base acceleration per level of depth strider.\
Not true in certain conditions.<sup>[Todo]</sup>

**Swift sneak**\
`+50%` base acceleration per level of swift sneak. Only works while crouching or crawling.