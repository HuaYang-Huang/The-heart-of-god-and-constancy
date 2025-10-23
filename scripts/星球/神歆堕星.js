const lib = require("base/lib");
const TBLY = new Planet("神歆堕星", Planets.sun, 1, 3.3);
TBLY.meshLoader = prov(() => new MultiMesh(
	new HexMesh(TBLY, 8)
));
TBLY.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(TBLY, 2, 0.15, 0.14, 5, Color.valueOf("ffc4ffde"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(TBLY, 3, 0.6, 0.15, 5, Color.valueOf("ff349988"), 2, 0.42, 1.2, 0.45)
));
TBLY.generator = new SerpuloPlanetGenerator();
TBLY.visible = TBLY.accessible = TBLY.alwaysUnlocked = TBLY.clearSectorOnLose = true;//可见 潮汐锁定 在行星菜单内显示 总是解锁 重置战败区块
TBLY.tidalLock = false;
TBLY.localizedName = "神歆堕星";
TBLY.bloom = false;
TBLY.startSector = 1;
TBLY.orbitRadius = 35;
TBLY.orbitTime = 180 * 60;
TBLY.rotateTime = 90 * 60;
TBLY.atmosphereRadIn = 0.02;
TBLY.atmosphereRadOut = 0.3;
TBLY.atmosphereColor = TBLY.lightColor = Color.valueOf("00FFE1BE");

const 新的开始 = new SectorPreset("新的开始", TBLY, 1);
新的开始.description = "[purple]你的路刚刚结束了，但也是刚刚开始了";
新的开始.difficulty = 3;
新的开始.alwaysUnlocked = false;
新的开始.addStartingItems = true;
新的开始.captureWave = 60;
新的开始.localizedName = "新的开始";
exports.新的开始 = 新的开始;
lib.addToResearch(新的开始, {
	parent: "planetaryTerminal",
	objectives: Seq.with(
		new Objectives.SectorComplete(SectorPresets.planetaryTerminal))
});