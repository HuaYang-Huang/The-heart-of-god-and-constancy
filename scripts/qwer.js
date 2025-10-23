
Events.on(EventType.ClientLoadEvent, cons(e => {
    var dialog = new BaseDialog("[red]神恒之心信息栏");
    dialog.cont.image(Core.atlas.find("神恒之心-神恒之光")).row();;
    dialog.buttons.defaults().size(210, 64);
    dialog.buttons.button("@close", run(() => {
        dialog.hide();
    })).size(210, 64);
    dialog.cont.pane((() => {
        var table = new Table();   
         table.add("[blue]            —————联系方式—————\n[white] 老群死了，建立新群\n 神恒之心模组群(摸鱼) : 853399625 (QQ)\n Discord: https://discord.gg/Whed8yUGkU").left().growX().wrap().width(600).maxWidth(1000).pad(4).labelAlign(Align.left);
        table.row();
table.button("[green]Picture", run(() => {
    var dialog2 = new BaseDialog("[green]Picture");
    var table = new Table();
    dialog2.cont.image(Core.atlas.find("神恒之心-图片5")).row();;
    dialog2.buttons.defaults().size(210, 64);
    dialog2.buttons.button("@close", run(() => {
        dialog2.hide();
        })).size(210, 64);
        dialog2.show();
    })).size(210, 64).row();
table.button("[red]Problem", run(() => {
    var dialog2 = new BaseDialog("[red]Problem");
    var table = new Table();
    
    var t = new Table();
	t.add("[red]机翻完成\nMachine turning complete\n\n\n\n我做不到把模组放入游戏里的模组浏览器，因为我对其他没了解\nI can't make a module browser that puts modules into the game, because I don't know anything else.\n\n\n对你们玩模组才告诉你，对不起你们等待玩新版好长时间，我希望你们能理解吧\nI didn't tell you until you played the module. I'm sorry you waited for a long time to play the new version. I hope you can understand.");
    dialog2.cont.add(new ScrollPane(t)).size(1500, 600).row();
    dialog2.buttons.defaults().size(620, 64);
    dialog2.buttons.button("@close", run(() => {
                dialog2.hide();
                })).size(500, 64);
            dialog2.show();
            })).size(210, 64);;
        return table;
        })()).grow().center().maxWidth(600);
    dialog.show();
}));