# Bouncy-ness

> This article go into the bouncy-ness properties and calculation, not mainly about slime block.

A slime block only bounces the player if they land on its top surface while moving downward, with vertical velocity $V_y \le -0.08$. Landing any slower results in the player simply coming to rest on the surface.

In Java Edition 1.8.9, the game simply reverses the player's vertical velocity upon landing ($V_y = -V_y$). As a result, players jumping from **different heights** will bounce to the **exact same height** as long as they happen to land within the same tick.

To solve this issue, Bedrock Edition records the player's **actual fall distance $|\Delta Y|$** within the landing tick before contact, and uses it to calculate the true impact speed. With bounce factor $b = 1$ (for slime) and gravity $g = -0.08$, the bounce is calculated through the following steps:

- **Phase 1: Landing**  
  Based on the actual fall distance $|\Delta Y|$, the downward speed at impact $|V_{\text{hit}}|$ and the time elapsed $t$ within this tick before landing are:

  $\displaystyle |V_{\text{hit}}| = \sqrt{V_y^2 + 2\lvert g\rvert\lvert\Delta Y\rvert}$

  $\displaystyle t = \frac{|V_{\text{hit}}| - |V_y|}{|g|} \qquad (0 \le t < 1)$

- **Phase 2: Bounce**  
  The landing speed is reflected upward. Because landing consumed $t$ of the tick, the player travels upward under gravity for the remaining $1 - t$ duration:

  $$V_y = b \cdot |V_{\text{hit}}| + g(1 - t)$$

- **Phase 3: Air Drag**  
  Air drag is applied at the end of the tick as usual:

  $$V_y = 0.98\,V_y$$

- **Phase 4: Jump Check**  
  If the player jumped within the same tick, the final velocity takes the larger of the jump speed and the bounce speed:

  $$V_y = \max(V_{\text{jump}},\, V_y)$$

**Note:**  
In the tick where a bounce is triggered, the standard discrete gravity step $V_y = 0.98(V_y + g)$ is completely replaced by the process above.

---

**Slime Block**\
`b = 1.0`

**Bed**\
`b = 0.75`

**Shelf Mushroom**\
Most likely the same bounce factor as bed, this has not been verified.<sup>[Todo]</sup>