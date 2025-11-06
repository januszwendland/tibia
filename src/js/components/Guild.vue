<template>
    <article class="card">
        <div class="card-header">
            <h2 class="card-title">
                <img src="icons/guild.svg" alt="" width="18" height="18">
                Check guild
            </h2>
        </div>
        <div class="card-content">
            <form class="input-group large right"
                v-on:submit.prevent="check">
                <input placeholder="Guild name" v-model="guildName">
                <button>Check</button>
            </form>
            <small>This tool depends on <a href="https://tibiadata.com/" rel="noopener" target="_blank">TibiaData API</a></small>
            <template v-if="guild">
                <div class="mt">
                    <small>
                        <strong class="green">Green</strong> - logged in recently.<br>
                        <strong class="orange">Orange</strong> - didn't log in lately.<br>
                        <strong class="red">Red</strong> - didn't log in for long time.
                    </small>
                </div>
                <div class="filters">
                    <div class="mt">
                        <div class="filters-pills">
                            <span class="filters-pill"
                                v-bind:class="{ 'selected': vocation === 'ed' }"
                                v-on:click="setVocation('ed')">Druid</span>
                            <span class="filters-pill"
                                v-bind:class="{ 'selected': vocation === 'ek' }"
                                v-on:click="setVocation('ek')">Knight</span>
                            <span class="filters-pill"
                                v-bind:class="{ 'selected': vocation === 'em' }"
                                v-on:click="setVocation('em')">Monk</span>
                            <span class="filters-pill"
                                v-bind:class="{ 'selected': vocation === 'rp' }"
                                v-on:click="setVocation('rp')">Paladin</span>
                            <span class="filters-pill"
                                v-bind:class="{ 'selected': vocation === 'ms' }"
                                v-on:click="setVocation('ms')">Sorcerer</span>
                        </div>
                        <small class="filters-info">Filter by vocation.</small>
                    </div>
                    <div class="mt">
                        <div class="input-group small left">
                            <label for="share">Share</label>
                            <input type="number" id="share" v-model="share">
                        </div>
                        <small class="filters-info">Find who can share exp with given lvl.</small>
                    </div>
                </div>
                <table class="mt">
                    <thead>
                    <tr>
                        <th class="hide-on-mobile">Rank</th>
                        <th>Name</th>
                        <th>
                            <span class="hide-on-mobile">Vocation</span>
                            <span class="show-on-mobile">Voc</span>
                        </th>
                        <th>Lvl</th>
                        <th class="hide-on-mobile">Last login</th>
                        <th class="hide-on-mobile">Days from last login</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template
                        v-for="(character, index) in guild"
                        v-bind:key="index">
                        {{ key }}
                        <member
                            v-bind:member="character"
                            v-show="(vocation === null || filterMember(character.vocation)) && shareExp(character.level)"
                            v-on:loader="setLoader" />
                    </template>
                    </tbody>
                </table>
            </template>
            <div class="loader-wrapper" v-if="loader > 0">
                <div class="loader" role="status"></div>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.member {
    a {
        color: inherit;
        font-weight: 700;
    }
}
</style>

<script>
    import axios from 'axios';
    import Member from './Member';

    export default {
        name: 'Guild',

        components: {
            Member
        },

        data: function () {
            return {
                guildName: '',
                guild: null,
                vocation: null,
                share: 0,
                loader: 0
            }
        },

        methods: {
            setLoader: function(value) {
                if (value) {
                    this.loader++;
                } else {
                    this.loader--;
                }
            },
            check: function () {
                this.guild = null;

                if (this.guildName.length > 2) {
                    this.loader++;

                    axios
                        .get('https://api.tibiadata.com/v4/guild/' + this.guildName.replace(' ', '+'))
                        .then(response => {
                            this.guild = response.data.guild.members;

                            if (!response.data.guild.members) {
                                alert('This guild does not exist!');
                            }

                            this.loader--;
                        });
                }
            },
            setVocation: function (vocation) {
                if (this.vocation === vocation) {
                    this.vocation = null;
                } else {
                    this.vocation = vocation;
                }
            },
            filterMember: function (vocation) {
                if (this.vocation === 'ed' && vocation.indexOf("Druid") != -1) {
                    return true;
                }

                if (this.vocation === 'ek' && vocation.indexOf("Knight") != -1) {
                    return true;
                }

                if (this.vocation === 'em' && vocation.indexOf("Monk") != -1) {
                    return true;
                }

                if (this.vocation === 'rp' && vocation.indexOf("Paladin") != -1) {
                    return true;
                }

                if (this.vocation === 'ms' && vocation.indexOf("Sorcerer") != -1) {
                    return true;
                }

                return false;
            },
            shareExp: function (level) {
                if (this.share > 0) {
                    if (level >= Math.floor(this.share * (2 / 3)) && level <= Math.floor(this.share * (3 / 2)) + 1) {
                        return true;
                    } else {
                        return false;
                    }
                }

                return true;
            }
        }
    }
</script>
