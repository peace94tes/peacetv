async function initializePlayer(id, url, drmKey, enableCustomConfig) {
    const video = document.getElementById(id);
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();    
    const config = {
        'controlPanelElements': ['play_pause','time_and_duration','playback_rate','spacer','mute','volume','captions','language' ,'quality','fullscreen'],
        'playbackRates': [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        'seekBarColors': {base: 'rgba(32,178,169,255)', buffered: 'rgba(255,255,255,.9)', played: 'rgb(255,0,0)'},
        'volumeBarColors': {base: 'rgba(255, 255, 255, .4)', level: 'rgba(255,255,255,.9)'}};
    ui.configure(config);
    player.configure({drm: {clearKeys: drmKey}});
    window.player = player;
    window.ui = ui;
    player.addEventListener('error', onPlayerErrorEvent);
    controls.addEventListener('error', onUIErrorEvent);
   if (enableCustomConfig) {
        player.configure('manifest.dash.ignoreMinBufferTime', true);
        player.configure('manifest.hls.liveSegmentsDelay', 3);
        player.configure('streaming.rebufferingGoal', 3 /* second */);
   }
    try {
        await player.load(url);
        console.log('The video has now been loaded!');
    } catch (error) {
        onPlayerError(error);
    }
}

function onPlayerErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

function onPlayerError(error) {
    console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
    onPlayerError(errorEvent.detail);
}

document.addEventListener('shaka-ui-loaded', function() {

//Embed CH Sport*/
initializePlayer('co1', 'https://lebo.huminbird.cn/live/ballbar_38400.m3u8');

initializePlayer('co2', 'https://lebo.huminbird.cn/live/ballbar_33240.m3u8');

initializePlayer('co3', 'https://lebo.huminbird.cn/live/ballbar_40560.m3u8');

initializePlayer('ch1', 'https://cdnlb.tvplayhome.lt/live/eds/TV3_Sport_HD_HVC/GO3_LIVE_DASH_AVC/TV3_Sport_HD_HVC.mpd', {'610ad79e26a84fc782c987455e21a86b':'d2d4acc6e79447b55f3f5c0267af06f5'});

initializePlayer('ch2', 'https://py2.dlive.click/85Y86KxskXbRlszwGEfUlw/1722409145/326130343a346534313a663a663a3a346436303a35336330/ff501/playlist.m3u8?b=1');

initializePlayer('spotv1', 'https://proji.glitch.me/https://atemecdnbalancer-voe.sysln.id/live/eds/SPOTVHD/mpd/SPOTVHD.mpd', {'e60ece8f0d9042fcb52508055ec48e5e':'213f438bd4961cda987d41b7f154f1e5'});

initializePlayer('spotv2', 'https://proji.glitch.me/https://atemecdnbalancer-voe.sysln.id/live/eds/SPOTV2HD/mpd/SPOTV2HD.mpd', {'e6ed3fdf6e9f491d9ead109fc0b00cfc':'3bc6c45722eb5fa7b343de9bffc4f7c7'});

});
