// PROTOTYPE - NOT FOR PRODUCTION
// Question: is driving, ramming and shooting AI drivers in a city fun for ten minutes in all three modes?
// Date: 2026-11-19
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // --- Player car (m/s, m/s^2, rad/s, 1/s) ---
  car_top_speed: { value: 27, min: 12, max: 45, step: 1 },
  car_accel: { value: 24, min: 8, max: 50, step: 1 },
  car_turn: { value: 2.2, min: 0.8, max: 4, step: 0.1 },
  car_grip: { value: 5.5, min: 1, max: 14, step: 0.25 },
  car_hp: { value: 100, min: 30, max: 300, step: 5 },
  // --- Player bike: faster, tighter, fragile ---
  bike_top_speed: { value: 35, min: 12, max: 55, step: 1 },
  bike_accel: { value: 32, min: 8, max: 60, step: 1 },
  bike_turn: { value: 2.9, min: 0.8, max: 5, step: 0.1 },
  bike_grip: { value: 8, min: 1, max: 16, step: 0.25 },
  bike_hp: { value: 55, min: 20, max: 200, step: 5 },
  // --- Player tank: slow, tough, turret aims itself ---
  tank_top_speed: { value: 14, min: 6, max: 30, step: 1 },
  tank_accel: { value: 11, min: 4, max: 30, step: 1 },
  tank_turn: { value: 1.5, min: 0.5, max: 3, step: 0.1 },
  tank_grip: { value: 9, min: 2, max: 16, step: 0.25 },
  tank_hp: { value: 260, min: 80, max: 600, step: 10 },
  // --- Player RC buggy: tiny, quick, very fragile ---
  rc_top_speed: { value: 30, min: 10, max: 50, step: 1 },
  rc_accel: { value: 40, min: 10, max: 70, step: 1 },
  rc_turn: { value: 3.2, min: 1, max: 5, step: 0.1 },
  rc_grip: { value: 9, min: 2, max: 16, step: 0.25 },
  rc_hp: { value: 35, min: 10, max: 120, step: 5 },
  // --- Handling shared ---
  brake_force: { value: 38, min: 10, max: 80, step: 1 }, // m/s^2
  drag: { value: 0.3, min: 0, max: 1, step: 0.02 }, // 1/s
  drift_grip: { value: 0.3, min: 0.05, max: 1, step: 0.05 }, // grip multiplier while handbrake held
  // --- Damage ---
  ram_damage: { value: 1.3, min: 0.2, max: 4, step: 0.1 }, // hp per m/s of closing speed
  wall_damage: { value: 0.9, min: 0, max: 3, step: 0.1 }, // hp per m/s into a wall
  // --- Weapons ---
  mg_damage: { value: 4, min: 1, max: 20, step: 0.5 },
  mg_rate: { value: 0.09, min: 0.03, max: 0.4, step: 0.01 }, // seconds between shots
  mg_speed: { value: 70, min: 30, max: 120, step: 5 },
  mg_ammo: { value: 45, min: 10, max: 200, step: 5 }, // per pickup
  missile_damage: { value: 42, min: 10, max: 120, step: 2 },
  missile_speed: { value: 38, min: 15, max: 70, step: 1 },
  missile_turn: { value: 2.4, min: 0, max: 6, step: 0.1 }, // homing rad/s
  missile_radius: { value: 6, min: 2, max: 14, step: 0.5 },
  missile_ammo: { value: 3, min: 1, max: 10, step: 1 },
  mine_damage: { value: 55, min: 10, max: 150, step: 5 },
  mine_radius: { value: 6, min: 2, max: 14, step: 0.5 },
  mine_ammo: { value: 3, min: 1, max: 10, step: 1 },
  repair_amount: { value: 45, min: 10, max: 150, step: 5 },
  pickup_respawn: { value: 14, min: 3, max: 60, step: 1 }, // seconds
  pickup_count: { value: 12, min: 4, max: 24, step: 1 },
  // --- AI drivers ---
  ai_speed: { value: 1, min: 0.6, max: 1.4, step: 0.02 }, // difficulty: multiplies AI speed
  ai_aim_error: { value: 0.1, min: 0, max: 0.4, step: 0.01 }, // radians of shooter spread
  ai_fire_interval: { value: 1.4, min: 0.4, max: 5, step: 0.1 }, // seconds between shooter bursts
  chaser_hp: { value: 60, min: 20, max: 200, step: 5 },
  rammer_hp: { value: 130, min: 40, max: 300, step: 5 },
  shooter_hp: { value: 50, min: 20, max: 200, step: 5 },
  flanker_hp: { value: 55, min: 20, max: 200, step: 5 },
  police_hp: { value: 70, min: 20, max: 200, step: 5 },
  racer_hp: { value: 80, min: 20, max: 200, step: 5 },
  tanker_hp: { value: 150, min: 40, max: 400, step: 10 },
  tanker_blast_damage: { value: 45, min: 10, max: 120, step: 5 },
  tanker_blast_radius: { value: 13, min: 4, max: 30, step: 1 },
  lunge_time: { value: 1.3, min: 0.5, max: 3, step: 0.1 },
  lunge_cooldown: { value: 2.5, min: 0.5, max: 8, step: 0.1 },
  // --- Wreck mode ---
  wreck_target: { value: 12, min: 3, max: 40, step: 1 },
  wreck_start_rivals: { value: 2, min: 1, max: 6, step: 1 },
  wreck_ramp_time: { value: 20, min: 5, max: 60, step: 1 }, // seconds per extra rival
  wreck_max_rivals: { value: 5, min: 2, max: 10, step: 1 },
  // --- Race mode ---
  race_laps: { value: 3, min: 1, max: 6, step: 1 },
  race_rivals: { value: 4, min: 1, max: 6, step: 1 },
  rubber_band: { value: 0.1, min: 0, max: 0.4, step: 0.01 },
  // --- Escape mode ---
  escape_time: { value: 120, min: 30, max: 300, step: 5 }, // seconds to survive
  police_start: { value: 2, min: 1, max: 5, step: 1 },
  police_interval: { value: 20, min: 5, max: 60, step: 1 }, // seconds per extra cruiser
  police_max: { value: 6, min: 2, max: 10, step: 1 },
  // --- Camera ---
  cam_height: { value: 4.6, min: 2, max: 20, step: 0.1 }, // m above the vehicle
  cam_back: { value: 11, min: 5, max: 30, step: 0.5 }, // m behind the vehicle
  cam_zoom: { value: 0.14, min: 0, max: 0.6, step: 0.01 }, // extra distance per m/s
  cam_fov: { value: 62, min: 40, max: 90, step: 1 },
};
