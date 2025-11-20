/*
Simulation for finding total distance traveled with a variable initial velocity.
*/

let dist = [], pos, vel, absvel;
for (let init = 0; init <= 1000; init++) {
  pos = { x:0, y:0, z:0 };
  vel = { x:init, y:0, z:0 };
  while (vel.x + vel.z > 0.0001) {
    absvel = Math.sqrt(vel.y ** 2 + Math.sqrt(vel.x ** 2 + vel.z ** 2) ** 2);
    if (absvel > 16) {
      pos.x += (vel.x / absvel * 16);
      pos.y += (vel.y / absvel * 16);
      pos.z += (vel.z / absvel * 16);
    }
    else {
      pos.x += vel.x;
      pos.y += vel.y;
      pos.z += vel.z;
    }
    vel.x *= 0.91;
    vel.y -= 0.08;
    vel.y *= 0.98;
    vel.z *= 0.91;
  }
  dist.push({ Init:init, x:pos.x, y:pos.y, z:pos.z });
}
console.table(dist);
