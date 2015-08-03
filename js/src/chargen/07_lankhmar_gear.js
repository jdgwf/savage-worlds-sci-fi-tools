/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Fantasy Companion and are owned by Pinnacle Entertainment Group.
*/
if(!chargen_gear)
	var chargen_gear = Array();

if(!overrides_core_gear)
	var overrides_core_gear = Array();
overrides_core_gear[7] = true;

chargen_gear = chargen_gear.concat( Array(
	/* Mundane Items */
	{
		name: "Alchemists’ trunk",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 15,
		cost: 1000,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Backpack",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 2,
		cost: 25,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Bedroll",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 4,
		cost: 25,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Blanket",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 4,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Candle",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: .5,
		cost: 1,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Crowbar",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 2,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Flask (ceramic)",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Flask (metal)",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Flint and Steel",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 3,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Grappling Hook",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 2,
		cost: 50,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Hammer",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Lantern",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 3,
		cost: 25,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Lockpicks",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 100,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Oil (1 pint)",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 2,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Parchment (per sheet)",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1/20,
		cost: 1,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Pick",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 5,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Quiver (holds 20 arrows)",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 2,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Rope (10\")",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 15,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Shovel",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 5,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Saddle",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 10,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Soap",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 1/5,
		cost: 1,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Spikes (10)",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 0,
		weight: 10,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Torch",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 1,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Whistle",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 2,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Waterskin",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 1,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Whetstone",
		class: "Adventuring Gear",
		general: "Items",
		type: "",
		container: 1,
		weight: 1,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Pavilion",
		class: "Shelter",
		general: "Items",
		type: "",
		container: 1,
		weight: 20,
		cost: 100,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Tent",
		class: "Shelter",
		general: "Items",
		type: "",
		container: 1,
		weight: 10,
		cost: 30,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Normal Clothing",
		class: "Clothing",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 20,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Formal Clothing",
		class: "Clothing",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 60,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Tailored Clothing",
		class: "Clothing",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 100,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Winter Clothes",
		class: "Clothing",
		general: "Items",
		type: "",
		container: 1,
		weight: 3,
		cost: 35,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Average Meal",
		class: "Food",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 10,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Cheap Meal",
		class: "Food",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 5,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Expensive Meal",
		class: "Food",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 15,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "1 Week's Rations",
		class: "Food",
		general: "Items",
		type: "",
		container: 1,
		weight: 10,
		cost: 25,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "1 Day's Water",
		class: "Food",
		general: "Items",
		type: "",
		container: 1,
		weight: 2,
		cost: 1,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Hawk",
		class: "Animals, Trained",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 200,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Horse",
		class: "Animals, Trained",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 250,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Hunting Dog",
		class: "Animals, Trained",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 100,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "Mule",
		class: "Animals, Trained",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 150,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	{
		name: "War Dog",
		class: "Animals, Trained",
		general: "Items",
		type: "",
		container: 1,
		weight: 0,
		cost: 150,
		notes: Array(),
		book: books_list[7],
		page: "p9",
	},
	/* Fantasy Weapons */
	{
		name: "Bastard sword",
		damage: "Str+d8",
		class: "Melee Weapons",
		general: "Weapons",
		type: "",
		weight: 10,
		cost: 350,
		notes: Array("Parry –1, can be wielded in two hands for +1 damage"),
		book: books_list[7],
		page: "p12",

	},
	{
		name: "Orcish combat axe",
		damage: "Str+d8",
		class: "Melee Weapons",
		general: "Weapons",
		type: "",
		weight: 12,
		cost: 350,
		notes: Array("Parry –1, can be wielded in two hands for +1 damage"),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Light flail",
		damage: "Str+d4",
		class: "Melee Weapons",
		general: "Weapons",
		type: "",
		weight: 6,
		cost: 150,
		notes: Array("Ignores 1 point of Shield/ Weapon Parry or Cover bonus"),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Flail",
		damage: "Str+d6",
		class: "Melee Weapons",
		general: "Weapons",
		type: "",
		weight: 8,
		cost: 200,
		notes: Array("Ignores Shield/Weapon Parry or Cover bonus"),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Dwarven axe-chain",
		damage: "Str+d6",
		class: "Melee Weapons",
		general: "Weapons",
		type: "",
		weight: 15,
		cost: 500,
		notes: Array("Reach 1, Parry –1, 2 hands, can be used as a weapon in each hand without Reach, ignores Shield/Weapon Parry or Cover bonus"),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Great Flail",
		damage: "Str+d8",
		class: "Melee Weapons",
		general: "Weapons",
		type: "",
		weight: 25,
		cost: 600,
		notes: Array("AP 2 vs. rigid armor, –1 Parry, 2 hands, ignores Shield/Weapon Parry or Cover bonus"),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Reinforced leather",
		class: "",
		general: "Armor",
		type: "",
		weight: 20,
		cost: 200,
		armor: 2,
		notes: Array(
			"Covers torso, arms, and legs; 1 point of Armor is bypassed if hit with a raise"
		),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Reinforced chain",
		class: "",
		general: "Armor",
		type: "",
		weight: 40,
		cost: 700,
		armor: 3,
		notes: Array(
			"Covers torso, arms, and legs; 1 point of Armor is bypassed if hit with a raise"
		),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Elven bow",
		damage: "2d6",
		class: "Medieval",
		general: "Ranged Weapons",
		type: "",
		range: "15/30/60",
		weight: 4,
		min_str: 2,
		rof: 1,
		cost: 500,
		notes: Array(
			""
		),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Mini-crossbow",
		damage: "2d4",
		class: "Medieval",
		general: "Ranged Weapons",
		type: "",
		range: "6/12/24",
		weight: 3,
		min_str: 0,
		rof: 1,
		ap: 1,
		cost: 200,
		notes: Array(
			"AP 1"
		),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Pump crossbow",
		damage: "2d6",
		class: "Medieval",
		general: "Ranged Weapons",
		type: "",
		range: "10/20/40",
		weight: 12,
		min_str: 2,
		rof: 1,
		shots: 6,
		ap: 2,
		cost: 1200,
		notes: Array(
			"AP 2"
		),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Mini-crossbow quarrels",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 1/10,
		cost: 1,
		notes: Array(),
		book: books_list[7],
		page: "p12",
	},
	{
		name: "Orcish barbed arrows",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 1/5,
		cost: 1,
		notes: Array("+1 damage"),
		book: books_list[7],
		page: "p12",
	}

) );