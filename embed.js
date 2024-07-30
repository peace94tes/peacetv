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
        player.configure('manifest.hls.liveSegmentsDelay', 1);
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
initializePlayer('asp1', 'https://webtvstream.bhtelecom.ba/hls6/as_premium1.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('court1', 'https://lebo.huminbird.cn/live/ballbar_27540.m3u8');

initializePlayer('court2', 'https://lebo.huminbird.cn/live/ballbar_27100.m3u8');

initializePlayer('court3', 'https://lebo.huminbird.cn/live/ballbar_21990.m3u8');

initializePlayer('ch1', 'https://lebo.huminbird.cn/live/ballbar_12130.m3u8');

initializePlayer('ch2', 'https://py2.dlive.click/85Y86KxskXbRlszwGEfUlw/1722409145/326130343a346534313a663a663a3a346436303a35336330/ff501/playlist.m3u8?b=1');

});