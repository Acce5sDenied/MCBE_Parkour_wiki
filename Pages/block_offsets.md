# Block Offsets

Certain blocks do not have centered collision boxes; instead, their positions are offset in a pseudorandom manner. A block's specific offset is determined entirely by its X and Z coordinates.

For a full list of blocks subject to offset, refer to the [**Minecraft Wiki**](https://minecraft.wiki/w/Block_offset#List_of_blocks_subject_to_offset).

**Simplified Algorithm:**

1. **Calculate Pseudorandom Offset:** Compute the initial X and Z offsets based on the block's position (`BlockPos`).
2. **Clamp Values:**
  - For **Pointed Dripstone** and **Sulfur Spikes**, clamp the X/Z offsets to the range `[-0.125, 0.125]`.
  - For all other offset blocks, clamp the offsets to `[-0.25, 0.25]`.
3. **Determine Final Center:** `Block Center = BlockPos + 0.5 + Offset + Constant`
  - For **Pointed Dripstone** and **Sulfur Spikes**, the constant is `0`.
  - For **Bamboo**, the constant is `Thickness / 2`.

**Full Algorithm:**

The complete algorithm implementation can be found in this [**Google Colab Notebook**](https://colab.research.google.com/drive/1Ke98s-X3d1bmrWAVAdjeGCrOcyRPSIZa#scrollTo=92yh9WgRgnBW).

**Note:** The algorithm only covers Pointed Dripstone, Sulfur Spikes, and Bamboo, as other offset blocks do not possess collision boxes.