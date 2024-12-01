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

//Arena Sport*/
initializePlayer('arp1', 'https://webtvstream.bhtelecom.ba/hls6/as_premium1.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('arp2', 'https://webtvstream.bhtelecom.ba/hls6/as_premium2.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('arp3', 'https://webtvstream.bhtelecom.ba/hls6/as_premium3.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar1', 'https://webtvstream.bhtelecom.ba/hls6/arena1.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar2', 'https://webtvstream.bhtelecom.ba/hls6/arena2.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar3', 'https://webtvstream.bhtelecom.ba/hls6/arena3.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar4', 'https://webtvstream.bhtelecom.ba/hls6/arena4.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar5', 'https://webtvstream.bhtelecom.ba/hls6/arena5.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar6', 'https://webtvstream.bhtelecom.ba/hls6/arena6.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('ar1x2', 'https://webtvstream.bhtelecom.ba/hls6/arena_1x2.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('arpl', 'https://webtvstream.bhtelecom.ba/hls6/premier_league.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

initializePlayer('arf', 'https://webtvstream.bhtelecom.ba/hls6/arena_fight.mpd', {'c18b6aa739be4c0b774605fcfb5d6b68':'e41c3a6f7532b2e3a828d9580124c89d'});

});
