let airtime, dist = [], pos, vel;
for (let i = 0; i <= 1000; i++) {
  pos = { x:0, y:0, z:0 };
  vel = { x:i, y:0, z:0 };
  airtime = 0;
  while (vel.x > 0.0001) {
    airtime += 1;
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
  //console.log("InitVel:", i, "\nDist:", pos.x, "\nTicks:", airtime);
  dist.push({ ticks:airtime, x:pos.x });
}
console.table(dist);
