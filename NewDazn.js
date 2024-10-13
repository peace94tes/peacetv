  async function initializePlayer(id, url, drmKey, enableCustomConfig) {
    const video = document.getElementById(id);
    const ui = video['ui'];
    const controls = ui.getControls();
    const player = controls.getPlayer();    
    const config = {
        'controlPanelElements': ['play_pause','time_and_duration','spacer','mute','volume','captions','language' ,'quality','fullscreen'],
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
    
initializePlayer('1de', 'https://sportslive24.shop/sp/strea.m3u8?id=426');
initializePlayer('2de', 'https://sportslive24.shop/sp/strea.m3u8?id=427');


initializePlayer('eus1', 'https://atemeshield1-voe.sysln.id/live/eds/EUROSPORTHD/mpd/EUROSPORTHD.mpd', {'47c03f29f04747d2a298c0ad63f3b2c1':'8b48b2cb2743b91d5f20cf2622067f3a'});
initializePlayer('eus2', 'https://atemeshield1-voe.sysln.id/live/eds/EUROSPORT2/mpd/EUROSPORT2.mpd', {'47c03f29f04747d2a298c0ad63f3b2c1':'8b48b2cb2743b91d5f20cf2622067f3a'});

initializePlayer('setan1b', 'https://andi-cors-proxy-service-k8s.andisearch.com/https://tr.live.cdn.cgates.lt/live/dash/561002/index.mpd', {'8ab2332442854e62b0018eec3ee58484':'37fdee8b6eef5c96001e8c6fc47bfc08'});
initializePlayer('daznel2', 'https://cors-proxy.cooks.fyi/https://tvvvideolive3.solocoo.tv:443/blueskytvvlive7dash/blueelevenproleague2nl/Manifest.mpd', {'16251e842a834570a8c5a34d45a0d64d':'b7243739698cad0d58af01f142d13eae'});
initializePlayer('daznel3', 'https://cors-proxy.cooks.fyi/https://tvvvideolive3.solocoo.tv:443/blueskytvvlive7dash/blueelevenproleague3nl/Manifest.mpd', {'c6455c5a1ad1484fa4029ba498659838':'4329fb08c3444a8ae9b3c477efe11002'});  
  

initializePlayer('dazn1', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/bmnelo5c7a/out/v1/3ce2cdc4589f46189322bd3717c77957/cenc.mpd', {'44dd9cd370b08a868ead115fe84ecfde':'bff19ab0a51cf14e848389b152913fd0'});
initializePlayer('dazn2', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/xnk4m9bnxt/out/v1/4ced7b7329a54652b9bb0521ed38bd4d/cenc.mpd', {'0eab5a3f3e3b4ba5d42d40ca30d17571':'f3f061ded9b70e8160590d5802ecda6d'});
initializePlayer('dazn3', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/zy1ee5sshp/out/v1/bdcffa69fa3b4f3bb3569c9c73ee1c01/cenc.mpd', {'bad8efff688c0dbb3711e4a7114c22a3':'6ba800673b20776c0c850130d45e1920'});
initializePlayer('dazn4', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/up7qpwch9b/out/v1/a6d5d1a1287b4893b859c2d6ccf2c65d/cenc.mpd', {'d27104d427e4f87e75b19395a9f8796b':'723593c70e2d4c4862754398e80168f8'});
initializePlayer('daznla', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/tu06vubgf9/out/v1/7668f47d28e345979c072e361f3d3ce3/cenc.mpd', {'6d08b265a6639e32da7c880d5491e3d2': '0c92556ca14b95f367993710e7cfbc94'});
initializePlayer('daznf1', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/cqbcvgkb83/out/v1/4dbe05ecfb1540448d82d68eeebfbb1c/cenc.mpd', {'1061be12d303247426ec25e8369b2647': 'bd622b0e610295de3b0bccb850ccaaaa'});
initializePlayer('daznla1', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/wjgklbtvhh/out/v1/659736a1e24c40e4865a80ffd75e7de7/cenc.mpd', {'43d1c3b25207ff38b22ccfe17d302367': '7b1f85f6e81059473b114c16a25c829a'});
initializePlayer('daznla2', 'https://live.ll.ww.aiv-cdn.net/OTTB/dub-nitro/live/clients/dash/enc/woujvkfnmn/out/v1/141b52f08a1e4e97850219729ee48dc8/cenc.mpd', {'0b1fdeaee3ffc51e9a66cf1938d57aaf': '28e3cb88ab7b476b81ab8aa0624c4d71'});


initializePlayer('016', 'https://dazn.bittv.workers.dev/dash/dazn-linear-016/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('017', 'https://dazn.bittv.workers.dev/dash/dazn-linear-017/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('018', 'https://dazn.bittv.workers.dev/dash/dazn-linear-018/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('022', 'https://dazn.bittv.workers.dev/dash/dazn-linear-022/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('023', 'https://dazn.bittv.workers.dev/dash/dazn-linear-023/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('024', 'https://dazn.bittv.workers.dev/dash/dazn-linear-024/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('025', 'https://dazn.bittv.workers.dev/dash/dazn-linear-025/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('026', 'https://dazn.bittv.workers.dev/dash/dazn-linear-026/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('027', 'https://dazn.bittv.workers.dev/dash/dazn-linear-027/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('028', 'https://dazn.bittv.workers.dev/dash/dazn-linear-028/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('029', 'https://dazn.bittv.workers.dev/dash/dazn-linear-029/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('030', 'https://dazn.bittv.workers.dev/dash/dazn-linear-030/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('031', 'https://dazn.bittv.workers.dev/dash/dazn-linear-031/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('032', 'https://dazn.bittv.workers.dev/dash/dazn-linear-032/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('033', 'https://dazn.bittv.workers.dev/dash/dazn-linear-033/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('035', 'https://dazn.bittv.workers.dev/dash/dazn-linear-035/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('036', 'https://dazn.bittv.workers.dev/dash/dazn-linear-036/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('037', 'https://dazn.bittv.workers.dev/dash/dazn-linear-037/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('038', 'https://dazn.bittv.workers.dev/dash/dazn-linear-038/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('039', 'https://dazn.bittv.workers.dev/dash/dazn-linear-039/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('040', 'https://dazn.bittv.workers.dev/dash/dazn-linear-040/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('041', 'https://dazn.bittv.workers.dev/dash/dazn-linear-041/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('042', 'https://dazn.bittv.workers.dev/dash/dazn-linear-042/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('043', 'https://dazn.bittv.workers.dev/dash/dazn-linear-043/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('044', 'https://dazn.bittv.workers.dev/dash/dazn-linear-044/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('045', 'https://dazn.bittv.workers.dev/dash/dazn-linear-045/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('046', 'https://dazn.bittv.workers.dev/dash/dazn-linear-046/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('047', 'https://dazn.bittv.workers.dev/dash/dazn-linear-047/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('048', 'https://dazn.bittv.workers.dev/dash/dazn-linear-048/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('049', 'https://dazn.bittv.workers.dev/dash/dazn-linear-049/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('050', 'https://dazn.bittv.workers.dev/dash/dazn-linear-050/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('051', 'https://dazn.bittv.workers.dev/dash/dazn-linear-051/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('052', 'https://dazn.bittv.workers.dev/dash/dazn-linear-052/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('053', 'https://dazn.bittv.workers.dev/dash/dazn-linear-053/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

initializePlayer('054', 'https://dazn.bittv.workers.dev/dash/dazn-linear-054/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('055', 'https://dazn.bittv.workers.dev/dash/dazn-linear-055/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('056', 'https://dazn.bittv.workers.dev/dash/dazn-linear-056/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('057', 'https://dazn.bittv.workers.dev/dash/dazn-linear-057/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
  
initializePlayer('058', 'https://dazn.bittv.workers.dev/dash/dazn-linear-058/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});
initializePlayer('059', 'https://dazn.bittv.workers.dev/dash/dazn-linear-059/stream.mpd', {'8ab47741930c476780515f9a00decb0a': '7ab4b9ae5a48aa526e511a913b832769'});

  
  

initializePlayer('501', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-501/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('502', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-502/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('503', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-503/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('504', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-504/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('505', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-505/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});  

initializePlayer('507', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-507/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('508', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-508/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('509', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-509/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
  
  
  
initializePlayer('510', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-510/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('511', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-511/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});

initializePlayer('513', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-513/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});

initializePlayer('515', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-515/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});  
initializePlayer('516', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-516/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});

initializePlayer('518', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-518/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});

initializePlayer('520', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-520/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});
initializePlayer('521', 'https://dcj-ak-livedazn.akamaized.net/dash/dazn-linear-521/stream.mpd', {'cfb5e2b73bef4f3c878f25ab86a7451f': '0d6712bf2a84edcc93d001a9613f6fec'});

  
  
  
});
