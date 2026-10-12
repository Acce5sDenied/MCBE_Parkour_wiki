# Slipperiness

All blocks have slipperiness factor (noted as `S`) of it's own. Every block has `S` default to `0.6` unless other value is stated here.

The game checks `0.1` blocks below entity's position for slipperiness. Causing the `0.3` edge around a block to be unaffected. When airborne, slipperiness properties are disregarded.

**Effects on movement include:**

Amount of drag on ground is $0.91 \times S$.

Acceleration on ground is multiplied by $\displaystyle \left(\frac{0.6}{S}\right) ^ 3$

---

**Ice, Packed Ice & Frosted Ice**\
`S = 0.98`

**Blue Ice**\
`S = 0.989`

**Slime & Honey block**\
`S = 0.8`