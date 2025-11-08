<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/timers.svg" alt="" width="18" height="18">
                <span>TIMERS <span class="red">(in progress)</span></span>
            </h2>
        </div>
        <div class="card-content">
            <div class="row">
                <div class="col col-50">
                    <form class="input-group large right"
                        v-on:submit.prevent="addChar">
                        <input placeholder="Character name" v-model="name">
                        <button>Add</button>
                    </form>
                    <small>
                        Add your character, you can add multiple characters.<br>
                        This tools use browser local storage, if you clear browser data, use incognito mode or change browser it will not work.
                    </small>
                </div>
            </div>
            <div class="flex mt">
                <h3 class="pointer"
                    v-for="(char, index) in chars"
                    v-on:click="setActiveChar(char)"
                    v-bind:class="{ 'green': char === activeChar }"
                    v-bind:key="index">
                    {{ char }}
                    <img src="icons/remove.svg" alt="" width="24" height="24" title="Remove char"
                        v-on:click.stop="removeChar(char)">
                </h3>
            </div>
            <small v-if="activeChar">
                You can remove character by clicking on 'x' icon.<br>
                Active character have <strong class="green">green</strong> color.
            </small>
            <template v-if="activeChar">
                <template
                    v-for="(category, name) in timers"
                    v-bind:key="name">
                    <h3 class="mt">{{ name }}</h3>
                    <div class="flex">
                        <div class="timer"
                            v-for="(timer, index) in category"
                            v-bind:class="{ 'active': timer.on }"
                            v-bind:key="index">
                            <img alt=""
                                v-bind:width="timer.width || 64"
                                v-bind:height="timer.height || 64"
                                v-bind:src="timer.img">
                            <div class="timer-text">
                                <h3>{{ timer.name }}</h3>
                                <div class="timer-time">{{ timer.time }}</div>
                            </div>
                            <div class="timer-controls" v-on:click="setTimer(timer)">
                                <img src="icons/start.svg" alt="Start timer" width="32" height="32" v-show="!timer.on">
                                <img src="icons/stop.svg" alt="Stop timer" width="32" height="32" v-show="timer.on">
                            </div>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </article>
</template>

<style scoped lang="scss">
@use '../../scss/variables' as *;

.timer {
    border: 1px solid $gray;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0 0.5rem 0.5rem 0;
    padding: 0.75rem;
    position: relative;
    display: flex;
    align-items: center;
    &.active {
        background: rgba($green, 0.3);
    }
}
.timer-text {
    padding: 0 0 0 0.75rem;
    text-align: center;
    h3 {
        font-weight: 300;
        font-size: 1.12rem;
        padding: 0;
        margin: 0 0 0.25rem;
    }
}
.timer-time {
    font-weight: 700;
    font-size: 1.12rem;
}
.timer-controls {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(white, 0.95);
    transition: opacity 0.3s;
    &:hover {
        opacity: 1;
    }
}

@media (max-width: 767.98px) {
    .timer {
        width: 100%;
        margin: 0 0 0.5rem;
    }
    .timer-text {
        width: 100%;
    }
}
</style>

<script>
    export default {
        name: 'Timers',

        data: function () {
            return {
                timers: {
                    'Tasks': [
                        { name: 'Warzones 1-3', img: 'img/timers/warzones-1-3.gif', cooldown: 20, on: false, time: '00:00:00', interval: null, width: 32, height: 32 },
                        { name: 'Warzones 4-6', img: 'img/timers/warzones-4-6.gif', cooldown: 20, on: false, time: '00:00:00', interval: null, width: 32, height: 32 }
                    ],
                    'Various': [
                        { name: 'Kroazur', img: 'img/timers/kroazur.gif', cooldown: 2, on: false, time: '00:00:00', interval: null },
                        { name: 'Oberon', img: 'img/timers/oberon.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Scarlett Etzel', img: 'img/timers/scarlett-etzel.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Urmahlullu', img: 'img/timers/urmahlullu.gif', cooldown: 20, on: false, time: '00:00:00', interval: null }
                    ],
                    'Cults of Tibia': [
                        { name: 'Essence of Malice', img: 'img/timers/essence-of-malice.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'False God', img: 'img/timers/false-god.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Sandking', img: 'img/timers/sandking.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Souldespoiler', img: 'img/timers/souldespoiler.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Voidborn', img: 'img/timers/voidborn.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Source of Corruption', img: 'img/timers/source-of-corruption.gif', cooldown: 20, on: false, time: '00:00:00', interval: null }
                    ],
                    'Forgotten Knowledge': [
                        { name: 'Dragonking Zyrtarch', img: 'img/timers/dragonking-zyrtarch.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Lady Tenebris', img: 'img/timers/lady-tenebris.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Lloyd', img: 'img/timers/lloyd.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Melting Frozen Horror', img: 'img/timers/melting-frozen-horror.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Time Guardian', img: 'img/timers/time-guardian.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Thorn Knight', img: 'img/timers/thorn-knight.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Last Lore Keeper', img: 'img/timers/last-lore-keeper.gif', cooldown: 336, on: false, time: '00:00:00', interval: null }
                    ],
                    'Pirates': [
                        { name: 'Ratmiral Blackwhiskers', img: 'img/timers/ratmiral-blackwhiskers.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Tentugly\'s Head', img: 'img/timers/tentuglys-head.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                    ],
                    'Warzones': [
                        { name: 'Deathstrike', img: 'img/timers/deathstrike.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Gnomevil', img: 'img/timers/gnomevil.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Abyssador', img: 'img/timers/abyssador.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Baron from Below', img: 'img/timers/baron-from-below.gif', cooldown: 4, on: false, time: '00:00:00', interval: null },
                        { name: 'Count of the Core', img: 'img/timers/count-of-the-core.gif', cooldown: 4, on: false, time: '00:00:00', interval: null },
                        { name: 'Duke of the Depths', img: 'img/timers/duke-of-the-depths.gif', cooldown: 4, on: false, time: '00:00:00', interval: null }
                    ],
                    'Werebosses': [
                        { name: 'Black Vixen', img: 'img/timers/black-vixen.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Bloodback', img: 'img/timers/bloodback.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Darkfang', img: 'img/timers/darkfang.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Shadowpelt', img: 'img/timers/shadowpelt.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Sharpclaw', img: 'img/timers/sharpclaw.gif', cooldown: 20, on: false, time: '00:00:00', interval: null }
                    ],
                    'Werelions bosses': [
                        { name: 'Katex Blood Tongue', img: 'img/timers/katex-blood-tongue.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Srezz Yellow Eyes', img: 'img/timers/srezz-yellow-eyes.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Utua Stone Sting', img: 'img/timers/utua-stone-sting.gif', cooldown: 20, on: false, time: '00:00:00', interval: null },
                        { name: 'Yirkas Blue Scales', img: 'img/timers/yirkas-blue-scales.gif', cooldown: 20, on: false, time: '00:00:00', interval: null }
                    ]
                },
                chars: [],
                activeChar: null,
                name: null
            }
        },

        methods: {
            formatNumber: function (number) {
                return number > 9 ? number : '0' + number;
            },
            showTime: function (timer) {
                let name = this.activeChar.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_'),
                    temp =  (this.$storage.getStorageSync(name) - Date.now()) / 1000,
                    hours = this.formatNumber(Math.floor(temp / 3600)),
                    minutes = this.formatNumber(Math.floor((temp - (hours * 3600)) / 60)),
                    seconds = this.formatNumber(Math.ceil(temp - (hours * 3600) - (minutes * 60)));

                timer.on = true;
                timer.time = hours + ':' + minutes + ':' + seconds;
            },
            resetTimer: function (timer) {
                timer.on = false;
                timer.time = '00:00:00';
                clearInterval(timer.interval);
            },
            setTimers: function () {
                for (const [key, arr] of Object.entries(this.timers)) {
                    arr.forEach(timer => {
                        let name = this.activeChar.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_');

                        if (this.$storage.getStorageSync(name)) {
                            this.showTime(timer);
                            timer.interval = setInterval(() => { this.showTime(timer) }, 1000);
                        } else {
                            this.resetTimer(timer);
                        }
                    });
                };
            },
            setTimer: function (timer) {
                let name = this.activeChar.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_'),
                    time = timer.cooldown * 60 * 60 * 1000;

                if (timer.on) {
                    this.resetTimer(timer);
                    this.$storage.removeStorageSync(name);
                } else {
                    this.$storage.setStorageSync(name, Date.now() + time, time);
                    this.showTime(timer);
                    timer.interval = setInterval(() => { this.showTime(timer) }, 1000);
                }
            },
            checkChars: function () {
                if (this.$storage.getStorageSync('chars')) {
                    this.chars = this.$storage.getStorageSync('chars');

                    if (this.chars.length) {
                        this.activeChar = this.chars[0];
                        this.setTimers();
                    } else {
                        this.activeChar = null;
                    }
                }
            },
            addChar: function () {
                if (this.name && !this.chars.includes(this.name)) {
                    this.chars.push(this.name);
                    this.$storage.setStorageSync('chars', this.chars);

                    if (!this.activeChar) {
                        this.setActiveChar(this.name);
                    }

                    this.name = null;
                } else if (this.chars.includes(this.name)) {
                    alert('Character already added!');
                }
            },
            removeChar: function (char) {
                this.chars = this.chars.filter(item => item !== char);
                this.$storage.setStorageSync('chars', this.chars);

                for (const [key, arr] of Object.entries(this.timers)) {
                    arr.forEach(timer => {
                        let name = char.replaceAll(' ', '_') + '_' + timer.name.replaceAll(' ', '_');

                        this.resetTimer(timer);
                        this.$storage.removeStorageSync(name);
                    });
                };

                this.checkChars();
            },
            setActiveChar: function (char) {
                if (this.activeChar !== char) {
                    this.activeChar = char;

                    for (const [key, arr] of Object.entries(this.timers)) {
                        arr.forEach(timer => {
                            this.resetTimer(timer);
                        });
                    };

                    this.setTimers();
                }
            }
        },

        mounted: function () {
            this.checkChars();
        },

        beforeUnmount: function () {
            for (const [key, arr] of Object.entries(this.timers)) {
                arr.forEach(timer => {
                    clearInterval(timer.interval);
                });
            };
        }
    }
</script>
