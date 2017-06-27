// No app auto updates, check manually
user_pref("app.update.auto", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.enabled", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);

// Disable beacon
user_pref("beacon.enabled", false);

// Remove the crash report URL
user_pref("breakpad.reportURL", "");

// No more snippets
user_pref("browser.aboutHomeSnippets.updateUrl", "https://127.0.0.1");

// Limit amount of book mark backups
user_pref("browser.bookmarks.max_backups", 2);

// Don't show recently bookmarked
user_pref("browser.bookmarks.showRecentlyBookmarked", false);


user_pref("browser.cache.disk.smart_size.first_run", false);

// Disable offline cache
user_pref("browser.cache.offline.enable", false);

// Don't show tips on the toolbar
user_pref("browser.chrome.toolbar_tips", false);

// Don't check for unsubmitted crash reports
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);

// Use Ctrl + Tab to preview tabs
user_pref("browser.ctrlTab.previews", true);

user_pref("browser.customizemode.tip0.shown", true);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.download.panel.shown", true);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtabpage.compact", true);
user_pref("browser.newtabpage.enhanced", true);
user_pref("browser.newtabpage.introShown", true);

// No more onboarding
user_pref("browser.onboarding.enabled", false);
user_pref("browser.onboarding.hidden", false);
user_pref("browser.onboarding.notification.finished", true);

user_pref("browser.offline-apps.notify", false);
user_pref("browser.photon.structure.enabled", true);
user_pref("browser.reader.detectedFirstArticle", true);
user_pref("browser.rights.3.shown", true);

// Disable safebrowsing
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

user_pref("browser.search.context.loadInBackground", true);
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.timeout", 1);
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.openintab", true);
user_pref("browser.search.region", "US");
user_pref("browser.search.reset.enabled", false);
user_pref("browser.search.reset.whitelist", "");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.selfsupport.enabled", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.sessionstore.interval", 180000);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.samples", 0);
user_pref("browser.ssl_override_behavior", 1);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.startup.page", 3);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.remote.autostart", true);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.maxListItemCount", 0);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
user_pref("browser.taskbar.previews.enable", false);
user_pref("browser.taskbar.previews.max", 0);
user_pref("browser.toolbarbuttons.introduced.pocket-button", true);

// Disable page translation
user_pref("browser.translation.detectLanguage", false);
user_pref("browser.translation.ui.show", false);
user_pref("browser.translation.ui.welcomeMessageShown", true);

// No more UI tour
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");

user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.delay", 0);
user_pref("browser.urlbar.doubleClickSelectsAll", false);
user_pref("browser.urlbar.suggest.searches", false);

// Show the full URL
user_pref("browser.urlbar.trimURLs", false);

user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);

// Disallow face detection
user_pref("camera.control.face_detection.enabled", false);

// No more data reporting
user_pref("datareporting.healthreport.about.reportUrl", "data:text/plain,");
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.documentServerURI", "");

user_pref("device.sensors.enabled", false);
user_pref("devtools.inspector.colorWidget.enabled", true);
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.autoinstallFxdtAdapters", false);
user_pref("devtools.webide.enabled", false);

// Disable battery API
user_pref("dom.battery.enabled", false);


user_pref("dom.enable_performance", false);
user_pref("dom.enable_resource_timing", false);

// Disable gamepad support
user_pref("dom.gamepad.enabled", false);
user_pref("dom.gamepad.extensions.enabled", false);
user_pref("dom.gamepad.non_standard_events.enabled", false);

user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.popup_maximum", 5);
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);

// No window vibrations
user_pref("dom.vibrator.enabled", false);

// Disable VR
user_pref("dom.vr.enabled", false);
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.openvr.enabled", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.vr.require-gesture", false);

user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webaudio.enabled", false);
user_pref("dom.webkitBlink.dirPicker.enabled", false);
user_pref("dom.webkitBlink.filesystem.enabled", false);
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.autoDisableScopes", 14);
user_pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.ui.locale.hidden", true);
user_pref("extensions.sidebar-button.shown", true);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.enabled", false);
user_pref("extensions.webservice.discoverURL", "http://127.0.0.1");
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);
user_pref("general.warnOnAboutConfig", false);
user_pref("geo.enabled", false);
user_pref("geo.provider.ms-windows-location", false);
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "https://127.0.0.1");
user_pref("geo.wifi.xhr.timeout", 1);
user_pref("javascript.use_us_english_locale", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("lightweightThemes.update.enabled", false);
user_pref("media.block-autoplay-until-in-foreground", true);
user_pref("media.getusermedia.noise_enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.ondevicechange.enabled", false);
user_pref("media.peerconnection.enabled", false);
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("middlemouse.contentLoadURL", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.http.referer.userControlPolicy", 1);
user_pref("network.IDN_show_punycode", true);
user_pref("network.allow-experiments", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.manage-offline-status", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.warnOnAboutNetworking", false);
user_pref("offline-apps.allow_by_default", false);

// Disable browser PDF reader
user_pref("pdfjs.disabled", true);

// Disable all plugins
user_pref("plugin.scan.plid.all", false);
//Disable Flash
user_pref("plugin.state.flash", 0);
// Disable Java
user_pref("plugin.state.java", 0);

// Enable fingerprint protection
user_pref("privacy.resistFingerprinting", true);

// Disable tracking protection in private browsing, use uBlock
user_pref("privacy.trackingprotection.pbmode.enabled", false);

// Disable reader mode
user_pref("reader.parse-on-load.enabled", false);

user_pref("security.OCSP.require", true);
user_pref("security.cert_pinning.enforcement_level", 2);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.pki.sha1_enforcement_level", 1);

// Disable SSL error reporting
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");

// Show red lock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); 

// Disable weak encryption
user_pref("security.ssl3.dhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.dhe_rsa_aes_256_sha", false);

// Sidebar on the right
user_pref("sidebar.position_start", false);

// Disable "social"
user_pref("social.directories", "");
user_pref("social.enabled", false);
user_pref("social.remote-install.enabled", false);
user_pref("social.share.activationPanelEnabled", false);
user_pref("social.shareDirectory", "");
user_pref("social.sidebar.unload_timeout_ms", 1);
user_pref("social.toast-notifications.enabled", false);
user_pref("social.whitelist", "");

// Remove the startup homepage
user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url", "");

// Disable telemetry
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", true);

// Disable WebGL
user_pref("webgl.disable-extensions", true);
user_pref("webgl.disable-fail-if-major-performance-caveat", true);
user_pref("webgl.disabled", true);
user_pref("webgl.enable-debug-renderer-info", false);
user_pref("webgl.min_capability_mode", true);

// Allow unsigned addons to be installed
user_pref("xpinstall.signatures.required", false);
