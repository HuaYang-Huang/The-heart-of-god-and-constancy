//by zxs

const t = 80;//禁建范围
const n = true;//size是否为偶数

const sy = extend(PowerTurret, "死焉", {
	drawPlace(x, y, rotation, valid) {
		this.super$drawPlace(x, y, rotation, valid);
		if (n) {
		const worldX = x * 8 + 4;
		const worldY = y * 8 + 4;
		Drawf.dashSquare(Color.white, worldX, worldY, t * 8);
		} else {
		const worldX = x * 8;
		const worldY = y * 8;
		Drawf.dashSquare(Color.white, worldX, worldY, t * 8);
		}
	},

	canPlaceOn(tile, team, rotation) {
		let c = true;
		Vars.indexer.eachBlock(team.sharded, Tmp.r1.setCentered(tile.x * 8, tile.y * 8, t * 8), function(b) {
			return true;
		}, cons(function(i) {
			if (i.block.name == sy.name) {
				c = false;
			}
		}));
		return c;
	}
});

sy.update = true;
sy.solid = true;