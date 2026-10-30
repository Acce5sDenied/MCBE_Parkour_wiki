# Camera movement

Player can either use mouse, drag on a touchscreen or use a stick on a controller. And then camera movement is calculated from the displacement in pixels from that action.

> A detail: Pitch is locked in range `[-89.9°, 89.9°]`

### Sensitivity formulas
Bedrock uses sensitivity in the range `0 - 100%` unlike Java's `0 - 200%`. Let:

+ $(dx, dy)$ be the instantaneous cursor displacement on the screen (in pixels),
+ $(\Delta \text{Pitch}, \Delta \text{Yaw})$ be the instantaneous camera rotation (in degrees).

and we define  $v_{\text{value}}$ as:

$$\displaystyle v_{value} = 0.81\times(1.1 \times \text{Sensitivity})^{0.6125} \ \text{For Sensitivity in} \ [0, 1].$$

The formulas go as follows:

#### Mouse

$$\displaystyle \Delta \text{Pitch} = \frac{dy}{\text{WindowWidth}} \times \left(0.15 + 0.6 \times v_{value} \right) ^ 3 \times 9600 \times 0.3$$
$$\displaystyle \Delta \text{Yaw} = \frac{dx}{\text{WindowWidth}} \times \left(0.15 + 0.6 \times v_{value} \right) ^ 3 \times 9600 \times 0.3$$

#### Touch
<sup>[WIP, for my device type (2340 * 1080)]</sup>

$$\displaystyle \Delta \text{Yaw} = dx \times \frac{32}{93275} \times \left(1.6 + 6.4 \times v_{value}\right) ^ {3.6}$$

#### Stick
<sup>[Todo]</sup>

$$\displaystyle \cdots$$

### Spyglass
Spyglass damping is a setting option in range `0 - 100`. This affects camera panning speed while using a spyglass. With 0 being no effect, 100 being full effect.

$$\displaystyle \text{For SpyglassDamping in} \ [0, 100]$$

<p align="center">
  <img src="/Images/controls_spyglass.svg" alt="spyglass effect formula" height="48px">
</p>

The same also goes for $\Delta \text{Pitch}$.\
Values in range `0 - 5` have no effect. Camera panning is 20x slower at value 100.