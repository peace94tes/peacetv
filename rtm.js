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

//RTM MALAY*/
initializePlayer('sukan', 'https://d25tgymtnqzu8s.cloudfront.net/smil:sukan/manifest.mpd');

initializePlayer('okey', 'https://d25tgymtnqzu8s.cloudfront.net/smil:okey/manifest.mpd');

initializePlayer('ch1', 'https://d30aylox5wvifh.cloudfront.net/event/smil:ag1/manifest.mpd');

initializePlayer('ch2', 'https://d30aylox5wvifh.cloudfront.net/event/smil:ag2/manifest.mpd');

initializePlayer('ch3', 'https://d30aylox5wvifh.cloudfront.net/event/smil:ag3/manifest.mpd');

initializePlayer('ch4', 'https://d30aylox5wvifh.cloudfront.net/event/smil:ag4/manifest.mpd');

initializePlayer('ch5', 'https://d30aylox5wvifh.cloudfront.net/event/smil:ag5/manifest.mpd');

initializePlayer('ch6', 'https://d25tgymtnqzu8s.cloudfront.net/event/smil:event1/manifest.mpd');

});
