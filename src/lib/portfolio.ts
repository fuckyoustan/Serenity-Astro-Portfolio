/**
 * Portfolio data — ported from Serenity-Astro-Portfolio
 * (github.com/fuckyoustan/Serenity-Astro-Portfolio), rebuilt as a single
 * interactive page. All content is taken from the original repository.
 */

export const SITE = {
  title: "Stan | Android Module Developer",
  description:
    "Magisk and KernelSU modules for Android rendering, thermal, network, and battery performance. Portfolio of Stan, a self-taught developer from Indonesia.",
  author: "Stan",
  logoText: "Stan",
  repository: "https://github.com/fuckyoustan/Serenity-Astro-Portfolio",
};

export const ME = {
  name: "Stan",
  handle: "@fuckyoustan",
  profession: "Android Module Developer",
  profileImage: "/assets/pp2.png",
  heroTitle: "Fine-tuning Android at the system level.",
  heroText:
    "I'm Stan, a self-taught developer and university student from Indonesia. My Magisk and KernelSU modules cover rendering performance, thermal behavior, network latency, and idle battery drain.",
  aboutMe:
    "I'm Stan, a self-taught developer and university student from Indonesia. I build Magisk and KernelSU modules that tune Android at the system level: rendering performance, thermal behavior, network latency, and idle battery drain. Everything I ship is open source and shaped by feedback from the people who use it.",
  stats: [
    { value: 2, suffix: "", description: "Years of modding" },
    { value: 6, suffix: "", description: "Projects released" },
    { value: 2683, suffix: "", description: "Happy users" },
  ],
  email: "fckyoustan666@gmail.com",
};

export const SOCIALS = [
  { name: "GitHub", url: "https://github.com/fuckyoustan" },
  { name: "Telegram", url: "https://t.me/EverythingAboutArchive" },
  { name: "X (Twitter)", url: "https://x.com/mpiiess" },
  { name: "Instagram", url: "https://www.instagram.com/napiies_" },
];

export const NAV_SECTIONS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals: string[];
  currentJob: boolean;
}

export const JOBS: WorkExperience[] = [
  {
    title: "Independent System Developer",
    startDate: "2025-06-01",
    company: "Self-employed",
    location: "Indonesia",
    description:
      "Android system-level optimization and automation scripts, released as open-source Magisk and KernelSU modules.",
    goals: [
      "Tuning system network protocols to improve connectivity and reduce latency.",
      "Implementing thermal management behavior for mobile hardware.",
      "Designing responsive web interfaces for system configuration.",
    ],
    currentJob: true,
  },
  {
    title: "Open Source Contributor",
    startDate: "2024-01-01",
    endDate: "2025-05-30",
    company: "Android community",
    location: "Remote",
    description:
      "Collaborated on projects focused on kernel-level tweaks and system performance.",
    goals: [
      "Researched and applied kernel parameter tuning for better power efficiency.",
      "Wrote shell scripts that automate repetitive system maintenance tasks.",
      "Worked with developers worldwide to troubleshoot and patch system-level bugs.",
    ],
    currentJob: false,
  },
];

export const EDUCATION = [
  {
    title: "Islamic Religious Education",
    startDate: "2021-09-01",
    school: "Nahdlatul Ulama Islamic University",
    location: "Jepara, Indonesia",
    description:
      "Religious studies and education, pursued alongside self-taught software development and Android system optimization.",
    currentUni: true,
  },
];

export const HARD_SKILLS = [
  {
    name: "Bash",
    description: "Automation and system-level scripting for Android optimization.",
  },
  {
    name: "HTML",
    description: "Structuring the responsive WebUIs that configure my modules.",
  },
  {
    name: "CSS",
    description: "Styling module interfaces with Material Design 3 and fluid layouts.",
  },
  {
    name: "JavaScript",
    description: "Interactive logic and real-time data for web-based tools.",
  },
];

export const SOFT_SKILLS = [
  "Problem solving",
  "Teamwork",
  "Communication",
  "Time management",
];

export const LANGUAGES = [
  { name: "Indonesian", level: "Native" },
  { name: "Javanese", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Sundanese", level: "Fluent" },
];

export interface ProjectSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  numbered?: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  startDate: string;
  endDate: string;
  url: string;
  cover: string;
  overview: string;
  features: string[];
  sections: ProjectSection[];
}

export const PROJECTS: Project[] = [
  {
    id: "anu",
    title: "Acceleration N Utility (ANU)",
    summary:
      "A Magisk module that tunes Android's SurfaceFlinger rendering pipeline for more consistent frame delivery and a more responsive interface.",
    category: "Rendering",
    tags: ["Magisk", "SurfaceFlinger", "Rendering Boost", "UI Smoothness"],
    startDate: "2024-12-20",
    endDate: "2026-04-19",
    url: "https://github.com/fuckyoustan/Acceleration-N-Utility",
    cover: "/assets/projects/anu.png",
    overview:
      "ANU (Acceleration N Utility) is a Magisk module that works directly on Android's rendering stack. Instead of accepting the default SurfaceFlinger configuration, it adjusts the composition engine, frame timing, and input path so the interface delivers frames as steadily as the hardware allows. It is aimed at users who keep a stock setup but still want their device's interface to run at full pace.",
    features: [
      "SurfaceFlinger boost: raises the throughput of the composition engine.",
      "Frame timing optimization: keeps frame delivery consistent to remove micro-stutters.",
      "HWUI rendering tweaks: accelerates hardware-accelerated UI tasks.",
      "Touch input enhancement: shortens input latency so the screen feels more responsive.",
      "Animation tuning: speeds up system animations without breaking them.",
      "ART runtime boost: optimizes the Android Runtime for faster app execution.",
      "VSYNC and refresh rate control: fine-tunes sync points for smoother scrolling.",
    ],
    sections: [
      {
        heading: "Why ANU",
        paragraphs: [
          "Most rendering tweaks change one or two properties and hope for the best. ANU treats the rendering path as a whole: composition, timing, input, and runtime each get their own pass, and the settings are chosen to work together instead of fighting each other.",
          "The result is an interface that feels immediate, from scrolling to app launches.",
        ],
      },
      {
        heading: "Installation",
        numbered: [
          "Download the module from the GitHub repository.",
          "Flash the zip through Magisk or KernelSU.",
          "Reboot the device.",
          "The optimizations apply on boot; no further setup is needed.",
        ],
      },
      {
        heading: "Disclaimer",
        paragraphs: [
          "The module modifies system-level rendering properties, and behavior can differ between ROMs and chipsets. Keep a backup before flashing, and check the repository's issue tracker if something looks off after a boot.",
        ],
      },
    ],
  },
  {
    id: "licking",
    title: "Licking Thermal",
    summary:
      "A thermal module that lifts Android's throttling only while you game, then restores the safety limits the moment you exit.",
    category: "Thermal",
    tags: ["Magisk", "KernelSU", "Thermal Management", "Gaming Performance"],
    startDate: "2024-06-15",
    endDate: "2026-04-19",
    url: "https://github.com/fuckyoustan/Licking-Thermal",
    cover: "/assets/projects/licking.png",
    overview:
      "Licking Thermal is a performance module for gamers who are tired of frame drops caused by thermal throttling. Unlike modules that disable thermal management around the clock, it works on a dynamic toggle: limits are lifted when a game launches and restored when the game closes. Daily use stays protected; gaming sessions run at full speed.",
    features: [
      "Automatic thermal killer: detects when a game is launched, disables throttling, and restores it on exit.",
      "Power limit bypass: unlocks GPU and CPU power limiters so peak frequencies hold under load.",
      "Userspace thermal zones: moves thermal zones into userspace mode, stopping the system from slowing the device down on its own.",
      "HAL locker: temporarily locks the Thermal HAL so it cannot interfere with performance profiles.",
      "Live status notifications: reports in real time whenever thermal management is disabled or restored.",
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "A background daemon watches the foreground application. When the package name matches an entry in your list, the module runs a series of shell commands that modify system properties and thermal engine parameters.",
          "It targets /sys/class/thermal/ and the Android Thermal HAL, so the bypass covers the whole chain of performance limiters.",
        ],
      },
      {
        heading: "Usage",
        numbered: [
          "Flash the module through Magisk or KernelSU.",
          "If your game is not detected automatically, add its package name to list.txt in the module directory.",
          "The module activates on boot; there is no manual switch to flip.",
        ],
      },
      {
        heading: "Safety warning",
        quote:
          "Caution: use at your own risk. This module disables safety features that protect your hardware from heat damage. For long gaming sessions, pair it with an external cooler such as a fan or Peltier cooler.",
      },
      {
        heading: "Notes",
        bullets: [
          "Dynamic by design: thermal limits return the moment a game closes, preserving battery and hardware health in daily use.",
          "Community driven: updates follow user feedback to support new chipsets and Android versions.",
          "Fully open source: the logic is published for anyone to audit or contribute to.",
        ],
      },
    ],
  },
  {
    id: "pingpimp",
    title: "PingPimp",
    summary:
      "A network optimization module that prioritizes game traffic, tightens the TCP stack, and manages encrypted DNS to keep ping stable on Android.",
    category: "Network",
    tags: ["Magisk", "KernelSU", "Network Optimization", "Gaming"],
    startDate: "2024-07-01",
    endDate: "2026-04-19",
    url: "https://github.com/fuckyoustan/PingPimp",
    cover: "/assets/projects/pingpimp.png",
    overview:
      "PingPimp is a Magisk and KernelSU module for mobile gamers who need a stable connection. It fine-tunes Android's networking subsystem: packet prioritization, congestion control, buffer management, and DNS, all from one place. The goal is a set-and-forget setup: flash it once, and connection quality improves without manual configuration.",
    features: [
      "Turbo boost (packet prioritization): uses iptables to tag game traffic (DSCP/TOS) so the kernel and router process game packets before anything else.",
      "App jail (isolate mode): cuts off internet access for chosen user or system apps with a single toggle.",
      "TCP and network presets: switches congestion control algorithms to match the situation, with presets for gaming, streaming, downloading, and browsing.",
      "Private DNS lounge: picks from a built-in list of encrypted DNS providers (Cloudflare, AdGuard, Quad9, and others) or sets a custom one.",
      "IPv6 handling: forces IPv4 routing to prevent IPv6 DNS leaks and the latency spikes they cause.",
      "QoS application boost: applies DSCP/MARK tagging to selected apps; a background daemon uses traffic control (tc) to give them a clear lane past background traffic.",
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The module injects sysctl parameters and modifies /proc/sys/net/ entries during boot.",
          "Congestion control: switches to algorithms like BBR or Cubic depending on kernel support, so high-speed data moves efficiently. Buffer management: adjusts read and write buffers to fight bufferbloat, a common cause of high latency. Keep-alive tuning: shortens how long the system waits to confirm a connection is alive, which makes network responses feel snappier.",
        ],
      },
      {
        heading: "What to expect",
        bullets: [
          "Smoother gaming: fewer rubber-band moments in FPS and MOBA matches.",
          "Faster browsing: pages start loading sooner.",
          "More stable connections: consistent quality on unstable Wi-Fi or 4G/5G networks.",
        ],
        paragraphs: [
          "Physical distance to game servers and ISP quality still apply; the module optimizes the software side only.",
        ],
      },
      {
        heading: "Installation",
        numbered: [
          "Download the latest release from the GitHub repository.",
          "Open Magisk or KernelSU.",
          'Choose "Install from storage" and select the PingPimp zip.',
          "Reboot to apply the network tweaks.",
        ],
      },
      {
        heading: "Notes",
        bullets: [
          "Works across Android versions and chipsets, including Snapdragon, MediaTek, and Exynos.",
          "Fully open source: system-level mods deserve transparency, and the code is available for anyone to audit or contribute.",
        ],
      },
    ],
  },
  {
    id: "render",
    title: "Ultimate Rendering Optimization",
    summary:
      "A Magisk module that forces threaded Skia rendering and removes composition overhead, for an interface that stays smooth under load.",
    category: "Rendering",
    tags: ["Magisk", "GPU Rendering", "UI Smoothness", "Performance"],
    startDate: "2024-08-10",
    endDate: "2026-04-19",
    url: "https://github.com/fuckyoustan/Ultimate-Rendering-Optimization",
    cover: "/assets/projects/render.png",
    overview:
      "Ultimate Rendering Optimization attacks UI jank at its source. When animations stutter and scrolling hesitates, the cause is usually rendering work landing on the wrong thread, or a composition pipeline carrying overhead it does not need. This module reworks both.",
    features: [
      "Advanced threading: forces SkiaGL Threaded and SkiaVK Threaded rendering, so visual work spreads across multiple cores.",
      "Version tuning: adjusts OpenGL ES versions strategically to balance compatibility and speed.",
      "Composition cleanup: disables system composition overhead that slows the GPU down.",
      "Smart caching: sets custom render cache sizes so assets are ready exactly when the system needs them.",
      "Frame time stabilization: keeps frame delivery even, which is what makes motion read as smooth.",
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The module injects system properties (setprop) and modifies the hardware acceleration configuration. Forcing the Skia pipeline into threaded mode offloads heavy UI rendering from the main thread, which reduces jank and improves touch responsiveness. SurfaceFlinger's behavior is tuned as well, so frames are delivered on schedule instead of in bursts.",
        ],
      },
      {
        heading: "Safety and warnings",
        quote:
          "Warning: this module is aimed at enthusiasts who push their devices hard. Keep a recovery plan or a NANDroid backup within reach. System-level mods can behave differently across ROMs, even when designed to be universal. Your device is your responsibility. Proceed like a modder: with a backup ready.",
      },
      {
        heading: "Final words",
        paragraphs: [
          "Smoothness is not only about raw speed; it is the feeling that nothing stands between your input and the screen. If \u201cgood enough\u201d is not your standard, this module is the one to try.",
        ],
      },
    ],
  },
  {
    id: "dipslip",
    title: "Force DeepSleep",
    summary:
      "A power-management module that pushes Android into deep sleep as soon as the screen turns off, cutting the idle battery drain that happens overnight.",
    category: "Battery",
    tags: ["Magisk", "Battery", "Efficiency", "System"],
    startDate: "2025-02-15",
    endDate: "2026-04-19",
    url: "https://github.com/fuckyoustan/Force-DeepSleep",
    cover: "/assets/projects/dipslip.png",
    overview:
      "Idle drain is the battery that disappears while the phone sits on a desk doing nothing. Force DeepSleep attacks exactly that: the moment the screen turns off, the module pushes the CPU and background processes into the lowest power state the hardware supports.",
    features: [
      "Aggressive Doze mode: triggers Android's Doze mechanism almost immediately after the screen locks.",
      "Wakelock suppression: blocks unnecessary system wakelocks that keep the CPU awake.",
      "Background process restriction: suspends non-critical background activity while the device sleeps.",
      "Standby battery savings: noticeably smaller percentage drops during overnight and long idle periods.",
    ],
    sections: [
      {
        heading: "How it works",
        paragraphs: [
          "The module uses shell scripts to modify device_idle settings and dumpsys deviceidle parameters. Android normally waits hours before entering deep sleep; these timers are cut down to a few seconds.",
          "The Doze constants are then tuned so the system ignores minor movement and insignificant sensor events that would otherwise wake the device back up.",
        ],
      },
      {
        heading: "Compatibility",
        bullets: [
          "Works across ROM families, including AOSP, MIUI, and OxygenOS.",
          "Zero measurable overhead when the screen is on; the module only acts while the device sleeps.",
          "Pairs well with performance modules: full speed while in use, deep sleep when idle.",
        ],
      },
      {
        heading: "Installation",
        numbered: [
          "Download the module from the GitHub repository.",
          "Install it through Magisk or KernelSU.",
          "Reboot the device.",
          "Lock the screen and let the phone actually rest.",
        ],
      },
    ],
  },
  {
    id: "destroy",
    title: "Ultimate Thermal Destroyer",
    summary:
      "An extreme-performance module that disables Android's thermal throttling entirely. Intended for benchmark runs and cooled gaming setups, with the risks that come with that.",
    category: "Thermal",
    tags: ["Magisk", "Extreme Performance", "Thermal Decimation", "Gaming"],
    startDate: "2025-01-05",
    endDate: "2026-04-19",
    url: "https://github.com/fuckyoustan/Ultimate-Thermal-Destroyer",
    cover: "/assets/projects/destroy.png",
    overview:
      "Ultimate Thermal Destroyer is exactly what the name says: it removes every thermal limit Android uses to protect itself. Throttling is disabled, thermal services are shut down, and the CPU and GPU run at their maximum frequencies for as long as the hardware physically can. Where Licking Thermal lifts limits only while a game is running, this module removes them permanently. That makes it faster, and riskier. It exists for benchmark runs and gaming sessions with serious external cooling, not for daily use.",
    features: [
      "Kills thermal services: shuts down system-level thermal management services.",
      "Resets thermal properties: clears thermal-related system properties to prevent frequency capping.",
      "Disables thermal zones: removes thermal zone and cooling device limits.",
      "Unlocks the GPU: forces the GPU to stay in high-performance states.",
      "Maxes CPU frequencies: raises all CPU clusters to their maximum frequency.",
      "Bypasses protection: disables core thermal protections and overrides TZCPU configurations.",
    ],
    sections: [
      {
        heading: "The berserk mode",
        paragraphs: [
          "The module does not negotiate with sensors. Heat data is ignored entirely, so even during long gaming sessions or heavy rendering work, the CPU and GPU hold their maximum frequencies instead of backing off.",
        ],
      },
      {
        heading: "Safety warning",
        quote:
          "Caution: read this before flashing. This module disables your device's temperature protection. Overheating can damage internal components or swell the battery. External cooling (Peltier or fan) is mandatory while the module is active. Everything that happens to your device is on you. Watch your temperatures.",
      },
      {
        heading: "Final words",
        paragraphs: [
          "If you want to see what your SoC does with the limits removed, and you have the cooling to handle it, the repository is linked below. For daily use, Licking Thermal is the safer choice: same speed while gaming, full protection the rest of the time.",
        ],
      },
    ],
  },
];

export interface Post {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
  cover: string;
  coverAlt: string;
  readingMinutes: number;
  /** Intro paragraphs shown on the card / dialog opening. */
  intro: string[];
  /** Full article body as markdown (internal links point to on-page sections). */
  body: string;
}

export const POSTS: Post[] = [
  {
    id: "magisk-module-anatomy",
    title: "Anatomy of a Magisk module",
    description:
      "Every file inside a Magisk module zip and what it actually does: module.prop, customize.sh, the boot scripts, the system overlay, control flags, and the updateJson update channel.",
    publishDate: "2026-11-10T11:30:00",
    tags: ["Magisk", "Android", "Module Development"],
    cover: "/assets/blog/magisk-module-anatomy.png",
    coverAlt:
      "File tree of a Magisk module showing module.prop, the installer and boot scripts, the system overlay folder, and a zygisk library",
    readingMinutes: 8,
    intro: [
      "Every module I publish on the projects page is just a zip file with a specific internal layout. Once you know what each file does and when Magisk runs it, most module bugs stop being mysterious. This post walks through the whole structure the way I build it, from the zip down to the boot scripts.",
    ],
    body: `## Systemless first

A Magisk module never writes to the \`/system\` partition. That is the entire point of the format. Magisk itself works by patching the boot image, and modules work by overlaying files on top of the running filesystem, a mechanism called **magic mount**. When a module is active, every file inside its \`system/\` folder gets mounted over the same path on the real filesystem.

Three consequences follow from that design:

- Removing the module removes every change it made. The system partition was never touched, so there is nothing to restore.
- OTAs install cleanly because the partitions stay exactly as the factory shipped them.
- Verified boot stays intact, since dm-verity still covers the real partitions.

When a module "replaces" a system file, it is really just a newer copy sitting on top of the original, mounted at boot before zygote starts.

## The zip layout

Here is the full skeleton of a module, matching the cover image above:

\`\`\`text
my-module.zip
├── module.prop          # identity card, required
├── customize.sh         # installer script, runs at install time
├── post-fs-data.sh      # runs early in boot, blocking
├── service.sh           # runs late in boot, non-blocking
├── uninstall.sh         # runs when removed from the manager
├── system.prop          # system properties to apply at boot
├── sepolicy.rule        # custom SELinux rules
├── system/              # files overlaid onto the real filesystem
│   └── etc/
│       └── hosts
└── zygisk/              # optional, only for Zygisk modules
    └── arm64-v8a.so
\`\`\`

Only \`module.prop\` is required. Everything else is opt-in, and each part has one specific moment in the boot sequence where it runs. On a rooted device the active module lives in \`/data/adb/modules/<id>/\`, which is also the \`$MODPATH\` your scripts see.

## module.prop: the identity card

\`\`\`text
id=my-module
name=My Module
version=v1.0.0
versionCode=100
author=Your Name
description=One line, shown in the Magisk app.
\`\`\`

The rules that matter:

- **id** has to start with a letter and may only contain letters, digits, dots, underscores, and hyphens. It is the folder name under \`/data/adb/modules/\`, so once you publish, it is frozen: change the id and the manager treats your update as a brand new module.
- **versionCode** must be an integer. The manager compares version codes, not version strings, to decide whether an update exists. Forgetting to raise it is the classic reason a release "does not show up".
- **name**, **version**, and **description** are free-form display strings.

## customize.sh: the installer

\`customize.sh\` runs inside the Magisk app when the user installs or updates the zip. At that point the module is being staged: \`$MODPATH\` points to \`/data/adb/modules_update/<id>/\`, and the files only move to the live \`/data/adb/modules/<id>/\` after the next reboot. That is why the manager always asks you to reboot after installing.

The environment gives you everything you need to make decisions during install:

\`\`\`sh
# Available variables
$MODPATH        # staging dir for this install
$MODID          # module id
$ZIPFILE        # path to the zip being installed
$ARCH           # arm, arm64, x86, or x64
$API            # Android API level
$MAGISK_VER     # e.g. "27.0"
\`\`\`

Useful helpers, provided by the installer environment:

\`\`\`sh
ui_print "installing for $ARCH"   # text shows up in the install log
abort "unsupported Android version"  # fails the install cleanly
set_perm_recursive "$MODPATH/system" 0 0 0755 0644
\`\`\`

By default Magisk unzips everything into \`$MODPATH\` for you. Set \`SKIPUNZIP=1\` at the top of \`customize.sh\` and you control extraction yourself with \`unzip\`, which matters when the zip carries payloads you do not want installed, like source folders or CI files.

## post-fs-data.sh vs service.sh

These two scripts are where modules actually do their work, and the difference between them is the most common source of boot slowdowns I see in other people's modules.

### post-fs-data.sh

Runs right after partitions are mounted and **before zygote starts**. Boot blocks until this script finishes, so anything slow here delays the entire boot: every sleep, every binary launch, every network call. Use it only for work that genuinely must happen before any app process exists, such as mounting an image or setting up files other parts of the module depend on. If a tweak works from \`service.sh\`, put it there instead.

### service.sh

Runs in the \`late_start\` service stage, in parallel with the rest of boot. Nothing waits for it. This is the right place for daemons, runtime patches, and anything that depends on the framework being up. When your logic needs the system to be fully booted, wait for the property explicitly instead of guessing with a fixed sleep:

\`\`\`sh
until [ "$(getprop sys.boot_completed)" = "1" ]; do
    sleep 1
done
# framework is ready, apply the runtime tweak
\`\`\`

## system/, system.prop, sepolicy.rule

**\`system/\`** is the magic mount payload. A file placed at \`system/etc/hosts\` inside the module appears at \`/etc/hosts\` on the device. The folder structure mirrors the real filesystem exactly, and you never write to the real \`/system\` from a script.

**\`system.prop\`** contains \`key=value\` system properties, applied at boot through Magisk's own property service. Typical uses are feature flags, debug props, and overriding vendor defaults.

**\`sepolicy.rule\`** carries custom SELinux rules for contexts your module introduces. Magisk loads these very early in boot, before any of your scripts run, so by the time \`post-fs-data.sh\` executes the rules are already live.

## Control flags

Magisk controls module state through empty marker files inside the module directory, and the manager UI just toggles them. You can do the same from a shell:

\`\`\`sh
touch /data/adb/modules/my-module/disable    # deactivate until reboot
touch /data/adb/modules/my-module/remove     # uninstall on next reboot
touch /data/adb/modules/my-module/skip_mount # keep scripts, skip the overlay
\`\`\`

\`disable\` keeps the files on disk but stops scripts and mounting. \`remove\` uninstalls on the next reboot rather than immediately, which keeps the running system consistent. \`skip_mount\` is useful while developing: your scripts keep running while you iterate on the overlay contents.

## updateJson: updates without a browser

Add an \`updateJson=<url>\` line to \`module.prop\` pointing at a small JSON document:

\`\`\`json
{
  "version": "v1.1.0",
  "versionCode": 110,
  "zipUrl": "https://example.com/my-module-v1.1.0.zip",
  "changelog": "https://example.com/changelog.md"
}
\`\`\`

The manager fetches the URL, compares \`versionCode\` with the installed one, and shows an update button when the remote number is higher. The \`changelog\` field accepts either a URL or a plain string. This is the whole distribution mechanism behind the "installed from update channel" experience, and it is why version codes must only ever go up.

## Debugging on a real device

When a module misbehaves, check in this order:

1. Reproduce with \`adb shell\` and \`su\` before blaming the module. Half of all "module broken" reports are a broken root setup.
2. Make your scripts log their own output instead of printing into the void. A single line at the top of \`service.sh\` is enough: \`exec > "$MODPATH/service.log" 2>&1\`. Read it back with \`adb shell cat /data/adb/modules/my-module/service.log\`.
3. The Magisk app's own Logs screen shows the daemon log if the problem is earlier than your scripts.

## One zip, three managers

KernelSU and APatch both implement the Magisk module format, which is why I can ship a single zip per release. \`module.prop\`, the scripts, and the \`system/\` overlay behave the same everywhere. The part that differs between managers is the deeper integration, especially Zygisk, so if your module ships a \`zygisk/\` library, test it on each manager you claim to support instead of assuming parity.

## The release checklist

Before I tag any module release, it goes through this list:

- id unchanged since the first release, versionCode strictly higher than the last one
- nothing slow in \`post-fs-data.sh\`, all real work in \`service.sh\`
- clean install tested on a device that never had the module before
- update path tested over an older version, not just clean installs
- the module logs its own actions somewhere I can read with \`adb shell\`
- updateJson reachable, zipUrl actually downloads, versionCode in the JSON matches the zip

That is the whole format. A zip, a manifest, two scripts at different stages of boot, and an overlay folder. Everything else is what you choose to do inside them.`,
  },
  {
    id: "how-licking-thermal-works",
    title: "How Licking Thermal works, from service.sh to the restore pass",
    description:
      "A code walkthrough of Licking Thermal: the 7-second foreground watcher, the two throttle-off profiles, the HAL locker, the fake-temperature bind mounts, fast charge, and the restore path that brings every knob back.",
    publishDate: "2026-11-10T11:00:00",
    tags: ["Magisk", "Thermal", "Module Development"],
    cover: "/assets/blog/how-licking-thermal-works.png",
    coverAlt:
      "Runtime flow of Licking Thermal: a service.sh daemon loops every 7 seconds, checks the foreground app against the game list, and runs the off or restore scripts",
    readingMinutes: 9,
    intro: [
      "Licking Thermal is my per-app thermal module. Most thermal modules turn throttling off permanently and leave your phone cooking 24/7. This one watches what is on screen, lifts the limits only while a game from your list is in the foreground, and puts every knob back the moment you leave. This post walks through how that actually works, straight from the source on GitHub.",
      "If you are not familiar with how a Magisk module is put together, read Anatomy of a Magisk module first. The short version: customize.sh runs at install, service.sh runs at boot in the late_start stage, and everything lives under /data/adb/modules/LickingT/.",
    ],
    body: `## What Android throttling actually looks like

A phone has several independent layers that can slow it down when it heats up:

- The kernel thermal core: \`/sys/class/thermal/thermal_zone*/\`, where each zone has a \`policy\` file that names the governor deciding what to do at each trip point.
- Vendor drivers: Qualcomm's \`msm_thermal\`, MediaTek's \`/proc/driver/thermal/\` tables, the kgsl Adreno GPU driver's throttling knobs on Qualcomm, and mali's tmu nodes on MediaTek.
- Battery current limiters (\`bcl\`) that cut CPU and GPU power when the battery gets warm or saggy.
- The thermal HAL, a userspace process the framework talks to, plus per-vendor daemons like Xiaomi's \`joyose\`, which enforces Xiaomi's own per-app performance rules.
- Modem-side power limits, exposed through \`/proc/cpufreq/\` and \`/proc/ppm/\` on MediaTek.

A module that wants full performance under load has to address every layer, on every chipset family, without permanently breaking the ones that protect the hardware. That is the whole engineering problem.

## Install time: what customize.sh does

The installer script prints the module, device, and root environment, then does one real piece of work: it scans your installed packages against a built-in list of game package names (the source list ships in \`other/list.txt\`, about a screen of well-known games), keeps only the ones actually installed, and writes the result to \`PornArchive/PornCategories.txt\` in the module directory. That file is the module's default game list, filtered to your device. If your game is missing, you add its package name through the WebUI or by hand.

Yes, \`PornArchive\` and the profile names are exactly what they look like. The module is fully functional and the humor is load-bearing.

## Boot: the daemon

\`service.sh\` is the module's heart. At boot it:

1. Kills any previous daemon instance via a pidfile, so updates and soft reboots never leave two loops fighting.
2. Waits for \`sys.boot_completed\` before touching anything, polling every 7 seconds.
3. Clears stale vendor thermal state: \`/data/vendor/thermal/config\`, \`thermal.dump\`, and \`thermal_history.dump\` get removed so the vendor daemon rebuilds from scratch.
4. Applies the saved thermal zone policy, sets up its state files, and enters the main loop.

The main loop runs every 7 seconds and does three things:

\`\`\`sh
PornApp="$(dumpsys activity recents 2>/dev/null | \\
    awk -F'realActivity=' '/realActivity=/ {split($2, a, "/"); print a[1]}' | sort -u)"
\`\`\`

It pulls the recent tasks from \`dumpsys activity recents\`, extracts package names, and matches them against two lists. First \`AppConfigs.txt\`, which supports per-app overrides in the format \`package:hal:policy:zone:agghal\`, so one game can run the aggressive profile while another runs balanced. Then the plain game list. A match means the device is "in game", and the module switches its internal state from what it calls \`NotHorny\` to \`Horny\`. I did not invent these names, I just shipped them.

## The two off profiles

When a game is detected, the daemon runs one of two profile scripts. Which one depends on the HAL setting, global or per-app.

**\`amature.sh\`, the balanced profile.** It flips the standard thermal knobs off: writes the selected \`policy\` to every thermal zone, sets \`/sys/module/thermal/parameters/enabled\` to 0, disables msm_thermal's enabled flags, turns off MTK's EAS thermal hints and PPM policies, lifts the kgsl GPU throttling and power-level limits, disables battery current limiting, and raises MediaTek's cooler tables from 117°C trip points to 120. It also uninstalls Xiaomi's \`joyose\` for the user, because joyose re-applies Xiaomi's own throttling behind your back. On MediaTek's \`/proc/driver/thermal/\` it rewrites the cooler tables with \`no-cooler\` entries, so the kernel thermal core has nothing to trip.

**\`MILF.sh\`, the aggressive profile.** Everything the balanced profile does, plus the heavy artillery:

- The HAL locker bind-mounts an empty file over every thermal and throttling library it can find in \`/system/lib*\` and \`/vendor\`, so the thermal HAL process cannot even load its own code.
- It stops every init service whose definition mentions \`thermal\`, scanned out of \`/system/etc/init/\` and friends.
- On MIUI it calls \`miui.mqsas.IMQSNative\` with a stop directive for MIUI's own thermal services.
- It chmods 000 the mali tmu and throttling nodes on MediaTek GPUs.
- With ZONE enabled, instead of bind-mounting a fake temperature, it chmods 000 the entire \`/sys/devices/virtual/thermal\` tree.

The fake temperature trick deserves its own paragraph. The module creates a file containing \`30000\`, which in millidegrees reads as a comfortable 30°C, and bind-mounts it over every \`temp\` node in \`/sys/devices/virtual/thermal/\`. Any process that reads the temperature through that path now sees a phone that is cool as a cucumber, no matter the reality. The alternative (ZONE=1) is hiding the files entirely. Both are temporary: they are mounts, not writes, so they vanish on reboot, and the restore path unmounts them explicitly.

## The restore pass

When the foreground check finds no game from the list, the daemon runs \`anal.sh\`, and this is where most of the engineering effort went. Every value the profiles changed has a known restore value, and the script walks them all: thermal zones back to \`enabled\`, kernel module parameters back to 1, kgsl throttling back on, MTK cooler tables back to 117°C with real \`cpu_heavy\` coolers, the fake-temperature mounts unmounted in a loop until \`/proc/mounts\` shows none left, thermal init services restarted, joyose reinstalled, and \`cmd thermalservice reset\` to make the framework resync.

The restore does not wait for a reboot and does not depend on the module surviving. The uninstall script kills the daemon, runs the restore pass one more time, clears any leftover bind-mounts that reference the module directory, restores the fast-charge nodes from the backup file, and puts joyose back if it removed it. Uninstalling the module leaves the phone in the same thermal state it was in before you installed it. That guarantee is the reason the module has backups like \`chargebackup.txt\` and \`nodesnapshot.txt\` sitting in the module directory at all.

## Fast charge, the second mode

In auto mode the daemon also watches the battery status. When charging starts and the fast-charge option is on, \`Msbreewc()\` backs up the current charge current, voltage, SIOP level, and temperature limit nodes to \`chargebackup.txt\`, then raises them: input current limits to 5.75A, voltage to 12.5V, SIOP to 100, and the warm temperature thresholds up, plus flipping every fast_charge and boost_mode node it finds to 1. When you unplug, \`Siskaeee()\` restores every node from the backup, value and permission mode included. The backup-then-apply pattern is deliberate: a value the module cannot restore is a value it should not touch.

## How you know it is working

The module reports its own state in three places. It posts a system notification on every mode transition, so you see "Aggressive mode applied for com.your.game" as it happens. It rewrites its own \`module.prop\` description line on every state change, so the Magisk or KernelSU app shows \`[ Running ]\` or \`[ Balance Mode ]\` right on the module row. And it logs every decision with timestamps to \`LickT.log\` inside the module directory, which is the first thing I ask for in a bug report.

## The honest part

Lifting thermal limits while gaming means the silicon runs hotter than the manufacturer planned. The dynamic design means that only happens while you are actually in the game, and the limits come back the second you leave, which is what makes daily use safe. But during the session itself, the protection is off, and that is a choice you make every time the module activates. Keep an external cooler around for long sessions, and read the warning in the repo before you flash it.`,
  },
  {
    id: "how-pingpimp-works",
    title: "How PingPimp works: the engine behind the dashboard",
    description:
      "A code walkthrough of PingPimp: the boot-time qdisc setup, the ip monitor event daemon, the network health score, adaptive MTU probing, per-app DSCP prioritization, and the smart auto mode that switches profiles by what you are doing.",
    publishDate: "2026-11-10T10:00:00",
    tags: ["Networking", "Module Development", "Android"],
    cover: "/assets/blog/how-pingpimp-works.png",
    coverAlt:
      "Event flow of PingPimp: service.sh sets up qdiscs at boot, the PingPimp binary applies presets and scans for games, and an ip monitor daemon feeds the engine on network changes",
    readingMinutes: 9,
    intro: [
      "PingPimp is my network tuning module. The pitch on the repo is one line: real iptables, real traffic control, and a WebUI, instead of the placebo build.prop edits most network modules ship. This post is the long version: how the pieces actually fit together, from boot to the daemon loop that reacts when your phone hops from Wi-Fi to mobile data.",
      "The module has three parts. A short service.sh bootstraps the environment. A single C binary, PingPimp (about 1,800 lines), does the real work. And a KernelSU WebUI dashboard drives it, writing small state files into the module directory that the binary reads. The same pattern as any Magisk module, just with a compiler in the toolchain.",
    ],
    body: `## Install and boot

\`customize.sh\` prints the usual module and device banner, then handles the one install-time decision that matters: on KernelSU and APatch, it symlinks the \`PingPimp\` binary into the manager's bin directory (\`/data/adb/ksu/bin\` or \`/data/adb/ap/bin\`), which puts it on the root shell PATH. On Magisk, the \`system/bin\` overlay does the same job through magic mount.

At boot, \`service.sh\` runs a compact setup pass:

- Appends \`ap_scan=1\` to \`wpa_supplicant.conf\` if it is missing, so the Wi-Fi stack uses the normal active-scan mode.
- Disables Wi-Fi power save with \`iw wlan0 set power_save off\`, which trades a little idle battery for lower jitter on the radio.
- Replaces the root qdisc with \`fq_codel\` on every network interface it finds and sets the transmit queue length to 100, so packets queue in a fair, latency-fighting scheduler instead of a dumb FIFO.
- Flushes the routing cache, asks the Wi-Fi stack for low-latency mode, and stops the packet capture and Wi-Fi diagnostic daemons (\`tcpdump\`, \`cnss_diag\`) that write logs in the background.
- Then hands off to the binary: \`PingPimp --boot\`.

The boot mode resets stale state (locks, debounce counters, MTU cache entries), scans your launcher for installed games and writes them to \`game_list.txt\`, applies the saved preset from \`preset.txt\`, restores every toggle you had enabled, re-applies the app isolation rules, and finally starts the daemon. If anything was isolated, its iptables rules come back here, so a reboot never silently un-isolates an app you cut off.

## The daemon: two loops

The daemon is the part that makes PingPimp feel automatic, and it is really two loops.

The foreground loop is \`ip monitor link route address\`, piped and read line by line. Every event that matters on a phone arrives through it: an interface coming up or going down (wlan, rmnet, ccmni), a VPN interface getting an address, the default route appearing or disappearing when you hop networks. Each event, after a 3-second debounce, spawns the engine and the DNS flipper.

The background loop ticks every 10 seconds, but only while the screen is on, which it checks through \`dumpsys power\`. On every third tick it runs a periodic health check through the engine, and when smart auto mode is on it also runs the activity detector and the DNS flipper. The screen check exists so the module stops re-tuning your network while the phone is in your pocket doing nothing.

## The engine: measure, score, decide

The engine is one function, \`cmd_engine()\`, and it is the heart of the module. On every trigger it measures the network instead of guessing:

- **RTT, packet loss, and jitter** from a live \`ping -c 4\` to 1.1.1.1.
- **TCP retransmit rate** computed from \`/proc/net/snmp\`, comparing current OutSegs and RetransSegs against the previous reading, so it measures the delta rather than a lifetime average.
- **Wi-Fi signal and band** from \`iw dev <iface> link\`, falling back to \`dumpsys wifi\`, classifying into 2.4/5/6 GHz.

Those numbers go into a score from 0 to 100: RTT divided by 6, loss times 3, jitter directly, retransmits times 3, each capped, all subtracted from 100. A score under 65, or a Wi-Fi signal below -80 dBm, selects the \`WEAK_NETWORK\` profile. Everything else is \`LOW_LATENCY\`.

The profile switch is deliberately sticky. A new profile has to be seen twice in a row before it is applied, tracked through a pending file. Without that hysteresis, one bad ping sample mid-game would rip the qdisc tree down and rebuild it under your feet, which is exactly the kind of churn that causes the stutter people blame on the network.

Once a profile is applied, the engine:

1. Probes the path MTU, binary-searching with DF-set pings between 1200 and 1472 bytes (plus the 28-byte IP and ICMP headers), and caches the result per interface and gateway so the probe runs once per network. VPN interfaces short-circuit to 1420.
2. Sets the interface MTU and a band-aware transmit queue length.
3. Runs the hardware tweak: RPS and XPS CPU masks on every RX and TX queue, with the mask sized to the CPU count.
4. Rebuilds the qdisc tree if traffic control is enabled: CAKE when the kernel supports it, otherwise a three-band prio qdisc with fq_codel children, and filters that steer tagged traffic into the priority band.

## App targeting: DSCP marks and isolation

The WebUI's boost list ends up in \`boost_apps.txt\`, and \`apply_boost_apps()\` turns it into kernel rules. For each package it resolves the UID with \`pm list packages -U\`, then inserts a mangle rule:

\`\`\`sh
iptables -t mangle -I OUTPUT -m owner --uid-owner 10042 -j DSCP --set-dscp 46
\`\`\`

DSCP 46 is the EF, expedited forwarding, class. Your router and both endpoint kernels now see those packets as priority traffic, and the tc filters route marked packets into the fast band. If the kernel rejects DSCP rules, it falls back to a MARK tag, which the tc filters also match. Isolation is the same mechanism pointed the other way: per-UID \`OUTPUT REJECT\` rules that cut an app's network access entirely, restored at boot by \`restore_isolated()\`.

This per-app targeting is the main thing separating the module from global tweaks. Boosting the game and isolating the sync service are different decisions, and they need different rules.

## Smart auto: presets that follow what you do

Every 10 seconds while the screen is on, the auto detector classifies the current activity. It reads the foreground app from \`cmd activity stack\`, checks it against \`game_list.txt\` and keyword categories (streaming, browsing, social), and if the receive rate passes 512 KB/s it switches to download mode regardless of the foreground app. Activity changes are debounced the same way profile changes are: two consecutive detections before a switch.

Each activity maps to a sysctl preset, and the presets genuinely differ where it matters. The game preset cuts \`tcp_notsent_lowat\` to 2048 so queued game packets are not stuck behind a big buffer, drops SYN retries to 2 for faster connection failures, and uses small socket buffers to keep latency down. The download preset does the opposite: 16 MB max buffers, TCP ECN on, and \`tcp_notsent_lowat\` maxed out for throughput. When a game is detected, the module also auto-selects the best available congestion control algorithm (westwood first, then BBR, then cubic), pins network IRQs to the big cores, and renices \`ksoftirqd\`, \`rild\`, and \`netd\` so packet processing beats background work.

## DNS and the WebUI

Smart DNS handles per-network resolver choice. It detects whether you are on Wi-Fi or mobile, looks up a per-SSID map if you have one, falls back to the per-network DNS files, and applies the result through Android's Private DNS setting, so the whole system resolves through the encrypted DoT endpoint you chose. The WebUI itself is a KernelSU webroot: HTML, CSS, and JS in \`webroot/\`, calling the binary through the manager's root shell, with every toggle writing a plain text state file (\`tc.txt\`, \`nic.txt\`, \`irq.txt\`, \`wifips.txt\`, \`conntrack.txt\`, and friends) that boot and the daemon read back. No database, no daemon config protocol. Files on disk, readable with \`cat\`, which is also how you debug it.

## What it cannot do

Tuning removes device-side latency sources: bad queueing, power save timers, buffer sizes, packet capture daemons, and the priority of your game relative to background traffic. It cannot fix the physics between your phone and the tower, an oversubscribed carrier, or a router three rooms away. When someone reports that ping spikes got worse after a tweak, the first thing I check is whether the path itself changed, because the module only ever optimizes the half of the connection you carry in your pocket.`,
  },
  {
    id: "rooting-explained",
    title: "Rooting explained: what it is, how to do it, and what it costs",
    description:
      "What root access actually means on Android, how Magisk and KernelSU grant it, the full unlock-patch-flash process, and an honest list of what you gain and what you give up.",
    publishDate: "2026-11-10T12:00:00",
    tags: ["Android", "Rooting", "Magisk", "Guides"],
    cover: "/assets/blog/rooting-explained.png",
    coverAlt:
      "Four-step diagram of the rooting process: unlock the bootloader, patch the boot image, flash the patched image, manage root access",
    readingMinutes: 8,
    intro: [
      "Every module on my projects page starts with the same requirement: a rooted device. This post explains what that actually means, how the current rooting methods work, and what you trade for the access. If you have never rooted a phone before, read this before you flash anything.",
    ],
    body: `## What root actually is

Android is Linux. Every app you install runs as its own unprivileged Linux user, sandboxed by the same UID-based permission system a Linux server uses. When an app wants to read your files or use the camera, it goes through the Android permission framework, and the kernel enforces the final answer.

Root is user ID 0. A process running as UID 0 sits above every permission check the kernel performs. It can read and write any file, mount and unmount filesystems, change kernel parameters, and kill any process. That is the whole concept. "Rooting" a phone means getting a controlled way to run commands as UID 0, usually through a \`su\` binary that asks a manager app for permission the same way an app asks you for camera access.

Nothing about root is hidden or exotic. It is the same \`sudo\` mechanics a Linux admin uses, adapted to a phone with a permission dialog.

## How modern rooting works

The old method, modifying the \`/system\` partition directly, is dead. Every current manager works systemless:

- **Magisk** patches the boot image. It injects its own init into the ramdisk, starts a daemon as root, and brokers \`su\` requests through the Magisk app. Nothing on the system partition changes, so OTAs still install and dm-verity stays happy.
- **KernelSU** takes root into the kernel itself. It ships as a GKI-compatible kernel or a patch to your kernel, and grants \`su\` in kernel space. No boot image patching needed after the kernel is in place.
- **APatch** patches the kernel image directly, similar in spirit to KernelSU but without requiring a custom kernel build.

All three speak the same module format, which is why my modules install identically on Magisk, KernelSU, and APatch. If you want to know how that format works, read the module anatomy post.

## Step 1: unlock the bootloader

Verified boot only runs code the manufacturer signed. Root is not possible while that lock is in place, so the bootloader has to go first. The exact procedure depends on the manufacturer:

- On Pixels and many other devices, you enable OEM unlocking in Developer options, then run \`fastboot flashing unlock\` from a computer.
- Xiaomi requires their Mi Unlock tool with a bound account and a waiting period that has historically ranged from a week to a month.
- Samsung unlocks through Download Mode on newer models, and tripping Knox is a one-way eFuse burn: it never resets, even after you relock.
- Some carriers sell devices with the bootloader permanently locked. There is no workaround for those.

Two warnings before you start. Unlocking wipes the entire userdata partition, so back everything up first. And on devices with a hardware fuse like Knox, the trip is permanent and can affect warranty claims for anything hardware-related later, depending on your region's consumer protection laws.

## Step 2: patch and flash

With the bootloader open, the Magisk flow looks like this:

1. Get the stock boot image for your exact firmware version. On Pixels it comes from the factory image zip; on other devices you extract it from the OTA payload. On many devices shipping with Android 13 or newer, the ramdisk lives in the \`init_boot\` partition instead of \`boot\`, so the file you need is \`init_boot.img\`. Using an image from a different firmware version is the classic way to end up with a bootloop.
2. Copy the image to the phone, open the Magisk app, tap Install, then "Patch a file", and select it. Magisk writes \`magisk_patched-XXXXX.img\` to your Downloads folder.
3. Boot to fastboot and flash it back where it came from:

\`\`\`sh
fastboot flash boot magisk_patched-XXXXX.img      # most devices
fastboot flash init_boot magisk_patched-XXXXX.img # Android 13+ ramdisk devices
fastboot reboot
\`\`\`

4. After reboot, install the Magisk app if it is not there yet, and verify root works:

\`\`\`sh
adb shell su -c id
# uid=0(root) gid=0(root)
\`\`\`

If you see \`uid=0\`, the phone is rooted. The whole process takes about fifteen minutes once you have the right boot image in hand. The part that takes the longest is finding an image that matches your build number.

## What you gain

Concrete things root gives you, all of which I use myself:

- **The Magisk module ecosystem.** Thermal management, network tuning, system UI changes, all installed and removed without touching a partition. My own modules live here.
- **System-wide ad blocking.** A module replaces the hosts file, so ads die at DNS resolution level for every app, not just the browser.
- **Real backups.** Apps like Swift Backup can copy app data, not just APKs. When you switch devices or factory reset, your game saves and app states come with you.
- **Bloatware removal.** Carrier and OEM apps can be uninstalled for real, per user profile, without a PC.
- **Automation with teeth.** Tasker and terminal scripts can reach system files and settings that are normally off-limits, which is exactly what modules like mine are built on.

## What you lose

The costs are just as concrete:

- **Play Integrity fails.** Google's device integrity verdict requires a locked bootloader. Many banking apps, some streaming apps, and anything using DRM-heavy content checks the verdict and refuses to run. Root-hiding setups exist and sometimes work, but it is a cat-and-mouse game that Google keeps winning. Do not buy into root expecting hiding to be reliable.
- **Warranty complications.** Some manufacturers refuse service on devices with unlocked bootloaders regardless of the actual fault. Knox-tripped Samsungs are the strictest case. Check how your manufacturer and your local consumer law treat it before you unlock.
- **OTA updates need care.** An OTA can fail or drop root if it overwrites your patched boot image. The safe habit is to restore the stock image, take the update, and re-patch, or use your manager's built-in OTA handling. Forget once and you get to do it the hard way.
- **You become the security boundary.** Any app you grant root to can do anything on the device. A malicious module can brick a boot or steal everything. Root means you are personally vetting everything that runs as root, which is fine if you only install open-source modules you can read.
- **Brick risk is real.** Flashing the wrong image, or the right image to the wrong device, can hard-brick a phone. Recoveries exist for most mistakes, but "most" is doing some work in that sentence.

## Is it worth it?

For me, yes. I develop and maintain modules, so root is a tool of the trade, and I accept the trade-offs knowingly. For a phone that runs your banking apps and that you cannot afford to have down for an evening of recovery work, the honest answer is that the costs may not be worth the gains.

If you decide to go ahead, start with the module anatomy post to understand what you will be installing afterward, and then the projects page for what to install first.`,
  },
];

export function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
