# Constants

Base movement related constants.

## Base values
+ Shifted acceleration: `0.294`
+ Walk acceleration: `0.98`
+ Sprint acceleration: `1.274`
+ Sprint jump acceleration towards facing: `0.2`
+ Normal ground slipperiness: `0.6`
+ Velocity conserved to next tick: `0.91`
+ Jump vertical acceleration: `0.42`
+ Vertical drag: `0.98`
+ Gravity acceleration: `0.08`

## Values on different states

#### Grounded
`0.1x` acceleration.
+ Horizontal drag: `0.546`
+ Shifted acceleration: `0.0294`
+ Walk acceleration: `0.098`
+ Sprint acceleration: `0.1274`

#### Airborne
`0.02x` acceleration.
+ Horizontal drag: `0.91`
+ Shifted accerelation: `0.00588`
+ Walk acceleration: `0.0196`
+ Sprint acceleration: `0.02548`

#### Flying
Flying ignores most block mechanics, reaching top speed of `0.544b/t` while walk flying, `1.088b/t` with sprint activated.
+ Horizontal drag while accelerating: `0.91`
+ Horizontal drag while not accelerating: `~0.34125`.
+ Shifted accerelation: `[incompatible]`
+ Walk acceleration: `0.049`
+ Sprint acceleration: `0.098`

#### Blocking
This includes eating or drinking, charging weapons, using goat horn or spyglass. Shield blocking excluded, it requires crouching to activate and effects nothing beside that.\
`0.35^2 = 0.1225x` acceleration.
+ Shifted accerelation: `0.0036`
+ Walk acceleration: `0.012`
+ Sprint acceleration: `0.0156`