# Game Brief: Street Payback

## In your words
Payback 2 jaisa 3D game, "not as it is", thoda idhar-udhar kar sakte ho: car, bike (jo original me nahi), zyada maps. AI wahi fun wala rehna chahiye jo khelne me maza aata hai.
1. Mode: A, B, C teeno (Wreck arena, Race with weapons, Police chase/Escape) - sab rakhna hai.
7. Look: graphics bilkul Payback jaisa (tilted top-down, colourful), agar usse behtar ho sake to aur achha.

**Pitch:** An original tilted top-down 3D vehicle-mayhem game where you wreck rivals, race with weapons and escape a police pack in one city, on a car or a bike, against aggressive AI drivers.

**Genre:** vehicle combat / car combat racing (racing leads handling)

**Controls:** W/Up throttle, S/Down brake-reverse, A/D or Left/Right steer, Space handbrake-drift, F or Ctrl fire weapon, E switch vehicle at garage pad (car/bike), R reset, P pause, M mute.

**Question:** is driving, ramming and shooting AI drivers in a city fun for ten minutes in all three modes?

**Hooks:** aggressive AI drivers that chase, ram, shoot and recover; weapon pickups; a bike that is fast and fragile vs a heavy car.

**Intent:** *soft or no failure* not used; hard failure per mode.

## Look and references
- Look: dusk-lit 3D city, burning wrecks, smoke, orange sky, chunky toy-like vehicles with strong silhouettes, warm sunlight, explosions with smoke and sparks; every figure drawn, no emoji, no plain boxes as vehicles.
- References: Payback 2 (tilted top-down camera, arena chaos, pickups, explosions) *guided only, original names/art*; Burnout (takedowns).
- View: 3D · Camera: third-person chase camera behind the vehicle, widens with speed (changed after play: the person wanted a Payback 2-style chase view).

## First minute
Start screen with controls, pick Car or Bike and a mode. Spawn in a city arena, drive 5 seconds, grab a glowing weapon pickup, fire at a first rival, and see the first rival blow up with sparks and a score popup.

## Challenge
Wreck: first rival packs of 3 at once by about 40 s, then waves of 4-5 with 4 driver kinds. Race: 3 laps vs 4 rivals who shoot back. Escape: police pack grows over 90 s, survive 120 s. A loss restarts the mode.

## Core loop
- Drive and pick up weapons.
- Ram or shoot rivals for points and takedowns.
- Survive the wave, lap or timer.
- Win/lose result, then restart or pick another mode.

## Goal & fail state
- Wreck: destroy 12 rivals before your health reaches 0. Race: finish 3 laps in 1st-2nd; lose if 4th or wrecked. Escape: survive 120 s; lose if wrecked.

## Features
- [x] Car and bike with different handling, health and speed
- [ ] Wreck arena mode
- [x] Race mode with weapons
- [ ] Police chase / Escape mode
- [x] Weapon pickups: missile, machine gun, mines
- [ ] 4 AI driver kinds: chaser, rammer, shooter, flanker (each with recovery when stuck)
- [x] City map with ramps and obstacles, explosions and smoke
- [x] Start, pause, results, mute screens and HUD

## Your systems
- Weapons and pickups · in the slice
- Police wanted pack · in the slice
- Vehicle damage · thin stand-in *(guessed)*
- More maps and vehicles · later

## Keep
-

## Avoid
- Payback 2's name, art, characters, maps and UI; no emoji art.

## Out of scope
- more maps: grow it
- more vehicles: add it as a feature
- online play: needs a server, not built yet
- vehicle upgrade shop: add it as a feature

## Build order
1. One city map, car and bike, the three modes, 4 AI kinds, weapons, HUD and screens.

---
**Kill condition:** drop if steering feels floaty after two tuning rounds.

**Who it's for / what they feel:** players of arcade car combat who want chaos and aggressive rivals.

**Games you love / don't:** Love Payback 2 (the AI and arena chaos).

After play: the graphics were not close enough to Payback 2. Wanted: chase camera behind the car, dusk orange sky with fire and smoke, realistic muscle cars, tanks, fuel tankers and an RC car, round minimap, weapon bar, rank list. Not a copy of its name, art, maps or UI.
